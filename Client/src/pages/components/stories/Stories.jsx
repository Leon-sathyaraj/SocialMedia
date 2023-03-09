import "./Stories.scss"


const Stories = () => {


  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "Cookie Monster",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmB1zFXJARyKx5aw5GW5Co9YP38-PzZvuP3Q&usqp=CAU",
    },
    {
      id: 2,
      name: "Bert",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJfQW2UzRPjmSGRxdfDqn43srhwFH3--hHsFX3AGw4MzFIxZ-fZZAgLjZtTWdcXTEjHys&usqp=CAU",
    },
    {
      id: 3,
      name: "Elmo",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0CPAn27JdFxI2rC81uDucTDsDS4EuV62T_g&usqp=CAU",
    },
    {
      id: 4,
      name: "Big Bird",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmZIRaG-BdHMAQc3qw-TxsY0nB5rDsV_LEcQ&usqp=CAU",
    },
  ];

  return (
    <div className="stories">
      {/* <div className="story">
          {/* <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span> */}
          {/* <button>+</button> */}
        {/* </div> */} 
      {stories.map(story=>(
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories