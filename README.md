# Promptbibliotheek Microsoft 365 Copilot - OD NHN

Statische pagina. Eén HTML-bestand, geen database, geen build-stap.

## Deployen op Railway

1. Zet deze map in een Git-repository (GitHub, GitLab of Azure DevOps).
2. Railway > New Project > Deploy from GitHub repo > kies de repo.
3. Railway detecteert Node en draait `npm start`. Verder instellen is niet nodig;
   de server luistert op de poort die Railway via `PORT` meegeeft.
4. Settings > Networking > Generate Domain voor een URL, of koppel een eigen
   (sub)domein van ODNHN.

Alternatief zonder Git: `npm i -g @railway/cli`, dan `railway login`,
`railway init` en `railway up` vanuit deze map.

## Lokaal testen

    node server.js

Daarna http://localhost:3000 openen.

## Inhoud bijwerken

De prompts staan in de array `PROMPTS` onderin `index.html`. Een prompt toevoegen
is één object met de velden: t (titel), app, niv (Basis/Gevorderd/Expert), cat
(thema), lic (true bij M365-licentie), doel, p (de prompt) en c (de controleregel).
Nieuwe waarden bij app en cat verschijnen vanzelf als filter.

Na wijzigen: committen en pushen, Railway deployt automatisch opnieuw.

## Let op

De pagina is na deployen openbaar op internet voor iedereen met de URL. Er staat
geen vertrouwelijke informatie in, maar overleg met informatiebeveiliging of een
openbare URL gewenst is, of plaats de pagina liever op intranet of SharePoint.
Wil je hem wel op Railway maar afgeschermd, dan is basic authentication of een
IP-restrictie een kleine toevoeging aan server.js.
