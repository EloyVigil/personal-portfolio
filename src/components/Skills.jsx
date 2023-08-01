import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import java from '../views/img/java-vertical.svg';
import javascript from '../views/img/javascript.svg';
import python from '../views/img/python.svg';
import mysql from '../views/img/mysql.svg';
import mongodb from '../views/img/mongodb.svg';
import flask from '../views/img/flask.svg';

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
                                    <img src={mysql} alt="MySQL" />
                                    <h5>MySQL DB</h5>
                                </div>
                                <div className='item'>
                                    <img src={mongodb} alt="MongoDB" />
                                    <h5>MongoDB</h5>
                                </div>
                                <div className='item'>
                                    <img src={flask} alt="Flask" />
                                    <h5>Python 3</h5>
                                </div>
                                <div className='item'>
                                    <img src={python} alt="Python" />
                                    <h5>Python 3</h5>
                                </div>
                                <div className='item'>
                                    <img src={python} alt="Python" />
                                    <h5>Python 3</h5>
                                </div>
                                <div className='item'>
                                    <img src={python} alt="Python" />
                                    <h5>Python 3</h5>
                                </div>
                                <div className='item'>
                                    <img src={python} alt="Python" />
                                    <h5>Python 3</h5>
                                </div>
                                <div className='item'>
                                    <img src={python} alt="Python" />
                                    <h5>Python 3</h5>
                                </div>
                                <div className='item'>
                                    <img src={python} alt="Python" />
                                    <h5>Python 3</h5>
                                </div>
                                <div className='item'>
                                    <img src={python} alt="Python" />
                                    <h5>Python 3</h5>
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