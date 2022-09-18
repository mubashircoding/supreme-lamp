import React from 'react'
import { Link } from 'react-router-dom'
import './PricingStyles.css'
const Pricing = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>- Basic -</h3>
                <span className="bar"></span>
                <p className="btc">1 BTC</p>
                <p>- 3 days -</p>
                <p>- Veiws -</p>
                <p>- Featured -</p>
                <p>- Private Quarter -</p>
                <Link to='/contact' className='btn'>Book</Link>
            </div>
            <div className="card">
                <h3>- Suite -</h3>
                <span className="bar"></span>
                <p className="btc">1 BTC</p>
                <p>- 3 days -</p>
                <p>- Veiws -</p>
                <p>- Featured -</p>
                <p>- Private Quarter -</p>
                <Link to='/contact' className='btn'>Book</Link>
            </div>
            <div className="card">
                <h3>- Executive -</h3>
                <span className="bar"></span>
                <p className="btc">1 BTC</p>
                <p>- 3 days -</p>
                <p>- Veiws -</p>
                <p>- Featured -</p>
                <p>- Private Quarter -</p>
                <Link to='/contact' className='btn'>Book</Link>
            </div>
        </div>
    </div>
  )
}

export default Pricing