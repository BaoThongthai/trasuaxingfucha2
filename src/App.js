import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'jquery';
import 'popper.js';
import BodyProject from './bodyProject';
import ProductList from './ProductList';
import CasualProject from './CasualProject'; // Thêm dòng này để nhập tệp CasualProject.js



function App() {
  return (
    <div>
      <h1>Danh sách sản phẩm</h1>
      <BodyProject />
      <CasualProject />
      <ProductList />
    </div>
  );
}

export default App;
