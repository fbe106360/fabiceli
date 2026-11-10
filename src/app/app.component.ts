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
  nav: { talk: string; venue: string; day: string; accommodation: string; rsvp: string; contributions: string };
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
  googleScriptUrl: string = "https://script.google.com/macros/s/AKfycbzO_duamj25yeuXWhNXUSmP1eoAEhopVa7IkItsBUdCiy8R4Gw6Uib_uYZtKboHCA/exec";

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
      nav: { talk: "The Talk", venue: "The Venue", day: "The Day", accommodation: "Stay", rsvp: "RSVP", contributions: "Program" },
      hero: {
        eyebrow: "Join us for our wedding",
        title: "Céline & Fabiyan",
        intro:
          "We are getting married and would love to celebrate this new chapter with the people who make our story special.",
        date: "Sunday · 29 August 2027 · Pombia, Italy",
        cta: "Tell us you are coming",
      },
      talk: {
        eyebrow: "The Talk",
        title: "Wedding Talk",
        subtitle: "The Marriage Ceremony",
        body: "The wedding talk and ceremony will take place before we head to the reception venue. We would love for you to join us as we say our vows.",
        address: "Via Pietro Generali, 58, 28100 Novara NO, Italy",
        map: "Open in Google Maps",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Via+Pietro+Generali+58+28100+Novara+NO+Italy",
      },
      venue: {
        eyebrow: "The Venue",
        title: "Tenuta Monticello",
        body: "After the talk we can enjoy tasty food and good vibes and music in the wedding venue.",
        address: "Via Roma 25, 28050 Pombia NO, Italy",
        map: "Open in Google Maps",
        mapUrl:
          "https://www.google.com/maps/place/Tenuta+Monticello/@45.65469,8.6346877,17z/data=!3m1!4b1!4m6!3m5!1s0x4786667f11edc65b:0x608ae8c18c7b5222!8m2!3d45.65469!4d8.6346877!16s%2Fg%2F1thvfths!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D",
      },
      program: {
        eyebrow: "The Day",
        title: "A little itinerary",
        events: [
          {
            time: "14:45",
            title: "Wedding Talk",
            detail: "Via Pietro Generali, 58, 28100 Novara NO, Italy",
          },
          {
            time: "17:00",
            title: "Apero & Celebrations",
            detail: "Tenuta Monticello · Via Roma 25, Pombia",
          },
          {
            time: "19:00",
            title: "Dinner & Music",
            detail: "Tenuta Monticello · Via Roma 25, Pombia",
          },
        ],
      },
      accommodation: {
        eyebrow: "Accommodation",
        title: "Stay at Hotel La Perla",
        body: "We have arranged a special rate for our guests at Hotel La Perla.",
        rates: [
          { room: "Single room", price: "€60" },
          { room: "Double room", price: "€100" },
        ],
        perNight: "per night",
        breakfast: "Breakfast included with both room rates.",
        bookingTitle: "How to book",
        booking: "Please book directly by email or phone for your preferred dates and mention our names, Fabiyan & Céline, to receive the special rate.",
        link: "Hotel website & contact details",
        url: "https://www.hotelristorantelaperla.it/it/hotel-ristorante-4-stelle-varallo-pombia/hotel",
      },
      rsvp: {
        eyebrow: "RSVP",
        title: "Will you be there?",
        body: "Please let us know if you can join us by 28 February 2027. We cannot wait to celebrate together.",
        dietaryNote: "Do you have any dietary restrictions, allergies or special wishes? Please send us a personal message so we can arrange everything for you.",
        familyNameLabel: "Family name",
        familyNamePlaceholder: "e.g. The Miller Family / John & Jane",
        attendanceLabel: "Will you attend?",
        guestCountLabel: "Number of guests attending",
        yesOption: "Yes, we will be there",
        noOption: "No, sadly we cannot make it",
        submit: "Send RSVP",
        submitting: "Sending RSVP...",
        thanks: "Thank you! Your RSVP has been recorded.",
        requiredName: "Please enter your family or guest name.",
        requiredAttendance: "Please select whether you can attend.",
        requiredGuestCount: "Please enter at least one guest.",
        endpointNotConfigured: "The RSVP form is not connected yet. Please contact us directly.",
        errorMessage: "Something went wrong while submitting. Please try again.",
        reset: "Send another RSVP",
      },
      contributions: {
        eyebrow: "Organisation",
        title: "Organiser",
        body: "For organisational matters, please refer to Dan, our Festleiter.",
        contacts: [
          {
            role: "Festleiter",
            name: "Dan Saccomanno",
            phone: "+41 79 269 26 91",
            email: "dansaccomannp@fabiceli.com",
          },
        ],
      },
      footer: "With love, Fabiyan & Céline",
    },
    de: {
      nav: { talk: "Der Vortrag", venue: "Die Location", day: "Der Tag", accommodation: "Übernachtung", rsvp: "RSVP", contributions: "Programm" },
      hero: {
        eyebrow: "Feiert mit uns unsere Hochzeit",
        title: "Céline & Fabiyan",
        intro:
          "Wir heiraten und möchten dieses neue Kapitel mit den Menschen feiern, die unsere Geschichte besonders machen.",
        date: "Sonntag · 29. August 2027 · Pombia, Italien",
        cta: "Sagt uns, dass ihr kommt",
      },
      talk: {
        eyebrow: "Der Vortrag",
        title: "Hochzeitsvortrag",
        subtitle: "Die Trauung",
        body: "Der Hochzeitsvortrag und die Trauung finden vor dem gemeinsamen Fest in der Tenuta Monticello statt. Wir freuen uns sehr, diesen besonderen Moment mit euch zu teilen.",
        address: "Via Pietro Generali, 58, 28100 Novara NO, Italien",
        map: "In Google Maps öffnen",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Via+Pietro+Generali+58+28100+Novara+NO+Italy",
      },
      venue: {
        eyebrow: "Die Location",
        title: "Tenuta Monticello",
        body: "Nach dem Vortrag geniessen wir leckeres Essen, gute Stimmung und Musik in der Hochzeitslocation.",
        address: "Via Roma 25, 28050 Pombia NO, Italien",
        map: "In Google Maps öffnen",
        mapUrl:
          "https://www.google.com/maps/place/Tenuta+Monticello/@45.65469,8.6346877,17z/data=!3m1!4b1!4m6!3m5!1s0x4786667f11edc65b:0x608ae8c18c7b5222!8m2!3d45.65469!4d8.6346877!16s%2Fg%2F1thvfths!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D",
      },
      program: {
        eyebrow: "Der Tag",
        title: "Unser Ablauf",
        events: [
          {
            time: "14:45",
            title: "Hochzeitsvortrag",
            detail: "Via Pietro Generali, 58, 28100 Novara NO, Italien",
          },
          {
            time: "17:00",
            title: "Apéro & Feier",
            detail: "Tenuta Monticello · Via Roma 25, Pombia",
          },
          {
            time: "19:00",
            title: "Abendessen & Musik",
            detail: "Tenuta Monticello · Via Roma 25, Pombia",
          },
        ],
      },
      accommodation: {
        eyebrow: "Übernachtung",
        title: "Übernachten im Hotel La Perla",
        body: "Für unsere Gäste haben wir im Hotel La Perla einen Sondertarif vereinbart.",
        rates: [
          { room: "Einzelzimmer", price: "60 €" },
          { room: "Doppelzimmer", price: "100 €" },
        ],
        perNight: "pro Nacht",
        breakfast: "Das Frühstück ist bei beiden Zimmerpreisen inklusive.",
        bookingTitle: "Buchung",
        booking: "Bitte bucht direkt per E-Mail oder Telefon für euren gewünschten Zeitraum und erwähnt unsere Namen, Fabiyan & Céline, um den Sondertarif zu erhalten.",
        link: "Hotelwebsite & Kontaktdaten",
        url: "https://www.hotelristorantelaperla.it/it/hotel-ristorante-4-stelle-varallo-pombia/hotel",
      },
      rsvp: {
        eyebrow: "RSVP",
        title: "Seid ihr dabei?",
        body: "Bitte gebt uns bis zum 28. Februar 2027 Bescheid. Wir können es kaum erwarten, zusammen zu feiern.",
        dietaryNote: "Hast du Nahrungsmittelunverträglichkeiten, Allergien oder spezielle Wünsche? Bitte melde dich dazu gerne persönlich per Nachricht bei uns.",
        familyNameLabel: "Familienname",
        familyNamePlaceholder: "z.B. Familie Müller / Max & Anna",
        attendanceLabel: "Seid ihr dabei?",
        guestCountLabel: "Anzahl der teilnehmenden Gäste",
        yesOption: "Ja, wir sind dabei",
        noOption: "Nein, leider schaffen wir es nicht",
        submit: "RSVP absenden",
        submitting: "Wird gesendet...",
        thanks: "Vielen Dank! Eure Rückmeldung wurde erfasst.",
        requiredName: "Bitte gebt euren Familien- oder Gästenamen ein.",
        requiredAttendance: "Bitte wählt aus, ob ihr teilnehmen könnt.",
        requiredGuestCount: "Bitte gebt mindestens einen Gast an.",
        endpointNotConfigured: "Das RSVP-Formular ist noch nicht verbunden. Bitte kontaktiert uns direkt.",
        errorMessage: "Ein Fehler ist aufgetreten. Bitte versucht es erneut.",
        reset: "Weitere Rückmeldung senden",
      },
      contributions: {
        eyebrow: "Organisation",
        title: "Organisator",
        body: "Bei organisatorischen Fragen wendet euch bitte an Dan, unseren Festleiter.",
        contacts: [
          {
            role: "Festleiter",
            name: "Dan Saccomanno",
            phone: "+41 79 269 26 91",
            email: "dansaccomannp@fabiceli.com",
          },
        ],
      },
      footer: "In Liebe, Fabiyan & Céline",
    },
    it: {
      nav: { talk: "Il discorso", venue: "La location", day: "La giornata", accommodation: "Alloggio", rsvp: "RSVP", contributions: "Programma" },
      hero: {
        eyebrow: "Festeggiate con noi il nostro matrimonio",
        title: "Céline & Fabiyan",
        intro:
          "Ci sposiamo e vorremmo celebrare questo nuovo capitolo con le persone che rendono speciale la nostra storia.",
        date: "Domenica · 29 agosto 2027 · Pombia, Italia",
        cta: "Fateci sapere se verrete",
      },
      talk: {
        eyebrow: "Il discorso",
        title: "Discorso di matrimonio",
        subtitle: "La Cerimonia",
        body: "Il discorso di matrimonio si terrà prima di recarci al luogo del ricevimento. Non vediamo l'ora di condividere questo momento speciale insieme a voi.",
        address: "Via Pietro Generali, 58, 28100 Novara NO, Italia",
        map: "Apri in Google Maps",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Via+Pietro+Generali+58+28100+Novara+NO+Italy",
      },
      venue: {
        eyebrow: "La location",
        title: "Tenuta Monticello",
        body: "Dopo il discorso ci godremo delizioso cibo, ottima atmosfera e musica nella location del matrimonio.",
        address: "Via Roma 25, 28050 Pombia NO, Italia",
        map: "Apri in Google Maps",
        mapUrl:
          "https://www.google.com/maps/place/Tenuta+Monticello/@45.65469,8.6346877,17z/data=!3m1!4b1!4m6!3m5!1s0x4786667f11edc65b:0x608ae8c18c7b5222!8m2!3d45.65469!4d8.6346877!16s%2Fg%2F1thvfths!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D",
      },
      program: {
        eyebrow: "La giornata",
        title: "Il programma",
        events: [
          {
            time: "14:45",
            title: "Discorso di matrimonio",
            detail: "Via Pietro Generali, 58, 28100 Novara NO, Italia",
          },
          {
            time: "17:00",
            title: "Aperitivo & Festeggiamenti",
            detail: "Tenuta Monticello · Via Roma 25, Pombia",
          },
          {
            time: "19:00",
            title: "Cena & Musica",
            detail: "Tenuta Monticello · Via Roma 25, Pombia",
          },
        ],
      },
      accommodation: {
        eyebrow: "Alloggio",
        title: "Soggiornate all'Hotel La Perla",
        body: "Abbiamo concordato una tariffa speciale per i nostri ospiti all'Hotel La Perla.",
        rates: [
          { room: "Camera singola", price: "60 €" },
          { room: "Camera doppia", price: "100 €" },
        ],
        perNight: "a notte",
        breakfast: "La colazione è inclusa in entrambe le tariffe.",
        bookingTitle: "Come prenotare",
        booking: "Per usufruire della tariffa speciale, prenotate direttamente via e-mail o telefono per le date desiderate e comunicate i nostri nomi, Fabiyan & Céline.",
        link: "Sito dell'hotel e contatti",
        url: "https://www.hotelristorantelaperla.it/it/hotel-ristorante-4-stelle-varallo-pombia/hotel",
      },
      rsvp: {
        eyebrow: "RSVP",
        title: "Ci sarete?",
        body: "Fateci sapere se potrete essere dei nostri entro il 28 febbraio 2027. Non vediamo l'ora di festeggiare insieme.",
        dietaryNote: "Avete intolleranze alimentari, allergie o richieste particolari? Inviateci un messaggio personale per comunicarcelo.",
        familyNameLabel: "Nome della famiglia",
        familyNamePlaceholder: "es. Famiglia Rossi / Mario e Giulia",
        attendanceLabel: "Sarete presenti?",
        guestCountLabel: "Numero di ospiti partecipanti",
        yesOption: "Sì, ci saremo con gioia",
        noOption: "Purtroppo non potremo esserci",
        submit: "Invia RSVP",
        submitting: "Invio in corso...",
        thanks: "Grazie! La vostra conferma è stata registrata.",
        requiredName: "Inserisci il nome della famiglia o degli ospiti.",
        requiredAttendance: "Seleziona se sarai presente o meno.",
        requiredGuestCount: "Indicate almeno un ospite.",
        endpointNotConfigured: "Il modulo RSVP non è ancora collegato. Contattateci direttamente.",
        errorMessage: "Si è verificato un errore. Riprova più tardi.",
        reset: "Invia un'altra conferma",
      },
      contributions: {
        eyebrow: "Organizzazione",
        title: "Organizzatore",
        body: "Per le questioni organizzative, rivolgetevi a Dan, il nostro responsabile dell'organizzazione.",
        contacts: [
          {
            role: "Organizzatore",
            name: "Dan Saccomanno",
            phone: "+41 79 269 26 91",
            email: "dansaccomannp@fabiceli.com",
          },
        ],
      },
      footer: "Con affetto, Fabiyan & Céline",
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
    if (this.rsvpForm.attending === "yes" && (!Number.isInteger(this.rsvpForm.guestCount) || this.rsvpForm.guestCount < 1)) {
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
      guestCount: this.rsvpForm.attending === "yes" ? this.rsvpForm.guestCount : 0,
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
