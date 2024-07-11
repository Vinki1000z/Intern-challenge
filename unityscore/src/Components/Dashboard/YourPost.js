import React, { useState } from "react";
import Post from "./Post";
export default function YourPost() {
  const [showPost, setShowPost] = useState(false);
  const [showTable, setShowTable] = useState(true);
  const setting = (val1, val2) => {
    setShowPost(val1);
    setShowTable(val2);
  };
  return (
    <>
      <div className="card shadow border-0 mb-7">
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
                <tr>
                  {/* here */}
                  <td>
                    <img
                      alt="..."
                      src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                      className="avatar avatar-sm rounded-circle me-2"
                    />
                    <a className="text-heading font-semibold" href="/">
                      Robert Fox
                    </a>
                  </td>
                  <td>Feb 15, 2021</td>
                  {/* <td>
                  <img
                    alt="..."
                    src="https://preview.webpixels.io/web/img/other/logos/logo-1.png"
                    className="avatar avatar-xs rounded-circle me-2"
                  />
                  <a className="text-heading font-semibold" href="/">
                    Dribbble
                  </a>
                </td> */}
                  {/* <td>$3.500</td> */}
                  {/* <td>
                  <span className="badge badge-lg badge-dot">
                    <i className="bg-success"></i>Scheduled
                  </span>
                </td> */}
                  <td className="text-end">
                    <button
                      href="/"
                      onClick={() => setting(true, false)}
                      className="btn btn-sm btn-neutral mx-2"
                    >
                      View
                    </button>
                    <button href="/" className="btn btn-sm btn-neutral mx-2">
                      Edit
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-square btn-neutral text-danger-hover"
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          )}
          {showPost && <Post width={"40rem"} showUpdate={true}  showPost={showPost} setting={setting}/>}
        </div>
        {/* <div className="card-footer border-0 py-5">
          <span className="text-muted text-sm">
            Showing 10 items out of 250 results found
          </span>
        </div> */}
      </div>
    </>
  );
}
//  how i will bring data and append them and view them
