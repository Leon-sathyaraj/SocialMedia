import "./Post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useState , useContext} from "react";
import moment from "moment";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { makeRequest } from "../../../axios.js"
import { AuthContext } from "../../context/auth.jsx";

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [updatedPost, setUpdatedPost] = useState({desc: "", img: ""});
  const [updateMode, setUpdateMode] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const { isLoading, error, data } = useQuery(["likes", post.id], () =>
    makeRequest.get("/likes?postId=" + post.id).then((res) => {
      return res.data;
    })
  );

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (liked) => {
      if (liked) return makeRequest.delete("/likes?postId=" + post.id);
      return makeRequest.post("/likes", { postId: post.id });
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["likes"]);
      },
    }
  );
  const deleteMutation = useMutation(
    (postId) => {
      return makeRequest.delete("/posts/" + postId);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["posts"]);
      },
    }
  );

  const handleLike = () => {
    mutation.mutate(data.includes(currentUser.id));
  };

  const handleUpdate = () => {
    if (updateMode) {
      makeRequest.put(`/posts/${post.id}`, updatedPost).then((res) => {
        setUpdateMode(false);
        queryClient.invalidateQueries(["posts"]);
      }).catch((err) => {
        console.log(err);
      });
    } else {
      setUpdateMode(true);
      setUpdatedPost({desc: post.desc, img: post.img});
    }
  }

  const handleDelete = () => {
    deleteMutation.mutate(post.id);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedPost({ ...updatedPost, [name]: value });
  };

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={"/upload/"+post.profilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">{moment(post.createdAt).fromNow()}</span>
            </div>
          </div>
          <MoreHorizIcon onClick={() => setMenuOpen(!menuOpen)} />
          {menuOpen && post.userId === currentUser.id && (
            <>
            <button onClick={handleUpdate}>
  {updateMode ? "Save" : "Update"}
</button>
    <button onClick={handleDelete}>Delete</button>
            </>
          )}
        </div>
        {updateMode ? (
          <div className="updateForm">
            <textarea
              name="desc"
              placeholder="What's on your mind?"
              value={updatedPost.desc}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="img"
              placeholder="Image URL (optional)"
              value={updatedPost.img}
              onChange={handleInputChange}
            />
          </div>
        ) : (
          <>
            <div className="postDesc">{post.desc}</div>
            {post.img && <img src={"/upload/"+post.img} alt="" />}
          </>
        )}
        <div className="actions">
        <div className="action" onClick={() => setCommentOpen(true)}>
            <TextsmsOutlinedIcon />
            <span>{data && data.length ? data.length : 0} likes</span>

          </div>
          <div className="action">
            {data && data.includes(currentUser.id) ? (
              <FavoriteOutlinedIcon
                className="liked"
                onClick={handleLike}
              />
            ) : (
              <FavoriteBorderOutlinedIcon onClick={handleLike} />
            )}
            <span>{data ? data.length : 0} likes</span>
          </div>
          <div className="action">
            <ShareOutlinedIcon />
            <span>Share</span>
          </div>
        </div>
        {commentOpen && <Comments postId={post.id} />}
      </div>
    </div>
  );
};

export default Post;
