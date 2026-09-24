/*components/SearchBar.vue ist eine eigene Input-Komponente mit
defineProps(['modelValue']) und emit('update:modelValue', ...) ,
sodass sie sich mit v-model einbinden lässt (Thema C).*/


<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>
 
<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    placeholder="Suchen ..."
  >
</template>
