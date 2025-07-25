<template>
  <div class="page-content">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'PageContent',
  });
</script>

<style scoped>
  .page-content {
    padding: 20px;
    background-color: #f9f9f9;
    flex: 1; /* Allow the content to grow and fill the available space */
  }
</style>
