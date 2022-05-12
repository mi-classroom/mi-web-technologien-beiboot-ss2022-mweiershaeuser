# Frontend Technology

- Status: accepted
- Deciders: [Melvin Weiershäuser](https://github.com/mweiershaeuser)
- Date: 2022-05-12

## Context and Problem Statement

Auf welcher technologischen Grundlage soll das Frontend des Beiboots aufgebaut werden?

## Decision Drivers

- Skalierbarkeit
- Flexibilität
- Geschwindigkeit
- Kompatibilität

## Considered Options

- HTML, CSS, Vanilla JS
- React
- Angular

## Decision Outcome

Angular wurde gewählt, weil es eine solide Grundlage bietet und umfangreiche Hilfe leistet, wobei die steile Lernkurve für das Team nicht ins Gewicht fällt. Außerdem wäre es schön, neben den verbreiteten React- und Vue-Ansätzen zu zeigen, dass Angular ebenfalls eine gute Lösung sein kann.

## Pros and Cons of the Options

### HTML, CSS, Vanilla JS

- Gut, weil simpler Basis-Tech-Stack.
- Gut, weil kompatibel mit allem.
- Schlecht, weil komplexerer Code schnell unübersichtlich wird.
- Schlecht, weil Entwicklung schnell anstrengend wird.
- Schlecht, weil kein Tooling von Hause aus vorhanden.

### React

- Gut, weil im Umfang skalierbar auf den Anwendungszweck.
- Gut, weil weit verbreitet, beliebt und etabliert.
- Schlecht, weil Tooling stets dazuinstalliert werden muss.

### Angular

- Gut, weil umfangreiches Tooling von Haus aus mitkommt.
- Gut, weil etabliert und weit verbreitet.
- Gut, weil größtes Know How vorhanden.
- Schlecht, weil opinionated Ansatz Einschränkungen/Mehraufwand bringen könnte.
- Schlecht, weil Lernkurve steil.
