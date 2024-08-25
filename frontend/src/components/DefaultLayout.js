import React from "react";
import { Menu, Dropdown, Button, Row, Col } from "antd";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useLocation } from 'react-router-dom';

function DefaultLayout(props) {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem('user'))
  const buttonText = localStorage.getItem('admin') ? 'admin' : user.username;
  const menu = (
    <Menu>
      <Menu.Item>
        <a

          href="/"
        >
          Home
        </a>
      </Menu.Item>
      <Menu.Item>
        
        <a href="/userbookings">
          Bookings
        </a>
      </Menu.Item>
      
      <Menu.Item onClick={() => {
        if(localStorage.getItem('admin'))
        {
          localStorage.removeItem('admin');
        }
        else
        {
          localStorage.removeItem('user');
        }
        window.location.href = '/login'
      }}>
        <li style={{ color: 'orangered' }}>Logout</li>
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
    
      <div className="header bs1">
        <Row gutter={16} justify='center'>
          <Col lg={20} sm={24} xs={24}>
            <div className="d-flex justify-content-between">
              <h1 ><b><Link to='/' style={{ color: 'orangered' }}>Sarthi CARS</Link></b></h1>

              <Dropdown overlay={menu} placement="bottomCenter">
                
                <Button>{buttonText}</Button>
              </Dropdown>
            </div>
          </Col>
        </Row>

      </div>
      <div className="content">{props.children}</div>

      <div className="footer text-center">
        <hr />
      <div>
      <a href="https://www.facebook.com/your-facebook-profile" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon 
            icon={faFacebook} 
            size="2x" 
            style={{ color: '#4267B2', marginRight: '10px' }} // Facebook blue color
          />
        </a>
        <a href="https://www.instagram.com/your-instagram-profile" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon 
            icon={faInstagram} 
            size="2x" 
            style={{ color: '#C13584', marginRight: '10px' }} // Instagram gradient color
          />
        </a>

        <a href="https://wa.me/your-whatsapp-number" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon 
            icon={faWhatsapp} 
            size="2x" 
            style={{ color: '#25D366', marginRight: '10px' }} // WhatsApp green color
          />
        </a>
      </div>


        <p>Desinged and Developed By Yash Patel</p>
        <p>
          © 2024 All rights reserved
        </p>

      </div>

    </div>

  );
}

export default DefaultLayout;
