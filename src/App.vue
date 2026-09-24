<script setup lang="ts">
import NoteForm from "./components/NoteForm.vue";
import SearchBar from "./components/searchBar.vue";
import NoteCard from './components/NoteCard.vue'
import { useNotes } from './composables/useNotes.js'

const { notes, addNote, deleteNote } = useNotes()


</script>

<template>
    <NoteForm @add="addNote" />

  <NoteCard
    v-for="note in notes"
    :key="note.id"
    :note="note"
    @delete="deleteNote"
  />

  <searchBar />


</template>
