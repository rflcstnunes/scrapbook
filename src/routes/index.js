import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Login from '../pages/Login';
import Home from '../pages/Home';
import Form from '../pages/Form';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Form" exact component={Form} />
            </Switch>
        </BrowserRouter>
    );
}