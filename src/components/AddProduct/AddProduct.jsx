import React, { useState } from 'react';

const AddProduct = ({addProduct}) => {
    // !  приняли функцию addProduct из пропсов, мы сразу сделали деструктуризация

    // ! 1 способ для сбора данных из инпута

    // ! создали states для хранения данных
    // const [model, setModel] = useState('')
    // const [price, setPrice] = useState('')
    // const [image, setImage] = useState('')

    // ! cобрали все данные из states в один объект
    // function handleValues(){
    //     let newProduct = {
    //         model,
    //         price,
    //         image
    //     }
    //     console.log(newProduct);
    // }
    // ! 1 способ заканчивается
// ! 2 способ
// ! создали один стейт и задали ему начальное значение в виде объекта, у которого ключи с пустыми значениями
    const [newProduct, setNewProduct] = useState({
        model: "",
        price: "",
        image: ""
    })
    function handleValues (e){

        // ! перезаписываем стейт (добавляем новые значения из инпутов)
        // ! функция приняла event, а внутри event хранится значение из атрибута name и достаем значение которое ввел пользователь(внутри target)
        let product = {
            ...newProduct,
            [e.target.name]: e.target.value
        }
        // ! перезаписывем стейт, чтобы инпуты были контролируемыми
        setNewProduct(product)
        // console.log(newProduct);
    }

    // ! проверка на заполненность полей и вызывает функцию добавления
    function checkValues(){
        if(!newProduct.model || !newProduct.price || !newProduct.image){
        alert('Заполните поля')
        return
        }
        setNewProduct({
            model: "",
            price: "",
            image: ""
        })
        // ! добавляем уникальную id  (за это отвечает Date.now)
        addProduct({...newProduct, id: Date.now()})
    }

    return (
        <div className="d-flex flex-column align-items-center mt-3 mb-3">
            {/* 1 способ */}
            {/* <input value={model} onChange={(e)=> setModel(e.target.value)} type="text" placeholder="Model" name="model" className="col-3 mb-1"/>
            <input value={price} onChange={(e)=> setPrice(e.target.value)} type="text" placeholder="Price" name="price" className="col-3 mb-1"/>
            <input value={image} onChange={(e)=> setImage(e.target.value)} type="text" placeholder="Image" name="image" className="col-3 mb-1"/>
            <button onClick={() => handleValues()} className="btn btn-success col-3">Add Product</button> */}
            {/* 1 способ заканчивается */}

            {/* 2 способ */}
            <input 
            value={newProduct.model} 
            onChange={handleValues} 
            type="text" 
            placeholder="Model" 
            name="model" 
            className="col-3 mb-1"/>
            <input 
            value={newProduct.price} 
            onChange={handleValues} 
            type="text" 
            placeholder="Price" 
            name="price" 
            className="col-3 mb-1"/>
            <input 
            value={newProduct.image} 
            onChange={handleValues} 
            type="text" 
            placeholder="Image" 
            name="image" 
            className="col-3 mb-1"/>
            <button onClick={() => checkValues()} className="btn btn-success col-3">Add Product</button>
        </div>
    );
};

export default AddProduct;