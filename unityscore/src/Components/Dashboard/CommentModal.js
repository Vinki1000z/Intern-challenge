import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import DashboardContext from "../../createcontext/DashboardContext/DashboardContext";

export default function CommentModal(props) {
  const { CreateComment,DeleteComment } = useContext(DashboardContext);
  const [newComment, setNewComment] = useState({ content: "" });

  const handleonchange = (e) => {
    setNewComment({ ...newComment, [e.target.id]: e.target.value });
  };

  const handleonSubmit = (e) => {
    e.preventDefault();
    CreateComment(props.postId, newComment);
    setNewComment({ content: "" });
  };
  const handleonDelete=()=>{
    // DeleteComment(props.postId,props.comment._id)
    console.log("clicked");
  }

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose} className="mb-0">
        <Modal.Header closeButton>
          <Modal.Title>Comments</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3 my-3">
            <label htmlFor="content" className="form-label mb-0">
              Add Comment
            </label>
            <input
              type="text"
              className="form-control"
              id="content"
              name="content"
              value={newComment.content}
              onChange={handleonchange}
              placeholder="Enter Your Comment"
            />
          </div>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleonSubmit}>
             Post Comment
            </Button>
          </Modal.Footer>
          <div className="mb-3 my-7">
            <label
              htmlFor="exampleFormControlTextarea1"
              className="form-label mb-0"
            >
              All Comments
            </label>
            <div>
              {props.comments === undefined ? (
                <p>No comments Yet</p>
              ) : (
                <ul style={{ listStyleType: "none", padding: "0px" }}>
                  {props.comments.map((comment) => (
                    <li
                      key={comment._id}
                      className="nav-item"
                      style={{ borderBottom: "2px solid rgb(236, 238, 243)" }}
                    >
                      <div
                        className="nav-link d-flex align-items-center my-2"
                        style={{ padding: "0px" }}
                      >
                        {/* Profile Info */}
                        <div className="me-4">
                          <div className="position-relative d-inline-block text-white">
                            <img
                              alt="Pic"
                              src="./img/Dashboard/profilePic.jpg"
                              className="avatar rounded-circle"
                            />
                            <span className="position-absolute bottom-2 end-2 transform translate-x-1/2 translate-y-1/2 border-2 border-solid border-current w-3 h-3 bg-success rounded-circle"></span>
                          </div>
                        </div>
                        <div>
                          <span className="d-block text-sm font-semibold">
                            {comment.userId.name}
                          </span>
                        </div>
                        <i className="fa fa-trash" aria-hidden="true" onClick={handleonDelete} style={{cursor:"pointer"}}></i>
                      </div>
                      {/* Comment Text */}
                      <div>{comment.content}</div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
