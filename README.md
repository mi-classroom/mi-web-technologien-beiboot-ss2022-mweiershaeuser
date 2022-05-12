# Web Technologien - Beiboot Projekt Sommersemester 2022

Willkommen im Beiboot-Repo! Dieses Repository beinhaltet ein begleitendes Projekt, welches im Modul Web Technologien des Studiengangs Medieninformatik (Master) mit Schwerpunkt Weaving the Web im Sommersemester 2022 an der Technischen Hochschule Köln entwickelt wird. Weitere Informationen können der [Beiboot Beschreibung](#beiboot-beschreibung) sowie den [Issues](https://github.com/mi-classroom/mi-master-wt-beiboot-2022/issues) des Projekts entnommen werden.

## Team

- Autor: [Melvin Weiershäuser](https://github.com/mweiershaeuser)
- Reviewer: ?

## Getting started

### Frontend

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

**Endpoint & API Tokens angeben**

Gib im Frontend den Endpunkt des Backends sowie ein API Token mit Lesezugriff an. Führe die folgenden Schritte im Backend durch, um es zu starten und ein API Token zu erhalten.

### Backend

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

**Strapi einrichten**

Öffne im Browser die URL [http://localhost:1337/admin](http://localhost:1337/admin). Lege dort einen Account an, um Strapi verwalten zu können.

**API Tokens erzeugen**

Öffne die Verwaltung der [API Tokens](http://localhost:1337/admin/settings/api-tokens?sort=name:ASC) und lege ein Token mit Lesezugriff für die Webseite und ein Token mit vollem Zugriff für den Converter an. Speichere dir die Tokens sicher ab.

### Converter

Der Converter dient dazu, relevante Daten aus der vorgegebenen JSON-Datei zu extrahieren und diese im vorgesehenen Datenformat an das Backend zu übergeben.

Führe im Ordner [converter](converter) folgende Schritte aus.

**Abhängigkeiten installieren**

```bash
npm install
```

**Quelle einfügen**

Beschaffe die vorgegebene JSON-Datei und füge sie in diesem Ordner ein. Sie sollte bei der Versionierung von Git ignoriert werden.

**Environment konfigurieren**

Lege eine Datei ".env" an und setze die API-URL des Ziel-Backends (z. B. "http://localhost:1337") sowie ein API-Token. Auch diese Datei sollte bei der Versionierung von Git ignoriert werden.

```
BASE_URL="http://localhost:1337"
API_TOKEN="<token>"
```

**Converter ausführen**

Stelle sicher, dass das Backend vorher gestartet und die Environment richtig konfiguriert ist. Der Converter dann die Daten und legt sie als Einträge im Backend an.

```bash
npm start
```

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
