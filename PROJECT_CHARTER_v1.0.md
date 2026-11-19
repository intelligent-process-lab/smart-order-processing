# Smart Order Processing — Projekt-Charta

**Version:** 1.0 (Entwurf zur gemeinsamen Freigabe)  
**Projekt:** Intelligent Process Optimization Lab  
**Repository:** `intelligent-process-lab/smart-order-processing`  
**Projektteam:** Ahmet (Wirtschaftsingenieur / Prozessoptimierung), Enes (KI-Softwareentwicklung)  
**Status:** ENTWURF — noch nicht von beiden freigegeben  
**Zeitlicher Zielrahmen:** 10 Wochen, optional verlängerbar; pro Person grob 20–30 Stunden/Woche, flexibel  
**Kapazitätsannahme:** 400–600 Teamstunden insgesamt, einschließlich Lernen, Reviews und Dokumentation

## 1. Projektauftrag und Motivation

Wir entwickeln eine demonstrierbare, reproduzierbare Software und eine fachlich fundierte Case Study zur Verbesserung der eingehenden Auftragsbearbeitung in einem **fiktiven mittelständischen Fertigungsbetrieb**. Wir arbeiten ausschließlich mit synthetischen Testdaten. Ziel ist es, die Verbindung von Geschäftsprozessanalyse, KI-gestützter Dokumentenverarbeitung, Prozesssteuerung und wirtschaftlicher Bewertung praktisch zu demonstrieren.

**Drei langfristige Ziele:** (1) praxisnaher Kompetenzaufbau, (2) überprüfbares Portfolio für Bewerbungsgespräche und (3) technische und methodische Grundlage für später mögliche reale Pilotprojekte bzw. eine Selbstständigkeit. Kundenakquise ist **kein verpflichtender Bestandteil** dieser ersten Projektphase.

## 2. Ausgangslage und Problemstellung

**Szenarioannahme:** Ein Fertigungsbetrieb erhält Kundenbestellungen als digital erzeugte PDF-Dateien mit unterschiedlichen Layouts und mehreren Artikelpositionen. Mitarbeitende lesen Informationen aus, übertragen sie in ein System und klären Unstimmigkeiten manuell. Dabei können Bearbeitungsaufwand, Medienbrüche, Fehler und Wartezeiten entstehen. Diese Probleme sind Annahmen des fiktiven Szenarios — **keine empirischen Feststellungen über einen realen Betrieb**.

**Leitfrage:** Wie lässt sich dieser Prozess durch Standardisierung, regelbasierte Automatisierung und KI-gestützte Informationsextraktion effizienter gestalten und zuverlässig überwachen, ohne die notwendige fachliche Kontrolle aufzugeben?

## 3. Produktziel und Umsetzungsstufen

### Stufe 1 — Dokumentenverarbeitung (funktionierender Kern)
- Digitale, textbasierte PDF-Bestellungen mit **verschiedenen Layouts** einlesen; gescannte Dokumente/OCR sind optional.
- Strukturierte Auftragsdaten extrahieren (Kopfdaten und Artikelpositionen).
- Ein definierter Datenvertrag beschreibt Pflichtfelder, Datentypen und zulässige Werte.
- Extraktion zuerst an einer Position stabilisieren, anschließend **mehrere Artikelpositionen** unterstützen.
- Daten gegen transparente Regeln und synthetische Stammdaten prüfen.
- Unsichere, fehlende oder widersprüchliche Ergebnisse zur **manuellen Ausnahmeprüfung** markieren.
- Keine automatische geschäftliche Auftragsfreigabe, kein produktiver ERP-Schreibzugriff.
- Regelbasierte Baseline und KI-Verfahren auf demselben unabhängigen Testset vergleichen.

