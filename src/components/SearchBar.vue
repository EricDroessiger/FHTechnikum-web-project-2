/*components/SearchBar.vue ist eine eigene Input-Komponente mit
defineProps(['modelValue']) und emit('update:modelValue', ...) ,
sodass sie sich mit v-model einbinden lässt (Thema C).*/


<script setup lang="ts">
defineProps(['modelValue'])

const emit = defineEmits(['update:modelValue'])

function updateModelValue(event: Event) {
  if (event.target instanceof HTMLInputElement) {
    emit('update:modelValue', event.target.value)
  }
}

</script>
 
<template>
  <div class="search-bar">
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      placeholder="Suchen ..."
    >
  </div>

</template>
