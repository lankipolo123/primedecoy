import { Navbar, Collapse, Typography, Button, IconButton, List, ListItem, Menu, MenuHandler, MenuList, MenuItem } from "@material-tailwind/react";

export type NavbarComponentProps = {
  openNav: boolean;
  setOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
};

export type NavListMenuProps = {
  isMobile?: boolean;
};

export type MaterialTailwindComponents = {
  Navbar: typeof Navbar;
  Collapse: typeof Collapse;
  Typography: typeof Typography;
  Button: typeof Button;
  IconButton: typeof IconButton;
  List: typeof List;
  ListItem: typeof ListItem;
  Menu: typeof Menu;
  MenuHandler: typeof MenuHandler;
  MenuList: typeof MenuList;
  MenuItem: typeof MenuItem;
};