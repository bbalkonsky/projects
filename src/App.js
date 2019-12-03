import React, { useEffect, useState } from 'react';
import ProjectItem from "./components/ProjectItem";
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import axios from 'axios';

function App() {

    const [projects, setProjects] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:4000/all").then(res => setProjects(res.data));
    }, []);

    return (
        <div className="App">
            <p>{projects.length > 0}</p>
            {projects.length &&
                <Row>
                    <Col span={12} offset={6}>
                        {projects.map(project =>
                            <ProjectItem
                                id={project.id}
                                header={project.title}
                                description={project.description}
                                key={project.id}/>
                        )}
                    </Col>
                </Row>
            }
        </div>
    );
}

export default App;