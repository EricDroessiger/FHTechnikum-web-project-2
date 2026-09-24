/*composables/useNotes.js kapselt die gesamte Notiz-Logik: die Liste der Notizen,
addNote() , deleteNote() sowie eine gefilterte Ansicht. Die Komponenten rufen
nur diese Funktionen auf, sie verwalten die Liste nicht selbst.*/


import { computed } from 'vue'
import { useLocalStorage } from './useLocalStorage.js'
 
export function useNotes() 
{
  const notes = useLocalStorage('quicknotes', [])
 
  function addNote(note) 
  {
    notes.value.push(
      { 
        id: Date.now(),
        title: note.title,
        content: note.content,
        tags: note.tags,
      })
  }
 
  function deleteNote(id) {
    const index = notes.value.findIndex(note => note.id === id)
    if (index !== -1) notes.value.splice(index, 1)
  }
 
  function filteredNotes(term) {
    // TODO: nach Titel, Text oder Tag filtern
    return computed(() => notes.value)
  }
 
  return { notes, addNote, deleteNote, filteredNotes }
}
