import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

type Language = "en" | "de" | "it";

interface Copy {
  nav: { story: string; day: string; rsvp: string };
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    date: string;
    cta: string;
  };
  story: { eyebrow: string; title: string; body: string };
  venue: {
    eyebrow: string;
    title: string;
    body: string;
    address: string;
    map: string;
  };
  program: {
    eyebrow: string;
    title: string;
    events: Array<{ time: string; title: string; detail: string }>;
  };
  rsvp: {
    eyebrow: string;
    title: string;
    body: string;
    submit: string;
    thanks: string;
  };
  footer: string;
}

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule],
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
  submitted = false;

  readonly translations: Record<Language, Copy> = {
    en: {
      nav: { story: "Our story", day: "The day", rsvp: "RSVP" },
      hero: {
        eyebrow: "Join us for our wedding",
        title: "Céline & Fabiyan",
        intro:
          "We are getting married and would love to celebrate this new chapter with the people who make our story special.",
        date: "Sunday · 29 August 2027 · Pombia, Italy",
        cta: "Tell us you are coming",
      },
      story: {
        eyebrow: "The two of us",
        title: "From a hello to forever.",
        body: "Somewhere between a long walk home and a hundred shared dinners, we knew. Now we are making it official in the place that feels a little like a dream.",
      },
      venue: {
        eyebrow: "The setting",
        title: "Tenuta Monticello",
        body: "",
        address: "Via Roma 25, 28050 Pombia NO, Italy",
        map: "Open in maps",
      },
      program: {
        eyebrow: "The day",
        title: "A little itinerary",
        events: [
          {
            time: "14:45",
            title: "Talk in the Kingdom Hall",
            detail: "Adress.....",
          },
          {
            time: "17:00",
            title: "Apero",
            detail: "Tenuta Monticello",
          },
          {
            time: "19:00",
            title: "Dinner",
            detail: "Tenuta Monticello",
          },
        ],
      },
      rsvp: {
        eyebrow: "Before 28 February",
        title: "Will you be there?",
        body: "Please let us know if you can join us. We cannot wait to celebrate together.",
        submit: "Send RSVP by email",
        thanks: "Thank you. Your RSVP has been successfully sent.",
      },
      footer: "With love, Fabiyan & Céline",
    },
    de: {
      nav: { story: "Unsere Geschichte", day: "Der Tag", rsvp: "RSVP" },
      hero: {
        eyebrow: "Feiert mit uns unsere Hochzeit",
        title: "Ein Tag zum Erinnern,\nein Leben zum Teilen.",
        intro:
          "Wir heiraten und möchten dieses neue Kapitel mit den Menschen feiern, die unsere Geschichte besonders machen.",
        date: "Samstag · 14. Juni 2025 · Comer See",
        cta: "Zusage senden",
      },
      story: {
        eyebrow: "Wir zwei",
        title: "Aus einem Hallo wurde für immer.",
        body: "Irgendwo zwischen langen Spaziergängen und hundert gemeinsamen Abendessen wussten wir es. Jetzt machen wir es offiziell an einem Ort, der sich wie ein Traum anfühlt.",
      },
      venue: {
        eyebrow: "Der Ort",
        title: "Villa Balbiano",
        body: "Am Westufer des Comer Sees, umgeben von italienischen Gärten und blauem Wasser. Kommt, wie ihr seid, und bleibt bis zum Sonnenuntergang.",
        address: "Via Regina 40, 22010 Ossuccio CO, Italien",
        map: "In Karten öffnen",
      },
      program: {
        eyebrow: "Der Tag",
        title: "Unser Zeitplan",
        events: [
          {
            time: "15:30",
            title: "Willkommen",
            detail: "Trefft uns unter den Zitronenbäumen",
          },
          {
            time: "16:30",
            title: "Zeremonie",
            detail: "Ein paar Worte, ganz viel Gefühl",
          },
          {
            time: "18:00",
            title: "Aperitivo",
            detail: "Italienische Häppchen am See",
          },
          {
            time: "20:00",
            title: "Essen & Tanzen",
            detail: "Zeigt eure besten Moves",
          },
        ],
      },
      rsvp: {
        eyebrow: "Bis zum 14. April",
        title: "Seid ihr dabei?",
        body: "Sagt uns bitte, ob ihr mit uns feiern könnt. Wir freuen uns sehr auf euch.",
        submit: "RSVP per E-Mail senden",
        thanks: "Danke. Eure RSVP wurde erfolgreich gesendet.",
      },
      footer: "Von Herzen, Fabiyan & Celine",
    },
    it: {
      nav: { story: "La nostra storia", day: "La giornata", rsvp: "RSVP" },
      hero: {
        eyebrow: "Festeggiate con noi",
        title: "Un giorno da ricordare,\nuna vita da condividere.",
        intro:
          "Ci sposiamo e vorremmo celebrare questo nuovo capitolo con le persone che rendono speciale la nostra storia.",
        date: "Sabato · 14 giugno 2025 · Lago di Como",
        cta: "Conferma la presenza",
      },
      story: {
        eyebrow: "Noi due",
        title: "Da un ciao a per sempre.",
        body: "Tra una lunga passeggiata verso casa e cento cene insieme, lo abbiamo capito. Ora lo rendiamo ufficiale in un luogo che sembra un sogno.",
      },
      venue: {
        eyebrow: "Il luogo",
        title: "Villa Balbiano",
        body: "Sulla riva occidentale del Lago di Como, tra giardini italiani e acqua blu. Venite come siete e restate fino al tramonto.",
        address: "Via Regina 40, 22010 Ossuccio CO, Italia",
        map: "Apri nelle mappe",
      },
      program: {
        eyebrow: "La giornata",
        title: "Il programma",
        events: [
          {
            time: "15:30",
            title: "Aperitivo di benvenuto",
            detail: "Ci troviamo sotto i limoni",
          },
          {
            time: "16:30",
            title: "La cerimonia",
            detail: "Poche parole, tante emozioni",
          },
          {
            time: "18:00",
            title: "Aperitivo",
            detail: "Sapori italiani sul lago",
          },
          {
            time: "20:00",
            title: "Cena e balli",
            detail: "Mostrate le vostre mosse migliori",
          },
        ],
      },
      rsvp: {
        eyebrow: "Entro il 28 Febbraio",
        title: "Ci sarete?",
        body: "Fateci sapere se potrete festeggiare con noi. Non vediamo l’ora di stare insieme.",
        submit: "Invia RSVP via email",
        thanks: "Grazie. Il tuo RSVP è stato inviato con successo.",
      },
      footer: "Con amore, Fabiyan & Celine",
    },
  };

  get text(): Copy {
    return this.translations[this.language];
  }

  setLanguage(language: Language): void {
    this.language = language;
  }

  submitRsvp(): void {
    this.submitted = true;
    const subject = encodeURIComponent("Wedding RSVP");
    const body = encodeURIComponent(
      "Hello Fabiana and Celine,\n\nI would love to RSVP for your wedding.",
    );
    window.location.href = `mailto:hello@fabiceli.com?subject=${subject}&body=${body}`;
  }
}
