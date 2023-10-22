import React from 'react';
import './css/headMenu.css'
import logo from './images/logo.png'; // Nhập hình ảnh

function BodyProject() {
  return (
    <div id="menu">
      <a href="https://www.trasuaxingfucha.com">
        <img src={logo} alt="Logo" className="logo" />
      </a>
      <ul>
        <li><a href="#">Trang chủ</a></li>
        <li><a href="#gioiThieu">Giới thiệu</a></li>
        <li><a href="http://127.0.0.1:5500/showProduct.html">Danh sách sản phẩm</a></li>
        <li>
          <a href="#tintucvasukien">Tin tức và sự kiện</a>
          <ul>
            <li><a href="#">Ngày Hội Trăng Rằm</a></li>
            <li><a href="#">Đi chơi được quà</a></li>
            <li><a href="#">Lương về thả ga</a></li>
          </ul>
        </li>
        <li><a href="#nhuongquyen">Nhượng quyền</a></li>
        <li><a href="http://127.0.0.1:5500/register.html">Đăng ký</a></li>
      </ul>
    </div>
  );
}

export default BodyProject;

