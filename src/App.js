import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddProduct from './components/AddProduct/AddProduct';
import ProductsList from './components/ProductsList/ProductsList';
import EditModal from './components/EditModal/EditModal';

const App = () => {
  // ! modal states and functions
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // ! в этом стейте мы храним все наши продукты
  const [products, setProducts] = useState([])
  const [productToEdit, setProductToEdit] = useState(null)
  function getProductToEdit(item){
    setProductToEdit(item)
    handleShow()
  }
  function updateProduct() {
    let arr = products.map((item) => {
      if(item.id !== productToEdit.id) {
        return item;
      }else {
        return productToEdit;
      }
    });
    setProducts(arr)
    handleClose()
    // console.log(arr)
  }
  // ! функция для добавления продукта, т.к стейт мы не можем менять напрямую мы сначала копируем все старые значения и добавляем в конец новый продукт
  // ! в конце мы перезаписали стейт
  function addProduct (product){
    setProducts([...products, product])
  }
  // ! функция для удаления, после того как удалили продукт, измененный массив кладем вместо старого

  function deleteProduct(id){
    let filteredProducts = products.filter((item)=>item.id!== id)
    setProducts(filteredProducts)
  }
  // console.log(products);
  return (
    <div>
      <AddProduct addProduct={addProduct}/>
      <ProductsList products={products} getProductToEdit={getProductToEdit} deleteProduct={deleteProduct}/>
      {productToEdit ? (
      <EditModal 
      productToEdit={productToEdit} 
      setProductToEdit={setProductToEdit}  
      show={show} 
      handleClose={handleClose}
      updateProduct={updateProduct}
      /> 
      ): null}
      
    </div>
  );
};

export default App;