/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ConfirmDialog = ({ deleteYesHandler, deleteNoHandler }) => {
  const onYesClick = () => {
    deleteYesHandler();
  };
  const onNoClick = () => {
    deleteNoHandler();
  };
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Deletion Confrimation</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Do you really want to delete this ?</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onNoClick}>
            No
          </Button>
          <Button variant="primary" onClick={onYesClick}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default ConfirmDialog;
