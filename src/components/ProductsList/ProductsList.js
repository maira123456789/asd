import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const ProductsList = ({products, deleteProduct, getProductToEdit}) => {
    // ! приняли пропсы
    return (
        <div className="d-flex flex-wrap justify-content-center">
            {/* перебираем массив products для отображения и передаем в пропсы каждый item, функцию deleteProduct передаем для каждой карточки */}
            {
                products.map((item) => (<ProductCard key={item.id} item={item} deleteProduct={deleteProduct} getProductToEdit={getProductToEdit}/>))
            }
        </div>
    );
};

export default ProductsList;