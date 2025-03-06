import { Injectable } from '@angular/core';
import { PRIVACY_POLICY_DE } from './texts/privacy-policy.de';
import { LEGAL_DE } from './texts/legal-notice.de';
import { CONTENT_DE } from './texts/content.de';
import { LAYOUT_DE } from './texts/layout.de';
import { CONTENT_EN } from './texts/content.en';
import { LAYOUT_EN } from './texts/layout.en';
import { LEGAL_EN } from './texts/legal-notice.en';
import { PRIVACY_POLICY_EN } from './texts/privacy-policy.en';

export type Paragraph = {
  title?: string;
  text?: string[];
}

export type Section = 'content' | 'layout' | 'legal' | 'privacy';

type Language2 = { [key in Section]: { [key: string]: Paragraph }; }

export type LanguageKey = 'en' | 'de';

type LanguageList = { [key in LanguageKey]: Language2 }


export type TextKey =
  'title' | 'introText' | 'commuteText' | 'mantalityText' |
  'professionText' | 'hint' | 'button' | 'email' |
  'subject' | 'headline1' | 'headline2' | 'headline3' |
  'contactHeading' | 'contactDetails' | 'callToAction' | 'namePlaceholder' |
  'nameError' | 'emailPlaceholder' | 'emailError' | 'messagePlaceholder' |
  'messageError' | 'priPolicyFront' | 'priPolicy' | 'priPolicyBack' |
  'priPolicyError' | 'about' | 'skills' | 'portfolio' |
  'contact' | 'language' | 'questionFron' | 'questionBack' |
  'legal' | 'confirmSubmit' | 'errorSubmit' | 'kanzlei' |
  'providerFront' | 'providerBack' | 'represented' | 'law';

