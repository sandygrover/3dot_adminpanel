import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
} from '@coreui/react'

const Wallet = () => {
  
  return (
    <CRow>
      <CCol xl={10}>
        <CCard>
          <CCardHeader>
            <h4>Wallet</h4>
            <small className="text-muted"> </small>
          </CCardHeader>
          <CCardBody>
            <div class="card mb-5">
              <div class="card-body text-center">
                <img alt="metamask" src={'metamask-fox.svg'}/>
                <h5 class="text-success mb-3"> Verified Wallet </h5>
                <div class="align-middle mb-2">
                  <h5 class="pl-3 overflow-hidden text-nowrap p-1" style={{'text-overflow': 'ellipsis'}}>0xc0447e7f92026e8e7aa2118586b6e555640c9845</h5>
                </div>
                <h5 class="mb-4"> Balance: 0 DEXT </h5>
                <div>
                  <CButton color="success">Connect</CButton>
                </div>
              </div>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Wallet
