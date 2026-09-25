<script setup lang="ts">
import {ref} from "vue"
import NoteForm from "./components/NoteForm.vue";
import SearchBar from "./components/SearchBar.vue";
import NoteCard from "./components/NoteCard.vue"
import { useNotes } from "./composables/useNotes.js"

const { addNote, deleteNote, filteredNotes } = useNotes()

const searchTerm = ref('')

const visibleNotes = filteredNotes(searchTerm)

</script>

<template>
  <main class="notes-app">
    <header class="app-header">
      <h1>QuickNotes</h1>
      <SearchBar v-model="searchTerm" />
    </header>

    <section class="note-form-section">
      <NoteForm @add="addNote" />
    </section>
    
    <section class="notes-list" aria-label="Notizliste">
      <NoteCard
      v-for="note in visibleNotes"
      :key="note.id"
      :note="note"
      @delete="deleteNote"
      />
    </section>

    

  </main>
</template>
