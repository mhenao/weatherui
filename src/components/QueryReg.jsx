import React, { useState, useEffect } from 'react'
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Grid } from '@material-ui/core';

import SendIcon from '@material-ui/icons/Send';

const QueryReg = ({ recentQuery }) => {
    const [queryLog, setQueryLog] = useState([])

    useEffect(() => {
        setQueryLog(recentQuery)
        console.log(recentQuery)
    }, [recentQuery])
    return (
        <>
            <Grid container
                spacing={2}
            >
                <Grid item xs={12} md={12} sm={12}>
                    <h2>Ciudades consultadas</h2>
                </Grid>

                <Grid item xs={12} md={12} sm={12}>
                    {
                        queryLog ?

                            queryLog.map((item, index) => (
                                <>
                                    <ListItem button>
                                        <ListItemIcon>
                                            <SendIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Ciudad" />
                                        <ListItemText primary={item.city_name} />
                                    </ListItem>
                                </>
                            ))
                            :
                            <></>
                    }
                </Grid>
            </Grid>


        </>
    );
}

export default QueryReg;