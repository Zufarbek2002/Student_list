import { Component } from "react";
import { Button, Modal } from "react-bootstrap";

export class ModalComp extends Component {
  render() {
    const { addModal, addCloseModal } = this.props;
    return (
      <div>
        <Modal show={addModal} onHide={addCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Adding student</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label" >First name</label>
                <input type="text" name="firstName" id="firstName" className="form-control"/>
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">Last name</label>
                <input type="text" name="lastName" id="lastName" className="form-control"/>
              </div>
              <div className="mb-3">
                <label htmlFor="groupModal" className="form-label">Select group</label>
                <select
                  name="groupModal"
                  id="groupModal"
                  className="form-select w-100"
                >
                  <option value="React N34">React N34</option>
                  <option value="React N35">React N35</option>
                  <option value="React N45">React N45</option>
                </select>
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" name="check" id="check" className="form-check-input" />
                <label htmlFor="check" className="form-check-label">Does work?</label>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={addCloseModal}>
              Close
            </Button>
            <Button variant="primary" onClick={addCloseModal}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ModalComp;
