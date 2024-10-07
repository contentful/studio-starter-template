'use client';

import React, { useState } from "react";
import Header from "./Header";

interface LocalizedString {
  Default: string;
  "fr-CA": string;
}

interface DropdownItem {
  name: LocalizedString;
  link: string;
}

interface DropdownImage {
  src: string;
  alt: string;
  link: string;
  name: LocalizedString;
}

interface MenuItem {
  name: LocalizedString;
  link: string;
  hasDropdown?: boolean;
  dropdownList?: DropdownItem[];
  dropdownImages?: DropdownImage[];
}

interface InteractiveHeaderProps {
  logo?: string;
  menuItems?: MenuItem[];
  cta?: string;
}

const InteractiveHeader: React.FC<InteractiveHeaderProps> = ({ logo, menuItems, cta }) => {
  const [activeMenu, setActiveMenu] = useState<MenuItem | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMouseEnter = (menu: MenuItem) => {
    if (menu.hasDropdown) {
      setActiveMenu(menu);
    } else {
      setActiveMenu(null);
    }
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Header
      logo={logo}
      menuItems={menuItems}
      cta={cta}
      activeMenu={activeMenu}
      isMobileMenuOpen={isMobileMenuOpen}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      toggleMobileMenu={toggleMobileMenu}
    />
  );
}

export default InteractiveHeader;