// import { Box, Tab } from '@mui/material';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Tab } from '@mui/material';
import Features from '../Features/Features';

///////////////////////////////////////////////
const Tabs = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: 'divider',
            display: 'flex',
            padding: '0',
            marginBottom: '44px',
          }}
        >
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            sx={{
              '& .MuiTabs-indicator': {
                backgroundColor: 'red',
              },
              '& .MuiTab-root': {
                color: 'black',
                fontSize: '12px',
                lineHeight: '150%',
                fontWeight: '400',
              },
              '& .MuiTab-root:hover': {
                backgroundColor: '#cec8c888',
              },

              '& .MuiTouchRipple-root': {
                color: '#ffff',
              },
            }}
          >
            <Tab
              label="Features"
              value="1"
              sx={{
                color: 'black',
                '&.Mui-selected': {
                  color: 'black',
                },
              }}
            />
            <Tab
              label="Reviews"
              value="2"
              sx={{
                color: 'black',
                '&.Mui-selected': {
                  color: 'black',
                },
              }}
            />
          </TabList>
        </Box>
        <TabPanel value="1" sx={{ padding: '0' }}>
          <Features />
        </TabPanel>
        <TabPanel value="2" sx={{ padding: '0' }}>
          <div>
            <h5>two</h5>
          </div>
        </TabPanel>
      </TabContext>
    </>
  );
};
export default Tabs;
