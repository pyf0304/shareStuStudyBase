<template>
  <div class="menu-tree">
    <ul>
      <li v-for="item in menuItems" :key="item.id" class="menu-item">
        <div class="menu-item-header" @click="toggleMenu(item)">
          {{ item.name }}
          <span v-if="item.children" class="toggle-icon">
            {{ expandedMenus.includes(item.id) ? '-' : '+' }}
          </span>
        </div>
        <ul v-if="item.children && expandedMenus.includes(item.id)" class="submenu">
          <li
            v-for="child in item.children"
            :key="child.id"
            @click.stop="menuClick(child)"
            class="submenu-item"
          >
            {{ child.name }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType, ref } from 'vue';

  // interface MenuItem {
  //   id: string | number;
  //   name: string;
  //   component?: any;
  //   children?: MenuItem[];
  // }

  export default defineComponent({
    props: {
      menuItems: {
        type: Array as PropType<MenuItem[]>,
        required: true,
      },
    },
    emits: ['menuClick'],
    setup(_, { emit }) {
      const expandedMenus = ref<(string | number)[]>([]);

      const toggleMenu = (item: MenuItem) => {
        const index = expandedMenus.value.indexOf(item.id);
        if (index > -1) {
          expandedMenus.value.splice(index, 1); // Collapse menu
        } else {
          expandedMenus.value.push(item.id); // Expand menu
        }
      };

      const menuClick = (item: MenuItem) => {
        emit('menuClick', item);
      };

      return {
        expandedMenus,
        toggleMenu,
        menuClick,
      };
    },
  });
</script>

<style scoped>
  .menu-tree {
    width: 200px;
    background: #f0f0f0;
    padding: 10px;
  }

  .menu-item {
    margin-bottom: 10px;
  }

  .menu-item-header {
    cursor: pointer;
    padding: 5px;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .menu-item-header:hover {
    background: #e6f7ff;
  }

  .submenu {
    margin-top: 5px;
    padding-left: 20px;
  }

  .submenu-item {
    cursor: pointer;
    padding: 5px;
    background: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 5px;
  }

  .submenu-item:hover {
    background: #e6f7ff;
  }

  .toggle-icon {
    font-weight: bold;
  }
</style>
