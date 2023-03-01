import React,{useContext} from 'react';
import '../stories/Stories.scss'
import { AuthContext } from '../../context/auth';

const Stories = () => {
    const {currentUser} = useContext(AuthContext)
    // placeholder images

    const stories = [
        {
            id:1,
            name: 'Leon',
            img: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            id:2,
            name: 'Sathya',
            img: "https://images.pexels.com/photos/15419113/pexels-photo-15419113.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
        {
            id:3,
            name: 'Raj',
            img: "https://images.pexels.com/photos/15419113/pexels-photo-15419113.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
        {
            id:4,
            name: 'Thever',
            img: "https://images.pexels.com/photos/15419113/pexels-photo-15419113.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
    ]
    return (
        <div className="stories">
          <div className="story">
              <img src={currentUser.profilePic} alt="" />
              <span>{currentUser.name}</span>
              <button>+</button>
            </div>
          {stories.map(story=>(
            <div className="story" key={story.id}>
              <img src={story.img} alt="" />
              <span>{story.name}</span>
            </div>
          ))}
        </div>
      )
    }

export default Stories;