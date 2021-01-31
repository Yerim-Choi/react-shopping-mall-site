import React, { useState } from 'react'
import { Button, Form, Input} from 'antd';
import FileUpload from '../../utils/FileUpload';
import Axios from 'axios';

const { TextArea } = Input;

const Continets = [
    { key: 1, value: "사료"},
    { key: 2, value: "간식"},
    { key: 3, value: "위생"},
    { key: 4, value: "장난감"},
    { key: 5, value: "하우스"},
    { key: 6, value: "패션"},
    { key: 7, value: "목줄"},
]


function UploadProductPage(props) {

    const [Title, setTitle] = useState("")
    const [Description, setDescription] = useState("")
    const [Price, setPrice] = useState(0)
    const [Continent, setContinent] = useState(1)
    const [Image, setImage] = useState([])
    

    const titleChangHandler = (event) => {
        setTitle(event.currentTarget.value)
    }


    const descriptionChangeHandler = (event) => {
        setDescription(event.currentTarget.value)
    }


    const priceChangeHandler = (event) => {
        setPrice(event.currentTarget.value)
    }

    const continentChangeHandler = (event) => {
        setContinent(event.currentTarget.value)
    }

    const updateImages = (newImages) => {
        setImage(newImages)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        
        if (!Title || !Description || !Price || !Continent || !Image) {
            return alert ("모든 값을 넣어주셔야 합니다.")
        }
        

        //서버에 채운 값들을 request 보낸다


        const body = {
            writer: props.user.userData._id,
            title: Title,
            description: Description,
            price: Price,
            images: Image,
            continents: Continent
        }

        Axios.post("/api/product", body)
            .then(response => {
                if(response.data.success) {
                    alert('상품 업로드에 성공 했습니다.')
                    props.history.push('/')
                } else {
                    alert('상품 업로드에 실패 했습니다.')
                }
            })

    }

    return (
        <div style={{ maxWidth:'700px', margin: '2rem auto'}}>
            <div style={{ textAlign: 'center', marginBottom: '2rem'}}>
                <h2>펫 상품 업로드</h2>
            </div>

            <Form onSubmit={submitHandler}>
                
                {/* DropZone */}
                <FileUpload refreshFunction={updateImages} />


                <br />
                <br />
                <label>이름</label>
                <Input onChange={titleChangHandler} value={Title} />
                <br />
                <br />
                <label>설명</label>
                <TextArea onChange={descriptionChangeHandler} value={Description}/ >
                <br />
                <br />
                <label>가격($)</label>
                <Input type="number" onChange={priceChangeHandler} value={Price}/ >
                <br />
                <br />
                <select onChange={continentChangeHandler} value={Continent}>

                    {Continets.map(item => (
                    <option key={item.key} value={item.key}> {item.value} </option> 
                    ))}

                </select>
                <br />
                <br />
                <Button htmlType="submit">
                    확인
                </Button>

            </Form>

        </div>
    )
}

export default UploadProductPage