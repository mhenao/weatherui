import React, { useState, useEffect } from 'react';

import { Grid, makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import NestedList from './NestedList';
import News from './News';
import { Request } from './proxy/proxy'

const useStyles = makeStyles((theme) => ({
    homeIcon: {
        color: theme.palette.primary.main,
        fontSize: '500%'
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(8),
    },
    linkAction: {
        textDecoration: 'none'

    },
    borderGrid: {
        borderBottom: `1px solid ${theme.palette.grey[400]}`
    }
}))


const options = ['Bogota', 'New york'];


const Home = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(options[0]);
    const [inputValue, setInputValue] = useState('');

    const [dataCity, setDataCity] = useState({})

    useEffect(async () => {
        if (dataCity) {
            await loadDataCity('Bogota')
            
        }
    }, [])



    const loadDataCity = async (cityName) => {
        console.log(cityName)
        const data = {
            "city_name": cityName,
            "city_info": "Bogota",
            "created_at": "2021-10-10"
        }
        const apiResponse = await Request({
            method: "post",
            endpoint: "api/create",
            data: data
        });
        console.log(apiResponse)
        await setDataCity(apiResponse)
    }

    return (
        <React.Fragment>
            <CssBaseline />
            
            <Container maxWidth="lg" >
                <div className='row' style={{ borderColor: '#ccc' }}>
                    <Grid container
                        spacing={7}
                        className={classes.content}
                    >
                        <Grid item xs={12} md={12} sm={12}>
                            <Autocomplete
                                value={value}
                                onChange={(event, newValue) => {
                                    loadDataCity(newValue);
                                    setValue(newValue);
                                }}
                                inputValue={inputValue}
                                onInputChange={(event, newInputValue) => {
                                    setInputValue(newInputValue);
                                }}
                                id="controllable-states-demo"
                                options={options}
                                style={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Seleccionar ciudad" variant="outlined" />}
                            />
                        </Grid>
                        <Grid item xs={12} md={8} sm={8}>
                            <Container maxWidth="xl" >
                                <div className='row' style={{ borderColor: '#ccc' }}>
                                    <Grid container
                                        spacing={2}
                                        className={classes.content}
                                    >

                                        {dataCity.news ?
                                            <News
                                            newsState={dataCity.news}
                                            classes={classes}
                                            />
                                            :
                                            <></>
                                        }

                                    </Grid>
                                </div >
                            </Container>
                        </Grid>
                        <Grid item xs={4} md={1} sm={1}>

                        </Grid>
                        <Grid item xs={12} md={3} sm={3} >
                            {dataCity.weather ?
                                <NestedList
                                    weather={dataCity.weather}
                                />
                                :
                                <></>
                            }
                        </Grid>
                    </Grid>
                </div >
            </Container>
        </React.Fragment>

    )
}

export default Home
