import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

type Language = "en" | "de" | "it";

interface ContactPerson {
  role: string;
  name: string;
  phone: string;
  email: string;
}

interface Copy {
  nav: {
    talk: string;
    venue: string;
    day: string;
    accommodation: string;
    rsvp: string;
    contributions: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    date: string;
    cta: string;
  };
  talk: {
    eyebrow: string;
    title: string;
    body: string;
    subtitle: string;
    address: string;
    map: string;
    mapUrl: string;
  };
  venue: {
    eyebrow: string;
    title: string;
    body: string;
    address: string;
    map: string;
    mapUrl: string;
  };
  program: {
    eyebrow: string;
    title: string;
    events: Array<{ time: string; title: string; detail: string }>;
  };
  accommodation: {
    eyebrow: string;
    title: string;
    body: string;
    rates: Array<{ room: string; price: string }>;
    perNight: string;
    breakfast: string;
    bookingTitle: string;
    booking: string;
    link: string;
    url: string;
    emailTitle: string;
    email: string;
    telTitle: string;
    tel: string;
  };
  rsvp: {
    eyebrow: string;
    title: string;
    body: string;
    dietaryNote: string;
    familyNameLabel: string;
    familyNamePlaceholder: string;
    attendanceLabel: string;
    guestCountLabel: string;
    yesOption: string;
    noOption: string;
    submit: string;
    submitting: string;
    thanks: string;
    requiredName: string;
    requiredAttendance: string;
    requiredGuestCount: string;
    endpointNotConfigured: string;
    errorMessage: string;
    reset: string;
  };
  contributions: {
    eyebrow: string;
    title: string;
    body: string;
    contacts: ContactPerson[];
  };
  footer: string;
}

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  readonly languages: Array<{ code: Language; label: string }> = [
    { code: "en", label: "EN" },
    { code: "de", label: "DE" },
    { code: "it", label: "IT" },
  ];

  language: Language = "en";

  // Set your Google Apps Script Web App URL or Automate Webhook URL here
  googleScriptUrl: string =
    "https://script.google.com/macros/s/AKfycbzO_duamj25yeuXWhNXUSmP1eoAEhopVa7IkItsBUdCiy8R4Gw6Uib_uYZtKboHCA/exec";

  rsvpForm = {
    familyName: "",
    attending: "" as "yes" | "no" | "",
    guestCount: 1,
  };

  submitting = false;
  submitted = false;
  formError = "";

  readonly translations: Record<Language, Copy> = {
    en: {
      nav: {
        talk: "Wedding Talk",
        venue: "Tenuta Monticello",
        day: "Summary",
        accommodation: "Accomodation option",
        rsvp: "Let us know",
        contributions: "Organiser",
      },
      hero: {
        eyebrow: "Join us for our wedding",
        title: "Céline & Fabiyan",
        intro:
          "We are getting married and would love to celebrate this new chapter with the people who make our story special.",
        date: "Sunday · 29 August 2027 · Pombia, Italy",
        cta: "Will you celebrate with us?",
      },
      talk: {
        eyebrow: "The Talk",
        title: "Wedding Talk",
        subtitle: "",
        body: "We will begin the day with the wedding talk at the Kingdom Hall in Novara at 14:45. Afterwards, we will make our way to the reception venue to celebrate.",
        address: "Via Pietro Generali, 58, 28100 Novara NO, Italy",
        map: "Open in Google Maps",
        mapUrl:
          "https://www.google.com/maps/search/?api=1&query=Via+Pietro+Generali+58+28100+Novara+NO+Italy",
      },
      venue: {
        eyebrow: "The Venue",
        title: "Tenuta Monticello",
        body: "At the Monticello, we look forward to enjoying wonderful moments togheter, celebrating and making memories with all our loved ones.",
        address: "Via Roma 25, 28050 Pombia NO, Italy",
        map: "Open in Google Maps",
        mapUrl:
          "https://www.google.com/maps/place/Tenuta+Monticello/@45.65469,8.6346877,17z/data=!3m1!4b1!4m6!3m5!1s0x4786667f11edc65b:0x608ae8c18c7b5222!8m2!3d45.65469!4d8.6346877!16s%2Fg%2F1thvfths!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D",
      },
      program: {
        eyebrow: "Summary",
        title: "Overview",
        events: [
          {
            time: "14:45",
            title: "Wedding Talk",
            detail: "Via Pietro Generali, 58, 28100 Novara NO, Italy",
          },
          {
            time: "17:00",
            title: "Apero & Dinner",
            detail: "Tenuta Monticello · Via Roma 25, 28050 Pombia NO, Italy",
          },
        ],
      },
      accommodation: {
        eyebrow: "Accommodation option",
        title: "Optional stay at Hotel La Perla",
        body: "For those who wish to stay nearby, we have arranged a offer including breackfast at the Hotel La Perla.",
        rates: [
          { room: "Single room", price: "€60" },
          { room: "Double room", price: "€100" },
        ],
        perNight: "per night",
        breakfast: "Breakfast included with both room rates.",
        bookingTitle: "How to book",
        booking:
          "Reservations can be made directly with Hotel la Perla by email or phone. You can simply mention our names, Céline & Fabiyan, for the offer (please do note that online bookings are not available for this offer).",
        link: "Hotel website:",
        url: "https://www.hotelristorantelaperla.it/it/hotel-ristorante-4-stelle-varallo-pombia/hotel",
        emailTitle: "Email:",
        email: "info@hotelristorantelaperla.com",
        telTitle: "Phone:",
        tel: "+39 0321 921447",
      },
      rsvp: {
        eyebrow: "Let us know",
        title: "Will you celebrate with us?",
        body: "Please let us know if you can join us by 15 January 2027",
        dietaryNote:
          "Do you have any dietary restrictions, allergies or special wishes? Please send us a personal message so we can arrange everything for you.",
        familyNameLabel: "Family name",
        familyNamePlaceholder: "e.g. Parker / James & Maria",
        attendanceLabel: "Will you attend?",
        guestCountLabel: "Number of guests attending",
        yesOption: "Yes, we will be there",
        noOption: "No, we cannot make it",
        submit: "Send Your Response",
        submitting: "Sending Your Response...",
        thanks: "Thank you! Your Response has been recorded.",
        requiredName: "Please enter your family or guest name.",
        requiredAttendance: "Please select whether you can attend.",
        requiredGuestCount: "Please enter at least one guest.",
        endpointNotConfigured:
          "The RSVP form is not connected yet. Please contact us directly.",
        errorMessage:
          "Something went wrong while submitting. Please try again.",
        reset: "Send another Response",
      },
      contributions: {
        eyebrow: "Organiser",
        title: "Organiser",
        body: "For organisational matters, please refer to Dan, our Organiser.",
        contacts: [
          {
            role: "Contact",
            name: "Dan Saccomanno",
            phone: "+41 79 269 26 91",
            email: "dan@fabiceli.ch",
          },
        ],
      },
      footer: "With love,  Céline & Fabiyan",
    },
    de: {
      nav: {
        talk: "Hochzeitsvortrag",
        venue: "Tenuta Monticello",
        day: "Übersicht",
        accommodation: "Übernachtungsmöglichkeit",
        rsvp: "Rückmeldung",
        contributions: "Organisation",
      },
      hero: {
        eyebrow: "Feiert mit uns unsere Hochzeit",
        title: "Céline & Fabiyan",
        intro:
          "Wir heiraten und möchten dieses neue Kapitel mit den Menschen feiern, die unsere Geschichte besonders machen.",
        date: "Sonntag · 29. August 2027 · Pombia, Italien",
        cta: "Feiert ihr mit uns?",
      },
      talk: {
        eyebrow: "Der Vortrag",
        title: "Hochzeitsvortrag",
        subtitle: "",
        body: "Wir beginnen den Tag um 14:45 Uhr mit dem Hochzeitsvortrag im Königreichssaal in Novara. Anschliessend fahren wir zum Festort, um gemeinsam zu feiern.",
        address: "Via Pietro Generali, 58, 28100 Novara NO, Italien",
        map: "In Google Maps öffnen",
        mapUrl:
          "https://www.google.com/maps/search/?api=1&query=Via+Pietro+Generali+58+28100+Novara+NO+Italy",
      },
      venue: {
        eyebrow: "Die Location",
        title: "Tenuta Monticello",
        body: "In der Tenuta Monticello freuen wir uns auf schöne gemeinsame Momente, aufs Feiern und darauf, mit all unseren Liebsten Erinnerungen zu schaffen.",
        address: "Via Roma 25, 28050 Pombia NO, Italien",
        map: "In Google Maps öffnen",
        mapUrl:
          "https://www.google.com/maps/place/Tenuta+Monticello/@45.65469,8.6346877,17z/data=!3m1!4b1!4m6!3m5!1s0x4786667f11edc65b:0x608ae8c18c7b5222!8m2!3d45.65469!4d8.6346877!16s%2Fg%2F1thvfths!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D",
      },
      program: {
        eyebrow: "Übersicht",
        title: "Überblick",
        events: [
          {
            time: "14:45",
            title: "Hochzeitsvortrag",
            detail: "Via Pietro Generali, 58, 28100 Novara NO, Italien",
          },
          {
            time: "17:00",
            title: "Apéro & Abendessen",
            detail: "Tenuta Monticello · Via Roma 25, 28050 Pombia NO, Italien",
          },
        ],
      },
      accommodation: {
        eyebrow: "Übernachtungsmöglichkeit",
        title: "Optionaler Aufenthalt im Hotel La Perla",
        body: "Für alle, die in der Nähe übernachten möchten, haben wir im Hotel La Perla ein Angebot inklusive Frühstück vereinbart.",
        rates: [
          { room: "Einzelzimmer", price: "60 €" },
          { room: "Doppelzimmer", price: "100 €" },
        ],
        perNight: "pro Nacht",
        breakfast: "Das Frühstück ist bei beiden Zimmerpreisen inklusive.",
        bookingTitle: "So bucht ihr",
        booking:
          "Reservierungen können direkt beim Hotel La Perla per E-Mail oder Telefon vorgenommen werden. Für das Angebot könnt ihr einfach unsere Namen Céline & Fabiyan erwähnen. Bitte beachtet, dass dieses Angebot nicht online gebucht werden kann.",
        link: "Hotelwebsite:",
        url: "https://www.hotelristorantelaperla.it/it/hotel-ristorante-4-stelle-varallo-pombia/hotel",
        emailTitle: "E-Mail:",
        email: "info@hotelristorantelaperla.com",
        telTitle: "Telefon:",
        tel: "+39 0321 921447",
      },
      rsvp: {
        eyebrow: "Rückmeldung",
        title: "Feiert ihr mit uns?",
        body: "Bitte gebt uns bis zum 15. Januar 2027 Bescheid, ob ihr dabei sein könnt.",
        dietaryNote:
          "Habt ihr Ernährungsbeschränkungen, Allergien oder besondere Wünsche? Schreibt uns bitte eine persönliche Nachricht, damit wir alles für euch vorbereiten können.",
        familyNameLabel: "Familienname",
        familyNamePlaceholder: "z. B. Müller / Max & Anna",
        attendanceLabel: "Seid ihr dabei?",
        guestCountLabel: "Anzahl der teilnehmenden Gäste",
        yesOption: "Ja, wir sind dabei",
        noOption: "Nein, wir können leider nicht kommen",
        submit: "Rückmeldung senden",
        submitting: "Wird gesendet...",
        thanks: "Vielen Dank! Eure Rückmeldung wurde gespeichert.",
        requiredName: "Bitte gebt euren Familiennamen oder die Namen der Gäste ein.",
        requiredAttendance: "Bitte wählt aus, ob ihr teilnehmen könnt.",
        requiredGuestCount: "Bitte gebt mindestens einen Gast an.",
        endpointNotConfigured:
          "Das Rückmeldungsformular ist noch nicht verbunden. Bitte kontaktiert uns direkt.",
        errorMessage: "Ein Fehler ist aufgetreten. Bitte versucht es erneut.",
        reset: "Weitere Rückmeldung senden",
      },
      contributions: {
        eyebrow: "Organisation",
        title: "Organisator",
        body: "Bei organisatorischen Fragen wendet euch bitte an Dan, unseren Organisator.",
        contacts: [
          {
            role: "Kontakt",
            name: "Dan Saccomanno",
            phone: "+41 79 269 26 91",
            email: "dan@fabiceli.ch",
          },
        ],
      },
      footer: "In Liebe, Céline & Fabiyan",
    },
    it: {
      nav: {
        talk: "Discorso di matrimonio",
        venue: "Tenuta Monticello",
        day: "Riepilogo",
        accommodation: "Possibilità di alloggio",
        rsvp: "Conferma",
        contributions: "Organizzazione",
      },
      hero: {
        eyebrow: "Festeggiate con noi il nostro matrimonio",
        title: "Céline & Fabiyan",
        intro:
          "Ci sposiamo e vorremmo celebrare questo nuovo capitolo con le persone che rendono speciale la nostra storia.",
        date: "Domenica · 29 agosto 2027 · Pombia, Italia",
        cta: "Festeggerete con noi?",
      },
      talk: {
        eyebrow: "Il discorso",
        title: "Discorso di matrimonio",
        subtitle: "",
        body: "Inizieremo la giornata alle 14:45 con il discorso di matrimonio presso la Sala del Regno di Novara. In seguito ci sposteremo alla location del ricevimento per festeggiare.",
        address: "Via Pietro Generali, 58, 28100 Novara NO, Italia",
        map: "Apri in Google Maps",
        mapUrl:
          "https://www.google.com/maps/search/?api=1&query=Via+Pietro+Generali+58+28100+Novara+NO+Italy",
      },
      venue: {
        eyebrow: "La location",
        title: "Tenuta Monticello",
        body: "Alla Tenuta Monticello non vediamo l'ora di trascorrere momenti meravigliosi insieme, festeggiare e creare ricordi con tutte le persone a noi care.",
        address: "Via Roma 25, 28050 Pombia NO, Italia",
        map: "Apri in Google Maps",
        mapUrl:
          "https://www.google.com/maps/place/Tenuta+Monticello/@45.65469,8.6346877,17z/data=!3m1!4b1!4m6!3m5!1s0x4786667f11edc65b:0x608ae8c18c7b5222!8m2!3d45.65469!4d8.6346877!16s%2Fg%2F1thvfths!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D",
      },
      program: {
        eyebrow: "Riepilogo",
        title: "Panoramica",
        events: [
          {
            time: "14:45",
            title: "Discorso di matrimonio",
            detail: "Via Pietro Generali, 58, 28100 Novara NO, Italia",
          },
          {
            time: "17:00",
            title: "Aperitivo e cena",
            detail: "Tenuta Monticello · Via Roma 25, 28050 Pombia NO, Italia",
          },
        ],
      },
      accommodation: {
        eyebrow: "Possibilità di alloggio",
        title: "Possibilità di alloggio all'Hotel La Perla",
        body: "Per chi desidera pernottare nelle vicinanze, abbiamo concordato un'offerta con colazione inclusa presso l'Hotel La Perla.",
        rates: [
          { room: "Camera singola", price: "60 €" },
          { room: "Camera doppia", price: "100 €" },
        ],
        perNight: "a notte",
        breakfast: "La colazione è inclusa in entrambe le tariffe.",
        bookingTitle: "Come prenotare",
        booking:
          "È possibile prenotare direttamente presso l'Hotel La Perla via e-mail o telefono. Per usufruire dell'offerta, basta indicare i nostri nomi, Céline & Fabiyan. Vi preghiamo di notare che non è possibile prenotare questa offerta online.",
        link: "Sito dell'hotel:",
        url: "https://www.hotelristorantelaperla.it/it/hotel-ristorante-4-stelle-varallo-pombia/hotel",
        emailTitle: "E-mail:",
        email: "info@hotelristorantelaperla.com",
        telTitle: "Telefono:",
        tel: "+39 0321 921447",
      },
      rsvp: {
        eyebrow: "Conferma",
        title: "Festeggerete con noi?",
        body: "Fateci sapere se potrete essere dei nostri entro il 15 gennaio 2027.",
        dietaryNote:
          "Avete restrizioni alimentari, allergie o richieste particolari? Inviateci un messaggio personale, così potremo organizzare tutto per voi.",
        familyNameLabel: "Nome della famiglia",
        familyNamePlaceholder: "es. Famiglia Rossi / Mario e Giulia",
        attendanceLabel: "Parteciperete?",
        guestCountLabel: "Numero di ospiti partecipanti",
        yesOption: "Sì, ci saremo",
        noOption: "No, non potremo esserci",
        submit: "Invia la conferma",
        submitting: "Invio in corso...",
        thanks: "Grazie! La vostra risposta è stata registrata.",
        requiredName: "Inserite il cognome della famiglia o i nomi degli ospiti.",
        requiredAttendance: "Selezionate se potrete partecipare.",
        requiredGuestCount: "Inserite almeno un ospite.",
        endpointNotConfigured:
          "Il modulo di conferma non è ancora collegato. Contattateci direttamente.",
        errorMessage: "Si è verificato un errore durante l'invio. Riprova.",
        reset: "Invia un'altra risposta",
      },
      contributions: {
        eyebrow: "Organizzazione",
        title: "Organizzatore",
        body: "Per questioni organizzative, rivolgetevi a Dan, il nostro organizzatore.",
        contacts: [
          {
            role: "Contatto",
            name: "Dan Saccomanno",
            phone: "+41 79 269 26 91",
            email: "dan@fabiceli.ch",
          },
        ],
      },
      footer: "Con affetto, Céline & Fabiyan",
    },
  };

  get text(): Copy {
    return this.translations[this.language];
  }

  setLanguage(language: Language): void {
    this.language = language;
  }

  async submitRsvp(): Promise<void> {
    if (!this.rsvpForm.familyName.trim()) {
      this.formError = this.text.rsvp.requiredName;
      return;
    }
    if (!this.rsvpForm.attending) {
      this.formError = this.text.rsvp.requiredAttendance;
      return;
    }
    if (
      this.rsvpForm.attending === "yes" &&
      (!Number.isInteger(this.rsvpForm.guestCount) ||
        this.rsvpForm.guestCount < 1)
    ) {
      this.formError = this.text.rsvp.requiredGuestCount;
      return;
    }
    if (!this.googleScriptUrl.trim().startsWith("https://")) {
      this.formError = this.text.rsvp.endpointNotConfigured;
      return;
    }

    this.formError = "";
    this.submitting = true;

    const payload = {
      familyName: this.rsvpForm.familyName.trim(),
      attending: this.rsvpForm.attending === "yes" ? "Yes" : "No",
      guestCount:
        this.rsvpForm.attending === "yes" ? this.rsvpForm.guestCount : 0,
      language: this.language,
    };

    try {
      await fetch(this.googleScriptUrl.trim(), {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      });
      this.submitted = true;
    } catch (error) {
      console.error("Failed to submit RSVP to Google Sheet:", error);
      this.formError = this.text.rsvp.errorMessage;
    } finally {
      this.submitting = false;
    }
  }

  resetForm(): void {
    this.rsvpForm = {
      familyName: "",
      attending: "",
      guestCount: 1,
    };
    this.submitted = false;
    this.formError = "";
  }
}
