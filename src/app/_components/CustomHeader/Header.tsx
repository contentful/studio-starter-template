import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
import MegaMenu from "./MegaMenu";

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

interface HeaderProps {
  logo?: string;
  menuItems?: MenuItem[];
  cta?: string;
  activeMenu?: MenuItem | null;
  isMobileMenuOpen?: boolean;
  onMouseEnter?: (menu: MenuItem) => void;
  onMouseLeave?: () => void;
  toggleMobileMenu?: () => void;
}

const defaultLogo = "https://bathfittercom-prod-backend.azurewebsites.net/wp-content/uploads/2020/09/SvgLogo.svg";
const defaultMenuItems: MenuItem[] = [];
const defaultCta = "Book a Free Consultation";

const Header: React.FC<HeaderProps> = ({
  logo = defaultLogo,
  menuItems = defaultMenuItems,
  cta = defaultCta,
  activeMenu = null,
  isMobileMenuOpen = false,
  onMouseEnter = () => {},
  onMouseLeave = () => {},
  toggleMobileMenu = () => {}
}) => {
  return (
    <>
      <div className={styles.solidHeaderContainer}></div>
      <div onMouseLeave={onMouseLeave} className={styles.headerContainer}>
        <header className={styles.header}>
          <div className={styles.innerHeader}>
            <div className={styles.hamburgerIcon} onClick={toggleMobileMenu}>
              <span />
              <span />
              <span />
            </div>
            <Link href="/">
              <Image
                src={logo}
                alt="Logo"
                className={`${styles.logo} ${styles.mobileLogo}`}
                width={120}
                height={120}
              />
            </Link>
            <nav className={styles.nav}>
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className={`${styles.navItem} ${item.hasDropdown ? styles.hasDropdown : ""}`}
                  onMouseEnter={() => onMouseEnter(item)}
                >
                  <Link href={item.link || '#'}>
                    {item.name.Default}
                  </Link>
                </div>
              ))}
              <Link href="#" className={styles.consultation}>{cta}</Link>
            </nav>
          </div>
        </header>
        {activeMenu && <MegaMenu menuContent={activeMenu} />}
        {isMobileMenuOpen && (
          <div className={styles.mobileMenu}>
            {menuItems.map((item, index) => (
              <Link href={item.link || '#'} key={index} onClick={toggleMobileMenu}>
                {item.name.Default}
              </Link>
            ))}
            <Link href="#" className={styles.mobileConsultation}>{cta}</Link>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;