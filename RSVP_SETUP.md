# RSVP Google Sheets Setup

The website sends each RSVP to a Google Apps Script web app. The script appends one row to a private Google Sheet with the confirmation date and time, family name, attendance, guest count, and selected language. Declined invitations are recorded with a guest count of `0`.

## Set up the spreadsheet

1. Create a Google Sheet for the wedding RSVPs. Keep its sharing settings restricted to the people managing the wedding.
2. Copy the spreadsheet ID from its URL. It is the text between `/d/` and `/edit`.
3. Open **Extensions > Apps Script** from that spreadsheet.
4. Replace the contents of the Apps Script editor with the contents of [`google-apps-script-rsvp.gs`](google-apps-script-rsvp.gs).
5. Replace `PASTE_YOUR_GOOGLE_SHEET_ID_HERE` at the top of the script with the spreadsheet ID.
6. Select `setupRsvpSheet` in the function menu and click **Run**. Approve the requested access to the spreadsheet. This creates or refreshes the `RSVPs` tab headers and formats the confirmation date and time.

## Deploy the receiver

1. In Apps Script, select **Deploy > New deployment** and choose **Web app**.
2. Set **Execute as** to your account.
3. Set **Who has access** to **Anyone** so guests can submit without signing in.
4. Deploy and copy the web app URL ending in `/exec`.
5. In [`src/app/app.component.ts`](src/app/app.component.ts), replace the empty `googleScriptUrl` value with that URL.
6. Build and publish the website, then submit a test RSVP and confirm a row appears in the `RSVPs` tab. Delete the test row afterward.

The web app URL is public because the website must call it. Keep the spreadsheet itself private, and only collect the RSVP details needed for planning. The browser uses a no-CORS request, so it cannot read the Apps Script response; verify the test submission in the sheet after deployment.