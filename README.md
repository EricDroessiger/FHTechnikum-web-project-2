# Vue 3 + Vite QuickNotes App

**Setup-Anleitung**

1. Execute "npm install"
2. Execute "npm run dev"
3. Open local address in Browser (e.g. Local: http://localhost:5173/)


**Kurze Begründung der Struktur**

Die Logik liegt in de Composables damit die Komponenten fokussiert auf Darstellung Eingabe der Daten sein können. Funktionen zum erstellen, löschen und filtern von Notizen sind dadruch in den passenden Composables konzentriert.
Auch ist die Persistenz in useLocalStorage.js in ein eigenes Composable verlegt, so kann useNotes.js bei bedarf auf die Logik zugreifen.



**Reflexionsfragen**

Q: Warum darf NoteCard die Notiz-Prop nicht selbst verändern, und wie löst ihr
das stattdessen?

A: Props gehören der Elternkomponente und sollen in der Kindkomponente nicht direkt verändert werden. NoteCard stellt die Daten nur dar. Beim Klick auf „Löschen“ sendet sie Event nach oben an App.vue. App.vue ruft anschließend deleteNote() aus dem Composable auf.


Q: Was passiert, wenn zwei Komponenten dasselbe useNotes() aufrufen — teilen sie sich die Notizen oder nicht? Begründet kurz.

A: Nein, sie teilen sich nicht dieselbe Notizliste. useNotes() wird nur einmal in App.vue aufgerufen. Ansonsten würde jeder Aufruf von useNotes() durch useLocalStorage() ein eigenes ref mit eigenen Daten im Speicher erstellen.


Q: Wozu dient das Note-Interface, wenn der Code auch ohne liefe?

A: Das Note-Interface beschreibt, die properties jeder Notiz: id, title, content und tags. TypeScript kann dadurch beim Programmieren prüfen, ob z.B. ein Feld fehlt oder tags nicht als Array übergeben werden. Der JavaScript-Code könnte zwar ohne Interface laufen, aber das Interface verhindert Fehler und dokumentiert den Datenaufbau.