export type ComponentKey =
  'navBar' | 'aboveTheFold' | 'about' | 'skills' |
  'portfolio' | 'contact' | 'footer' | 'legal' |
  'legalNotice' | 'privacyInfo' | 'preamble' | 'toc' | 'responsible' |
  'processingOverview' | 'legalBases' | 'security' | 'dataTransfer' |
  'intlDataTransfers' | 'dataDeletion' | 'dataRights' | 'cookies' |
  'webHosting' | 'contactMgmt' | 'plugins' | 'privacyUpdate' |
  'definitions';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  languageText: LanguageList = {
    de: {
      content: CONTENT_DE,
      layout: LAYOUT_DE,
      legal: LEGAL_DE,
      privacy: PRIVACY_POLICY_DE
    },
    en: {
      content: CONTENT_EN,
      layout: LAYOUT_EN,
      legal: LEGAL_EN,
      privacy: PRIVACY_POLICY_EN
    }
  }

  selectedLanguage: LanguageKey = 'en';

  // language: Language = {
  //   en: {
  //     navBar: {
  //       about: 'About me',
  //       skills: 'Skills',
  //       portfolio: 'Portfolio',
  //       contact: 'Contact',
  //       language: 'Language',
  //     },
  //     aboveTheFold: {
  //       hint: 'scroll down',
  //       button: `Let's talk!`,
  //       email: `Kontakt@SaschaSiegert.de`,
  //       subject: `?subject=Interessiert%20an%20Zusammenarbeit`,
  //       headline1: `I am`,
  //       headline2: `Sascha Siegert`,
  //       headline3: `FRONTEND DEVELOPER`,
  //     },
  //     about: {
  //       title: 'About me',
  //       introText: `Hi, I’m a german speaking Frontend Developer based near Cologne. Motivated by the limitless
  //                   opportunities within IT, I am excited about crafting visually captivating and intuitive websites and
  //                   applications.`,
  //       commuteText: `Flexible in terms of working environments, I can work effectively on-site in Cologne. With a valid drivers license
  //                     and my own car, I am also able to commute easily, ensuring a high level of mobility and availability.`,
  //       mantalityText: `I am open-minded and always looking for personal challenges to constantly improve my knowledge and skills.`,
  //       professionText: `In my profession, programming isn\'t just about writing code;
  //                       it's a creative form of problem-solving. 
  //                       I take pride in my ability to distill complex technical challenges into simple,
  //                       user-friendly solutions. This way, I help you achieve your goals and bring your visions to life.`,
  //     },
  //     skills: {
  //       title: 'My skills',
  //       introText: `I have gained experience in building projects with different frontend technologies and concepts.`,
  //       questionFron: `Looking for`,
  //       questionBack: `anoterher skill`,
  //       callToAction: `Feel free to contact me. I look forward to expanding on my previous knowledge`,
  //       button: `Get in touch`,
  //     },
  //     portfolio: {
  //       title: 'Portfolio',
  //       introText: `Explore a selection of my work here - Interact with projects to see my skills in action.`
  //     },
  //     contact: {
  //       title: 'Contact',
  //       contactHeading: `Got a problem to solve?`,
  //       introText: `Contact me through this form, I am interested in hearing from you, knowing your ideas and contributing to your projects with my work.`,
  //       callToAction: `Need a Frontend developer? Contact me!`,
  //       namePlaceholder: `Your name`,
  //       nameError: `Your name is required`,
  //       emailPlaceholder: `Your email`,
  //       emailError: `Your email is required`,
  //       messagePlaceholder: `Your message`,
  //       messageError: `Your message is empty`,
  //       priPolicyFront: ` I've read the `,
  //       priPolicy: `privacy policy`,
  //       priPolicyBack: `and agree to the processing of my data as  outlined.`,
  //       priPolicyError: `Please  accept the privacy policy`,
  //       button: `Send message :)`,
  //       confirmSubmit: 'Submit succesful!',
  //       errorSubmit: 'Failure please try again later!'
  //     },
  //     footer: {
  //       legal: 'Legal Notice',
  //     },
  //     legal: {
  //       title: 'Legal Notice',
  //       introText: `The use of our website is generally possible without providing personal data. If personal data  
  //                   (such as name, address, or email addresses) is collected on our pages, this is always done on a voluntary basis whenever possible.  
  //                   This data will not be passed on to third parties without your explicit consent. <br>  
  //                   We would like to point out that data transmission over the internet (e.g., when communicating via email)  
  //                   may have security vulnerabilities. A complete protection of data against access by third parties is not possible. <br>  
  //                   The use of contact data published in the context of the legal notice obligation by third parties for sending unsolicited  
  //                   advertising and information materials is hereby expressly prohibited. The operators of the pages expressly  
  //                   reserve the right to take legal action in the case of the unsolicited sending of advertising information,  
  //                   such as spam emails.<br>`,
  //       contact: 'Contact',
  //       headline1: 'Disclaimer',
  //       headline2: 'Privacy Policy',
  //       kanzlei: 'Law Firm',
  //       providerFront: 'Website legal notice created by',
  //       providerBack: 'from',
  //       represented: 'Represented by',
  //       law: 'Information according to § 5 TMG',
  //     }
  //   },
  //   de: {
  //     navBar: {
  //       about: 'Über mich',
  //       skills: 'Fähigkeiten',
  //       portfolio: 'Portfolio',
  //       contact: 'Kontakt',
  //       language: 'Sprache',
  //     },
  //     aboveTheFold: {
  //       hint: 'nach unten scrollen',
  //       button: 'Lass uns reden!',
  //       email: 'Kontakt@SaschaSiegert.de',
  //       subject: '?subject=Interessiert%20an%20Zusammenarbeit',
  //       headline1: 'Ich bin',
  //       headline2: 'Sascha Siegert',
  //       headline3: 'FRONTEND-ENTWICKLER',
  //     },
  //     about: {
  //       title: 'Über mich',
  //       introText: `Hallo, ich bin ein deutschsprachiger Frontend-Entwickler aus der Nähe von Köln. 
  //                   Begeistert von den unbegrenzten Möglichkeiten in der IT, freue ich mich darauf, 
  //                   visuell ansprechende und intuitive Websites und Anwendungen zu gestalten.`,
  //       commuteText: `Ich bin flexibel in Bezug auf Arbeitsorte und kann vor Ort in Köln arbeiten. 
  //                     Mit einem gültigen Führerschein und eigenem Auto bin ich mobil und jederzeit einsatzbereit.`,
  //       mantalityText: `Ich bin aufgeschlossen und stets auf der Suche nach neuen Herausforderungen, 
  //                       um mein Wissen und meine Fähigkeiten kontinuierlich zu erweitern.`,
  //       professionText: `Für mich bedeutet Programmieren nicht nur, Code zu schreiben – 
  //                       es ist eine kreative Form der Problemlösung. 
  //                       Ich bin stolz darauf, komplexe technische Herausforderungen in einfache, 
  //                       benutzerfreundliche Lösungen zu verwandeln und so Ihre Ziele zu verwirklichen.`,
  //     },
  //     skills: {
  //       title: 'Meine Skills',
  //       introText: `Ich habe Erfahrung in der Entwicklung von Projekten mit verschiedenen 
  //                   Frontend-Technologien und Konzepten gesammelt.`,
  //       questionFron: 'Suchen Sie',
  //       questionBack: 'eine andere Fähigkeit?',
  //       callToAction: `Kontaktieren Sie mich gerne. Ich freue mich darauf, mein Wissen zu erweitern.`,
  //       button: 'Kontakt aufnehmen',
  //     },
  //     portfolio: {
  //       title: 'Portfolio',
  //       introText: `Entdecken Sie hier eine Auswahl meiner Arbeiten – interagieren Sie mit den Projekten, 
  //                   um meine Fähigkeiten in Aktion zu sehen.`,
  //     },
  //     contact: {
  //       title: 'Kontakt',
  //       contactHeading: 'Haben Sie ein Problem zu lösen?',
  //       introText: `Kontaktieren Sie mich über dieses Formular. Ich bin daran interessiert, von Ihnen zu hören, 
  //                   Ihre Ideen zu erfahren und mit meiner Arbeit zu Ihren Projekten beizutragen.`,
  //       callToAction: 'Brauchen Sie einen Frontend-Entwickler? Kontaktieren Sie mich!',
  //       namePlaceholder: 'Ihr Name',
  //       nameError: 'Ihr Name ist erforderlich',
  //       emailPlaceholder: 'Ihre E-Mail',
  //       emailError: 'Ihre E-Mail ist erforderlich',
  //       messagePlaceholder: 'Ihre Nachricht',
  //       messageError: 'Ihre Nachricht ist leer',
  //       priPolicyFront: 'Ich habe die ',
  //       priPolicy: 'Datenschutzerklärung',
  //       priPolicyBack: ' gelesen und stimme der Verarbeitung meiner Daten zu.',
  //       priPolicyError: 'Bitte akzeptieren Sie die Datenschutzerklärung',
  //       button: 'Nachricht senden :)',
  //       confirmSubmit: 'Senden erfolgreich!',
  //       errorSubmit: 'Fehler, bitte versuche es später noch einmal!',
  //     },
  //     footer: {
  //       legal: 'Impressum',
  //     },
  //     legal: {
  //       title: 'Impressum',
  //       introText: `  Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten
  //                     personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit
  //                     möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte
  //                     weitergegeben. <br>
  //                     Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken
  //                     aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich. <br>
  //                     Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht
  //                     ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber
  //                     der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen,
  //                     etwa durch Spam-Mails, vor.<br>`,
  //       contact: 'Kontakt',
  //       headline1: 'Haftungsausschluss',
  //       headline2: 'Datenschutz',
  //       kanzlei: 'Kanzlei',
  //       providerFront: 'Website Impressum erstellt durch',
  //       providerBack: 'von der',
  //       represented: 'Vertreten durch',
  //       law: 'Angaben gemäß § 5 TMG',
  //     }
  //   },
  // }
  constructor() { }

  getLanguage(section: Section, component: string) {
    const language = this.languageText[this.selectedLanguage];
    if (!language) {
      console.log('selectedLanguage nich vorhanden');
    }
    const sector = language[section];
    if (!sector) {
      console.log('section nich vorhanden');
    }
    const paragraph = sector[component]
    if (!paragraph) {
      return { title: 'title nicht gefunden', text: ['text nicht gefunden'] };
    }
    return paragraph;
  }

  selectLanguage(lang: LanguageKey) {
    this.selectedLanguage = lang;
  }

}
