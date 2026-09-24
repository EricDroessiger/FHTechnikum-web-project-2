//components/BaseCard.vue ist eine generische Card mit einem benannten
#header -Slot und einem Default-Slot. Sie weiß nichts von Notizen. Genau das ist der
Kern (Thema A).

<template>
  <div class="card">
    <div v-if="$slots.header" class="card-header">
      <slot name="header" />
    </div>
    <div class="card-body">
      <slot />
    </div>
  </div>
</template>
