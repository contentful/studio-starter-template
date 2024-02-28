import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';
import { FC } from 'react';

import styles from './SiteButton.module.css';

type SiteButtonProps = {
  label: string;
  url: string;
  target: '_self' | '_blank';
  borderRadius: string;
  icon: 'arrowRight' | 'arrowLeft' | 'chevronRight' | 'chevronLeft';
};

const ICONS: Record<string, FC<any>> = {
  arrowRight: ArrowRightCircleIcon,
  arrowLeft: ArrowLeftCircleIcon,
  chevronRight: ChevronRightIcon,
  chevronLeft: ChevronLeftIcon,
};

export function SiteButtonComponent({
  label,
  url,
  target,
  borderRadius,
  icon,
  ...props
}: SiteButtonProps) {
  const Icon = icon ? ICONS[icon] : null;

  return (
    <a
      href={url}
      target={target}
      className={styles.siteButton}
      style={{ overflow: 'hidden', borderRadius: `${borderRadius}px` }}
    >
      <button className="flex flex-col-reverse" {...props}>
        {label}
        {Icon && <Icon width={20} />}
      </button>
    </a>
  );
}
