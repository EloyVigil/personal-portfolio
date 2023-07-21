import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';

export const Projects = () => {

    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: "projImg1",
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: "projImg2",
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: "projImg3",
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: "projImg1",
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: "projImg2",
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: "projImg3",
        }
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, libero. Officia voluptates atque ab, porro aliquam inventore ipsum minima a rem eius ea deleniti tempore cumque, sequi labore enim eligendi.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" defaultActiveKey='/home'>
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
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
                                            projects.map((project, index) => {
                                                <p>{project.title}</p>
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
        </section>
    )
}