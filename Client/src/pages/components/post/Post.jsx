import React from 'react';
import { Link } from 'react-router-dom';
import '../post/Post.scss'
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Post = ({post}) => {
    return (
        <div className='post'>
        <div className='user'>
            <div className='userInfo'>
            <div className='details'>
                <Link to={`/profile/${post.userId}`} style={{textDecoration: "none", color:"inherit"}}>
                    <span>{post.name}</span>
                </Link>
            </div>
            </div>
            <MoreHorizIcon/>
        </div> 
        <div className='content'>
            <div className='info'></div>
        </div>
        </div>
    );
};

export default Post;