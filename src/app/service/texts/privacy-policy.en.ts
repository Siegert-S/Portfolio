import { Paragraph } from "../language.service";

const PRIVACYINFO: Paragraph = {
    title: 'Privacy Policy',
    text: ['kontakt@saschasiegert.de'],
}

const PREAMBLE: Paragraph = {
    title: 'Preamble',
    text: [
        `With the following Privacy Policy, we aim to inform you about the types of personal data (hereinafter referred to as "data") we process, for what purposes, and to what extent.
        The Privacy Policy applies to all processing of personal data carried out by us, both in the course of providing our services and, in particular, on our websites, mobile applications, as well as on external online platforms such as our social media profiles (hereinafter collectively referred to as the "online offer").`,
        'The terms used are not gender-specific.',
        'Last updated: October 15, 2023',
    ],
}

const TOC: Paragraph = {
    title: 'Table of Contents',
}

const RESPONSIBLE: Paragraph = {
    title: 'Responsible Party',
}

const PROCESSING_OVERVIEW: Paragraph = {
    title: 'Overview of Processing Activities',
    text: [
        `The following overview summarizes the types of data processed and the purposes for which they are processed,
            and refers to the affected individuals.`,
        `Types of processed data`,
        `Contact data.`,
        `Content data.`,
        `Usage data.`,
        `Meta-, communication-, and procedural data.`,
        `Categories of affected individuals`,
        `Communication partners.`,
        `Users.`,
        `Purposes of processing`,
        `Contact requests and communication.`,
        `Security measures.`,
        `Managing and responding to inquiries.`,
        `Feedback.`,
        `Provision of our online offer and user-friendliness.`,
        `IT infrastructure.`,
    ],
}

const LEGAL_BASES: Paragraph = {
    title: `Applicable Legal Bases`,
    text: [
        `Applicable legal bases under the GDPR:`,
        `Below is an overview of the legal bases under the GDPR on which we process personal data. Please note that in addition to the provisions of the GDPR, national data protection regulations in your or our country of residence or business may also apply. If more specific legal grounds are relevant in a particular case, we will inform you of these in the privacy policy.`,
        `Consent (Art. 6(1)(a) GDPR)`,
        `- The data subject has given their consent to the processing of their personal data for one or more specific purposes.`,
        `Contract performance and pre-contractual inquiries (Art. 6(1)(b) GDPR)`,
        `- Processing is necessary for the performance of a contract to which the data subject is a party or to take pre-contractual measures at the request of the data subject.`,
        `Legitimate interests (Art. 6(1)(f) GDPR)`,
        `- Processing is necessary for the purposes of the legitimate interests pursued by the controller or a third party, unless overridden by the interests or fundamental rights and freedoms of the data subject, which require protection of personal data.`,
        `National data protection regulations in Germany:`,
        `In addition to the data protection regulations of the GDPR, national regulations on data protection in Germany apply. This includes in particular the Federal Data Protection Act (BDSG), which contains special provisions regarding the right to access, the right to erasure, the right to object, the processing of special categories of personal data, processing for other purposes, and data transfers as well as automated decision-making, including profiling. Additionally, state data protection laws of individual federal states may apply.`,
    ],
}

const SECURITY: Paragraph = {
    title: `Security Measures`,
    text: [
        `In accordance with legal requirements and considering the state of the art, implementation costs, and the nature, scope, circumstances, and purposes of the processing, as well as the varying likelihood and severity of the threat to the rights and freedoms of natural persons, we implement appropriate technical and organizational measures to ensure a level of protection appropriate to the risk.`,
        `These measures include, in particular, ensuring the confidentiality, integrity, and availability of data through control of physical and electronic access to the data, as well as access, input, sharing, ensuring availability, and segregation of the data. Furthermore, we have established procedures to facilitate the exercise of data subject rights, data deletion, and responses to data threats. Additionally, we consider data protection already in the development or selection of hardware, software, and processes, in accordance with the principle of privacy by design and by default, and through data protection-friendly settings.`,
        `TLS/SSL encryption (https): To protect the data of users transmitted through our online services, we use TLS/SSL encryption. Secure Sockets Layer (SSL) is the standard technology for securing internet connections by encrypting the data transmitted between a website or app and a browser (or between two servers). Transport Layer Security (TLS) is an updated and more secure version of SSL. Hypertext Transfer Protocol Secure (HTTPS) is displayed in the URL when a website is secured by an SSL/TLS certificate.`,
    ],
}

