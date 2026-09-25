/*composables/useLocalStorage.js übernimmt das Speichern und Laden. Wichtig:
Die localStorage-Zugriffe gehören hierher, nicht verstreut in die Komponenten.
useNotes verwendet useLocalStorage. */

import { ref, watch } from 'vue'
 
// Liest einen Wert beim Start aus localStorage und schreibt ihn bei jeder Änderung zurück.
export function useLocalStorage(key, initialValue) {
  const stored = localStorage.getItem(key)
  const value = ref(stored ? JSON.parse(stored) : initialValue)
 
  watch(value, (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue))
  }, { deep: true })
 
  return value
}
