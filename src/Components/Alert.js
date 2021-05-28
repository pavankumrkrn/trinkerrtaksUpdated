import React from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

const Alert = (props) => {
  return (
    <Modal isOpen={props.modal} toggle={props.toggle}>
      <ModalBody>
        <p className="h5 text-center mt-5 mb-3">{props.text}</p>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={props.toggle}>
          Ok
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default Alert;
