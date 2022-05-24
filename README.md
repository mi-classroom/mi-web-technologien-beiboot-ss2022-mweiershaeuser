# Web Technologien - Beiboot Projekt Sommersemester 2022

Willkommen im Beiboot-Repo! Dieses Repository beinhaltet ein begleitendes Projekt, welches im Modul Web Technologien des Studiengangs Medieninformatik (Master) mit Schwerpunkt Weaving the Web im Sommersemester 2022 an der Technischen Hochschule Köln entwickelt wird. Weitere Informationen können der [Beiboot Beschreibung](#beiboot-beschreibung) sowie den [Issues](https://github.com/mi-classroom/mi-master-wt-beiboot-2022/issues) des Projekts entnommen werden.

## Projektorganisation

**Team**

- Autor: [Melvin Weiershäuser](https://github.com/mweiershaeuser)
- Reviewer: [Luca Stamos](https://github.com/LokiGodofBattle), [Stefan Steinhauer](https://github.com/pfropfen)

**Workflow**

Der für das Projekt genutzte Workflow ist [hier](WORKFLOW.md) dokumentiert.

## Getting started

Die folgende Anleitung führt durch das lokale Starten des Projekts und gibt dabei unterschiedliche technologische Optionen.

### 1. Projekt aufsetzen

Das Projekt kann nun entweder in containerisierter Form via Docker oder zur lokalen Entwicklung gestartet werden.

<details>
  <summary>Docker</summary>

Zum Starten mit Docker wird [Docker Desktop](https://www.docker.com/get-started/) benötigt.

Führe im Projektordner folgenden Befehl aus:

```bash
docker-compose up -d
```

Anschließend erreicht du die Anwendung wie folgt:

Frontend: [http://localhost](http://localhost)

Backend: [http://localhost:1337/admin](http://localhost:1337/admin)

Fahre nun damit fort, das [Projekt zu konfigurieren](#2-projekt-konfigurieren).

</details>

<details>
  <summary>Entwicklung</summary>

Für die lokale Entwicklung wird eine [Node.js-Installation](https://nodejs.org/en/) (Version 14 oder 16) mit npm benötigt.

#### <u>Frontend</u>

Beim Frontend handelt es sich um eine Angular Single Page Application (SPA), welche die Daten vom Backend bezieht und darstellt.

Führe im Ordner [frontend](frontend) folgende Schritte aus.

**Abhängigkeiten installieren**

```bash
npm install
```

**Angular-App starten**

```bash
npm start
```

Öffne nun den Browser unter [http://localhost:4200](http://localhost:4200).

#### <u>Backend</u>

Das Backend ist ein Strapi-Backend, welches die Daten über eine flexible Schnittstelle bereitstellt.

Führe im Ordner [backend](backend) folgende Schritte aus.

**Abhängigkeiten installieren**

```bash
npm install
```

**Strapi starten**

```bash
npm run develop
```

Die Strapi Admin-Oberfläche ist nun im Browser unter [http://localhost:1337/admin](http://localhost:1337/admin) erreichbar.

</details>

### 2. Projekt konfigurieren

Das Projekt sollte nun lokal gestartet sein. Damit die Anwendung genutzt werden kann, müssen jedoch einige Konfigurationen eingerichtet und Daten transformiert werden.

#### <u>Strapi einrichten</u>

Öffne im Browser die URL [http://localhost:1337/admin](http://localhost:1337/admin). Lege dort einen Admin-Account an, um Strapi verwalten zu können. Anschließend öffnet sich das Dashboard.

Navigiere nun zum Punkt "Settings" und wähle unter "Users & Permissions Plugin" den Reiter "Roles" aus. Klicke dort auf die Role "Authenticated". Unter Permissions klappst du nun die Einstellungen für "Artwork" auf und setzt ein Häkchen bei "find" und "findOne". Speichere dies über den Button "Save".

Gehe nun zum "Content Manager" und wähle den Collection Type "User". Lege einen neuen User an und gib ihm die Rolle "Authenticated". Merke dir die Zugangsdaten: Mit diesen kannst du dich später in der Anwendung einloggen und auf die Meisterwerke zugreifen!

#### <u>Converter ausführen</u>

Der Converter dient dazu, relevante Daten aus der vorgegebenen JSON-Datei zu extrahieren und diese im vorgesehenen Datenformat an das Backend zu übergeben. Dadurch erleichtert er das Überführen der JSON-Datei in die Datenbank. Um den Converter nutzen zu können, wird eine Node.js-Installation mit npm benötigt. Alternativ lassen sich für das lokale Testen manuelle Einträge anlegen.

Lege zur Nutzung des Converters über die Strapi Admin-Oberfläche temporär ein API-Token an, um den Converter in Strapi zu authentisieren. Wähle dazu in den Einstellungen unter "Global Settings" den Reiter "API Tokens" und lege ein neues Token (Name egal) an, welches den Token type "Full access" erhält. Speichere und lege dir das resultierte Token sicher ab. Du wirst es noch brauchen!

Führe nun im Ordner [converter](converter) folgende Schritte aus.

**Abhängigkeiten installieren**

```bash
npm install
```

**Quelle einfügen**

Beschaffe die vorgegebene JSON-Datei und füge sie in diesem Ordner ein. Sie sollte bei der Versionierung von Git ignoriert werden.

**Environment konfigurieren**

Lege eine Datei ".env" an und setze die API-URL des Ziel-Backends (z. B. "http://localhost:1337") sowie das zuvor erzeugte API-Token. Auch diese Datei sollte bei der Versionierung von Git ignoriert werden.

```
BASE_URL="http://localhost:1337"
API_TOKEN="<token>"
```

**Converter ausführen**

Stelle sicher, dass das Backend vorher gestartet und die Environment richtig konfiguriert ist. Der Converter konvertiert dann die Daten und legt sie als Einträge im Backend an.

```bash
npm start
```

**API-Token löschen**

Da der Converter einmalig ausgeführt werden muss, wird das API-Token nun nicht mehr benötigt. Aus Sicherheitsgründen empfiehlt es sich daher, dieses nun in den Strapi-Einstellungen wieder zu entfernen.

## Deployment

### Frontend

Erreichbar unter: [https://mi-classroom.github.io/mi-web-technologien-beiboot-ss2022-mweiershaeuser/explore](https://mi-classroom.github.io/mi-web-technologien-beiboot-ss2022-mweiershaeuser/explore)

Das Frontend wird über GitHub Pages deployed. Dazu wird der Ordner [docs](frontend/docs) des Branches gh-pages genutzt.

Führe folgende Schritte im Ordner [frontend](frontend) für ein Deployment durch:

```bash
npm run build:gh-pages
```

Committe und pushe anschließend den generierten docs Ordner auf dem gh-pages Branch.

### Backend

Das Backend ist derzeit noch nicht deployed. Zur Nutzung des deployeten Frontends kann das lokale Backend genuzt werden, indem die lokale URL (http://localhost:1337/api) sowie ein API Token im Frontend angegeben werden.

## Dokumentation

Die wichtigsten Entscheidungen des Projekts wurden in Form von [Architectural Decision Records (ADRs)](https://adr.github.io/) festgehalten und sind [hier](adr) zu finden.

## Beiboot Beschreibung

Zum Modul Web Technologien gibt es ein begleitendes Projekt. Im Rahmen dieses Projekts werden wir von Veranstaltung zu Veranstaltung ein Projekt sukzessive weiter entwickeln und uns im Rahmen der Veranstaltung den Fortschritt anschauen, Code Reviews machen und Entwicklungsschritte vorstellen und diskutieren.

Als organisatorischen Rahmen für das Projekt nutzen wir GitHub Classroom. Inhaltlich befassen wir uns mit der Entwicklung einer kleinen Web-Anwendung für die Bearbeitung von Bildern. Hierbei steht weniger ein professioneller Konzeptions-, Entwurfs- und Entwicklungsprozess im Vordergrund, sondern vielmehr die sukzessive Weiterentwicklung einer Anwendung, das Ausprobieren, Vergleichen, Refactoren und die Freude an lauffähigem Code.
