import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function AddProduct() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    numProduct: '',
    priceProduct: '',
    LinkProduct: '',
  });

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
// handleInputChange để xử lý sự kiện khi giá trị của một trường <input> thay đổi (được gọi khi người dùng nhập dữ liệu vào trường <input>
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      //tạo bản sao của formdata sau đó ghi đè giá trị tương ứng ứng với id 
      ...prevData,
      [id]: value,
    }));
  };

  const handleSaveChanges = () => {
    // Gửi dữ liệu lên API ở đây, sử dụng phương thức fetch hoặc Axios.
    // Ví dụ sử dụng fetch:
    fetch('https://65248470ea560a22a4e9e5cc.mockapi.io/api/v1/product', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Dữ liệu đã được cập nhật thành công:', data);
        handleCloseModal();
        
      })
      .catch((error) => {
        console.error('Lỗi khi cập nhật dữ liệu:', error);
      });
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShowModal}>
        <i className="bi bi-plus"></i> Thêm mới sản phẩm
      </Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm mới sản phẩm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Tên Sản Phẩm</Form.Label>
            <Form.Control
              type="text"
              id="name"
              placeholder="Tên sản Phẩm"
              value={formData.name}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Số lượng</Form.Label>
            <Form.Control
              type="text"
              id="numProduct"
              placeholder="Số lượng"
              value={formData.numProduct}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Giá sản phẩm</Form.Label>
            <Form.Control
              type="text"
              id="priceProduct"
              placeholder="Số lượng"
              value={formData.priceProduct}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Link sản phẩm</Form.Label>
            <Form.Control
              type="text"
              id="LinkProduct"
              placeholder="Link hình ảnh"
              value={formData.LinkProduct}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Đóng
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Lưu Thay Đổi
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddProduct;
