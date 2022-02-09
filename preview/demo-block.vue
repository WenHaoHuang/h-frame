<template>
  <article class="demo-block">
    <section class="demo-content">
      <component
        :is="componentId"
        v-bind="$attrs"
        :key="path"
      />
    </section>
  </article>
</template>
<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  path: {
    type: String,
    required: true
  },
  demos: {
    type: Object,
    default: () => ({})
  }
})
const componentId = computed(() => `example-${props.path}`)
</script>
