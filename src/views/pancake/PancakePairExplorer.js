import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react'
import MainChartExample from '../charts/MainChartExample.js'
const PancakePairExplorer = () => {
  
  return (
    <CRow>
      <CCol xl={12}>
        <CCardHeader>
            <h4>Pair Explorer</h4>
            <small className="text-muted"> </small>
        </CCardHeader>
        <br/>
        <CCard className="chgdiv">
          <CCardBody>
            <MainChartExample style={{height: '300px', marginTop: '40px'}}/>
          </CCardBody>
        </CCard>
        <CCard className="chgdiv2">
          <CCardBody>
            <table className="table table-striped">
                <thead>
                    <tr>
                      <th>Date</th>
                      <th>Type</th>
                      <th>Price (USD)</th>
                      <th>Total Cake</th>
                      <th>Total BNB</th>
                      <th>Total USD</th>
                      <th>Maker</th>
                      <th>Links</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>21-05-11 12:10:03</td>
                        <td>Sell</td>
                        <td>$35.65482279</td>
                        <td>0.6744</td>
                        <td>0.04</td>
                        <td>24.05</td>
                        <td>0xd041009304bac2f18c50c6471425fa9a90e80b59</td>
                        <td>Tx</td>
                    </tr>
                </tbody>
            </table>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default PancakePairExplorer
