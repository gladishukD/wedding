import { FC, ReactNode } from 'react'
import clsx from 'clsx'

export enum TypographyVariant {
  primary = 'primary',
  secondary = 'secondary',
}
interface TypographyProps {
  variant: 'primary' | 'secondary'
  children: ReactNode
  className?: string
}
export const Typography: FC<TypographyProps> = ({
  variant,
  className,
  children,
}) => {
  if (variant === TypographyVariant.primary) {
    return (
      <h3
        className={clsx(
          'text-5xl sm:text-[64px] font-allegretto font-medium text-primary',
          className,
        )}
      >
        {children}
      </h3>
    )
  }
  return (
    <p
      className={clsx(
        'text-xs sm:text-[24px] font-normal text-secondary',
        className,
      )}
    >
      {children}
    </p>
  )
}
