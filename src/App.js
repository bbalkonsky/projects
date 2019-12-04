import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import ProjectItem from "./components/ProjectItem";
import MainPage from "./components/MainPage";

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
                                <MainPage />
                            </Route>
                        </Switch>
                    </Router>
                </Col>
            </Row>

        </div>
    );
}

export default App;