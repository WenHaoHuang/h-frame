<template>
  <el-icon>
    <component :is="iconComp" />
  </el-icon>
</template>
<script setup lang="ts">
import { shallowRef } from 'vue'

const props = defineProps({
  icon: {
    type: Object,
    required: true,
  },
} as const)
const iconComp = shallowRef(props.icon)
</script>
