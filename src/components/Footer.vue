<template>
  <footer>
    <div class="footer-content">
      <p>&copy; {{ currentYear }} Your Company Name. All rights reserved.</p>
    </div>
  </footer>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Footer',
    data() {
      return {
        currentYear: new Date().getFullYear(),
      };
    },
  });
</script>

<style scoped>
  .footer-content {
    text-align: center;
    padding: 1rem;
    background-color: #f8f9fa;
    border-top: 1px solid #dee2e6;
  }
</style>
