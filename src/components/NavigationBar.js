import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function NavigationBar({ numOfProduct }) {
  console.log()
  return (
    <div style={{ height: '50px', }} >
      <span style={{ marginTop: '20px' }}> {numOfProduct} product found</span>
      <div style={{ float: 'right', marginTop: '20px', marginRight: '80px' }} ><span>Order by</span>
        <select id="dropdown" style={{ width: '100px', marginLeft: '10px', height: '30px' }}>
          <option value="1">select</option>
        </select>
      </div>
      <ShoppingCartOutlinedIcon
        style={{
          position: 'fixed',
          top: '10px',
          right: '10px',
          zIndex: '999',
          width: '40px',
          height: '40px',
          color: 'white',
          backgroundColor: 'black',
          cursor:'pointer'
        }} />
    </div>
  )
}
