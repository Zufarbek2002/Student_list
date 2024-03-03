import { Component } from 'react'
import { ButtonGroup } from 'react-bootstrap'
import StudentList from './StudentList'
import ModalComp from './ModalComp'

export class Searching extends Component {
    constructor(props) {
      super(props)

      this.state = {
        addModal: false,
        students: [
            {
                id: 1,
                firstName: 'John',
                lastName: 'Doe',
                group: 'React N45',
                doesWork: true,
            },
            {
                id: 2,
                firstName: 'John',
                lastName: 'Doe',
                group: 'React N45',
                doesWork: true,
            }
        ],
      }
    }

    addCloseModal = () => this.setState({
      addModal:false
    },
    );
    addOpenModal = () => this.setState({addModal:true});

  render() {
    const {students, addModal} = this.state;
    const {addCloseModal, addOpenModal} = this
    return (
        <div className='container py-4'>
        <ButtonGroup className='w-100 d-flex gap-3'>
        <input type="text" className='form-control w-70 p-2' placeholder='Searching'/>
        <select name="group" id="group" className='form-select w-auto'>
            <option value="All">All</option>
            <option value="React N34">React N34</option>
            <option value="React N35">React N35</option>
            <option value="React N45">React N45</option>
        </select>
        <button className='btn btn-outline-success w-auto' onClick={addOpenModal}>Add</button>
        </ButtonGroup>
        <StudentList students = {students}/>
        <ModalComp addCloseModal={addCloseModal} addModal={addModal}/>
      </div>
    )
  }
}

export default Searching