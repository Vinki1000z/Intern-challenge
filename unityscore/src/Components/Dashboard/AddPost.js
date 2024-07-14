import React ,{useContext}from "react";
import DashboardContext from "../../createcontext/DashboardContext/DashboardContext";
export default function AddPost({ closeModal }) {
  const {  } = useContext(DashboardContext);
  return (
    <>
      <div
        className="card shadow mb-7 container"
        style={{ marginTop: "20px", backgroundColor: "#f5f9fc" ,width:"90%"}}
      >
        <div className="card-header">
          <h5 className="mb-0">Create Post</h5>
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
            {/* body */}
            <div className="mb-3 my-3" style={{ width: "80%" }}>
              <label htmlFor="" className="form-label mb-0">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="Title"
                placeholder="Enter Your Post Title"
              />
            </div>
            <div className="mb-3 my-3" style={{ width: "80%" }}>
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label mb-0"
              >
                Description
              </label>
              <textarea
                className="form-control"
                id="Description"
                rows="3"
                placeholder="Enter Your Post Description"
              ></textarea>
            </div>
            <div className="row mb-3 mb-0" style={{ alignItems: "center" }}>
              <label htmlFor="formFile" className="col-sm-2 col-form-label">
                Image
              </label>
              <div className="col-sm-10">
                <div className="mb-3 my-3">
                  <input
                    className="form-control"
                    type="file"
                    id="formFile"
                    accept="image/*" // Limit to only image files
                  />
                </div>
              </div>
            </div>
            {/* footer */}
            <div className="footer my-6">
              <button
                type="button"
                onClick={() => {
                  closeModal(false);
                }}
                className="btn btn-danger"
              >
                Cancle
              </button>
              <input
                className="btn btn-primary mx-3"
                type="submit"
                value="Post"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
