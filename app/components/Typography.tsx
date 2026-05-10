import { FC, ReactNode } from 'react'
import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

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
        className={cn(
          'text-5xl lg:text-[64px] font-allegretto font-medium text-primary',
          className,
        )}
      >
        {children}
      </h3>
    )
  }
  return (
    <p
      className={cn(
        'text-xs lg:text-[24px] font-normal text-secondary',
        className,
      )}
    >
      {children}
    </p>
  )
}
