import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";

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

interface MegaMenuProps {
  menuContent: {
    dropdownList?: DropdownItem[];
    dropdownImages?: DropdownImage[];
  };
}

const MegaMenu: React.FC<MegaMenuProps> = ({ menuContent }) => {
  return (
    <div className={styles.megaMenu}>
      <div className={styles.megaMenuContent}>
        {menuContent.dropdownList && menuContent.dropdownList.length > 0 && (
          <div className={styles.megaMenuList}>
            {menuContent.dropdownList.map((item, index) => (
              <Link href={item.link} key={index}>
                {item.name.Default}
              </Link>
            ))}
          </div>
        )}
        {menuContent.dropdownImages && menuContent.dropdownImages.length > 0 && (
          <div className={styles.megaMenuImages}>
            {menuContent.dropdownImages.map((image, index) => (
              <div key={index} className={styles.megaMenuImageLink}>
                <Link href={image.link}>
                  <Image src={image.src} alt={image.alt} width={400} height={250} />
                  <span>{image.name.Default}</span>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MegaMenu;