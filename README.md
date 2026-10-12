# Tehisintellekt täiskasvanute eesti keele õppes — töötoa leht

Tutvustusleht Maia Lusti töötoale, mis toimub **28.11.2026 kell 15:00–15:50** Tallinnas, Park Inn by Radisson Meriton Conference & Spa Hotelis. Töötuba on osa üritusest „25 aastat eesti keelt teise keelena õpetades – lood, kogemused ja tulevikutee“ (Eesti Keele kui Teise Keele Õpetajate Liidu 25. juubeliaasta).

Leht: https://maialust.github.io/tehisintellekt-eesti-keele-oppes/

## Kuidas lehte muuta

**Kogu tekst ja info on ühes failis:** `src/data/workshop.ts`.
GitHubis: ava fail → pliiatsi ikoon („Edit this file“) → muuda → **Commit changes**. Leht uueneb automaatselt mõne minuti pärast.

| Mida muuta | Kus failis `src/data/workshop.ts` |
| --- | --- |
| Registreerimislink | `REGISTRATION_URL` (kirjuta link jutumärkide vahele) |
| Kuupäev ja kellaaeg | `date`, `start`, `end` ning kalendri jaoks `startUtc`, `endUtc` |
| Koht | `venue`, `address`, `mapUrl` |
| Läbiviija andmed | `facilitator` |
| Töötoa tekstid | `leadQuestion`, `perspectives`, `activities`, `critical` |
| KKK | `faq` |

Kui kuupäev või kellaaeg muutub, muuda ka faili `public/tootuba-28-11-2026.ics` (nupp „Lisa kalendrisse“).

## Pildid

Kaustas `public/`: `ektkol-logo.png` (korraldaja logo), `maia-lust.jpg` (läbiviija foto), `og-image.png` (jagamise eelvaade), `favicon.png` (ikoon brauseri vahekaardil).

## Tehniline

React + Vite + TypeScript + Tailwind CSS. Avaldamine käib automaatselt GitHub Actionsi kaudu (`.github/workflows/deploy.yml`).
Leht ei kogu isikuandmeid ega kasuta küpsiseid.
