import React from 'react';
import { Nav } from 'react-bootstrap';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import useAuth from '../../Hooks/useAuth';
import AddProduct from '../AddProduct/AddProduct';
import AdminRoute from '../Login/AdminRoute/AdminRoute';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';
import Review from '../Review/Review';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { admin, logout } = useAuth();
    return (
        <div>
            <div className="d-flex bd-highlight">
                <div style={{ height: '100vh' }} className="p-2 bg-primary bd-highlight">
                    <h4>Dashboard</h4>
                    {
                        admin && <>
                            <Nav.Link id="nav-item" as={Link} to={`${url}/manageallorders`}>All Orders</Nav.Link>
                            <Nav.Link id="nav-item" as={Link} to={`${url}/addproduct`}>Add Product</Nav.Link>
                            <Nav.Link id="nav-item" as={Link} to={`${url}/makeadmin`}>Make Admin</Nav.Link>
                            <Nav.Link id="nav-item" as={Link} to={`${url}/manageproducts`}>Manage Products</Nav.Link>
                        </>
                    }
                    {
                        !admin && <>
                            <Nav.Link id="nav-item" as={Link} to={`${url}/pay`}>Pay</Nav.Link>
                            <Nav.Link id="nav-item" as={Link} to={`${url}/myorders`}>My Orders</Nav.Link>
                            <Nav.Link id="nav-item" as={Link} to={`${url}/review`}>Review</Nav.Link>
                        </>
                    }

                    <button onClick={logout}>Log Out</button>

                </div>
                <div className="p-2  flex-grow-1 bd-highlight">
                    <Switch>
                        <Route exact path={`${path}`}>
                            <Pay></Pay>
                        </Route>
                        <AdminRoute path={`${path}/manageallorders`}>
                            <ManageAllOrders></ManageAllOrders>
                        </AdminRoute>
                        <AdminRoute path={`${path}/addproduct`}>
                            <AddProduct></AddProduct>
                        </AdminRoute>
                        <AdminRoute path={`${path}/makeadmin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageproducts`}>
                            <ManageProducts></ManageProducts>
                        </AdminRoute>
                        <Route path={`${path}/pay`}>
                            <Pay></Pay>
                        </Route>
                        <Route path={`${path}/myorders`}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route path={`${path}/review`}>
                            <Review></Review>
                        </Route>
                    </Switch></div>
            </div>
        </div>
    );
};

export default Dashboard;