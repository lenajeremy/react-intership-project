import React from 'react';
import '../styles/currencyconverter.css';

export default function CurrencyConverer(props) {
  const [number, setNumber] = React.useState(0.000001)
  return (
    <div className='currency_conversion'>
      <p className='text-primary headings'>Select Currency</p>
      <div class="input-group mb-4">
        <div class="input-group-prepend">
          <div class="input-group-text">AFYA</div>
        </div>
        <input type="number" class="form-control" placeholder="Enter amount" value={number} onChange={e => setNumber(e.target.value)} />
      </div>
      <div className='buttons d-flex justify-content-around mx-auto'>
        <button className='btn btn-lg btn-primary'>SEND</button>
        <button className='btn btn-lg btn-primary'>RECEIVE</button>
      </div>
    </div>
  )
}