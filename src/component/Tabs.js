import * as React from 'react';
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Profiletabs from './Personaltabs';
import ConfirmPassword from './Changepassword';
import Deletetab from './Deletetab';
import Payment from './Payment'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className='logout-box'>
          <NavLink className="navbar-link" to="/Login">Logout</NavLink>
        </div>
      <div className='tabs-section'>
        <div className='container'>
          <div className='tab-head'>
            <h2>Welcome Priyanka Joshi</h2>
          </div>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Profile Details" {...a11yProps(0)} />
                <Tab label="Change Password" {...a11yProps(1)} />
                <Tab label="Delete Account" {...a11yProps(2)} />
                <Tab label="Make Payment" {...a11yProps(3)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <div className='personal-tab'>
                <div className='form-head'>
                  <h4>Personal Details</h4>
                </div>
                <Profiletabs />
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <div className='changepassword-tab'>
                  <div className='form-head'>
                    <h4>Change Password</h4>
                  </div>
                <ConfirmPassword />
              </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <div className='Delete-Action'>
                  <div className='form-head'>
                    <h4>Delete Account</h4>
                  </div>
                <Deletetab />
              </div>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <div className='make-payment'>
                  <div className='form-head'>
                    <h4>Delete Account</h4>
                  </div>
                  <Payment />
              </div>
            </TabPanel>
          </Box>
        </div>
      </div>
    </>
  );
}