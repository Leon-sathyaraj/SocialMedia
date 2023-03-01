import React from "react";
import Post from "../post/Post";

const Posts = () => {
  const post = [
    {
      id: 1,
      name: "Leon",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/15311317/pexels-photo-15311317.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      desc: "Hello testing 123 part 1",
      img: "https://images.pexels.com/photos/12145392/pexels-photo-12145392.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 2,
      name: "Leon",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/15311317/pexels-photo-15311317.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      desc: "Hello testing 123 part 2",
      img: "https://images.pexels.com/photos/12145392/pexels-photo-12145392.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 3,
      name: "Leon",
      userId: 3,
      profilePic:
        "https://images.pexels.com/photos/15311317/pexels-photo-15311317.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      desc: "Hello testing 123 part 3",
      img: "https://images.pexels.com/photos/12145392/pexels-photo-12145392.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 4,
      name: "Leon",
      userId: 4,
      profilePic:
        "https://images.pexels.com/photos/15311317/pexels-photo-15311317.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      desc: "Hello testing 123 part 4",
      img: "https://images.pexels.com/photos/12145392/pexels-photo-12145392.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 5,
      name: "Leon",
      userId: 5,
      profilePic:
        "https://images.pexels.com/photos/15311317/pexels-photo-15311317.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      desc: "Hello testing 123 part 5",
      img: "https://images.pexels.com/photos/12145392/pexels-photo-12145392.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
  ];
  return (
    <div className="posts">
      {post.map((posts) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
