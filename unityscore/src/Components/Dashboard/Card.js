import React from "react";

export default function Card() {
  
  return (
    <>
      <div className="row g-6 mb-6">
        <div className="col-xl-3 col-sm-6 col-12">
          <div className="card shadow border-0">
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                    Score
                  </span>
                  <span className="h3 font-bold mb-0">750</span>
                </div>
                <div className="col-auto">
                  <div className="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                    <i className="bi bi-credit-card"></i>
                  </div>
                </div>
              </div>
              <div className="mt-2 mb-0 text-sm">
                <span className="badge badge-pill bg-soft-success text-success me-2">
                  <a href="/">
                    <i
                      style={{ cursor: "pointer" }}
                      className="bi bi-info me-1"
                    ></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 col-12">
          <div className="card shadow border-0">
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                    Achievements
                  </span>
                  <span className="h3 font-bold mb-0">Gold</span>
                </div>
                <div className="col-auto">
                  <div className="icon icon-shape bg-primary text-white text-lg rounded-circle">
                    <i className="bi bi-people"></i>
                  </div>
                </div>
              </div>
              <div className="mt-2 mb-0 text-sm">
                <span className="badge badge-pill bg-soft-success text-success me-2">
                  <a href="/">
                    <i
                      style={{ cursor: "pointer" }}
                      className="bi bi-info me-1"
                    ></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
