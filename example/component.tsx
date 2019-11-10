import * as React from 'react';
import { Responsive, useResponsiveProps } from './responsiveProps';

type CustomComponentProps = {
  someColor?: string;
  someText: string;
};

export const CustomComponent: React.FC<
  Responsive<CustomComponentProps>
> = props => {
  const {
    someColor = '#000000',
    someText = 'Default text',
  } = useResponsiveProps<CustomComponentProps>(props);

  return (
    <div
      style={{
        height: 100,
        width: 100,
        color: 'white',
        backgroundColor: someColor,
      }}
    >
      {someText}
    </div>
  );
};
