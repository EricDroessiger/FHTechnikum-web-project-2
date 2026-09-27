/*components/NoteForm.vue nimmt eine neue Notiz auf und meldet diese per emit an App.vue .*/
<script setup lang="ts">
import {ref} from "vue"
import type { Note } from '../types/note'

const title = ref("")
const content = ref("")
const tagsInput = ref("")

  //TODO: emit("add", neueNotiz)


// Neue Notiz mitgeben, Nimm alle Eigenschaften von Note, außer id
const emit = defineEmits<{
  (event: 'add', note: Omit<Note, 'id'>): void
}>()


function submitNote() {
  // Leerzeichen am Anfang und Ende entfernen
  const cleanTitle = title.value.trim()
  const cleanContent = content.value.trim()

  //leere Notizen verhindern
  if (cleanTitle === "" || cleanContent === "") {
    return
  }

  // Tags in einen Array verwandeln. Beim Komma aufteilen, Leerzeichen entfernen, leere Einträge rausfiltern
  const tags = tagsInput.value
    .split(',')
    .map((tag) => tag.trim())
    .filter((tag) => tag !== "")

  //Notiz nach oben senden
  emit('add', {
    title: cleanTitle,
    content: cleanContent,
    tags: tags,
  })

  //Formular zurücksetzen
  title.value = ""
  content.value = ""
  tagsInput.value = ""
}

</script>


<template>
  <form class="form" @submit.prevent="submitNote">
    
    <div v-if="$slots.header" class="form-header">
      <slot name="header" /> <slot />
    </div>

    <div class="form-body">
      
      <label for="note-title">Titel</label>
      <input 
        id="note-title" 
        v-model="title" 
        type="text" 
        placeholder="Titel ..."
      >


      <label for="note-content">Inhalt</label>
      <textarea 
        id="note-content" 
        v-model="content" 
        placeholder="Notiz ..."
      ></textarea>
    

      <label for="note-tags">Tags</label>

      <input
        id="note-tags"
        v-model="tagsInput"
        type="text"
        placeholder="Tag1, Tag2, Tag3"
      >


    </div>

    <button type="submit">Notiz erstellen</button>

  </form>
</template>
