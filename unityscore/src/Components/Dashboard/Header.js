import React, { useState } from "react";
import AddPost from "./AddPost";

import { Link} from "react-router-dom";
export default function Header() {
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = (val) => {
    setModalOpen(val);
  };
  return (
    <>
      <header className="bg-surface-primary border-bottom pt-6">
        <div className="container-fluid">
          <div className="mb-npx">
            <div className="row align-items-center">
              <div className="col-sm-6 col-12 mb-4 mb-sm-0">
                {/* Title */}
                <h1 className="h2 mb-0 ls-tight">Application</h1>
              </div>
              {/* Actions */}
              <div className="col-sm-6 col-12 text-sm-end fancy-btn open">
                <div className="mx-n1">
                  <a
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      setModalOpen(true);
                    }}
                    className="btn d-inline-flex btn-sm btn-primary mx-1"
                  >
                    <span className=" pe-2">
                      <i className="bi bi-plus"></i>
                    </span>
                    <span>Create Post</span>
                  </a>
                </div>
              </div>
            </div>
            {/* Nav */}
            <ul className="nav nav-tabs mt-4 overflow-x border-0">
              <li className="nav-item ">
                <Link to="/" className="nav-link active">
                  All Post
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/yourPost" className="nav-link font-regular">
                  Your Post
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link font-regular">
                  Search
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {modalOpen && <AddPost closeModal={closeModal} />}
      </header>
    </>
  );
}
