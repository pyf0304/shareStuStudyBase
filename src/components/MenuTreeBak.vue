<template>
  <div class="menu-tree">
    <ul>
      <li v-for="item in menuItems" :key="item.id">
        <span>{{ item.name }}</span>
        <ul v-if="item.children && item.children.length">
          <MenuTree :menuItems="item.children" />
        </ul>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'MenuTree',
    props: {
      menuItems: {
        type: Array<MenuItem>,
        required: true,
      },
    },
  });
</script>

<style scoped>
  .menu-tree {
    width: 250px;
    background-color: #f9f9f9;
    border-right: 1px solid #ddd;
    padding: 10px;
  }

  .menu-tree ul {
    list-style-type: none;
    padding-left: 20px;
  }

  .menu-tree li {
    margin: 5px 0;
  }
</style>
