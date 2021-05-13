import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react'
const PancakeTrendingPairs = () => {
  
  return (
    <CRow>
      <CCol xl={12}>
        <CCardHeader>
            <h4>Trending Pairs</h4>
            <small className="text-muted"> </small>
        </CCardHeader>
        <br/>
        <CCard className="chgdiv">
          <CCardBody>
            <table className="table table-striped">
                <thead>
                  <tr>
                    <th style={{width: '100px'}}>Ranking</th>
                    <th>Name</th>
                  </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Cake</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>FEG</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>wGOLD</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>EarnX</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>TACO</td>
                    </tr>
                </tbody>
            </table>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default PancakeTrendingPairs
