# Sanity CMS Setup for LØUPE

## 1. Utwórz konto i projekt Sanity
1. Wejdź na https://www.sanity.io/ i załóż konto.
2. Utwórz nowy projekt (np. `loupe-site`) i dataset (najczęściej `production`).
3. Zapisz:
   - `projectId`
   - `dataset`

## 2. Uzupełnij zmienne środowiskowe
W głównym projekcie (`/tmp/loupe-site`) utwórz `.env` i dodaj:

```bash
VITE_SANITY_PROJECT_ID="twoj_project_id"
VITE_SANITY_DATASET="production"
```

W folderze `studio/` utwórz plik `.env` i dodaj:

```bash
SANITY_STUDIO_PROJECT_ID="twoj_project_id"
SANITY_STUDIO_DATASET="production"
```

## 3. Uruchom aplikację i Sanity Studio lokalnie
Z głównego katalogu:

```bash
npm install
npm run dev
```

W drugim terminalu:

```bash
npm --prefix studio install
npm --prefix studio run dev
```

Domyślnie Sanity Studio będzie dostępne pod adresem lokalnym podanym przez komendę `sanity dev`.

## 4. Dostęp do Studio na wdrożeniu
Po wdrożeniu na Vercel, Studio jest dostępne pod:

```text
https://twoja-domena/studio/
```

Na stronie znajduje się też przycisk `Edytuj stronę`, który prowadzi do `/studio/`.

## 5. Logowanie i edycja treści
1. Otwórz `/studio/`.
2. Zaloguj się kontem Sanity.
3. Otwórz dokument `Site Content` (typ: `siteContent`).
4. Uzupełnij pola:
   - hero (`heroHeadline`, `heroSubtext`)
   - intro (`introHeading`, `introText`)
   - realizacje (`realizacjeItems`)
   - podejście (`approachSection1*`, `approachSection2*`)
   - CTA (`ctaText`)
   - menu (`menuItems`)
   - obrazy (`images`)
5. Zapisz publikację (`Publish`).

## 6. Fallback
Jeśli Sanity nie jest skonfigurowane lub nie zwróci danych, strona automatycznie używa obecnych hard-coded treści jako fallback.
