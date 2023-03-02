import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../post/Post.scss'
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Comments from '../comments/Comments';

const Post = ({post}) => {
    const liked = false;
    const [comments, setComments] = useState(false)

    return (
        <div className='post'>
        <div className='container'>
        <div className='user'>
            <div className='userInfo'>
            <img src={post.img} alt=''/>
            <div className='details'>
                <Link to={`/profile/${post.userId}`} style={{textDecoration: "none", color:"inherit"}}>
                <span className='name'>{post.name}</span>          
                    </Link>
<span className='date'> 1 min ago</span>
                </div>
            </div>
            <MoreHorizIcon/>
        </div> 
        <div className='content'>
        <p>{post.desc}</p>
        <img src={post.img} alt=''/>
        </div>
            <div className='info'>
            <div className='item'>
            {liked ?<FavoriteOutlinedIcon/> : <FavoriteBorderOutlinedIcon/>}
            19 likes
             </div>
             <div className='item' onClick={()=> setComments(!comments)}>
             <TextsmsOutlinedIcon/>
       15 comments
             </div>
             <div className='item'>
             <ShareOutlinedIcon/>
       Share
             </div>
        </div>
        {comments && <Comments/>}
        </div>
        </div>
    );
};

export default Post;