### Stufe 2 — Prozesssteuerung und Analytik
- Schlanke professionelle Webanwendung für Upload, Auftragsliste, Detailansicht, Korrektur und Prüfwarteschlange.
- Nachvollziehbare Zustände eines Auftrags sowie die wichtigsten Prozessereignisse protokollieren (Case-ID, Aktivität, Zeitstempel, Status, optional Bearbeiterrolle).
- Definierte Regeln zur Reihenfolge/Priorisierung und dokumentierte Ausnahmebehandlung.
- KPI-Übersicht in der Anwendung; exportierbare, konsistente Daten für Excel/Power Query und Power BI.
- SQL-gestützte Auswertungen und **Process Mining auf synthetischen Event-Logs**.

**Technologieentscheidung offen:** Konkrete Modelle, Anbieter, Frontend-Framework und Architektur werden nach Anforderungs- und Machbarkeitsanalyse begründet gewählt. FastAPI/Pydantic, Python, Datenbank, Pytest, Docker und GitHub Actions sind Lernziele; Technologie wird nicht allein wegen des Schlagworts eingesetzt.

## 4. Nicht-Ziele

- Produktive Integration in ERP- oder E-Mail-Systeme, tatsächliche Bestellfreigaben oder Versand.
- Verarbeitung echter vertraulicher Kunden-/Beschäftigtendaten in der ersten Phase.
- Vollständige Produktionsreife, Mandantenbetrieb, umfangreiche Authentifizierung oder Enterprise-Betrieb.
- Verpflichtendes eigenes Modelltraining, OCR oder Cloud-Deployment.
- Nachweis einer tatsächlichen Prozesskostensenkung bei realen Unternehmen.
- Verpflichtende Kundengespräche, Vertrieb oder Unternehmensgründung während dieser Projektphase.

## 5. Rollen und Zusammenarbeit

### Ahmet — Lead Process & Business Analysis
- Fiktives Unternehmens- und Prozessszenario, SIPOC, BPMN-Ist/-Soll, DMAIC, Ursachen- und Qualitätsanalyse.
- Datenbereinigung und Analyse mit Excel/Power Query, KPI-Definition, Power BI/DAX, SQL/Process Mining.
- Anforderungen, Validierungsregeln, Kostenmodell, Sensitivitätsrechnung, fachliche Abnahmetests.
- Eigenständige dokumentierte Arbeitsergebnisse und individuelle Portfolio-Zusammenfassung.

### Enes — Lead AI & Software Engineering
- Systemarchitektur, Datenmodell, Python-Code, Dokumentenverarbeitung, Baseline- und KI-Ansatz.
- API/Pydantic, Datenbank, schlanke Weboberfläche, Prüf- und Statuslogik.
- Pytest, automatisierte Integrations-/End-to-End-Tests, KI-Evaluation, Docker und GitHub Actions.
- Eigenständige dokumentierte Arbeitsergebnisse und individuelle Portfolio-Zusammenfassung.

### Gemeinsame Verantwortung
- Projekt- und MVP-Entscheidungen; Datenvertrag und Ground Truth; Fehlerklassen und Abnahmekriterien.
- Frühzeitige Integration, gegenseitige Reviews, Auswertung der Trade-offs und Case Study.
- Freigabe aller großen Änderungen des Umfangs sowie öffentliche Veröffentlichung.

## 6. Kompetenzentwicklung und Nachweise

Der Mentor benennt **vor jedem größeren Arbeitspaket** Ziel, benötigtes Wissen, Lernmaterial, Arbeitsschritte, Qualitätskriterien und erwarteten Nachweis. Die Arbeit wird eigenständig durchgeführt, Rückfragen und Reviews sind ausdrücklich vorgesehen.

| Ahmet: Kernkompetenz | Konkreter Nachweis |
|---|---|
| Excel & Power Query | Reproduzierbare Bereinigung und Analyse synthetischer Auftrags-/Prozessdaten |
| Power BI & DAX | Dashboard mit dokumentiertem Datenmodell und überprüften Measures |
| BPMN 2.0 | Versionierte Ist- und Soll-Prozessmodelle |
| Lean Six Sigma / DMAIC | DMAIC-Bericht inklusive SIPOC, Ursachenanalyse und Maßnahmenlogik |
| Statistik & Qualitätsmanagement | Fehlerklassifikation, Pareto-Analyse, begründete Qualitätskennzahlen |
| Wirtschaftlichkeitsrechnung | Kostenmodell, Szenarien, Break-even-/Sensitivitätsanalyse |
| SQL & Process Mining | Auswertbare Event-Logs, SQL-Abfragen und Process-Mining-Befunde |

