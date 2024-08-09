// karliKingAlexander/frontend/src/core/components/header/header.tsx

import React from 'react';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@radix-ui/react-navigation-menu';

const Header: React.FC = () => (
  <header className="header">
    <nav className='nav'>
      <NavigationMenu>
        <NavigationMenuList className="nav-menu-list">
          <NavigationMenuItem>
            <NavigationMenuLink className="nav-menu-link" href="/">
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className="nav-menu-link" href='/resume'>
              Resume
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className="nav-menu-link" href='/projects'>
              Projects
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className="nav-menu-link" href='/hobbies'>
              Hobbies
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className="nav-menu-link" href='/pdh'>
              Continuing Education
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  </header>
);

export default Header;