const DATA_TRANSFER: Paragraph = {
    title: `Transmission of Personal Data`,
    text: [
        `As part of our processing of personal data, there are instances where the data is transmitted or disclosed to other entities, companies, legally independent organizational units, or individuals. The recipients of this data may include, for example, service providers entrusted with IT tasks or providers of services and content integrated into a website. In such cases, we comply with legal requirements and, in particular, enter into appropriate contracts or agreements with the recipients of your data to ensure the protection of your data.`,
    ],
}

const INTL_DATA_TRANSFERS: Paragraph = {
    title: `International Data Transfers`,
    text: [
        `Data Processing in Third Countries: If we process data in a third country (i.e., outside the European Union (EU), the European Economic Area (EEA)), or if the processing takes place as part of the use of third-party services or the disclosure or transmission of data to other individuals, entities, or companies, this will only occur in compliance with legal requirements. If the level of data protection in the third country has been recognized through an adequacy decision (Art. 45 GDPR), this serves as the basis for the data transfer. Otherwise, data transfers will only occur if the level of data protection is ensured in another way, particularly through standard contractual clauses (Art. 46(2)(c) GDPR), explicit consent, or in the case of contractual or legally required transmission (Art. 49(1) GDPR). Furthermore, we will inform you of the basis for the third-country transfer with the individual third-party providers, with adequacy decisions being the primary basis. Information about third-country transfers and available adequacy decisions can be found in the information provided by the European Commission:`,
        `EU-US Trans-Atlantic Data Privacy Framework: As part of the so-called "Data Privacy Framework" (DPF), the European Commission has also recognized the data protection level as secure for certain companies in the USA based on the adequacy decision of 10.07.2023. The list of certified companies as well as further information about the DPF can be found on the website of the US Department of Commerce `,
        `(in English). We will inform you in our privacy notices about which of our service providers are certified under the Data Privacy Framework.`,
    ],
}

const DATA_DELETION: Paragraph = {
    title: `Data Deletion`,
    text: [
        `The data we process will be deleted in accordance with legal requirements as soon as their consent to process them is withdrawn or other permissions no longer apply (e.g., when the purpose of processing these data no longer exists or when they are no longer necessary for the purpose). If the data is not deleted because they are required for other legally permissible purposes, their processing will be limited to these purposes. This means that the data will be restricted and not processed for other purposes. This applies, for example, to data that must be retained for commercial or tax reasons or whose storage is necessary for asserting, exercising, or defending legal claims or for the protection of the rights of another natural or legal person. Our privacy notices may also contain further details on the retention and deletion of data that are primarily applicable to the respective processing.`,
    ],
}

const DATA_RIGHTS: Paragraph = {
    title: `Rights of Data Subjects`,
    text: [
        `Rights of data subjects under the GDPR: As data subjects, you have various rights under the GDPR, particularly as outlined in Articles 15 to 21 of the GDPR:`,
        `Right to Object: You have the right to object at any time, on grounds relating to your particular situation, to the processing of your personal data, which is based on Art. 6 (1) (e) or (f) of the GDPR; this also applies to profiling based on these provisions. If your personal data is being processed for direct marketing purposes, you have the right to object at any time to the processing of your personal data for such marketing purposes; this also applies to profiling, insofar as it is related to such direct marketing.`,
        `Right to Withdraw Consent:`,
        `You have the right to withdraw any consent you have given at any time.`,
        `Right to Information:`,
        `You have the right to request confirmation as to whether your personal data is being processed and to access this data as well as further information and a copy of the data, in accordance with legal requirements.`,
        `Right to Rectification:`,
        `You have the right, in accordance with legal requirements, to request the correction of inaccurate data concerning you or the completion of incomplete data.`,
        `Right to Deletion and Restriction of Processing:`,
        `You have the right, in accordance with legal requirements, to request the immediate deletion of your personal data, or alternatively, to request a restriction of processing in accordance with legal requirements.`,
        `Right to Data Portability:`,
        `You have the right to receive the personal data concerning you, which you have provided to us, in a structured, commonly used, and machine-readable format, or to request the transmission of those data to another controller, in accordance with legal requirements.`,
        `Right to Lodge a Complaint with Supervisory Authority:`,
        `You have the right to lodge a complaint with a supervisory authority, in particular in the member state of your habitual residence, place of work, or the place of the alleged infringement, if you believe that the processing of your personal data violates the provisions of the GDPR, without prejudice to any other administrative or judicial remedy.`,
    ],
}

