import React,{useState} from "react";
import UserPost from "./UserPost";
import Card from "./Card";
import EditUserName from "./EditUserName";
export default function Profile() {
  // for setting the bg color
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { style } = true;
  return (
    <>
      <div className="container">
        {/*  profile view */}
        <div
          className="container profile my-6 "
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div className="me-4">
            <div className="position-relative d-inline-block text-white">
              <img
                alt="Pic"
                src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                className="avatar rounded-circle"
                style={{ width: "100px", height: "100px" }}
              />
              <span className="position-absolute bottom-2 end-2 transform translate-x-1/2 translate-y-1/2 border-2 border-solid border-current w-3 h-3 bg-success rounded-circle"></span>
            </div> 
          
            <i className="fas fa-edit" style={{position:"absolute",cursor:'pointer'}}  variant="primary"
                      onClick={handleShow}></i>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <span
              className="d-block large-font mb-0"
              style={{ fontSize: "20px" }}
            >
              Marie Claire
            </span>
            <span
              className="d-block text-muted font-regular mb-0"
              style={{ fontSize: "16px" }}
            >
              Paris, FR
            </span>
          </div>
        </div>
        {/* score view */}
        <Card style={{ style }} />
        {/* your post */}
        <UserPost style={{ style }} />
      </div>
      {show && <EditUserName handleClose={handleClose} show={show} />}
    </>
  );
}
