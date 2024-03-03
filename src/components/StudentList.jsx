import { Component } from 'react'
import { Table } from 'react-bootstrap';

export class StudentList extends Component {
  render() {
    const { students } = this.props;
    return (
        <div className='container my-4'>
            <Table striped hover className='table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Group</th>
                        <th className='text-center'>Does work?</th>
                        <th className='text-end'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((student, i) => (
                            <tr key={student.id}>
                                <th>{i+1}</th>
                                <td>{student.firstName}</td>
                                <td>{student.lastName}</td>
                                <td>{student.group}</td>
                                <td className='text-center'>{student.doesWork ? '✔' : '❌'}</td>
                                <td className='d-flex gap-2 justify-content-md-end'>
                                    <button className='btn btn-primary'>Edit</button>
                                    <button className='btn btn-danger'>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
  }
}

export default StudentList