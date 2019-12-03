import React from 'react';
import {dbprojects} from "./store/dataBase";
import ProjectIstem from "./components/ProjectIstem";
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
// import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import ProjectItem from "./components/ProjectItem";

function App() {
    return (
        <div className="App">
            <Row>
                <Col span={12} offset={6}>
                    <Router>
                        <Switch>
                            <Route path="/project/:id">
                                <ProjectItem />
                            </Route>
                            <Route path="/">
                                {dbprojects.map((project, idx) =>
                                    <ProjectIstem
                                        id={project.id}
                                        header={project.title}
                                        description={project.description}
                                        tags={project.tags}
                                        colors={project.colors}
                                        key={idx} />
                                )}
                            </Route>
                        </Switch>
                    </Router>
                </Col>
            </Row>
        </div>
    );
}

export default App;
