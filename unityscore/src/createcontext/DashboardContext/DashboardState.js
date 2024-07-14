import React, { useState } from "react";
import DashboardContext from "./DashboardContext";
const network = "http://localhost:5000";

export default function DashboardState(props) {
  // posts state
  const [Posts, setPost] = useState([]);
  // isLikedPost
  const [isLiked, setIsLiked] = useState();
  //  Section For Post //

  //   1. For showing All Post
  const AllPost = async () => {
    const response = await fetch(`${network}/api/post/showAllPost`, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY4YzIyYTA1ZGM0NDRhZDU0YmYyYmU2In0sImlhdCI6MTcyMDk2Njc3MX0.Bl95qcYeZEXqpGD88fCmJZ3IaVQfshRofyjRlv3-SxI",
      },
    });
    const data = await response.json();
    //  need to add the alert if any error sommes in loading the data;
    setPost(data.posts);
    // console.log(Posts);
  };
  //  Section For Comments

  //  Section For Likes  //

  //  1.Like post
  const LikePost = async (postId) => {
    const response = await fetch(`${network}/api/like/${postId}/LikePost`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY4YzIyYTA1ZGM0NDRhZDU0YmYyYmU2In0sImlhdCI6MTcyMDk2Njc3MX0.Bl95qcYeZEXqpGD88fCmJZ3IaVQfshRofyjRlv3-SxI",
      },
    });
    const data = await response.json();
    //  need to add the alert if any error sommes in loading the data;
    // console.log(data);
    setIsLiked(data.liked);
  };

  //  2.Dislike post

  const UnLikePost = async (postId) => {
    // console.log("states unlinked")
    const response = await fetch(`${network}/api/like/${postId}/unLikePost`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY4YzIyYTA1ZGM0NDRhZDU0YmYyYmU2In0sImlhdCI6MTcyMDk2Njc3MX0.Bl95qcYeZEXqpGD88fCmJZ3IaVQfshRofyjRlv3-SxI",
      },
    });
    const data = await response.json();
    //  need to add the alert if any error sommes in loading the data;
    setIsLiked(data.unliked);
  };

  // 3. is liked post
  const IsLikedPost = async (postId) => {
    const response = await fetch(`${network}/api/like/${postId}/isLikePost`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY4YzIyYTA1ZGM0NDRhZDU0YmYyYmU2In0sImlhdCI6MTcyMDk2Njc3MX0.Bl95qcYeZEXqpGD88fCmJZ3IaVQfshRofyjRlv3-SxI",
      },
    });
    const data = await response.json();

    return data.liked;
  };

  //  Section For the Profile of user //

  //  Section For user Specific Post //
  return (
    <>
      <DashboardContext.Provider
        value={{
          // 1. Post(state) , Allpost , CreatePost
          Posts,
          AllPost,

          //   2. Likepost , unlikepost  , islikde
          LikePost,
          UnLikePost,
          isLiked,
          IsLikedPost,


        }}
      >
        {props.children}
      </DashboardContext.Provider>
    </>
  );
}
