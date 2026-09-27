Prompt: "Wie erstelle ich in einer Vue-Form-Komponente aus Titel, Inhalt und Komma-getrennten Tags ein Notizobjekt und sende es per emit an App.vue?"

Übernommen: defineEmits, @submit.prevent und das Aufteilen der Tags mit split(',').

Geändert/verstanden: Die ID wird nicht im Formular erstellt, sondern später in useNotes.js. das Formular emittiert nur die Eingabedaten. Omit<> kann alle eigenschaften außer einer spezifischen übernehmen

---

Prompt: „Wie verbinde ich in Vue ein Formular, das per emit('add', note) eine neue Notiz sendet, mit einem Composable, das die Notizliste verwaltet?“

Übernommen: useNotes() wird einmal in App.vue aufgerufen; NoteForm ist mit @add="addNote" verbunden; die Notizen werden mit v-for als NoteCard gerendert.

Geändert/verstanden: App.vue ist die Vermittlungsstelle zwischen Komponenten und Composable. NoteForm erstellt keine Liste selbst, und NoteCard erhält einzelne Notizen nur über Props.

---



