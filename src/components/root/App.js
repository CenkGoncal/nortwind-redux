import React from 'react'
import { Route, Switch } from 'react-router';
import { Container } from 'reactstrap';

import Navi from "../navi/Navi";
import Dashboard from './Dashboard';
import CartDetails from '../card/cartDetails';
import AddOrUpdateProduct from '../product/AddOrUpdateProduct';
import NotFound from '../common/NotFound';
import AddOrUpdateCategory from '../categories/AddOrUpdateCategory';


function App() {
  return (
    <Container>
      <Navi></Navi>
      <Switch>
        <Route path="/" exact component={Dashboard}></Route>,
        <Route path="/product"   component={Dashboard}></Route>
        <Route path="/cart"   component={CartDetails}></Route>
        <Route path="/saveProduct/:productId"  component={AddOrUpdateProduct}></Route>
        <Route path="/saveProduct/"  component={AddOrUpdateProduct}></Route>
        <Route path="/saveCategory/:categoryId"  component={AddOrUpdateCategory}></Route>
        <Route path="/saveCategory/"  component={AddOrUpdateCategory}></Route>
        <Route   component={NotFound}></Route>
      </Switch>
    </Container>
  );
}

export default App;
