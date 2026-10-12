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
  eventShort: "25 aastat eesti keelt teise keelena õpetades",
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
  takeaway: "Valmis promptid, mida saab kohe oma tundides kasutada.",
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
  profile: "https://www.etis.ee/CV/Maia_Lust/est",
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

/** Kaks vaatenurka: õppija ja koolitaja. */
export const perspectives = [
  {
    title: "Õppija iseseisev keeleõpe",
    text: "Täiskasvanud õppija harjutab sageli üksi, oma tempos ja oma ajal. Tehisaru võib olla talle vestluspartner ja harjutuste allikas ka siis, kui õpetajat pole kõrval.",
  },
  {
    title: "Koolitaja töö",
    text: "Koolitaja saab tehisaru abil kiiremini koostada harjutusi ja õppematerjale ning kohandada tekste oma õppijate tasemele.",
  },
];

export type IconKey = "sparkles" | "messages" | "sliders" | "book" | "check" | "file";

/** Mida töötoas praktiliselt proovime. */
export const activities: { icon: IconKey; title: string; text: string }[] = [
  {
    icon: "sparkles",
    title: "Personaalsed harjutused",
    text: "Loome tehisaru abil harjutusi, mis lähtuvad konkreetse õppija vajadustest.",
  },
  {
    icon: "messages",
    title: "Vestluspartner",
    text: "Proovime, kuidas kasutada tehisaru vestluspartnerina eesti keele harjutamisel.",
  },
  {
    icon: "sliders",
    title: "Tekst õppija tasemele",
    text: "Kohandame teksti nii, et see sobiks õppija keeleoskuse tasemega.",
  },
  {
    icon: "book",
    title: "Sõnavara harjutamine",
    text: "Vaatame, kuidas tehisaru abil sõnavara harjutada.",
  },
  {
    icon: "check",
    title: "Tagasiside",
    text: "Proovime, kuidas tehisaru saab õppijale tagasisidet anda.",
  },
  {
    icon: "file",
    title: "Õppematerjalid",
    text: "Koostame tehisaru abil õppematerjale oma tundide jaoks.",
  },
];

export const estonianCheck = {
  title: "Kui hästi saavad suured keelemudelid eesti keelega hakkama?",
  text: "Vaatame ka seda, kui hästi tulevad suured keelemudelid toime eesti keelega.",
};

export const critical = {
  title: "Mida oskab tehisaru ja mida peab jätkuvalt tegema õpetaja?",
  text: "Sama oluline kui praktiline pool on kriitiline pool. Arutame koos, kus on tehisaru võimaluste piir ja milline osa keeleõppest jääb õpetajale.",
};

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
    a: "Töötuba toimub ürituse „25 aastat eesti keelt teise keelena õpetades – lood, kogemused ja tulevikutee“ raames. Üritus on osa Eesti Keele kui Teise Keele Õpetajate Liidu 25. juubeliaastast.",
  },
  {
    q: "Mida peaks kaasa võtma?",
    a: "Nutitelefoni või sülearvuti. Töötoas proovime tehisaru praktiliselt, seega on seadet vaja.",
  },
  {
    q: "Mida töötoast kaasa saab?",
    a: "Valmis promptid, mida saab kohe oma tundides kasutada.",
  },
  {
    q: "Kas töötuba on praktiline?",
    a: "Jah. Proovime koos luua personaalseid harjutusi, kasutada tehisaru vestluspartnerina, kohandada tekste õppija tasemele, harjutada sõnavara, anda tagasisidet ja koostada õppematerjale. Arutame ka, mida tehisaru oskab ja mida peab jätkuvalt tegema õpetaja.",
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
    "Töötuba 28.11.2026 kell 15:00–15:50, Tallinn. Läbiviija Maia Lust. Kaasa saad valmis promptid oma tundideks.",
};
