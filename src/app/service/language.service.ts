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
  // ''?: string;
  // ''?: string;
  // ''?: string;
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
        title: '',
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
      },
      footer: {
        title: '',
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
        title: '',
      },
      about: {
        title: '',
      },
      skills: {
        title: '',
      },
      portfolio: {
        title: '',
      },
      contact: {
        title: '',
      },
      footer: {
        title: '',
      }
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
