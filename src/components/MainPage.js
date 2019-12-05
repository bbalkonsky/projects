import React, { useEffect, useState } from 'react';
import MainPageItem from "./MainPageItem";
import {Affix, Button, Row} from "antd";
import axios from 'axios';
import {useHistory} from "react-router-dom";

function MainPage() {
    let history = useHistory();

    const [projects, setProjects] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:4000/all").then(res => setProjects(res.data));
        // setProjects(dbprojects);
    }, []);

    // if (projects.length === 0) {return null};

    function newButtonClicked() {
        history.push('/project/new');
    }

    return (
        <Row gutter={30}>
            <Affix style={{position: 'absolute', zIndex: '1', right: 0,}} offsetTop='0'>
                <Button className="main-button" type="primary" shape="circle" size="large" onClick={newButtonClicked} icon="plus" />
            </Affix>

            {projects.length &&
                projects.map(project =>

                        <MainPageItem
                            id={project.id}
                            header={project.title}
                            description={project.description}
                            prodUrl={project.prod_link}
                            devUrl={project.dev_link}
                            gitUrl={project.git_link}
                            key={project.id}/>
                )}
        </Row>
    )
}

export default MainPage;
