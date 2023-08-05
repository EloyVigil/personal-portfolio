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

    const pythonProject = [
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

    const javascriptProject = [
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
                                    <p>These are a couple of my recent projects take a look.</p>
                                </div>}
                        </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Java</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Python</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">JavaScript</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        <h3>Java </h3>
                                    </Row>
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
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        <h3>Python</h3>
                                    </Row>
                                    <Row>
                                        {
                                            pythonProject.map((pythonProject, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...pythonProject}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        <h3>JavaScript</h3>
                                    </Row>
                                    <Row>
                                        {
                                            javascriptProject.map((javascriptProject, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...javascriptProject}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-right' src={colorSharp2} alt="Color Sharp 2" />
        </section>
    )
}