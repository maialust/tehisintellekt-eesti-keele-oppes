/* =====================================================================
 * TÖÖTOA ANDMED — KÕIK MUUDETAV INFO ON SIIN FAILIS
 * ---------------------------------------------------------------------
 * Muuda ainult jutumärkide vahel olevat teksti. Ära kustuta komasid,
 * sulge ega jutumärke. Pärast muutmist salvesta fail — GitHubis
 * avaldatakse muudatus automaatselt mõne minuti jooksul.
 * ===================================================================== */

/* ---------------------------------------------------------------------
 * 1. REGISTREERIMISLINK
 * Kui link on teada, kirjuta see jutumärkide vahele, näiteks:
 *   export const REGISTRATION_URL = "https://forms.gle/...";
 * Seni, kuni siin on "LISA_REGISTREERIMISLINK", viivad kõik
 * registreerimisnupud lehe lõpus olevasse registreerimisplokki
 * ja avalikul lehel seda sõna ei kuvata.
 * ------------------------------------------------------------------- */
export const REGISTRATION_URL = "LISA_REGISTREERIMISLINK";

/* ---------------------------------------------------------------------
 * 2. LEHE AVALIK AADRESS (jagamise eelvaate jaoks)
 * ------------------------------------------------------------------- */
export const SITE_URL = "https://maialust.github.io/tehisintellekt-eesti-keele-oppes/";

/* ---------------------------------------------------------------------
 * Abiväärtused (ei ole vaja muuta)
 * ------------------------------------------------------------------- */
export const REGISTRATION_ANCHOR = "registreeru";
export const hasRegistrationUrl = /^https?:\/\//i.test(REGISTRATION_URL.trim());
export const registrationHref = hasRegistrationUrl ? REGISTRATION_URL.trim() : `#${REGISTRATION_ANCHOR}`;

/* =====================================================================
 * PÕHIANDMED
 * ===================================================================== */
export const workshop = {
  name: "Tehisintellekt täiskasvanute eesti keele õppes",
  type: "Töötuba",
  event: "25 aastat eesti keelt teise keelena õpetades – lood, kogemused ja tulevikutee",
  eventShort: "EKTKÕLi juubelikonverents",
  organizer: "Eesti Keele kui Teise Keele Õpetajate Liit",
  // Logofailid kaustas public/.
  organizerLogo: "ektkol-logo.png", // logo koos tekstiga (päis, jalus)
  // Ürituse veebileht, kui see on olemas. Tühjaks jäetuna ei kuvata.
  eventUrl: "",
  language: "eesti keel",

  // Aeg (Europe/Tallinn). Kuupäev kujul PP.KK.AAAA, kellaaeg TT:MM.
  date: "28.11.2026",
  start: "15:00",
  end: "15:50",
  durationMinutes: 50,
  // Sama aeg UTC-s kalendrifaili jaoks (talveajal on Tallinn UTC+2).
  startUtc: "20261128T130000Z",
  endUtc: "20261128T135000Z",

  venue: "Park Inn by Radisson Meriton Conference & Spa Hotel",
  address: "Toompuiestee 27 / Paldiski mnt 4, 10149 Tallinn",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Park+Inn+by+Radisson+Meriton+Conference+%26+Spa+Hotel%2C+Toompuiestee+27%2C+Tallinn",

  bring: "Palume võtta kaasa nutitelefon või sülearvuti.",
  takeaway: "Oma prompt järgmiseks tunniks.",
};

/* ---------------------------------------------------------------------
 * LÄBIVIIJA
 * `photo` — pildifaili nimi kaustas public/.
 * ------------------------------------------------------------------- */
export const facilitator = {
  name: "Maia Lust",
  roles: [
    "Tartu Ülikooli haridusteaduste instituudi tehisarusaadik",
    "Tallinna Pae Gümnaasiumi haridustehnoloog",
    "eesti keele kui teise keele õpetaja",
  ],
  photo: "maia-lust.jpg",
  profile: "https://www.etis.ee/CV/Maia_Lust/est/",
  orcid: "https://orcid.org/0000-0003-2453-5563",
  // Meisterõpetaja portfoolio. Tühjaks jäetuna ei kuvata.
  portfolio: "https://sites.google.com/pae.tln.edu.ee/mlmeister/",
};

/* ---------------------------------------------------------------------
 * KONTAKT — tühjad väljad lehel ei kuvata.
 * ------------------------------------------------------------------- */
export const contact = {
  email: "",
};

/* =====================================================================
 * LEHE SISU
 * ===================================================================== */

/** Töötoa põhiküsimus (avaekraanil). */
export const leadQuestion =
  "Kuidas saab tehisintellekt toetada täiskasvanud õppija iseseisvat keeleõpet ja lihtsustada koolitaja tööd?";

/** Avaekraani vahelduvad sõnad: „Proovime tehisaru kui …“ */
export const rotatingRoles = [
  "vestluspartnerit",
  "harjutuste loojat",
  "tekstide kohandajat",
  "sõnavara treenerit",
  "tagasiside andjat",
  "õppematerjali koostajat",
];

