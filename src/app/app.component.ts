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
        title: "Céline & Fabiyan",
        intro:
          "Wir heiraten und möchten dieses neue Kapitel mit den Menschen feiern, die unsere Geschichte besonders machen.",
        date: "Sonntag · 29. August 2027 · Pombia, Italien",
        cta: "Sagt uns, dass ihr kommt",
      },
      story: {
        eyebrow: "Wir zwei",
        title: "Aus einem Hallo wurde für immer.",
        body: "Irgendwo zwischen einem langen Spaziergang nach Hause und hundert gemeinsamen Abendessen wussten wir es. Jetzt machen wir es offiziell an dem Ort, der sich wie ein kleiner Traum anfühlt.",
      },
      venue: {
        eyebrow: "Die Location",
        title: "Tenuta Monticello",
        body: "",
        address: "Via Roma 25, 28050 Pombia NO, Italien",
        map: "In Google Maps öffnen",
      },
      program: {
        eyebrow: "Der Tag",
        title: "Unser Ablauf",
        events: [
          {
            time: "14:45",
            title: "Vortrag im Königreichssaal",
            detail: "Adresse.....",
          },
          {
            time: "17:00",
            title: "Apéro",
            detail: "Tenuta Monticello",
          },
          {
            time: "19:00",
            title: "Abendessen",
            detail: "Tenuta Monticello",
          },
        ],
      },
      rsvp: {
        eyebrow: "Vor dem 28. Februar",
        title: "Seid ihr dabei?",
        body: "Bitte lasst uns wissen, ob ihr dabei sein könnt. Wir können es kaum erwarten, zusammen zu feiern.",
        submit: "RSVP per E-Mail senden",
        thanks: "Vielen Dank. Eure Rückmeldung wurde erfolgreich gesendet.",
      },
      footer: "In Liebe, Fabiyan & Céline",
    },
    it: {
      nav: { story: "La nostra storia", day: "La giornata", rsvp: "RSVP" },
      hero: {
        eyebrow: "Festeggiate con noi il nostro matrimonio",
        title: "Céline & Fabiyan",
        intro:
          "Ci sposiamo e vorremmo celebrare questo nuovo capitolo con le persone che rendono speciale la nostra storia.",
        date: "Domenica · 29 agosto 2027 · Pombia, Italia",
        cta: "Fateci sapere se verrete",
      },
      story: {
        eyebrow: "Noi due",
        title: "Da un ciao a per sempre.",
        body: "Tra una lunga passeggiata verso casa e cento cene insieme, lo abbiamo capito. Ora lo rendiamo ufficiale nel luogo che sembra quasi un sogno.",
      },
      venue: {
        eyebrow: "La location",
        title: "Tenuta Monticello",
        body: "",
        address: "Via Roma 25, 28050 Pombia NO, Italia",
        map: "Apri nelle mappe",
      },
      program: {
        eyebrow: "La giornata",
        title: "Il programma",
        events: [
          {
            time: "14:45",
            title: "Discorso nella Sala del Regno",
            detail: "Indirizzo.....",
          },
          {
            time: "17:00",
            title: "Aperitivo",
            detail: "Tenuta Monticello",
          },
          {
            time: "19:00",
            title: "Cena",
            detail: "Tenuta Monticello",
          },
        ],
      },
      rsvp: {
        eyebrow: "Entro il 28 febbraio",
        title: "Ci sarete?",
        body: "Per favore fateci sapere se potrete essere dei nostri. Non vediamo l’ora di festeggiare insieme.",
        submit: "Invia RSVP via email",
        thanks: "Grazie. La tua conferma è stata inviata con successo.",
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

  submitRsvp(): void {
    this.submitted = true;
    const subject = encodeURIComponent("Wedding RSVP");
    const body = encodeURIComponent(
      "Hello Fabiana and Celine,\n\nI would love to RSVP for your wedding.",
    );
    window.location.href = `mailto:hello@fabiceli.com?subject=${subject}&body=${body}`;
  }
}
