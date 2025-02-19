import { Injectable } from '@angular/core';

type LanguageKey = 'en' | 'de';

interface TextObject {
  'title'?: string;
  'introText'?: string;
  'commuteText'?: string;
  'mantalityText'?: string;
  'professionText'?: string;
  'hint'?: string;
  'button'?: string;
  'email'?: string;
  'subject'?: string;
  'headline1'?: string;
  'headline2'?: string;
  'headline3'?: string;
  'contactHeading'?: string;
  'contactDetails'?: string;
  'callToAction'?: string;
  'namePlaceholder'?: string;
  'nameError'?: string;
  'emailPlaceholder'?: string;
  'emailError'?: string;
  'messagePlaceholder'?: string;
  'messageError'?: string;
  'priPolicyFront'?: string;
  'priPolicy'?: string;
  'priPolicyBack'?: string;
  'priPolicyError'?: string;
  'about'?: string;
  'skills'?: string;
  'portfolio'?: string;
  'contact'?: string;
  'language'?: string;
  'questionFron'?: string;
  'questionBack'?: string;
  'legal'?: string;
  'confirmSubmit'?: string;
  'errorSubmit'?: string;
  // ''?: string;
}

interface ComponentTexts {
  'navBar': TextObject;
  'aboveTheFold': TextObject;
  'about': TextObject;
  'skills': TextObject;
  'portfolio': TextObject;
  'contact': TextObject;
  'footer': TextObject;
}

