# 3D-Framework

- Status: accepted
- Deciders: [Melvin Weiershäuser](https://github.com/mweiershaeuser)
- Date: 2022-09-20

## Context and Problem Statement

Es ist eine Technologie zu wählen, mit der sich eine Bildergalerie als 3D-Zeitleiste realisieren lässt. Um die zeitliche Machbarkeit zu garantieren ist dazu in der Regel die Wahl eines Frameworks nötig.

## Decision Drivers

- Flexibilität
- Innovation
- Kompatibilität
- Praktikabilität

## Considered Options

- Angular Three
- Three.js
- A-Frame

## Decision Outcome

Angular Three wurde gewählt. Es integriert sich gut in die bis zum gegebenen Zeitpunkt entwickelte Anwendung und wirkt einfach in der Handhabung. Es scheint so, dass viel manueller Konfigurationsaufwand im Vergleich zu Three.js gespart wird und die Komponenten nahtlos in Angular aufgehen. Zudem scheint das Projekt passend, um die Library als etwas innovatives - gar experimentelles - auszuprobieren.

### Positive Consequences

Die Angular-Integration erweist sich nach wie vor als gut und angenehm. Mit wenig Code entsteht viel. Das Framework begünstigt die Komponenten-orientierte Entwicklung.

### Negative Consequences

Die Dokumentation lässt ungemein zu wünschen übrig. Durch die fehlende Dokumentation muss Zeit investiert werden, um die Verwendung der Library durch durchforsten der verschachtelten src-Dateien oder zufälliges Ausprobieren herauszufinden. Das hat Zeit gekostet. Es scheint schwieriger, die Komponenten zu customizen, als es vermutlich mit Three.js der Fall gewesen wäre.

## Pros and Cons of the Options

### Angular Three

- Gut, weil einfach in der Handhabung.
- Gut, weil integriert in Angular (und damit in bestehenden Code).
- Gut, weil es auf dem etablierten Three.js aufsetzt.
- Gut, weil innovativ.
- Gut, weil förderlich für Component-based Design.
- Schlecht, weil relativ neu geringe Verbreitung.
- Schlecht, weil Weiterentwicklung von Einzelentwickelnden abhängig.
- Schlecht, weil wenig Dokumentation.

### Three.js

- Gut, weil sehr weit verbreitet und vielseitig.
- Gut, weil sehr gut dokumentiert.
- Gut, weil weniger Abhängigkeiten.
- Schlecht, weil keine direkte Integration in bestehenden Code.
- Schlecht, weil viel Code für geringen Effekt nötig.

### A-Frame

- Gut, weil Reduzierung des Coding-Aufwands.
- Gut, weil relativ weit verbreitet.
- Gut, weil es auf dem etablierten Three.js aufsetzt.
- Schlecht, weil keine direkte Integration in bestehenden Code.
