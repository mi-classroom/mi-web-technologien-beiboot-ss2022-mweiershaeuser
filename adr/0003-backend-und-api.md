# Backend und API

- Status: accepted
- Deciders: [Melvin Weiershäuser](https://github.com/mweiershaeuser)
- Date: 2022-05-12

## Context and Problem Statement

Auf welcher technologischen Grundlage soll ein Backend mit Datenhaltung aufbauen?

## Decision Drivers

- Skalierbarkeit
- Flexibilität
- Geschwindigkeit
- Praktikabilität

## Considered Options

- Nodejs/Deno + Datenbank
- Strapi

## Decision Outcome

Die Entscheidung fiel auf Strapi. Einerseits nimmt es einem viel Implementationsaufwand für die Schnittstelle und Datenbankanbindung ab (und hält GraphQL als Option offen). Andererseits ist es ein spannender neuer Ansatz, der ausprobiert werden möchte.

## Pros and Cons of the Options

### Nodejs/Deno + Datenbank

- Gut, weil weit verbreitet.
- Gut, weil individuell implementierbar.
- Schlecht, weil höherer Entwicklungs- und Wartungsaufwand.

### Strapi

- Gut, weil vereinfachte Datenmodellierung und -haltung.
- Gut, weil API flexibel via REST oder GraphQL nutzbar.
- Gut, weil viele Zusatzfunktionen mit an Board sind.
- Schlecht, weil weniger individualisierbar.
- Schlecht, weil weniger etabliert.

## Links

- {Link type} {Link to ADR}
