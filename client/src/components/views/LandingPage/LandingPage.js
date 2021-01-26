import React, { useEffect, useState } from 'react'
import { FaCode } from "react-icons/fa";
import axios from "axios";
import { Icon, Col, Card, Row } from 'antd';
import Meta from 'antd/lib/card/Meta';

function LandingPage() {

    const [Products, setProducts] = useState([])

    useEffect(() => {
        
        axios.post('/api/product/products')
            .then(response => {
                if (response.data.success) {
                    console.log(response.data)
                    setProducts(response.data.productInfo)
                } else {
                    alert("상품들을 가져오는데 실패 했습니다.")
                }
            })

    }, [])


    const renderCards = Products.map((product, index) => {

        return  <Card
            cover={<img src={`http://localhost:5000/${product.images[0]}`} />}
        
        >
            <Meta 
                title={product.title}
                description={`$${product.proice}`}
            />
        </Card>

    })

    return (
        <div style= {{ width: '75%', margin: '3rem auto' }}>
            <div style= {{ textAlign: 'center' }}>
                <h2>Let's Travel Anywhere <Icon type="rocket" /> </h2>
            </div>

            {renderCards}

            <div style= {{ justifyContent: 'center' }}>
                <button>더보기</button>
            </div>
        </div>
    )
}

export default LandingPage
