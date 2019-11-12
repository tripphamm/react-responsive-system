import { ResponsiveProps, createResponsiveSystem } from '../dist';

const breakpoints = {
  xs: 500,
  sm: 750,
  md: 1000,
  lg: Infinity,
};

export const {
  ScreenClassProvider,
  useResponsiveProps,
  responsive,
} = createResponsiveSystem({
  defaultScreenClass: 'lg',
  breakpoints,
});

export type Responsive<P extends {}> = ResponsiveProps<typeof breakpoints, P>;
