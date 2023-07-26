import { Container, Row, Col } from 'react-bootstrap';
import navIcon1 from '../views/img/nav-icon1.svg';
import navIcon2 from '../views/img/nav-icon2.svg';
import navIcon3 from '../views/img/nav-icon3.svg';
import logo from '../views/img/logo.svg';

export const Footer = () => {
    return (
        <footer className='footer'>
            <Container>
                <Row className='align-items-center'>
                    <Col sm={6}>
                        <img src={logo} alt='Personal Logo' />
                    </Col>
                    <Col sm={6} className='text-center text-sm-end'>
                        <div className='social-icon'>
                            <a href=""><img src={ navIcon1 } /></a>
                            <a href=""><img src={ navIcon2 } /></a>
                            <a href=""><img src={ navIcon3 } /></a>
                        </div>
                        <p>Copyright 2023. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}