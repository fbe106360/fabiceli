const SPREADSHEET_ID = "PASTE_YOUR_GOOGLE_SHEET_ID_HERE";
const SHEET_NAME = "RSVPs";
const HEADERS = ["Confirmed at", "Family name", "Attending", "Guest count", "Language"];

function setupRsvpSheet() {
  const sheet = getRsvpSheet_();
  sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
  sheet.setFrozenRows(1);
  sheet.getRange("A:A").setNumberFormat("yyyy-mm-dd hh:mm:ss");
  return "RSVP sheet is ready: " + sheet.getName();
}

function doPost(event) {
  const lock = LockService.getScriptLock();

  try {
    if (!event || !event.postData || !event.postData.contents) {
      throw new Error("Missing request body.");
    }

    const data = JSON.parse(event.postData.contents);
    const familyName = String(data.familyName || "").trim();
    const attending = data.attending;
    const language = ["en", "de", "it"].includes(data.language) ? data.language : "en";

    if (!familyName || familyName.length > 150) {
      throw new Error("Enter a family name of 1 to 150 characters.");
    }
    if (attending !== "Yes" && attending !== "No") {
      throw new Error("Attendance must be Yes or No.");
    }

    const guestCount = attending === "Yes" ? Number(data.guestCount) : 0;
    if (attending === "Yes" && (!Number.isInteger(guestCount) || guestCount < 1)) {
      throw new Error("Guest count must be a positive whole number.");
    }

    lock.waitLock(10000);
    try {
      const sheet = getRsvpSheet_();
      const row = sheet.getLastRow() + 1;
      sheet.appendRow([
        new Date(),
        safeCellText_(familyName),
        attending,
        guestCount,
        language,
      ]);
      sheet.getRange(row, 1).setNumberFormat("yyyy-mm-dd hh:mm:ss");
    } finally {
      lock.releaseLock();
    }

    return jsonOutput_({ success: true });
  } catch (error) {
    return jsonOutput_({ success: false, error: String(error.message || error) });
  }
}

function getRsvpSheet_() {
  if (!SPREADSHEET_ID || SPREADSHEET_ID === "PASTE_YOUR_GOOGLE_SHEET_ID_HERE") {
    throw new Error("Set SPREADSHEET_ID in the Apps Script project.");
  }

  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function safeCellText_(value) {
  return /^[=+\-@]/.test(value) ? "'" + value : value;
}

function jsonOutput_(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}