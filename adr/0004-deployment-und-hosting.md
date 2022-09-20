# Deployment und Hosting

- Status: accepted
- Deciders: [Melvin Weiershäuser](https://github.com/mweiershaeuser)
- Date: 2022-09-20

## Context and Problem Statement

Es muss eine gehostete Instanz des Projekts zur Verfügung gestellt werden. Dafür sind Hosting-Provider und ein Deployment-Prozess zu wählen.

## Decision Drivers

- Funktionalität
- Geschwindigkeit
- Flexibilität

## Considered Options

- GitHub Pages
- VHost mit Docker
- Cloud Provider

## Decision Outcome

Es wurde sich für einen VHost mit Docker entschieden. Diese Variante bot die größte Flexibilität. Zudem findet der VHost vom Autor auch über das Projekt hinaus Verwendung und ist daher eine nachhaltige Investition. GitHub Actions schied völlig aus, weil es sich für das Hosting des Projekts nicht eignet.

### Positive Consequences

Das Projekt läuft in einer stabilen Umgebung. Der etablierte Deployment Prozess geht nach Einarbeitung schnell von der Hand.

### Negative Consequences

Das Aufsetzen des Servers und die Einarbeitung in Serveradministration (insbesondere die Zusammenarbeit zwischen Docker & Plesk) waren aufwendig.

## Pros and Cons of the Options

### GitHub Pages

- Gut, weil einfach.
- Gut, weil kostenlos.
- Gut, weil bereits im bestehenden GitHub-Setup integriert.
- Schlecht, weil GitHub Pages nur statischen Content abbilden kann und ein Deployment des Backends nicht möglich ist.
- Schlecht, weil das gewünschte Docker-Setup nicht nutzbar ist.

### VHost mit Docker

- Gut, weil flexibel beinahe alles gehostet werden kann.
- Gut, weil es zum bestehenden Docker-Setup passt.
- Gut, weil bei Bedarf mehrere Instanzen gehostet werden können.
- Gut, weil die Investition sich nachhaltig für weitere Projekte lohnt.
- Schlecht, weil aufwendig in Beschaffung und Wartung.
- Schlecht, weil kostspielig.

### Cloud Provider

- Gut, weil einfach und schnell realisierbar.
- Gut, weil große Auswahl an Anbietern.
- Gut, weil die Verantwortung für die Serveradministration abgegeben wird.
- Schlecht, weil weniger Kontrolle.
- Schlecht, weil kostspielig mit teils laufenden Kosten.
- Schlecht, weil eine Abhängigkeit zum Anbieter entsteht.
