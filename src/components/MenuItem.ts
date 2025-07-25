interface MenuItem {
  id: string | number; // Unique identifier for the menu item
  name: string; // Name of the menu item
  title?: string; // Optional title for the menu item
  active: boolean; // Whether the menu item is active
  component?: any;
  children?: MenuItem[]; // Optional children for nested menus
  paras?: string; // Optional parameters for the component
}

interface MenuItemBak {
  id: string | number; // Unique identifier for the menu item
  name: string; // Name of the menu item
  title?: string; // Optional title for the menu item
  active: boolean; // Whether the menu item is active
  component?: any;
  children?: MenuItem[]; // Optional children for nested menus
  paras?: string; // Optional parameters for the component
}