| Enes: Kernkompetenz | Konkreter Nachweis |
|---|---|
| Python & Git | Modularer Code, Git-Historie, Pull Requests und Reviews |
| Document AI / LLMs | Funktionsfähige Extraktionspipeline mit dokumentierten Grenzen |
| Pandas & SQL | Datenaufbereitung, Persistenz, Datenmodelldokumentation |
| FastAPI & Pydantic | Dokumentierte API und validierte Datenverträge |
| Weboberfläche | Bedienbarer Workflow mit manueller Korrektur |
| Pytest & KI-Evaluation | Reproduzierbare Test-Suite und vergleichender Benchmark |
| Docker & GitHub Actions | Reproduzierbarer Start und automatisierte CI-Prüfung |

**Zusätzliche Portfolios:** Jede Person dokumentiert bei größeren Arbeitspaketen kurz Problem, gewählte Methode, Begründung, eigene Umsetzung, Review und Lerngewinn. Keine erfundenen Leistungen oder Zertifikate.

## 7. Evaluation und Erfolgskriterien

**Technisch messbar:** feld- und positionsbezogene Extraktionsqualität, Vollständigkeit, Fehlererkennung (u. a. Precision/Recall), Quote falsch akzeptierter Fälle, manuelle Prüfquote, Laufzeit und Testzuverlässigkeit. Die Kennzahlen werden vor dem Benchmark präzise definiert.

**Versuchsdesign:** Mindestens eine regelbasierte Baseline und ein KI-Verfahren; synthetische Ground Truth; Entwicklung/Test klar getrennt; unbekannte Layouts und schwierige Ausnahmefälle im unabhängigen Testset; reproduzierbare Versionen und dokumentierte Fehleranalyse. Zielwerte und Stichprobengröße werden **vor Testbeginn** anhand eines begründeten Evaluationsplans beschlossen, nicht nach Ergebnissen rückwirkend angepasst.

**Wirtschaftlich modelliert:** angenommene manuelle Bearbeitungszeit, Prüf-/Korrekturaufwand, Auftragsvolumen, Lohnvollkosten, Software-/Betriebs-/Wartungskosten, potenzielle Kapazitätseffekte, Fehlerkosten und Sensitivität. **Messungen am Prototyp** werden strikt von **simulierten betrieblichen Annahmen** und **Hochrechnungen** getrennt. Wirtschaftlicher Nutzen eines realen Unternehmens wird nicht behauptet.

**Zwischenziel (End-to-End-Portfolio):** Funktionierender MVP, Baseline-vs.-KI-Vergleich, BPMN-Ist/-Soll, KPI-Auswertung, wirtschaftliche Szenariorechnung und vorführbare Demo.

**Abschlussziel (vollständiges Referenzprojekt):** Zusätzlich Excel/Power Query, Power BI/DAX, SQL und Process Mining, DMAIC-/Qualitätsanalyse, Tests/CI, Docker, individuelle Kompetenzportfolios, Management-Case-Study und technischer Deep Dive. Nicht produktionsreif; offene Einschränkungen transparent darstellen.

## 8. Meilensteine und Zeitplan

| Meilenstein | Zielwochen | Nachweis / Abnahmekriterium |
|---|---|---|
| M1 — Grundlagen und Analyse | 1–2 | Charta freigegeben, BPMN-Ist, DMAIC-Problemdefinition, Anforderungen, erstes Datenkonzept |
| M2 — Soll-Prozess und Prototyp | 3–5 | BPMN-Soll, synthetische Daten/Ground Truth, Baseline, erste KI-Extraktion |
| M3 — Integrierte Anwendung | 6–8 | Bedienbare Webanwendung, Mehrfachpositionen, Prüfworkflow, Prozessstatus/KPIs, Tests |
| M4 — Evaluation und Portfolio | 9–10 | Unabhängiger Benchmark, Power BI, Process Mining, Wirtschaftlichkeit, Case Study, Demo und Portfolios |

