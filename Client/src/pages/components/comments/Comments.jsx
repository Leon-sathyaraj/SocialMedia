import "./Comments.scss";
import { useContext } from "react";
import { AuthContext } from '../../context/auth.jsx';

const Comments = () => {
  const { currentUser } = useContext(AuthContext);

  //Dummy comments
  const comments = [
    {
      id: 1,
      desc: "Hello testing 123 part 1",
      name: "Luara",
      userId: 1,
      profilePicture:
        "https://images.pexels.com/photos/9241614/pexels-photo-9241614.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 2,
      desc: "Hello testing 123 part 2",
      name: "Kenny",
      userId: 2,
      profilePicture:
        "https://images.pexels.com/photos/images/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
        id: 3,
        desc: "Hello testing 123 part 3",
        name: "Mark",
        userId: 3,
        profilePicture:
          "https://images.pexels.com/photos/images/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      },
      {
        id: 4,
        desc: "Hello testing 123 part 4",
        name: "Dion",
        userId: 4,
        profilePicture:
          "https://images.pexels.com/photos/images/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      },
      {
        id: 5,
        desc: "Hello testing 123 part 5",
        name: "Leon",
        userId: 5,
        profilePicture:
          "https://images.pexels.com/photos/images/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      }
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;