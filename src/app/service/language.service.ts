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
        title: '',
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
    de: {
      navBar: {
        title: '',
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
  } as const;
  constructor() { }
}
