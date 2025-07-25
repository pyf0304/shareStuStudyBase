<template>
  <div>
    <h1>关于</h1>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/runtime-core';
  export default defineComponent({
    name: 'about_1',
    setup() {
      const btn_Click = (strCommandName: string): void => {
        const strKeyId = '';
        alert(`命令:${strCommandName}, 关键字:${strKeyId}.`);
      };
      return {
        btn_Click,
      };
    },
  });
</script>

<style scoped></style>
