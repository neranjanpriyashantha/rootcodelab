import React from 'react'

export default function NavigationBar() {
  return (
    <div style={{ height: '50px',}} >
      <span style={{marginTop:'20px'}}> 17 product found</span>
      <div style={{float:'right', marginTop:'20px',marginRight:'80px'}} ><span>order by</span> 
      <select id="dropdown" style={{width:'100px', marginLeft:'10px', height:'30px'}}>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
      </div>
    </div>
  )
}