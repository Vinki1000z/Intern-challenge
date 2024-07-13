import React  from "react";
import UserPost from "./UserPost";
import Card from "./Card";
export default function Profile() {
    // for setting the bg color
    const {style}=true;
  return (
    <>
      <div className="container">
        {/*  profile view */}
        <div className="me-4">
                    <div className="position-relative d-inline-block text-white">
                      <img
                        alt="Pic"
                        src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                        className="avatar rounded-circle"
                      />
                      <span className="position-absolute bottom-2 end-2 transform translate-x-1/2 translate-y-1/2 border-2 border-solid border-current w-3 h-3 bg-success rounded-circle"></span>
                    </div>
                  </div>
                  <div>
                    <span className="d-block text-sm font-semibold">
                      Marie Claire
                    </span>
                    <span className="d-block text-xs text-muted font-regular">
                      Paris, FR
                    </span>
                  </div>
        {/* score view */}
        <Card style={{style}}/>
        {/* your post */}
        <UserPost style={{style}}/>

      </div>
    </>
  );
}
