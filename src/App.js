import React from 'react';
import {BrowserRouter as Router, Switch, Route, useLocation} from "react-router-dom";
import {Layout} from 'antd';

//containers
import HeaderItem from 'containers/Header';

//views
import Main from 'routers/Main'
import Lists from 'routers/Lists'
import Details from 'routers/Details'
import Favorites from 'routers/Favorites'

//Styles
import 'antd/dist/antd.css';
import 'styles/scss/main.scss';

const { Header, Content } = Layout;

function NoMatch() {
    let location = useLocation();

    return (
        <div>
            <h3>
                No match for <code>{location.pathname}</code>
            </h3>
        </div>
    );
}

function App() {
    return (
        <Router>
            <Layout>
                <Header>
                    <HeaderItem/>
                </Header>
                <Content>
                    <Switch>
                        <Route exact path="/">
                            <Main/>
                        </Route>
                        <Route path="/lists">
                            <Lists/>
                        </Route>
                        <Route path="/favorites">
                            <Favorites/>
                        </Route>
                        <Route path="/movie/:id">
                            <Details/>
                        </Route>
                        <Route path="*">
                            <NoMatch/>
                        </Route>
                    </Switch>
                </Content>
            </Layout>
        </Router>
    );
}

export default App;
