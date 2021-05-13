import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react'

const UniswapPoolExplorer = () => {
  
  return (
    <CRow>
      <CCol xl={12}>
        <CCard className="chgdiv">
          <CCardHeader>
            <h4>Pool Explorer</h4>
            <small className="text-muted"> </small>
          </CCardHeader>
          <CCardBody>
            <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Token</th>
                    <th>Time</th>
                    <th>Action</th>
                    <th>Type</th>
                    <th>Token Price USD (ETH)</th>
                    <th>Total Value</th>
                    <th>Token Amount</th>
                    <th>ETH Amount</th>
                  </tr>                    
                </thead>
                <tbody>
                    <tr>
                        <td>7485968574</td>
                        <td>7485968574</td>
                        <td>7485968574</td>
                        <td>Buy</td>
                        <td>7485968574</td>
                        <td>7485968574</td>
                        <td>7485968574</td>
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

export default UniswapPoolExplorer
