'use client';

import { useFontAccessibilityStore } from '@/src/store';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  size?: number;
  weight?: 200 | 400 | 500 | 600 | 700 | 800;
  invertColor?: boolean;
  title?: string;
  errorText?: boolean;
}

const DefaultText = ({
  children,
  size = 16,
  weight = 400,
  invertColor = false,
  title = '',
  errorText = false,
}: Props) => {
  const { fontSizeLevel } = useFontAccessibilityStore();
  return (
    <>
      {!errorText ? (
        <p
          className={
            invertColor
              ? 'text-sgr-font-primary-l dark:text-sgr-font-primary-d'
              : 'text-sgr-font-primary-d dark:text-sgr-font-primary-l'
          }
          title={title}
          style={{ fontSize: size + fontSizeLevel, fontWeight: weight }}
        >
          {children}
        </p>
      ) : (
        <p
          className={'text-sgr-font-error-l dark:text-sgr-font-error-d'}
          title={title}
          style={{ fontSize: size + fontSizeLevel, fontWeight: weight }}
        >
          {children}
        </p>
      )}
    </>
  );
};

export default DefaultText;