const COOKIES: Paragraph = {
    title: `Use of Cookies`,
    text: [
        `Cookies are small text files or other storage markers that store information on end devices and retrieve information from them. For example, to store the login status in a user account, the contents of a shopping cart in an online store, the visited content, or the functions used on an online service. Cookies can also be used for various purposes, such as the functionality, security, and convenience of online services, as well as for generating visitor traffic analysis.`,
        `Consent Information:`,
        `We use cookies in accordance with legal regulations. Therefore, we obtain prior consent from users, unless this is not legally required. Consent is particularly not necessary if the storage and retrieval of information, including cookies, is strictly necessary to provide the user with a telemedia service (i.e., our online service) that the user has explicitly requested. Cookies that are generally necessary include those for the display and functionality of the online service, load balancing, security, storing user preferences and choices, or similar purposes related to the provision of the main and secondary functions of the online service requested by the user. The revocable consent will be clearly communicated to users and will include information about the specific use of cookies.`,
        `Data Protection Legal Basis Information:`,
        `The legal basis for processing personal data via cookies depends on whether we ask for consent from users. If users consent, the legal basis for processing their data is the given consent. Otherwise, the data processed via cookies will be processed based on our legitimate interests (e.g., in the operational management of our online service and improving its usability), or when required for the fulfillment of our contractual obligations, if the use of cookies is necessary for us to meet our contractual obligations. The purposes for which cookies are processed by us will be explained in this privacy policy or in the course of our consent and processing procedures.`,
        `Storage Duration:`,
        `Regarding storage duration, the following types of cookies are distinguished:`,
        `Temporary Cookies (also known as session cookies):`,
        `Temporary cookies are deleted as soon as a user leaves an online service and closes their device (e.g., browser or mobile app).`,
        `Permanent Cookies:`,
        `Permanent cookies remain stored even after the device is closed. For example, the login status may be stored, or preferred content can be displayed directly when the user revisits a website. Additionally, data collected through cookies may be used for measuring reach. If we do not provide users with specific information about the type and storage duration of cookies (e.g., as part of obtaining consent), users should assume that cookies are permanent and the storage duration may be up to two years.`,
        `General Information on Withdrawal and Objection ("Opt-Out"): `,
        `and `,
        `Users can withdraw their consent at any time and object to processing in accordance with legal requirements. For this purpose, users can, among other things, limit the use of cookies in their browser settings (which may limit the functionality of our online service). Objection to the use of cookies for online marketing purposes can also be made through the websites.`,
        `Legal Bases:`,
        `Legitimate interests (Art. 6 (1) (f) GDPR). Consent (Art. 6 (1) (a) GDPR).`,
        `Further Information on Processing Procedures, Methods, and Services:`,
        `Processing of Cookie Data Based on Consent:`,
        `We use a cookie consent management procedure, in which the consents of users for the use of cookies, or the processing and providers mentioned in the cookie consent management procedure, are collected, managed, and can be revoked by users. In this process, the consent statement is stored so that it does not need to be asked again and can be demonstrated in compliance with legal obligations. The storage can be done server-side and/or in a cookie (a so-called opt-in cookie or using similar technologies) to associate the consent with a user or their device. Subject to individual information about the cookie management service providers, the following applies: the duration of the storage of consent can be up to two years. In this process, a pseudonymous user identifier is generated and the time of consent, information about the scope of consent (e.g., which categories of cookies and/or service providers), as well as the browser, system, and used device are stored.`,
        `Legal Bases:`,
        `Consent (Art. 6 (1) (a) GDPR).`,
    ],
}

