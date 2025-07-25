<template>
  <header>
    <header>
      <PageHeadCom
        ref="PageHeadRef"
        :title="title"
        :isShowEduCls="'true'"
        :header-height="'60px'"
        :is-show-paper-iframe="'false'"
        :is-show-topic="'false'"
        :is-show-search="'false'"
        :is-show-major="'true'"
        :is-show-attention="'true'"
        :is-show-user-cache="'false'"
        :paper-id="''"
      ></PageHeadCom>
    </header>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/runtime-core';
  import PageHeadCom from '@/ts/components/PageHead_GE.vue';
  export default defineComponent({
    name: 'Header',
    components: {
      PageHeadCom,
    },
    props: {
      title: { type: String, required: true },
    },
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

<style scoped>
  header {
    background-color: #f8f9fa;
    padding: 1rem;
  }

  nav ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: flex-end; /* Aligns the menu to the right */
  }

  nav ul li {
    margin: 0 1rem;
  }

  nav ul li a {
    text-decoration: none;
    color: #007bff;
  }
</style>
