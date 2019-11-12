import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScreenClassProvider } from './responsiveSystem';
import { CustomComponentWithHOC } from './componentUsingHOC';
import { CustomComponentWithHook } from './componentUsingHook';

const App = () => {
  return (
    <ScreenClassProvider>
      <CustomComponentWithHOC
        someColor="#000000"
        someText="Hello"
        xs={{ someColor: 'rebeccapurple', someText: 'xs' }}
        sm={{ someColor: 'palevioletred', someText: 'sm' }}
        md={{ someColor: 'brown', someText: 'md' }}
        lg={{ someColor: 'green', someText: 'lg' }}
      />
      <CustomComponentWithHook
        someColor="#000000"
        someText="Hello"
        xs={{ someColor: 'rebeccapurple', someText: 'xs' }}
        sm={{ someColor: 'palevioletred', someText: 'sm' }}
        md={{ someColor: 'brown', someText: 'md' }}
        lg={{ someColor: 'green', someText: 'lg' }}
      />
    </ScreenClassProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
