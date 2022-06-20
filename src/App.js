
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import * as React from 'react';
import { Heading,Icon } from '@aws-amplify/ui-react';
import { Button } from '@aws-amplify/ui-react';
import { WiSolarEclipse,WiMoonAltWaningCrescent1 ,WiMoonThirdQuarter} from 'react-icons/wi';

import {  Expander, ExpanderItem,  ThemeProvider,
  ColorMode,
  ToggleButton,
  ToggleButtonGroup,
  defaultDarkModeOverride
     } from '@aws-amplify/ui-react';
import Home from './Components/Home';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsconfig);

function App() {
  
  const theme = {
    name: 'my-theme',
    overrides: [defaultDarkModeOverride],
  };

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
          style={{position:'fixed', right:'10px',top:"5px", background:"white"}}
        >
          <ToggleButton value="light"><Icon ariaLabel="javascript" as={WiSolarEclipse}/></ToggleButton>
          <ToggleButton value="dark"><Icon ariaLabel="javascript" as={WiMoonThirdQuarter}/></ToggleButton>
          <ToggleButton value="system"><Icon ariaLabel="javascript" as={WiMoonAltWaningCrescent1}/></ToggleButton>
        </ToggleButtonGroup>
      <Expander type="multiple">
      <ExpanderItem title='Cricket' value="item-1" style={{position:'fixed', top:"40px",right:'10px', backgroundColor:"white"}}>
         <Heading>{user.username}</Heading>
         <Button  onClick={signOut}>Sign out</Button>
        
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


