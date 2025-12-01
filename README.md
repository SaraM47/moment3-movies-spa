# Film SPA – Vue.js + Tailwind + Fastify API

Denna moment 3 har vi skapat Single Page Application byggd i Vue.js. Webbplatsen representerar mitt fritidsintresse, animerade film och anime filmer, och är kopplad till den REST-webbtjänst jag skapade i Moment 2.2 (Fastify + MongoDB). Applikationen hämtar, visar, lägger till, raderar och uppdaterar filmer via mitt externa API på Render.

---

## Länk till publicerad applikation

***Frontend (Vercel):*** 
***https://moment3-movies-spa.vercel.app/***

***Backend API (Render):***
***https://moment2-2-1.onrender.com/movies***


---

## Funktionalitet
### Single-Page-Application
Navigering sker med Vue Router utan sidladdningar.

### Hämta filmer
Använt Axios flr att hämtar automatiskt filmer från API:et med GET, POST, PUT, DELETE. Loading- och felmeddelanden visas vid Render-server.

### Lägga till film
Formulär med:
- validering
- spinner
- success-meddelande som försvinner efter 3 sekunder

### Uppdatera film (PUT)

- Modal visas med befintliga värden
- Användaren kan redigera och spara
- PUT-anrop görs mot API:et
- Tabell uppdateras automatiskt efter lyckad uppdatering
- Success-meddelande visas

### Lista filmer
Tabell med filminformation, responsiv design och Netflix-liknande styling.

### Radera film
Full raderingsprocess med:
- modal för bekräftelse
- spinner på knappen
- success-meddelande som försvinner efter 3 sek
- API DELETE-anrop

### Responsivt gränssnitt
Optimerat för mobiler, surfplattor och desktop, inklusive hamburgarmeny.

### Tailwind CSS
Används för all styling inklusive animationer, färgtema och layout.

---

## Installation och körning lokalt

### 1. Klona repot

```sh
git clone (https://github.com/SaraM47/moment3-movies-spa.git)
cd movies-spa
```

### 2. Installera beroenden

```sh
npm install
```

### 3. Starta projektet

```sh
npm run dev
```

