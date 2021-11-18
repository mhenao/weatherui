import React, { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const News = ({ newsState,classes }) => {
    const [cityNews, setCityNews] = useState()

    useEffect(() => {
        setCityNews(newsState.sources)
    }, [newsState])


    return (
        <>

            <Grid container
                spacing={2}
            >
                <Grid item xs={12} md={12} sm={12}>
                    <h1>Noticias</h1>
                </Grid>

                <Grid item xs={12} md={12} sm={12}>
                    {

                        cityNews ?

                            cityNews.map((item,index) => (
                                <>
                                    <Typography variant="h4" component="h4">
                                        {cityNews[index].name}
                                    </Typography>
                                    <div>
                                    {cityNews[index].description}
                                      </div>

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

export default News;