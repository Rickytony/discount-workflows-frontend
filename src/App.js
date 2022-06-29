import React from 'react';

import { Box, Card, } from '@lightspeed/design-system-react';
import { Topbar } from './components/Topbar';
import { Form } from './components/Form';

import '@lightspeed/design-system-css';

function App() {
  return (
    <>
      <div className="vd-body">
        <Topbar />
        <Box
          css={{
            display: 'flex',
            minHeight: '100%',
            width: '100%',
            '@media (min-width: 1200px)': {
              minHeight: 'calc(100vh - 50px)',
            },
          }}
        >
          <Box
            css={{
              alignItems: 'center',
              display: 'flex',
              flex: 1,
              flexBasis: '100%',
              flexDirection: 'column',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <Card
              padding={8}
              css={{
                maxWidth: '600px',
                width: '100%',
              }}
              >
              <Form />
            </Card>
          </Box>
        </Box>
      </div>
    </>
  );
};


export default App;
