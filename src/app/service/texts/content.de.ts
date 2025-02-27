import { Paragraph } from "../language.service";

const ABOVE_THE_FOLD: Paragraph = {
    text: [
        'Ich bin',
        'Sascha Siegert',
        'FRONTEND-ENTWICKLER',
        'Lass uns reden!',
        'Kontakt@SaschaSiegert.de',
        '?subject=Interessiert%20an%20Zusammenarbeit',
        'nach unten scrollen',],
}

const ABOUT: Paragraph = {
    title: 'Über mich',
    text: [
        `Hallo, ich bin ein deutschsprachiger Frontend-Entwickler aus der Nähe von Köln. 
            Begeistert von den unbegrenzten Möglichkeiten in der IT, freue ich mich darauf, 
            visuell ansprechende und intuitive Websites und Anwendungen zu gestalten.`,
        `Ich bin flexibel in Bezug auf Arbeitsorte und kann vor Ort in Köln arbeiten. 
            Mit einem gültigen Führerschein und eigenem Auto bin ich mobil und jederzeit einsatzbereit.`,
        `Ich bin aufgeschlossen und stets auf der Suche nach neuen Herausforderungen, 
            um mein Wissen und meine Fähigkeiten kontinuierlich zu erweitern.`,
        `Für mich bedeutet Programmieren nicht nur, Code zu schreiben – 
            es ist eine kreative Form der Problemlösung. 
            Ich bin stolz darauf, komplexe technische Herausforderungen in einfache, 
            benutzerfreundliche Lösungen zu verwandeln und so Ihre Ziele zu verwirklichen.`,]
}

const SKILLS: Paragraph = {
    title: 'Meine Skills',
    text: [
        `Ich habe Erfahrung in der Entwicklung von Projekten mit verschiedenen 
            Frontend-Technologien und Konzepten gesammelt.`,
        'Suchen Sie',
        'eine andere Fähigkeit?',
        `Kontaktieren Sie mich gerne. Ich freue mich darauf, mein Wissen zu erweitern.`,
        'Kontakt aufnehmen',]
}

const PORTFOLIO: Paragraph = {
    title: 'Portfolio',
    text: [
        `Entdecken Sie hier eine Auswahl meiner Arbeiten – interagieren Sie mit den Projekten, 
                um meine Fähigkeiten in Aktion zu sehen.`,]
}

const CONTACT: Paragraph = {
    title: 'Kontakt',
    text: [
        'Haben Sie ein Problem zu lösen?',
        `Kontaktieren Sie mich über dieses Formular. Ich bin daran interessiert, von Ihnen zu hören, 
                Ihre Ideen zu erfahren und mit meiner Arbeit zu Ihren Projekten beizutragen.`,
        'Brauchen Sie einen Frontend-Entwickler? Kontaktieren Sie mich!',
        'Ihr Name',
        'Ihr Name ist erforderlich',
        'Ihre E-Mail',
        'Ihre E-Mail ist erforderlich',
        'Ihre Nachricht',
        'Ihre Nachricht ist leer',
        'Ich habe die ',
        'Datenschutzerklärung',
        'gelesen und stimme der Verarbeitung meiner Daten zu.',
        'Bitte akzeptieren Sie die Datenschutzerklärung',
        'Nachricht senden :)',
        'Senden erfolgreich!',
        'Fehler, bitte versuche es später noch einmal!',]
}

export const CONTENT_DE = {
    AboveTheFold: ABOVE_THE_FOLD,
    about: ABOUT,
    skills: SKILLS,
    portfolio: PORTFOLIO,
    contact: CONTACT
};