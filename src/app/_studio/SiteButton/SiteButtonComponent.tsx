import React from 'react';
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';
import type { FC } from "react";

import styles from './SiteButton.module.css';

export interface SiteButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  label?: string;
  url?: string;
  target?: '_self' | '_blank';
  icon: 'arrowRight' | 'arrowLeft' | 'chevronRight' | 'chevronLeft';
  onNavigate?: (url: string, target?: string) => void;
};

const ICONS: Record<string, FC<any>> = {
  arrowRight: ArrowRightCircleIcon,
  arrowLeft: ArrowLeftCircleIcon,
  chevronRight: ChevronRightIcon,
  chevronLeft: ChevronLeftIcon,
};

export const SiteButtonComponent: React.FC<SiteButtonProps> = ({
  className,
  icon,
  label,
  onClick,
  onNavigate,
  target,
  url,
  ...props
}) => {
  const Icon = icon ? ICONS[icon] : null;

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (onNavigate && url) {
      event.preventDefault();
      onNavigate(url, target);
    }
    onClick && onClick(event);
  };

  return (
    <a
      href={url}
      data-url={url}
      data-target={target}
      onClick={handleClick}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      aria-label={label}
      className={`${className} ${styles.siteButton}`}
      {...props}
    >
      <span className={styles.contentWrapper}>
        <span className={styles.label}>{label}</span>
        {Icon && <span className={styles.icon}><Icon width={20} /></span>}
      </span>
    </a>
  );
}
