import React from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProjectItem from "./components/ProjectItem";
import MainPage from "./components/MainPage";

const {Content, Footer} = Layout;

function App() {
    return (
        <div className="App">
            <Layout>
                <Content style={{padding: '50px 200px 0'}}>
                    <div style={{minHeight: '847px', background: '#fff', padding: '50px'}}>
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
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>Bogdan majestic design @2019</Footer>
            </Layout>
        </div>
    );
}

export default App;
