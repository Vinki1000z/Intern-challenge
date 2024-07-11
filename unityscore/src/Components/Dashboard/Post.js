import React from "react";

export default function Post(props) {
  return (
    <>
      <div
        className="my-10"
        style={
          props.showUpdate ? { display: "flex", flexDirection: "row" } : {}
        }
      >
        <div
          className="card"
          style={{
            maxWidth: props.width,
            backgroundColor: "#f5f9fc",
            margin: "20px",
            border: "2px solid #ECEEF3",
          }}
        >
          {/* Header */}
          <div className="postHeader">
            <a href="/" className="nav-link d-flex align-items-center">
              <div className="me-4">
                <div className="position-relative d-inline-block text-white">
                  <img
                    alt="Pic"
                    src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                    className="avatar rounded-circle postProfilePic"
                    style={{ width: "58px", height: "58px" }}
                  />
                  <span className="position-absolute bottom-2 end-2 transform translate-x-1/2 translate-y-1/2 border-2 border-solid border-current w-3 h-3 bg-success rounded-circle"></span>
                </div>
              </div>
              <div>
                <span
                  className="d-block text-sm font-semibold"
                  style={{ fontSize: "1rem" }}
                >
                  Marie Claire
                </span>
                <span className="d-block text-xs text-muted font-regular">
                  Paris, FR
                </span>
              </div>
            </a>
          </div>
          {/* Body */}
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          {/* img Box */}
          <div className="imgBox container">
            <img
              src="./img/Dashboard/ss.png"
              className="card-img-top"
              style={{ borderRadius: "15px" }}
              alt="..."
            />
          </div>
          {/* card-bottom */}
          <div
            className="container card-bottom"
            style={{ margin: "13px 0px 11px 0px" }}
          >
            <img
              src="./img/Dashboard/like.png"
              className="card-img-top img-fluid"
              alt="..."
              style={{ width: "30px", height: "33px", marginRight: "15px" }}
            />
            <img
              src="./img/Dashboard/comment.png"
              className="card-img-top"
              alt="..."
              style={{ width: "30px", height: "35px" }}
            />
          </div>
        </div>
        {props.showUpdate && (
          <i
            className="fa fa-close"
            onClick={() => props.setting(false, true)}
            style={{ cursor: "pointer" }}
          ></i>
        )}
      </div>
    </>
  );
}
