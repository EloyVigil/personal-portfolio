import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../views/img/color-sharp2.png';
import login from '../views/img/movielogin.png';
import homepage from '../views/img/moviehp.png';
import details from '../views/img/detailspage.png';
import results from '../views/img/searchresults.png';
import trending from '../views/img/trendingpage.png';
import watchlist from '../views/img/watchlist.png';
import TrackVisibility from 'react-on-screen';
import 'animate.css';

export const Projects = () => {

    const javaProject = [
        {
            title: "Login Page",
            description: "Login to use features like watchlist and leave reviews",
            imgUrl: login,
        },
        {
            title: "Home Page",
            description: "Dashboard of Top Rated and Now Showing Movies",
            imgUrl: homepage,
        },
        {
            title: "Trending",
            description: "Most popular movies with pop-up description when mouse hovers over",
            imgUrl: trending,
        },
        {
            title: "Watch List",
            description: "Personal watchlist saved to the database",
            imgUrl: watchlist,
        },
        {
            title: "Search Results",
            description: "List of movies and the descriptions ordered by best match",
            imgUrl: results,
        },
        {
            title: "Movie Details",
            description: "Overview, Cast, Budget, Trailers and similar movie recommendations...",
            imgUrl: details,
        }
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                                    <h2>Projects</h2>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, libero. Officia voluptates atque ab, porro aliquam inventore ipsum minima a rem eius ea deleniti tempore cumque, sequi labore enim eligendi.</p>
                                </div>}
                        </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Java + MySQL</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            javaProject.map((javaProject, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...javaProject}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">Random Words</Tab.Pane>
                                <Tab.Pane eventKey="third">More Random Words</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-right' src={colorSharp2} alt="Color Sharp 2" />
        </section>
    )
}