/** Töötoa kirjeldus (plokk „Töötoast“). */
export const about = [
  "Töötoas proovime praktiliselt, kuidas luua tehisaru abil personaalseid harjutusi, kasutada seda vestluspartnerina, kohandada tekste õppija tasemele, harjutada sõnavara, anda tagasisidet ja koostada õppematerjale.",
  "Sama oluline on kriitiline pool: arutame, mida tehisaru oskab ja mida peab jätkuvalt tegema õpetaja.",
];

/** Töötoa järel osaleja … */
export const outcomes = [
  "oskab koostada prompti, mis arvestab õppija keeleoskustaset ja vajadusi",
  "teab, kuidas tehisaru saab toetada õppija iseseisvat harjutamist",
  "oskab kasutada tehisaru õppematerjalide loomisel ja tekstide kohandamisel",
  "oskab tehisaru väljundit kriitiliselt hinnata",
];

export type IconKey = "learner" | "teacher" | "critical";

/** Teemad kolmes rühmas. */
export const topics: { icon: IconKey; title: string; items: string[] }[] = [
  {
    icon: "learner",
    title: "Õppija iseseisev õpe",
    items: ["Tehisaru kui vestluspartner", "Personaalsed harjutused", "Sõnavara harjutamine õppija enda töövaldkonna põhjal"],
  },
  {
    icon: "teacher",
    title: "Koolitaja töö",
    items: ["Teksti kohandamine õppija tasemele", "Õppematerjalide loomine", "Tagasiside õppija kirjutisele"],
  },
  {
    icon: "critical",
    title: "Kriitiline vaade",
    items: ["Kui hästi oskab tehisaru eesti keelt?", "Mida teeb tehisaru ja mida õpetaja?", "Õppija andmete kaitse"],
  },
];

/** Kava. Kellaajad kujul TT:MM. */
export const schedule: { start: string; end: string; title: string }[] = [
  { start: "15:00", end: "15:05", title: "Sissejuhatus ja küsitlus" },
  { start: "15:05", end: "15:13", title: "Mida tehisaru eesti keeles oskab?" },
  { start: "15:13", end: "15:33", title: "Praktiline töö kahel rajal" },
  { start: "15:33", end: "15:40", title: "Tulemuste jagamine" },
  { start: "15:40", end: "15:47", title: "Mida oskab tehisaru ja mida teeb õpetaja?" },
  { start: "15:47", end: "15:50", title: "Oma prompt järgmiseks tunniks" },
];

/* ---------------------------------------------------------------------
 * KKK — vasta ainult teadaoleva info põhjal.
 * ------------------------------------------------------------------- */
export const faq: { q: string; a: string }[] = [
  {
    q: "Millal ja kus töötuba toimub?",
    a: "Laupäeval, 28.11.2026 kell 15:00–15:50 Park Inn by Radisson Meriton Conference & Spa Hotelis (Toompuiestee 27 / Paldiski mnt 4, Tallinn).",
  },
  {
    q: "Mis üritusega on tegu?",
    a: "Töötuba toimub Eesti Keele kui Teise Keele Õpetajate Liidu (EKTKÕL) juubelikonverentsil „25 aastat eesti keelt teise keelena õpetades – lood, kogemused ja tulevikutee“.",
  },
  {
    q: "Mida peaks kaasa võtma?",
    a: "Nutitelefoni või sülearvuti. Töötoas proovime tehisaru praktiliselt, seega on seadet vaja.",
  },
  {
    q: "Mida töötoast kaasa saab?",
    a: "Töötoa lõpus koostad oma prompti, mida saad kasutada järgmises tunnis.",
  },
  {
    q: "Kas töötuba on praktiline?",
    a: "Jah. Suurem osa ajast (20 minutit) on praktiline töö kahel rajal: õppija iseseisev õpe ja koolitaja töö. Seejärel jagame tulemusi ja arutame, mida oskab tehisaru ja mida teeb õpetaja.",
  },
  {
    q: "Kui pikk on töötuba?",
    a: "50 minutit.",
  },
];

/* ---------------------------------------------------------------------
 * SEO
 * ------------------------------------------------------------------- */
export const seo = {
  title: "Tehisintellekt täiskasvanute eesti keele õppes | Töötuba 28.11.2026",
  description:
    "Praktiline töötuba eesti keele õpetajatele ja koolitajatele: kuidas kasutada tehisaru harjutuste, vestluse, tekstide kohandamise, sõnavara, tagasiside ja õppematerjalide jaoks. 28.11.2026 Tallinnas.",
  ogTitle: "Tehisintellekt täiskasvanute eesti keele õppes",
  ogDescription:
    "EKTKÕLi juubelikonverentsi töötuba 28.11.2026 kell 15:00–15:50, Tallinn. Läbiviija Maia Lust.",
};
