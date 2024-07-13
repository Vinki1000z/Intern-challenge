import React, { useState } from "react";
import Post from "./Post";
import EditModal from "./EditModal";
import PostTable from "./PostTable";
export default function UserPost(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showPost, setShowPost] = useState(false);
  const [showTable, setShowTable] = useState(true);
  const setting = (val1, val2) => {
    setShowPost(val1);
    setShowTable(val2);
  };
  return (
    <>
      <div className="card shadow border-0 mb-7" style={{ backgroundColor: props.style ? "#f5f9fc" : "white" }}>
        <div className="card-header">
          <h5 className="mb-0">Your Post</h5>
        </div>
        <div
          className="table-responsive"
          style={
            showPost
              ? {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }
              : {}
          }
        >
          {showTable && (
            <table className="table table-hover table-nowrap">
              <thead className="thead-light">
                <tr>
                  <th scope="col">title</th>
                  <th scope="col">Date</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
             <PostTable handleShow={handleShow} setting={setting}/>
              </tbody>
            </table>
          )}
          {showPost && (
            <Post
              width={"40rem"}
              showUpdate={true}
              showPost={showPost}
              setting={setting}
            />
          )}
        </div>
      </div>
      {show && <EditModal handleClose={handleClose} show={show} />}
    </>
  );
}
