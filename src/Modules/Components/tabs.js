/*
 *   Copyright (c) 2021 Sachin S. Bahegavankar
 *   All rights reserved.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import '../../assets/css/reviews.css';
//  Dynamic Tabs 
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function SimpleTabs(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const reviews = props.reviews.map((row, i) => (

        <TabPanel value={value} key={i} index={0}>
             <div className="card review-card">
        <div className="card-body">
        <div className="reviews-members">
                    <div className="media"> 
                        <img alt={row.name} src={row.img} className="mr-3 rounded-pill" />
                    
                        <div className="media-body">
                        <div className="reviews-members-header">
                            <h6 className="mb-1 tc2">{row.name}</h6>
                            </div>
                            <div className="card-text">
                                <p>{row.comment}</p>
                            </div>
                            </div>

                        </div>
                    </div>
                </div>

        </div>
            
        </TabPanel>

    ))
    return (
        <div className="card-gray">
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    <Tab label="Film Reviews" {...a11yProps(0)} />
                    <Tab label="Filmmaker Info" {...a11yProps(1)} />
                </Tabs>
            </AppBar>

            <TabPanel value={value} index={0}>
               {reviews}
            </TabPanel>

            <TabPanel value={value} index={1}>
                Item Two
      </TabPanel>
        </div>
        </div>
    );
}
