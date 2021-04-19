import React from 'react';
import '../styles/balance.css';

export default function Balance(props) {
  const balance = [
    {
      image: 'image',
      price: '143.00',
      title: 'Balance',
      label: 'AFYA'
    },
    {
      image: 'image2',
      price: 'R21.00',
      title: 'Equivalent',
      label: 'ZAR'
    }
  ]
  return (
    <div className='balance_container'>
      {balance.map(({ image, price, title, label }) => <BalanceTemplate title={title} image={image} price={price} key={title} label={label} />)}
    </div>
  )
}

function BalanceTemplate(props) {
  return (
    <div className='tag_details'>
      <div className='currency_label'>{props.label}</div>
      <h2 className='text-center mb-3'>{props.price}</h2>
      <p className='text-center'><small>{props.title}</small></p>
    </div>
  )
}