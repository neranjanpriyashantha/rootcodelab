import React, { useState, useEffect } from 'react'
import NavigationBar from '../components/NavigationBar'
import ProductCard from '../components/ProductCard'

export default function () {
    const [data, setData] = useState([]);
    const [issetdata, setIssetdata] = useState(false);
    const url = 'https://my-json-server.typicode.com/prasadhewage/ecommerce/shipments'
    useEffect(() => {
        setTimeout(() => {
            fetch(url).then((res) => res.json()).then((dt) => setData(dt))
            setIssetdata(true)
        }, 1000);

    }, []);
    return (
        <div>
            <NavigationBar  />
            <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>{
                issetdata ? (data.map((val) => {
                    return <ProductCard key={val.id} cardData={val} />
                })) : <h2>Loading...</h2>
            }</div>



        </div>
    )
}
