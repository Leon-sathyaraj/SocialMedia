import "./Profile.scss";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../pages/components/posts/Posts.jsx"
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { makeRequest } from "../../axios.js";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.jsx";
import Update from "../../pages/components/update/Update.jsx";
import { useState } from "react";

const Profile = () => {
  const [openUpdate, setOpenUpdate] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const userId = parseInt(useLocation().pathname.split("/")[2]); 
  // gets user id from current URL path using useLocation hook and 
  //second element is selected which represents the user ID

  const { isLoading, data } = useQuery(["user"], () =>
    makeRequest.get("/users/find/" + userId).then((res) => {
      return res.data;
    })
  );
//uses useQuery hook to fetch user data from server using makeRequest function. Ids obtained from url
  const { isLoading: rIsLoading, data: relationshipData } = useQuery(
    ["relationship"],
    () =>
      makeRequest.get("/relationships?followedUserId=" + userId).then((res) => {
        return res.data;
      })
  );
// check relationship data if its in the array
  const queryClient = useQueryClient();

  const mutation = useMutation(
    (following) => {
      if (following)
        return makeRequest.delete("/relationships?userId=" + userId);
      return makeRequest.post("/relationships", { userId });
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["relationship"]);
      },
    }
  );

  const handleFollow = () => {
    mutation.mutate(relationshipData.includes(currentUser.id));
  };

  return (
    <div className="profile">
      {isLoading ? (
        "loading"
      ) : (
        <>
          <div className="images">
            <img src={"/upload/"+data.coverPic} alt="" className="cover" />
            <img src={"/upload/"+data.profilePic} alt="" className="profilePic" />
          </div>
          <div className="profileContainer">
            <div className="uInfo">
              <div className="left">
              </div>
              <div className="center">
                <span>{data.name}</span>
                <div className="info">
                  <div className="item">
                  </div>
                </div>
                {rIsLoading ? (
                  "loading"
                ) : userId === currentUser.id ? (
                  <button onClick={() => setOpenUpdate(true)}>Update</button>
                ) : (
                  <button onClick={handleFollow}>
                    {relationshipData.includes(currentUser.id)
                      ? "Following"
                      : "Follow"}
                  </button>
                )}
              </div>
              <div className="right">
                <EmailOutlinedIcon />
                <MoreVertIcon />
              </div>
            </div>
            <Posts userId={userId} />
          </div>
        </>
      )}
      {openUpdate && <Update setOpenUpdate={setOpenUpdate} user={data} />}
    </div>
  );
};

export default Profile;