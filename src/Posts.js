import * as React from 'react';
import './App.css';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


export function Posts({ Props }) {

    let data = Array.from(Props)
    console.log("data form postsclass" + Props);

    return (

        <div>

            

            {
                data.map(row =>

                    <div id="Post-UI-Card">
                       
                        <Stack direction="row" spacing={2}>
                        <Avatar id="Post-Avatar" alt="Gachibowli dhiwakar" src="/static/images/avatar/1.jpg" />
                        <p id='Post-UserName'>Gachibowli Diwakar</p>
                        </Stack>
                        
                        
                        <Card>
                            <CardMedia id="Post-img"
                                component="img"
                                alt="green iguana"
                                sx={{ height: 180 }}
                                image={row.image}
                                title={row.Title}
                            />
                        </Card>


                        <p id="Post-title">
                            {row.Title}
                        </p>

                        <p id="Post-content">
                            {row.content}
                        </p>

                        <div id="Post-buttons">
                            <IconButton color="primary" aria-label="like picture" component="label">

                                <FavoriteBorderIcon />

                            </IconButton>


                            <IconButton color="primary" aria-label="Comment" component="label">

                                <ChatBubbleOutlineIcon />

                            </IconButton>

                            <IconButton color="primary" aria-label="Comment" component="label">
                                <ArrowForwardIosIcon />

                            </IconButton>

                            
                        </div>
                      
                       
                    </div>

                )
            }
            
        </div>
    );
}