const WEB_HOSTING: Paragraph = {
    title: `Provision of Online Services and Web Hosting`,
    text: [
        `We process user data in order to provide our online services. For this purpose, we process the user's IP address, which is necessary to deliver the content and functionalities of our online services to the user's browser or device.`,
        `Processed Data Types:`,
        `Usage data (e.g., visited websites, interest in content, access times); Meta-, communication, and process data (e.g., IP addresses, time stamps, identification numbers, consent status).`,
        `Affected Persons:`,
        `Users (e.g., website visitors, online service users).`,
        `Purpose of Processing:`,
        `Provision of our online services and user-friendliness; Information technology infrastructure (operation and provision of information systems and technical devices (computers, servers, etc.)); Security measures.`,
        `Legal Bases:`,
        `Legitimate interests (Art. 6 (1) (f) GDPR).`,
        `Further Information on Processing Procedures, Methods, and Services:`,
        `Provision of Online Service on Rented Storage Space:`,
        `For the provision of our online services, we use storage space, computing capacity, and software that we rent or otherwise obtain from a corresponding server provider (also called "web host").`,
        `Legal Bases:`,
        `Legitimate interests (Art. 6 (1) (f) GDPR).`,
        `Collection of Access Data and Log Files:`,
        `Access to our online services is logged in the form of "server log files." Server log files may include the address and name of the retrieved websites and files, the date and time of the retrieval, the amount of data transferred, the message about successful retrieval, the browser type and version, the user's operating system, the referring URL (the previously visited page), and typically IP addresses and the requesting provider. Server log files may be used for security purposes, e.g., to avoid server overload (especially in the case of malicious attacks, such as DDoS attacks), and to ensure server load and stability.`,
        `Legal Bases:`,
        `Legitimate interests (Art. 6 (1) (f) GDPR).`,
        `Data Deletion:`,
        `Logfile information is stored for a maximum of 30 days and then deleted or anonymized. Data that needs to be retained for evidentiary purposes is exempt from deletion until the respective incident is fully clarified.`,
    ],
}

const CONTACT_MGMT: Paragraph = {
    title: `Contact and Inquiry Management`,
    text: [
        `When contacting us (e.g., by post, contact form, email, phone, or via social media) as well as in the context of existing user and business relationships, the details of the inquiring individuals are processed to the extent necessary to respond to the inquiries and any requested actions.`,
        `Processed Data Types:`,
        `Contact details (e.g., email, phone numbers); Content data (e.g., entries in online forms); Usage data (e.g., visited websites, interest in content, access times); Meta-, communication, and procedural data (e.g., IP addresses, time stamps, identification numbers, consent status).`,
        `Affected Persons:`,
        `Communication partners.`,
        `Purpose of Processing:`,
        `Contact inquiries and communication; Management and response to inquiries; Feedback (e.g., collecting feedback via online form). Provision of our online services and user-friendliness.`,
        `Legal Bases:`,
        `Legitimate interests (Art. 6 (1) (f) GDPR); Contract fulfillment and pre-contractual inquiries (Art. 6 (1) (b) GDPR).`,
        `Further Information on Processing Procedures, Methods, and Services:`,
        `Contact Form:`,
        `When users contact us via our contact form, email, or other communication channels, we process the data provided in connection with the inquiry to address the matter raised.`,
        `Legal Bases:`,
        `Contract fulfillment and pre-contractual inquiries (Art. 6 (1) (b) GDPR); Legitimate interests (Art. 6 (1) (f) GDPR).`,
    ],
}

