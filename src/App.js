
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import * as React from 'react';
import { Heading } from '@aws-amplify/ui-react';
import { Button } from '@aws-amplify/ui-react';
import {  Expander, ExpanderItem,  ThemeProvider,
  ColorMode,
  ToggleButton,
  ToggleButtonGroup,
     } from '@aws-amplify/ui-react';
import Home from './Components/Home';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsconfig);

const theme: Theme = {
    name: 'my-theme',
    overrides: [
      {
        colorMode: 'dark',
        tokens: {
          colors: {
            font: {
              primary: { value: '{colors.pink.100}' },
              secondary: { value: '{colors.pink.90}' },
              tertiary: { value: '{colors.pink.80}' },
            },
            background: {
              primary: { value: '{colors.purple.10}' },
              secondary: { value: '{colors.purple.20}' },
              tertiary: { value: '{colors.purple.40}' },
            },
            border: {
              primary: { value: '{colors.pink.60}' },
              secondary: { value: '{colors.pink.40}' },
              tertiary: { value: '{colors.pink.20}' },
            },
          },
        },
      },
    ],
  };

function App() {

  const [colorMode , setColorMode ]=React.useState('system');
  return (
    <ThemeProvider theme={theme} colorMode={colorMode}>
    <Authenticator>
    {({ signOut, user }) => (
      <main>
       <ToggleButtonGroup
          value={colorMode}
          isExclusive
          onChange={(value: ColorMode) => setColorMode(value)}
        >
          <ToggleButton value="light">Light</ToggleButton>
          <ToggleButton value="dark">Dark</ToggleButton>
          <ToggleButton value="system">System</ToggleButton>
        </ToggleButtonGroup>
      <Expander type="multiple">
      <ExpanderItem title='Cricket' value="item-1">
         <Heading>{user.username}</Heading>
         <Button onClick={signOut}>Sign out</Button>
        
      </ExpanderItem>
    </Expander> 
    <Home></Home>
      </main>

    )}
  </Authenticator>
  </ThemeProvider>
    );
}

export default App;


