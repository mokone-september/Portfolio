'use client';

import {
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
  type SpringOptions,
  AnimatePresence,
} from 'framer-motion';
import {
  Children,
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { cn } from '@/lib/utils';

const DOCK_HEIGHT = 128;
const DEFAULT_MAGNIFICATION = 80;
const DEFAULT_DISTANCE = 150;
const DEFAULT_PANEL_HEIGHT = 64;

/* TYPES */
type DockProps = {
  children: React.ReactNode;
  className?: string;
  distance?: number;
  panelHeight?: number;
  magnification?: number;
  spring?: SpringOptions;
};

type DockItemProps = {
  className?: string;
  children: React.ReactNode;
};

type DockLabelProps = {
  className?: string;
  children: React.ReactNode;
  isHovered?: MotionValue<number>;
};

type DockIconProps = {
  className?: string;
  children: React.ReactNode;
  width?: MotionValue<number>;
};

/* CONTEXT */
type DockContextType = {
  mouseX: MotionValue<number>;
  spring: SpringOptions;
  magnification: number;
  distance: number;
};

const DockContext = createContext<DockContextType | undefined>(undefined);

function DockProvider({
  children,
  value,
}: {
  children: React.ReactNode;
  value: DockContextType;
}) {
  return <DockContext.Provider value={value}>{children}</DockContext.Provider>;
}

function useDock() {
  const ctx = useContext(DockContext);
  if (!ctx) throw new Error('useDock must be used within a DockProvider');
  return ctx;
}

/* MAIN DOCK */
export function Dock({
  children,
  className,
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  panelHeight = DEFAULT_PANEL_HEIGHT,
}: DockProps) {
  const mouseX = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);

  const maxHeight = useMemo(
    () => Math.max(DOCK_HEIGHT, magnification + magnification / 2 + 4),
    [magnification],
  );

  const heightRow = useTransform(isHovered, [0, 1], [panelHeight, maxHeight]);
  const height = useSpring(heightRow, spring);

  return (
    <motion.div
      style={{
        height,
        scrollbarWidth: 'none',
      }}
      className="mx-0 sm:mx-2 flex max-w-full items-end overflow-x-auto"
    >
      <motion.div
        onMouseMove={(e) => {
          isHovered.set(1);
          mouseX.set(e.pageX);
        }}
        onMouseLeave={() => {
          isHovered.set(0);
          mouseX.set(Infinity);
        }}
        className={cn(
          'mx-auto flex w-fit gap-1.5 sm:gap-4 rounded-2xl bg-gray-50 px-4 dark:bg-neutral-900',
          className,
        )}
        style={{ height: panelHeight }}
        role="toolbar"
        aria-label="Application dock"
      >
        <DockProvider
          value={{
            mouseX,
            spring,
            distance,
            magnification,
          }}
        >
          {children}
        </DockProvider>
      </motion.div>
    </motion.div>
  );
}

/* DOCK ITEM */
export function DockItem({ children, className }: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { distance, magnification, mouseX, spring } = useDock();

  const isHovered = useMotionValue(0);

  const mouseDistance = useTransform(mouseX, (val) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return 0;
    return val - (rect.x + rect.width / 2);
  });

  const widthTransform = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [40, magnification, 40],
  );

  const width = useSpring(widthTransform, spring);

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      className={cn(
        'relative inline-flex items-center justify-center',
        className,
      )}
      tabIndex={0}
      role="button"
    >
      {Children.map(children, (child) =>
        cloneElement(child as React.ReactElement, { width, isHovered }),
      )}
    </motion.div>
  );
}

/* LABEL */
export function DockLabel({ children, className, isHovered }: DockLabelProps) {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    if (!isHovered) return;

    const unsub = isHovered.on('change', (v) => setVisible(v === 1));
    return () => unsub();
  }, [isHovered]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -10 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            'absolute -top-6 left-1/2 whitespace-pre rounded-md border border-gray-200 bg-gray-100 px-2 py-0.5 text-xs text-neutral-700 dark:border-neutral-900 dark:bg-neutral-800 dark:text-white',
            className,
          )}
          style={{ x: '-50%' }}
          role="tooltip"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ICON */
export function DockIcon({ children, className, width }: DockIconProps) {
  const fallbackWidth = useMotionValue(40);
  const widthHalf = useTransform(width ?? fallbackWidth, (val) => val / 2);

  return (
    <motion.div
      style={{ width: widthHalf }}
      className={cn('flex items-center justify-center', className)}
    >
      {children}
    </motion.div>
  );
}
