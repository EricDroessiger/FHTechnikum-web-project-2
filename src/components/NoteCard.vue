/*components/NoteCard.vue rendert eine einzelne Notiz und verwendet dafür
BaseCard . Der Löschen-Button meldet per emit nach oben, er löscht nicht selbst.*/
<script setup lang="ts">
import type { Note } from '../types/note.ts'
import BaseCard from "./BaseCard.vue";
//function deleteNote; Event nach oben senden

const props = defineProps<{
  note: Note
}>()

const emit = defineEmits<{
  (event: 'delete', id: number): void
}>()


function requestDelete() {
  emit('delete', props.note.id)
}

</script>


<template>
  <BaseCard>
    <template #header>
      <h2>{{ props.note.title }}</h2>
    </template>

    <p>{{ props.note.content }}</p>

    <ul v-if="props.note.tags.length > 0">
      <li v-for="tag in props.note.tags" :key="tag">
        {{ tag }}
      </li>
    </ul>

    <button type="button" @click="requestDelete">
      Löschen
    </button>
  </BaseCard>

</template>
