import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'jquery';
import 'popper.js';
import BodyProject from './bodyProject';
import ProductList from './ProductList';
import AddProduct from './addProduct';
import CasualProject from './CasualProject'; // Thêm dòng này để nhập tệp CasualProject.js



function App() {
  return (
    <div>
      <BodyProject />
      <CasualProject />
      <AddProduct/>
      <br/>
      <h1>Danh sách sản phẩm</h1>
      <br/>
      <ProductList />
      
    </div>
  );
}

export default App;
