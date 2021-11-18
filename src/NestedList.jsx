import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

export default function NestedList({ weather }) {
    const classes = useStyles();
    const [open, setOpen] = useState(true);
    const [dataCity, setDataCity] = useState()

    const handleClick = () => {
        setOpen(!open);
    };

    useEffect(() => {
        setDataCity(weather.current)
    }, [weather])

    return (

        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Estado del clima
                </ListSubheader>
            }
            className={classes.root}
        >

            {
                dataCity ?
                    <>
                        <ListItem button>
                            <ListItemIcon>
                                <SendIcon />
                            </ListItemIcon>
                            <ListItemText primary="wind_mph" />
                            <ListItemText secondary={dataCity.wind_mph} />
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon>
                                <SendIcon />
                            </ListItemIcon>
                            <ListItemText primary="wind_kph" />
                            <ListItemText secondary={dataCity.wind_kph} />
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon>
                                <SendIcon />
                            </ListItemIcon>
                            <ListItemText primary="wind_degree" />
                            <ListItemText secondary={dataCity.wind_degree} />
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon>
                                <SendIcon />
                            </ListItemIcon>
                            <ListItemText primary="wind_dir" />
                            <ListItemText secondary={dataCity.wind_dir} />
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon>
                                <SendIcon />
                            </ListItemIcon>
                            <ListItemText primary="pressure_mb" />
                            <ListItemText secondary={dataCity.pressure_mb} />
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon>
                                <SendIcon />
                            </ListItemIcon>
                            <ListItemText primary="pressure_in" />
                            <ListItemText secondary={dataCity.pressure_in} />
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon>
                                <SendIcon />
                            </ListItemIcon>
                            <ListItemText primary="precip_mm" />
                            <ListItemText secondary={dataCity.precip_mm} />
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon>
                                <SendIcon />
                            </ListItemIcon>
                            <ListItemText primary="precip_in" />
                            <ListItemText secondary={dataCity.precip_in} />
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon>
                                <SendIcon />
                            </ListItemIcon>
                            <ListItemText primary="humidity" />
                            <ListItemText secondary={dataCity.humidity} />
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon>
                                <SendIcon />
                            </ListItemIcon>
                            <ListItemText primary="cloud" />
                            <ListItemText secondary={dataCity.cloud} />
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon>
                                <SendIcon />
                            </ListItemIcon>
                            <ListItemText primary="feelslike_c" />
                            <ListItemText secondary={dataCity.feelslike_c} />
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon>
                                <SendIcon />
                            </ListItemIcon>
                            <ListItemText primary="feelslike_f" />
                            <ListItemText secondary={dataCity.feelslike_f} />
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon>
                                <SendIcon />
                            </ListItemIcon>
                            <ListItemText primary="vis_km" />
                            <ListItemText secondary={dataCity.vis_km} />
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon>
                                <SendIcon />
                            </ListItemIcon>
                            <ListItemText primary="vis_miles" />
                            <ListItemText secondary={dataCity.vis_miles} />
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon>
                                <SendIcon />
                            </ListItemIcon>
                            <ListItemText primary="uv" />
                            <ListItemText secondary={dataCity.uv} />
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon>
                                <SendIcon />
                            </ListItemIcon>
                            <ListItemText primary="gust_mph" />
                            <ListItemText secondary={dataCity.gust_mph} />
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon>
                                <SendIcon />
                            </ListItemIcon>
                            <ListItemText primary="gust_kph" />
                            <ListItemText secondary={dataCity.gust_kph} />
                        </ListItem>
                    </>
                    :
                    <></>
            }
        </List>
    );
}
