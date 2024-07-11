import React from "react";
import Post from "./Post";
export default function PostedPost() {
  return (
    <>
      <div className="card-header">
        <h5 className="mb-0">Posts</h5>
      </div>
      <div className="table-responsive" style={{ alignItems: "center" }}>
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Post/>
        </div>
      </div>
    </>
  );
}
