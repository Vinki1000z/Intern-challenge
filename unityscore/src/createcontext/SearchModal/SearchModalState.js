import React, { useState } from "react";
// import './Style.css';
import SearchModalContext from "./SearchModalContext";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
export default function SearchModalState(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <SearchModalContext.Provider value={{ handleShow }}>
        {
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Search Users</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {" "}
              <form className="form-inline">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  style={{borderRadius:"20px"}}
                />
              </form>
            </Modal.Body>
            {/* i will append all the similar users here */}
            {/* <Modal.Footer>
               <Button variant="secondary" onClick={handleClose}>
                 Close
               </Button>
               <Button variant="primary" onClick={handleClose}>
                 Search
               </Button>
             </Modal.Footer> */}
          </Modal>
        }

        {props.children}
      </SearchModalContext.Provider>
    </>
  );
}
