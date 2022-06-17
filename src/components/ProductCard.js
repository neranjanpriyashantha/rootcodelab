import React from 'react'

export default function ProductCard({ cardData }) {
    console.log(cardData)
    return (
        <div style={{ maxWidth: "240px", margin: '10px' }}>
            <div>
                <span
                    style={{
                        backgroundColor: 'black',
                        color: 'white',
                        fontSize: '15px',
                        float: 'right'
                    }}>{cardData.details.tag}
                </span>
            </div>
            <img
                src={cardData.details.image}
                style={{
                    width: '100%',
                    height: '300px'
                }} />

            <p style={{ textAlign: 'center' }}>{cardData.name}</p>
            <p style={{ textAlign: 'center' }}>{cardData.details.type}</p>
            <hr style={{ border: '2px solid orange', width: '25px' }} />
            <p style={{ textAlign: 'center' }}><span style={{ fontSize: '14px' }} >$</span>{cardData.details.price && cardData.details.price}</p>
            <p style={{ textAlign: 'center' }}>or 9X $ 1.21</p>
            <button style={{
                backgroundColor: 'black',
                border: 'none',
                color: 'white',
                textAlign: 'center',
                textDecoration: 'none',
                display: 'inline-block',
                fontSize: '16px',
                padding: '14px',
                width: '100%',
                cursor: 'pointer'
            }}>Add to cart </button>

        </div>
    )
}
