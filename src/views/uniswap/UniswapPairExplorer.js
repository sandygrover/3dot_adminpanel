import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react'
import MainChartExample from '../charts/MainChartExample.js'
const UniswapPairExplorer = () => {
  
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

export default UniswapPairExplorer