**Steuerungsregel:** Termine sind Zieltermine. Bei Konflikten werden Risiken und Umfang offen besprochen. Es gibt eine optionale Verlängerung; Funktionalität und Qualität werden nicht vorgetäuscht, um einen Termin einzuhalten. Datenschema, Event-Logs und Evaluationsplan werden früh vorbereitet, nicht erst in M4.

## 9. Risiken und Gegenmaßnahmen

| Risiko | Gegenmaßnahme |
|---|---|
| Überladung durch zu viele Pflicht-Skills | Kernpfad plus wöchentliche Priorisierung; Zwischenziel zuerst abschließen |
| KI schneidet auf unbekannten Layouts schlecht ab | Früher Proof-of-Concept, Baseline, separates Testset, Fehleranalyse |
| Datenmodell und KPI-Bedarf passen nicht zusammen | Gemeinsamer Datenvertrag und frühe Integrationsreviews |
| Synthetische Daten wirken zu idealisiert | Mehrere Layoutfamilien und systematisch schwierige Fälle |
| Wirtschaftliche Aussagen werden überinterpretiert | Strikte Trennung zwischen Messung, Annahme und Szenario |
| Mangelnde Reproduzierbarkeit | Abhängigkeiten versionieren, Docker/CI und Testanleitung |
| Unklare Verantwortlichkeiten | Ein Issue-Owner, explizite Reviewer, schriftliche Entscheidungen |

## 10. Open Source, Rechte und spätere Nutzung

Das Repository bleibt zunächst **privat**. Vor einer Veröffentlichung prüfen Ahmet und Enes gemeinsam Lizenz, Rechte an ihren jeweiligen Beiträgen, Abhängigkeiten, synthetische Inhalte und gegebenenfalls Drittmaterial. Ein öffentliches Repository ohne Lizenz ist nicht automatisch frei wiederverwendbar.

Ein späteres Geschäftsmodell könnte Prozessanalysen, Implementierungsprojekte, Softwareanpassungen, Schulung oder Support umfassen. Ob es zahlende Kunden gibt, wird **erst nach dem Portfolio-Projekt** validiert. Keine verpflichtende Kundenakquise im aktuellen Projekt.

## 11. Governance und verbindliche Artefakte

- **GitHub Issues/Project Board:** operative Aufgaben, Verantwortliche, Status.
- **`PROJECT_STATUS.md`:** wöchentlicher, freigegebener Überblick über Stand, Entscheidungen, Risiken und nächste Schritte.
- **`docs/project-management/`:** Charta, Teamvereinbarung und Entscheidungsprotokolle.
- **`docs/requirements/`:** Datenvertrag, Anforderungen, Qualitätskriterien.
- **ChatGPT:** Mentor und Arbeitsunterstützung, **nicht** automatisch synchronisierte Projektwahrheit.
- Arbeitsweise, Issue-Lifecycle und Definition of Done regelt das separate **Team Working Agreement v1.0**.

## 12. Freigabe

Vor der Freigabe prüfen beide insbesondere: MVP-Grenze, Lernziele, verfügbare Kapazität, technische Realisierbarkeit, Erfolgskriterien und Veröffentlichungsrechte.

| Rolle | Name | Freigabe | Datum |
|---|---|---|---|
| Process & Business Lead | Ahmet | Offen | — |
| AI & Engineering Lead | Enes | Offen | — |

**Status bis zu beiden Zustimmungen: ENTWURF.** Nach Freigabe Version festhalten und GitHub-Issue „Projekt-Charta und Projektumfang definieren“ schließen.