interface Language {
  'en': ComponentTexts;
  'de': ComponentTexts;
}

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  selectedLanguage: LanguageKey = 'en';

  language: Language = {
    en: {
      navBar: {
        about: 'About me',
        skills: 'Skills',
        portfolio: 'Portfolio',
        contact: 'Contact',
        language: 'Language',
      },
      aboveTheFold: {
        hint: 'scroll down',
        button: `Let's talk!`,
        email: `Kontakt@SaschaSiegert.de`,
        subject: `?subject=Interessiert%20an%20Zusammenarbeit`,
        headline1: `I am`,
        headline2: `Sascha Siegert`,
        headline3: `FRONTEND DEVELOPER`,
      },
      about: {
        title: 'About me',
        introText: `Hi, I’m a german speaking Frontend Developer based near Cologne. Motivated by the limitless
                    opportunities within IT, I am excited about crafting visually captivating and intuitive websites and
                    applications.`,
        commuteText: `Flexible in terms of working environments, I can work effectively on-site in Cologne. With a valid drivers license
                      and my own car, I am also able to commute easily, ensuring a high level of mobility and availability.`,
        mantalityText: `I am open-minded and always looking for personal challenges to constantly improve my knowledge and skills.`,
        professionText: `In my profession, programming isn\'t just about writing code;
                        it's a creative form of problem-solving. 
                        I take pride in my ability to distill complex technical challenges into simple,
                        user-friendly solutions. This way, I help you achieve your goals and bring your visions to life.`,
      },
      skills: {
        title: 'My skills',
        introText: `I have gained experience in building projects with different frontend technologies and concepts.`,
        questionFron: `Looking for`,
        questionBack: `anoterher skill`,
        callToAction: `Feel free to contact me. I look forward to expanding on my previous knowledge`,
        button: `Get in touch`,
      },
      portfolio: {
        title: 'Portfolio',
        introText: `Explore a selection of my work here - Interact with projects to see my skills in action.`
      },
      contact: {
        title: 'Contact',
        contactHeading: `Got a problem to solve?`,
        introText: `Contact me through this form, I am interested in hearing from you, knowing your ideas and contributing to your projects with my work.`,
        callToAction: `Need a Frontend developer? Contact me!`,
        namePlaceholder: `Your name`,
        nameError: `Your name is required`,
        emailPlaceholder: `Your email`,
        emailError: `Your email is required`,
        messagePlaceholder: `Your message`,
        messageError: `Your message is empty`,
        priPolicyFront: ` I've read the `,
        priPolicy: `privacy policy`,
        priPolicyBack: `and agree to the processing of my data as  outlined.`,
        priPolicyError: `Please  accept the privacy policy`,
        button: `Send message :)`,
        confirmSubmit: 'Submit succesful!',
        errorSubmit: 'Failure please try again later!'
      },
      footer: {
        legal: 'Legal Notice',
      }
    },
    de: {
      navBar: {
        about: 'Über mich',
        skills: 'Fähigkeiten',
        portfolio: 'Portfolio',
        contact: 'Kontakt',
        language: 'Sprache',
      },
      aboveTheFold: {
        hint: 'nach unten scrollen',
        button: 'Lass uns reden!',
        email: 'Kontakt@SaschaSiegert.de',
        subject: '?subject=Interessiert%20an%20Zusammenarbeit',
        headline1: 'Ich bin',
        headline2: 'Sascha Siegert',
        headline3: 'FRONTEND-ENTWICKLER',
      },
      about: {
        title: 'Über mich',
        introText: `Hallo, ich bin ein deutschsprachiger Frontend-Entwickler aus der Nähe von Köln. 
                    Begeistert von den unbegrenzten Möglichkeiten in der IT, freue ich mich darauf, 
                    visuell ansprechende und intuitive Websites und Anwendungen zu gestalten.`,
        commuteText: `Ich bin flexibel in Bezug auf Arbeitsorte und kann vor Ort in Köln arbeiten. 
                      Mit einem gültigen Führerschein und eigenem Auto bin ich mobil und jederzeit einsatzbereit.`,
        mantalityText: `Ich bin aufgeschlossen und stets auf der Suche nach neuen Herausforderungen, 
                        um mein Wissen und meine Fähigkeiten kontinuierlich zu erweitern.`,
        professionText: `Für mich bedeutet Programmieren nicht nur, Code zu schreiben – 
                        es ist eine kreative Form der Problemlösung. 
                        Ich bin stolz darauf, komplexe technische Herausforderungen in einfache, 
                        benutzerfreundliche Lösungen zu verwandeln und so Ihre Ziele zu verwirklichen.`,
      },
      skills: {
        title: 'Meine Skills',
        introText: `Ich habe Erfahrung in der Entwicklung von Projekten mit verschiedenen 
                    Frontend-Technologien und Konzepten gesammelt.`,
        questionFron: 'Suchen Sie',
        questionBack: 'eine andere Fähigkeit?',
        callToAction: `Kontaktieren Sie mich gerne. Ich freue mich darauf, mein Wissen zu erweitern.`,
        button: 'Kontakt aufnehmen',
      },
      portfolio: {
        title: 'Portfolio',
        introText: `Entdecken Sie hier eine Auswahl meiner Arbeiten – interagieren Sie mit den Projekten, 
                    um meine Fähigkeiten in Aktion zu sehen.`,
      },
      contact: {
        title: 'Kontakt',
        contactHeading: 'Haben Sie ein Problem zu lösen?',
        introText: `Kontaktieren Sie mich über dieses Formular. Ich bin daran interessiert, von Ihnen zu hören, 
                    Ihre Ideen zu erfahren und mit meiner Arbeit zu Ihren Projekten beizutragen.`,
        callToAction: 'Brauchen Sie einen Frontend-Entwickler? Kontaktieren Sie mich!',
        namePlaceholder: 'Ihr Name',
        nameError: 'Ihr Name ist erforderlich',
        emailPlaceholder: 'Ihre E-Mail',
        emailError: 'Ihre E-Mail ist erforderlich',
        messagePlaceholder: 'Ihre Nachricht',
        messageError: 'Ihre Nachricht ist leer',
        priPolicyFront: 'Ich habe die ',
        priPolicy: 'Datenschutzerklärung',
        priPolicyBack: ' gelesen und stimme der Verarbeitung meiner Daten zu.',
        priPolicyError: 'Bitte akzeptieren Sie die Datenschutzerklärung',
        button: 'Nachricht senden :)',
        confirmSubmit: 'Senden erfolgreich!',
        errorSubmit: 'Fehler, bitte versuche es später noch einmal!',
      },
      footer: {
        legal: 'Impressum',
      },
    },
  }
  constructor() { }

  changeLanguage() {
    if (this.selectedLanguage == 'en') {
      this.selectedLanguage = 'de';
    } else {
      this.selectedLanguage = 'en';
    }
  }
}
