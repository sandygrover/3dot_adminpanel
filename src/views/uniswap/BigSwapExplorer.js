import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react'

const BigSwapExplorer = () => {
  
  return (
    <CRow>
      <CCol xl={12}>
        <CCard className="chgdiv">
          <CCardHeader>
            <h4>Big Swap Explorer</h4>
            <small className="text-muted"> </small>
          </CCardHeader>
          <CCardBody>
            <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Pair</th>
                    <th>Time</th>
                    <th>Type</th>
                    <th>Quantity</th>
                    <th>Total ETH</th>
                    <th>Total USD</th>
                    <th>Change</th>
                  </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>ART</td>
                        <td>7485968574</td>
                        <td>Buy</td>
                        <td>11,000</td>
                        <td>16.89</td>
                        <td>$13,17963</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default BigSwapExplorer
