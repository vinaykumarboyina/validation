import './App.css'
import {GrSquare,} from 'react-icons/gr'
import {GrCircleInformation} from 'react-icons/gr'
import {BiRegistered} from 'react-icons/bi'

const App = () => {
  return (
    <div className="app-container">
      <div className="responsive-container">
        <h1 className="validation-heading">Validation of Purchases-Corn CP</h1>
    <table>
      <tr >
        <th className="th">Product Brand</th>
        <th className="th">Committed Volume</th>
        <th className="th">Actuals</th>
      </tr>
      <tr>
        <th>Fungicide (optional)</th>
      </tr>
      <tr>
        <td>
          <div className="miravis-data-heading">Miravis Neo <BiRegistered className="reg-icon"/></div>
        </td>
        <td>
          <div className="container">
          <div className="gallons-container">10.00</div>
          <h1 className="gallons-heading">Gallons</h1>
          </div>
        </td>
        <td>
        <div className="container">
          <div className="gallons-container">20.00</div>
          <h1 className="gallons-heading">Gallons</h1>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div className="select-heading">Select Product Brand</div>
        </td>
        <td></td>
        <td>
          <div className="box"></div>
        </td>
      </tr>
      <tr>
        <td>
          <h1 className="heading">Corn CP Volume</h1>
          <h1 className="heading">Corn CP Purchases</h1>
        </td>
        <td>
          <div className="container">
            <h1 className="gallons-value">10.00</h1>
            <h1 className="gallons-value">Gallons</h1>
          </div>
          <div className="container">
            <h1 className="gallons-value">2 137,30</h1>
            <h1 className="gallons-value">USD</h1>
          </div>
        </td>
        <td>
          <div className="container">
            <h1 className="gallons-value">20.00</h1>
            <h1 className="gallons-value">Gallons</h1>
          </div>
          <div className="container">
            <h1 className="gallons-value">4 274,60</h1>
            <h1 className="gallons-value">USD</h1>
          </div>
        </td>
        
      </tr>
      
    </table>
    <h1 className="validation-heading">Validation of Purchases-Corn SE</h1>
    <table>
      <tr >
        <th className="th">Product Brand</th>
        <th className="th">Committed Volume</th>
        <th className="th">Actuals</th>
      </tr>
      <tr>
        <th>Seeds (optional)</th>
      </tr>
     
      <tr>
        <td>
          <div className="select-heading">Select Product Brand</div>
        </td>
        <td></td>
        <td>
          <div className="box"></div>
        </td>
      </tr>
      <tr>
        <td>
          <h1 className="heading">Corn CP Volume</h1>
          <h1 className="heading">Corn CP Purchases</h1>
        </td>
        <td>
          <div className="container">
            <h1 className="gallons-value">0.00</h1>
            
          </div>
          <div className="container">
            <h1 className="gallons-value">0.00</h1>
            <h1 className="gallons-value">USD</h1>
          </div>
        </td>
        <td>
          
          <div className="container1">
            
            <h1 className="gallons-value">USD</h1>
          </div>
        </td>
        
      </tr>
      
    </table>
    <ul className="list-container">
      <li className="list-item">
        <div className="area-container">
          <div>
            <p className="committed-area">Committed area</p>
            <p className="area">101,00 Acres</p>
          </div>
          <div className="icon-container">
          <GrSquare/>
          </div>
        </div>
        <div className="information-container">
          <p className="information">information</p>
          <GrCircleInformation className="icon"/>
        </div>
      </li>
      <li className="list-item">
        <div className="area-container">
          <div>
            <p className="committed-area">Actual area</p>
            <div className="acre-container">
            <div className="acre">10.00</div>
          <h1 className="gallons-heading">Gallons</h1>
          </div>
          </div>
          <div className="icon-container">
          <GrSquare/>
          </div>
        </div>
        <div className="information-container">
          <p className="information">information</p>
          <GrCircleInformation className="icon"/>
        </div>
      </li>
      <li className="list-item">
        <div className="area-container">
          <div>
            <p className="committed-area">Committed Purchases</p>
            <p className="area">USD 2 137,30</p>
          </div>
          <div className="icon-container">
          <p>$</p>
          </div>
        </div>
        <div className="information-container">
          <p className="information">information</p>
          <GrCircleInformation className="icon"/>
        </div>
      </li>
      <li className="list-item">
        <div className="area-container">
          <div>
            <p className="committed-area">Actual Purchases</p>
            <p className="area">USD 4 274,60</p>
          </div>
          <div className="icon-container">
          <p>$</p>
          </div>
        </div>
        <div className="information-container">
          <p className="information">information</p>
          <GrCircleInformation className="icon"/>
        </div>
      </li>
      <li className="list-item">
        <div className="area-container">
          <div>
            <p className="committed-area">Min. Target Seed Purchases</p>
            <p className="area">USD 0,00</p>
          </div>
          <div className="icon-container">
          <p>$</p>
          </div>
        </div>
        <div className="information-container">
          <p className="information">information</p>
          <GrCircleInformation className="icon"/>
        </div>
      </li>
      <li className="list-item">
        <div className="area-container">
          <div>
            <p className="committed-area">Min. Terget CP Purchases</p>
            <p className="area">USD 0,00</p>
          </div>
          <div className="icon-container">
          <p>$</p>
          </div>
        </div>
        <div className="information-container">
          <p className="information">information</p>
          <GrCircleInformation className="icon"/>
        </div>
      </li>
    </ul>
    </div>
    
    </div>
  )
}
export default App