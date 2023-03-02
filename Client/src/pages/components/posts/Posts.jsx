import React from "react";
import Post from "../post/Post";

const Posts = () => {
  const posts = [
    {
      id: 1,
      name: "Leon",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Hello testing 123 part 1",
      img: "https://images.pexels.com/photos/15096077/pexels-photo-15096077.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 2,
      name: "Leon",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Hello testing 123 part 2",
      img: "https://images.pexels.com/photos/2028261/pexels-photo-2028261.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 3,
      name: "Leon",
      userId: 3,
      profilePic:
        "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Hello testing 123 part 3",
      img: "https://images.pexels.com/photos/11116449/pexels-photo-11116449.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 4,
      name: "Leon",
      userId: 4,
      profilePic:
        "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Hello testing 123 part 4",
      img: "https://images.pexels.com/photos/13764930/pexels-photo-13764930.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 5,
      name: "Leon",
      userId: 5,
      profilePic:
        "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Hello testing 123 part 5",
      img: "https://images.pexels.com/photos/9241614/pexels-photo-9241614.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
  ];
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
