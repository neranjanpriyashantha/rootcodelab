import React, { useState } from 'react'

export default function SideBar() {
    const styles = {
        buttonStyles: {
            backgroundColorr: "lightgrey",
            color: '#7F8487',
            padding: '15px',
            textAlign: 'center',
            textDecoration: 'none',
            display: 'inline-block',
            fontSize: '12px',
            cursor: "pointer",
            margin: '4px 4px',
            borderStyle: 'none',
            borderRadius: '40px',
            height: '50px',
            width: '50px'
        }
    }
    const butonNames = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL']
    const [buttonClickData, setButtonClickData] = useState('');
    const [btncolor,setBtncolor]=useState('')
    const onclickHandel = (val) => {
        setButtonClickData(val.target.innerHTML)
        console.log(buttonClickData)
    }
    return (
        <div>
            <h2 style={{ margin: '20px' }} >Sizes: </h2>
            {butonNames.map((val, key) => {
                return <button
                    style={styles.buttonStyles}
                    key={key}
                    onClick={(val) => onclickHandel(val)}
                >
                    {val}
                </button>
            })}
        </div>
    )
}
