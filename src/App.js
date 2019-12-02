import React from 'react';
import ProjectItem from "./components/ProjectItem";
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import axios from 'axios';

async function getDataAxios() {
    const response = await axios.get("http://localhost:4000/all");
    projects = response.data;
}

function App() {
    getDataAxios().then(res => console.log(projects));
    return (
        <div className="App">
            <p>{projects.length}</p>
            {projects.length > 0 &&
                <Row>
                    <Col span={12} offset={6}>
                        {projects.map(project =>
                            <ProjectItem
                                id={project.id}
                                header={project.title}
                                description={project.description}
                                tags={project.tags}
                                colors={project.colors}
                                key={project.id}/>
                        )}
                    </Col>
                </Row>
            }
        </div>
    );
}

export default App;

let projects = [];