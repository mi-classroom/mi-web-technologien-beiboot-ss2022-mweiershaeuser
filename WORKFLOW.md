# Workflow

Das vorliegende Dokument dokumentiert den im Rahmen von [Aufgabe 2](https://github.com/mi-classroom/mi-master-wt-beiboot-2022/issues/2) definierten Workflow für die Bearbeitung der im Beiboot Projekt gestellten Aufgaben sowie für den Review-Prozess, welcher im gegebenen Review Team des Beiboot Projektes durchgeführt wird.

## Rollen

- Autor: [Melvin Weiershäuser](https://github.com/mweiershaeuser)
- Reviewer: [Luca Stamos](https://github.com/LokiGodofBattle), [Stefan Steinhauer](https://github.com/pfropfen)

## Verfassen von Issues

Das Beiboot Projekt umfasst regelmäßig gestellte Aufgaben. Diese lassen sich in der Regel in zusammengehörige Teilaufgaben wie die Implementation und Dokumentation bestimmter Features, Prozesse oder Entscheidungen unterteilen. Für jede angegangene Teilaufgabe wird ein Issue im Repository angelegt.

## Project Board

Alle Issues und Pull Requests werden dem [Project Board](https://github.com/mi-classroom/mi-web-technologien-beiboot-ss2022-mweiershaeuser/projects/1) zugeordnet, welches eine Workflow-Automatisierung umfasst.

### Spalten

Das Project Board verfügt über die folgenden Spalten, denen Issues und Pull Requests je nach Status zugeordnet werden.

**To do**

Neu erstellte Issues, deren Bearbeitung aussteht.

**In progress**

Issues, deren Bearbeitung durch den Autor aufgenommen bzw. welche noch nicht durch einen angenommenen Pull Request abgeschlossen wurden. Die Spalte dient der Selbstorganisation des Autors.

**Review in progress**

Pull Request, welche neu gestellt, wieder eröffnet oder mit der Bitte um Änderungen markiert wurden. In dieser Spalte finden Reviewer Pull Requests, deren Review aussteht (bzw. die sie aktiv reviewen).

**Reviewer approved**

Akzeptierte Pull Requests, die gemerged werden können.

**Done**

Issues und Pull Requests, die abgeschlossen wurden.

## Branching

**main**

Der main Branch repräsentiert den aktuellen Stand des Projekts, welcher alle Features umfasst, die den Review-Prozess erfolgreich durchlaufen haben.

**gh-pages**

Der gh-pages Branch dient dazu, ein Deployment des Frontends via GitHub Pages anzustoßen. In der Regel sollte dazu main in gh-pages gemerged und ein Angular Build durchgeführt und committed werden.

**Issue-Branches**

Für jedes Issue wird ein Branch angelegt, auf dem an diesem Issue gearbeitet wird. Der Branch wird mit der Issue-Nummer und einer Beschreibung benannt (z. B. "1-das-erste-issue"). Das stellt sicher, dass GitHub den Branch mit dem Issue verknüpft.

## Issues zur Review bereitstellen

Ist die Arbeit an einem Issue abgeschlossen, wird ein Pull Request mit der Anfrage zum Merge vom Issue-Branch in den main Branch eröffnet. Im Namen des Pull Requests sollte die Issue-Nummer angegeben werden, damit der Pull Request durch GitHub entsprechend verknüpft wird. Außerdem ist der Pull-Request dem Project Board hinzuzufügen. Die Reviewer werden darüber informiert, dass ein Pull Request eröffnet wurde.

## Review

Offene Pull Requests müssen durch mindestens einen der Reviewer angenommen werden. Je nach Notwendigkeit können die Reviewer zur besseren Untersuchung der Änderungen den zum Pull Request gehörenden Branch auschecken. Sollte es Änderungswünsche geben sind diese im Issue entsprechend zu hinterlegen und der Autor zu kontaktieren. Bei Bedarf vereinbart das Projektteam einen Termin, um offene Fragen direkt zu klären.

## Issue abschließen

Ist ein Pull Request angenommen, kann dieser (in der Regel durch den Autor) gemerged und das Issue abgeschlossen werden. Der Issue-Branch kann im Anschluss gelöscht werden. Sofern ein Reviewer den Merge durchführt, ist der Autor zu kontaktieren, sodass dieser anschließend ein Deployment der neuen Version des Projektstands durchführen kann.