const PLUGINS: Paragraph = {
    title: `Plugins and Embedded Features and Content`,
    text: [
        `We integrate functional and content elements into our online services that are sourced from the servers of their respective providers (hereinafter referred to as "third parties"). These may include, for example, graphics, videos, or maps (hereinafter collectively referred to as "content").`,
        `The integration always requires that the third-party providers of this content process the users' IP addresses, as they would not be able to send the content to the users' browsers without the IP address. Therefore, the IP address is required for displaying this content or features. We strive to use only content where the respective providers use the IP address solely for the delivery of the content. Third parties may also use so-called pixel tags (invisible graphics, also referred to as "web beacons") for statistical or marketing purposes. These "pixel tags" can be used to evaluate information, such as visitor traffic on the pages of this website. The pseudonymous information may also be stored in cookies on the users' devices and may include technical information about the browser and operating system, referring websites, visit times, as well as additional details about the use of our online services, which may be linked with information from other sources.`,
        `Processed Data Types:`,
        `Usage data (e.g., visited websites, interest in content, access times); Meta-, communication, and procedural data (e.g., IP addresses, timestamps, identification numbers, consent status).`,
        `Affected Persons:`,
        `Users (e.g., website visitors, online service users).`,
        `Purpose of Processing:`,
        `Provision of our online services and user-friendliness.`,
        `Legal Bases:`,
        `Legitimate interests (Art. 6 (1) (f) GDPR).`,
        `Further Information on Processing Procedures, Methods, and Services:`,
        `Google Fonts (Sourcing from Google Server):`,
        `Sourcing fonts (and symbols) for the purpose of technically secure, maintenance-free, and efficient use of fonts and symbols, considering their up-to-date status and loading times, their consistent display, and compliance with any licensing restrictions. The font provider is informed of the user's IP address to make the fonts available in the user's browser. Additionally, technical data (language settings, screen resolution, operating system, used hardware) is transmitted, which is necessary for providing the fonts depending on the devices and technical environment used. This data may be processed on a server of the font provider in the USA - when visiting our online services, the users' browsers send HTTP requests to the Google Fonts Web API (i.e., a software interface for retrieving the fonts). The Google Fonts Web API provides the users with the cascading style sheets (CSS) of Google Fonts, followed by the fonts specified in the CSS. These HTTP requests include (1) the IP address used by the respective user for internet access, (2) the requested URL on the Google server, and (3) the HTTP headers, including the user agent, which describes the browser and operating system versions of the website visitors, as well as the referring URL (i.e., the website where the Google font is to be displayed). IP addresses are neither logged nor stored on Google servers, and they are not analyzed. The Google Fonts Web API logs details of the HTTP requests (requested URL, user agent, and referring URL). Access to this data is restricted and strictly controlled. The requested URL identifies the font families the user wants to load fonts for. This data is logged to allow Google to determine how often a specific font family is requested. For the Google Fonts Web API, the user agent must adjust the font generated for the respective browser type. The user agent is primarily logged for debugging and used to generate aggregated usage statistics, which measure the popularity of font families. These aggregated usage statistics are published on the "Analytics" page of Google Fonts. Finally, the referring URL is logged, so that the data can be used for production maintenance, and an aggregated report on the top integrations based on the number of font requests can be generated. According to Google's own statement, none of the information collected by Google Fonts is used to create user profiles or to serve targeted ads.`,
        `Service Provider:`,
        `Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland;`,
        `Legal Bases:`,
        `Legitimate interests (Art. 6 (1) (f) GDPR);`,
        `Website:`,
        `Privacy Policy:`,
        `Basis for Third-Country Transfer:`,
        `EU-US Data Privacy Framework (DPF)`,
        `Further Information:`,
    ],
}

const PRIVACY_UPDATE: Paragraph = {
    title: `Changes and Updates to the Privacy Policy`,
    text: [
        `We ask you to regularly review the contents of our privacy policy. We will update the privacy policy as soon as changes to the data processing we conduct make this necessary. We will inform you if changes require your active participation (e.g., consent) or any other individual notification.`,
        `If we provide addresses and contact information of companies and organizations in this privacy policy, please note that these addresses may change over time, and we ask you to verify the details before reaching out.`,
    ],
}

const DEFINITIONS: Paragraph = {
    title: `Definitions`,
    text: [
        `This section provides an overview of the terms used in this privacy policy. As far as the terms are legally defined, their legal definitions apply. The following explanations are intended primarily for understanding.`,
        `Personal Data:`,
        `"Personal data" refers to all information that relates to an identified or identifiable natural person (hereinafter referred to as "data subject"); a natural person is considered identifiable if they can be directly or indirectly identified, particularly through reference to an identifier such as a name, identification number, location data, online identifier (e.g., cookie), or one or more specific characteristics that express the physical, physiological, genetic, mental, economic, cultural, or social identity of that natural person.`,
        `Controller:`,
        `The "controller" is the natural or legal person, authority, agency, or other body that alone or jointly with others determines the purposes and means of the processing of personal data.`,
        `Processing:`,
        `"Processing" refers to any operation or set of operations performed on personal data, whether or not by automated means. The term is broad and encompasses practically every action involving data, such as collecting, evaluating, storing, transmitting, or deleting.`,
        `Created with the free privacy policy generator by Dr. Thomas Schwenke.`,
    ],
}

export const PRIVACY_POLICY_EN = {
    privacyInfo: PRIVACYINFO,
    preamble: PREAMBLE,
    toc: TOC,
    responsible: RESPONSIBLE,
    processingOverview: PROCESSING_OVERVIEW,
    legalBases: LEGAL_BASES,
    security: SECURITY,
    dataTransfer: DATA_TRANSFER,
    intlDataTransfers: INTL_DATA_TRANSFERS,
    dataDeletion: DATA_DELETION,
    dataRights: DATA_RIGHTS,
    cookies: COOKIES,
    webHosting: WEB_HOSTING,
    contactMgmt: CONTACT_MGMT,
    plugins: PLUGINS,
    privacyUpdate: PRIVACY_UPDATE,
    definitions: DEFINITIONS,
}