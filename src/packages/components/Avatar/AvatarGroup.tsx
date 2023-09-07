import { forwardRef } from 'react';
import cn from 'classnames';
export interface AvatarGroupProps {
  children?: React.ReactNode;
  gap?: string;
  direction?: 'horizontal' | 'vertical';
  className?: string;
}

const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ direction = 'horizontal', gap = '-12px', ...props }, ref) => (
    <div
      style={{ '--gap': gap } as React.CSSProperties}
      className={cn('flex [&_span]:shadow-[0_0_0_2px_#fff]', props.className, {
        'flex-col [&_span:not(:first-child)]:mt-[var(--gap)]': direction === 'vertical',
        'flex-row [&_span:not(:first-child)]:ml-[var(--gap)]': direction === 'horizontal',
      })}
      ref={ref}>
      {props.children}
    </div>
  ),
);
AvatarGroup.displayName = 'AvatarGroup';
export default AvatarGroup;
