import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import java from '../views/img/java.svg';
import javascript from '../views/img/javascript.svg';
import python from '../views/img/python.svg';
import mysql from '../views/img/mysql.svg';
import mongodb from '../views/img/mongodb.svg';
import flask from '../views/img/flask.svg';
import ajax from '../views/img/ajax.png';
import bootstrap from '../views/img/bootstrap.svg';
import css from '../views/img/css.svg';
import express from '../views/img/express.svg';
import github from '../views/img/github.svg';
import html from '../views/img/html.svg';
import jquery from '../views/img/jquery.svg';
import json from '../views/img/json.svg';
import jsp from '../views/img/jsp.png';
import jstl from '../views/img/jstl.jpg';
import materialui from '../views/img/materialui.svg';
import postman from '../views/img/postman.svg';
import react from '../views/img/react.svg';
import node from '../views/img/nodejs.svg';
import springimg from '../views/img/spring.svg';
import colorSharp from '../views/img/color-sharp.png';

export const Skills = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className='skill' id='skills' >
            <Container>
                <Row>
                    <Col>
                        <div className='skill-bx'>
                            <TrackVisibility>
                                {({ isVisible }) =>
                                    <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                                        <h2>Skills</h2>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias ut ipsam neque minima non nisi molestiae natus molestias? Dolores temporibus ipsa distinctio. Dolore eum dicta, provident voluptatum qui eveniet. Officiis?</p>
                                    </div>}
                            </TrackVisibility>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className='item'>
                                    <img src={html} alt="HTML 5" />
                                    <h5>HTML 5</h5>
                                </div>
                                <div className='item'>
                                    <img src={css} alt="CSS 3" />
                                    <h5>CSS 3</h5>
                                </div>
                                <div className='item'>
                                    <img src={java} alt="Java" />
                                    <h5>Java 8</h5>
                                </div>
                                <div className='item'>
                                    <img src={javascript} alt="JavaScript" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className='item'>
                                    <img src={python} alt="Python" />
                                    <h5>Python 3</h5>
                                </div>
                                <div className='item'>
                                    <img src={react} alt="React" />
                                    <h5>React</h5>
                                </div>
                                <div className='item'>
                                    <img src={mysql} alt="MySQL" />
                                    <h5>MySQL DB</h5>
                                </div>
                                <div className='item'>
                                    <img src={mongodb} alt="MongoDB" />
                                    <h5>MongoDB</h5>
                                </div>
                                <div className='item'>
                                    <img src={springimg} alt="Spring" />
                                    <h5>Spring Framework</h5>
                                </div>
                                <div className='item'>
                                    <img src={node} alt="Node.js" />
                                    <h5>Node.js</h5>
                                </div>
                                <div className='item'>
                                    <img src={express} alt="Express.js" />
                                    <h5>Express</h5>
                                </div>
                                <div className='item'>
                                    <img src={flask} alt="Flask" />
                                    <h5>Flask</h5>
                                </div>
                                <div className='item'>
                                    <img src={ajax} alt="AJAX" />
                                    <h5>AJAX<br/>Asynchronous Javascript and XML</h5>
                                </div>
                                <div className='item'>
                                    <img src={json} alt="JSON" />
                                    <h5>JSON</h5>
                                </div>
                                <div className='item'>
                                    <img src={jsp} alt="JSP" />
                                    <h5>JSP<br/>Java Server Pages</h5>
                                </div>
                                <div className='item'>
                                    <img src={jquery} alt="JQuery" />
                                    <h5>JQuery</h5>
                                </div>
                                <div className='item'>
                                    <img src={jstl} alt="JSTL" />
                                    <h5>JSTL<br/>Java Server Tag Library</h5>
                                </div>
                                <div className='item'>
                                    <img src={postman} alt="Postman" />
                                    <h5>Postman</h5>
                                </div>
                                <div className='item'>
                                    <img src={github} alt="GitHub" />
                                    <h5>Git Hub</h5>
                                </div>
                                <div className='item'>
                                    <img src={bootstrap} alt="Bootstrap" />
                                    <h5>Bootstrap UI</h5>
                                </div>
                                <div className='item'>
                                    <img src={materialui} alt="Material UI" />
                                    <h5>Material UI</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-left' src={colorSharp} alt='left' />
        </section>
    )
}