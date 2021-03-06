
import React, {Fragment, useState} from 'react'
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

//Redux
import { updateCurrentPage} from '../redux/dataActions'
import {connect} from 'react-redux'

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        style={{justifyContent: 'center', alignItems: 'center'}}
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

let Header = (props) =>  {

    let {data: {currentPage}} = props;
    const [value, setValue] = useState(0);


    const handleChange = (event) => {
        setValue(event.target.value);
        props.updateCurrentPage(event.target.value)
    };

    return(
        <Fragment>

            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{alignItems: 'center', justifyContent: 'center'}}>
                    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                 
                        {
                            currentPage> 2 ? (
                                <Fragment>
                                    <Button sx={{ my: 2, color: 'white', display: 'block' }} value={6} onClick={handleChange}>Profile</Button>
                                    <Button sx={{ my: 2, color: 'white', display: 'block' }} value={3} onClick={handleChange}>Feed</Button>
                                    <Button sx={{ my: 2, color: 'white', display: 'block' }} value={5} onClick={handleChange}>Log out</Button>
                                </Fragment>
                                    
                                
                                
                            ): (
                                <Fragment>
                                    <Button sx={{ my: 2, color: 'white', display: 'block' }} value={0} onClick={handleChange}>Home</Button>
                                    <Button sx={{ my: 2, color: 'white', display: 'block' }} value={1} onClick={handleChange}>sign Up</Button>
                                    <Button sx={{ my: 2, color: 'white', display: 'block' }} value={2} onClick={handleChange}>Log In</Button>
                                
                                </Fragment>
                                
                            
                            )
                        }
                    
                    </Box>
                    </Toolbar>
                </Container>
            </AppBar>

        </Fragment>
    )


}

const mapStateToProps = (state) => ({
    data: state.data 
})

const mapActionsToProps = {
    updateCurrentPage
}

export default connect(mapStateToProps, mapActionsToProps)(Header);