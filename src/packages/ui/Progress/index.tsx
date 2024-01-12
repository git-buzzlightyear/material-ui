import { forwardRef, useEffect, useRef, useState, useCallback, PropsWithChildren } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const circleProgressStyle = tv({
  slots: {
    base: 'relative inline-block overflow-hidden',
    svg: 'stroke-2',
    root: 'transition-all',
    tracker: 'stroke-black/10',
  },
  variants: {
    size: {
      small: {
        base: 'square-[32px]',
      },
      medium: {
        base: 'square-[56px]',
      },
      large: {
        base: 'square-[80px]',
      },
    },
    colors: {
      primary: {
        root: 'stroke-brand-500',
      },
      success: {
        root: 'stroke-success-500',
      },
      warn: {
        root: 'stroke-warn-500',
      },
      danger: {
        root: 'stroke-danger-500',
      },
    },
  },
  defaultVariants: {
    size: 'medium',
    colors: 'primary',
  },
});

type CircleProgressVariants = VariantProps<typeof circleProgressStyle>;
interface CircleProgress extends CircleProgressVariants, PropsWithChildren {
  colors?: 'primary' | 'success' | 'warn' | 'danger';
  percent?: number;
  svgClassName?: string;
  rootClassName?: string;
  trackerClassName?: string;
  className?: string;
  style?: React.CSSProperties;
}

const CircleProgress = forwardRef<HTMLDivElement, CircleProgress>((props, ref) => {
  const {
    percent = 0,
    size,
    colors,
    svgClassName,
    rootClassName,
    trackerClassName,
    className,
    style,
    children,
  } = props;
  const { svg, root, base, tracker } = circleProgressStyle();
  const svgRef = useRef<SVGSVGElement>(null);
  const [strokeDashLength, setStrokeDashLength] = useState<number>(0);
  const calcStrokeDashLength = () => {
    const periLength = 2 * Math.PI * 10;
    setStrokeDashLength(periLength);
  };

  const updateOffset = useCallback(() => {
    const offset = strokeDashLength - (strokeDashLength * percent) / 100;
    return offset >= strokeDashLength ? strokeDashLength : offset;
  }, [percent, strokeDashLength]);

  useEffect(() => {
    if (svgRef.current) {
      calcStrokeDashLength();
    }
  }, []);
  return (
    <div className={base({ size, class: className })} ref={ref}>
      <svg ref={svgRef} viewBox="0 0 24 24" fill="none" className={svg({ size, class: svgClassName })} style={style}>
        <circle
          cx="12"
          cy="12"
          r="10"
          strokeLinecap="round"
          transform="rotate(-90 12 12)"
          className={tracker({ class: trackerClassName })}
        />
        <circle
          cx="12"
          cy="12"
          r="10"
          transform="rotate(-90 12 12)"
          strokeLinecap="round"
          className={root({ colors, class: rootClassName })}
          strokeDashoffset={updateOffset()}
          strokeDasharray={`${strokeDashLength} ${strokeDashLength}`}
        />
      </svg>
      <div className="absolute inset-0 flex flex-center">{children}</div>
    </div>
  );
});

CircleProgress.displayName = 'CircleProgress';

export { CircleProgress };
