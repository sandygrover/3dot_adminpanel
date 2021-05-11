import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react'
import React,{useState} from 'react'
import Modal from '../modal/Modal'
const UserProfile = () => {
  const [show,setShow] = useState(false)
  return (
    <CRow>
      <CCol xl={10}>
        <CCard>
          <CCardHeader>
            <h4>Profile <span className="btn btn-primary" onClick={() => setShow(true)} style={{float:'right'}}>Edit</span></h4>
            <Modal title="Edit profile" onClose={() => setShow(false)} show={show}>
              <form>
                  <div>
                      <label>Username</label>
                      <input type="text" className="form-control"/>
                  </div>
                  <div>
                      <label>Email</label>
                      <input type="email" className="form-control"/>
                  </div>
                  <div>
                      <label>Old Password</label>
                      <input type="password" className="form-control"/>
                  </div>
                  <div>
                      <label>New Password</label>
                      <input type="password" className="form-control"/>
                  </div>
                  <div>
                      <label>Verify Password</label>
                      <input type="password" className="form-control"/>
                  </div>
                  <div>
                      <label>Contact</label>
                      <input type="text" className="form-control"/>
                  </div>
              </form>
            </Modal>
            <small className="text-muted"> </small>            
          </CCardHeader>
          <CCardBody>
            <table className="table table-striped">
              <tbody>
                <tr>
                  <th>Username</th>
                  <td>John</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>john@gmail.com</td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>St.123</td>
                </tr>
                <tr>
                  <th>Contact</th>
                  <td>7485968574</td>
                </tr>
              </tbody>
            </table>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default UserProfile
