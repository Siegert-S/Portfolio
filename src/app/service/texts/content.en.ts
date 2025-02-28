import { Paragraph } from "../language.service";

const ABOVE_THE_FOLD: Paragraph = {
    text: [
        `I am`,
        `Sascha Siegert`,
        `FRONTEND DEVELOPER`,
        `Let's talk!`,
        `Kontakt@SaschaSiegert.de`,
        `?subject=Interessiert%20an%20Zusammenarbeit`,
        'scroll down',
    ]
}

const ABOUT: Paragraph = {
    title: 'About me',
    text: [
        `Hi, I’m a german speaking Frontend Developer based near Cologne. Motivated by the limitless
            opportunities within IT, I am excited about crafting visually captivating and intuitive websites and
            applications.`,
        `Flexible in terms of working environments, I can work effectively on-site in Cologne. With a valid drivers license
            and my own car, I am also able to commute easily, ensuring a high level of mobility and availability.`,
        `I am open-minded and always looking for personal challenges to constantly improve my knowledge and skills.`,
        `In my profession, programming isn\'t just about writing code;
            it's a creative form of problem-solving. 
            I take pride in my ability to distill complex technical challenges into simple,
            user-friendly solutions. This way, I help you achieve your goals and bring your visions to life.`,]
}

const SKILLS: Paragraph = {
    title: 'My skills',
    text: [
        `I have gained experience in building projects with different frontend technologies and concepts.`,
        `Looking for`,
        `anoterher skill`,
        `Feel free to contact me. I look forward to expanding on my previous knowledge`,
        `Get in touch`,]
}

const PORTFOLIO: Paragraph = {
    title: 'Portfolio',
    text: [
        `Explore a selection of my work here - Interact with projects to see my skills in action.`]
}

const CONTACT: Paragraph = {
    title: 'Contact',
    text: [
        `Got a problem to solve?`,
        `Contact me through this form, I am interested in hearing from you, knowing your ideas and contributing to your projects with my work.`,
        `Need a Frontend developer? Contact me!`,
        `Your name`,
        `Your name is required`,
        `Your email`,
        `Your email is required`,
        `Your message`,
        `Your message is empty`,
        ` I've read the `,
        `privacy policy`,
        `and agree to the processing of my data as  outlined.`,
        `Please  accept the privacy policy`,
        `Send message :)`,
        'Submit succesful!',
        'Failure please try again later!']
}

export const CONTENT_EN = {
    aboveTheFold: ABOVE_THE_FOLD,
    about: ABOUT,
    skills: SKILLS,
    portfolio: PORTFOLIO,
    contact: CONTACT
};
