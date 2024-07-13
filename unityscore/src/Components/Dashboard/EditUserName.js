import React from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
export default function EditUserName(props) {
  return (
    <Modal show={props.show} onHide={props.handleClose} className="mb-0">
    <Modal.Header closeButton>
      <Modal.Title>Edit UserNmae </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {" "}
      <div className="mb-3 my-3">
        <label htmlFor="" className="form-label mb-0">
          UserName
        </label>
        <input
          type="text"
          className="form-control"
          id="Title"
          placeholder="Enter Your New User Name"
        />
      </div>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={props.handleClose}>
        Cancle
      </Button>
      <Button variant="primary" onClick={props.handleClose}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
  )
}
