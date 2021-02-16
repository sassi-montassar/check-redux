import React , {useState} from 'react'
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {editTask} from "../../JS/actions/actionsTask"

const EditTask = ({el}) => {
  const [show, setShow] = useState(false);
  const [editInput, setEditInput] = useState(el.text);

  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const edit=()=>{
    dispatch(editTask(el.id, editInput));
    
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <input
            type="text"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            value={editInput}
            onChange={(e) => setEditInput(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary"onClick={handleClose} >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              editInput ? edit(): alert('There is no task !')
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditTask
