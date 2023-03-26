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



export default function Posts({ Props }) {

    let data = Array.from(Props)
    console.log("data form postsclass" + Props);
     

    return (

        <div>
            <p></p>

            {
                data.map(row =>


                    <div id="Post-UI-Card">

                        <Stack id="Poster-details" direction="row" spacing={2}>
                            <Avatar id="Post-Avatar"  src="/static/images/avatar/1.jpg" />
                            <p id='Post-UserName'>{row.profiles.username}</p>
                        </Stack>


                        <Card id="Post-img">

                            <CardMedia

                                component="img"
                                alt="code red"
                                sx={{ height: 200, objectFit: "contain" }}
                                image={row.Post_Image}
                                title={row.Post_title}
                            />

                        </Card>


                        <p id="Post-title">
                            {row.Post_title}
                        </p>

                        <p id="Post-content">
                            {row.Post_Content}
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

                        <hr></hr>

                    </div>



                )
            }


        </div>
    );
}





