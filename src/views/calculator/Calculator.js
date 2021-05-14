import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react'
import CalculatorWidget from './CalculatorWidget'
//import ReactDOM from 'react-dom'

const Calculator = () => {
  /*const myelement = (
    <div>
      <script type="text/javascript" src="https://static.cryptorival.com/js/calcwidget.js"></script>
      <script type="text/javascript">
        showCalc('ethereum', '500', false, '0', 'f93', 'f93', 'f93', '4e9f15', '09c', 'f0ad4e', 'd9534f', 'f5f5f5', 'eee');
      </script>
    </div>
  );*/
  //ReactDOM.render(myelement, document.getElementById('calculator_widget'));
 
  return (
    <CRow>
      <CCol xl={10}>
        <CCard className="chgdiv">
          <CCardHeader>
            <h4>Calculator</h4>
          </CCardHeader>
          <CCardBody>
            <div id="calculator_widget">
              <CalculatorWidget/>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Calculator
