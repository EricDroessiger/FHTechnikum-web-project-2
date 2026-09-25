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
    notes.value = notes.value.filter((note) => note.id !== id) // Neues Array erstellen und alle Notizen übernehmen deren ID nicht passt
  }
 
  function filteredNotes(term) {
      return computed(() => {
        const searchTerm = term.value.trim().toLowerCase()

        if (searchTerm ===""){
          return notes.value
        }

        //Filtern des Titels, des Contents und der Tags
        return notes.value.filter((note) => {
          const titleMatches = note.title.toLowerCase().includes(searchTerm)
          const contentMatches = note.content.toLowerCase().includes(searchTerm)
          const tagMatches = note.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm)
          )

          return titleMatches || contentMatches || tagMatches
        })
      }
    )






    // TODO: nach Titel, Text oder Tag filtern
    return computed(() => notes.value)
  }
 
  return { notes, addNote, deleteNote, filteredNotes }
}
