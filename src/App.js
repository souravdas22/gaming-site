import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/CMS/Home/Home';
import ProductList from './Pages/CMS/ProductList/ProductList';
import SignIn from './Pages/Auth/Login/SignIn';
import SignUp from './Pages/Auth/Registration/SignUp';
import Creators from './Pages/CMS/Creators/Creators';
import NewProductList from './Helper/ProductList/ProductList';
import Edit from './Pages/CMS/Edit/Edit';

function App() {
  function PrivateRoute({ children }) {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    return token !== null && token !== undefined ? (
      children
    ) : (
      <>
        <Navigate to="/signin" />
        {alert("Please go for login either you can't access product list")}
      </>
    );
  }
  const PublicRouteNames = [
    {
      path: "/signin",
      Component: <SignIn />,
    },
    {
      path: "/signup",
      Component: <SignUp/>,
    },
    {
      path: "/",
      Component: <Home />,
    },
  ];
  const PrivateRouteNames = [
    {
      path: "/creators",
      Component: <Creators />,
    },
    {
      path: "/product",
      Component: <ProductList />,
    },
    {
      path: "/p",
      Component: <NewProductList />,
    },
    {
      path: "/edit/:id",
      Component: <Edit />,
    },
  ];

  return (
    <>
      <BrowserRouter>
        <Routes>
          {PublicRouteNames?.map((route, index) => {
            return (
              <Route exact path={route.path} element={route.Component} key={index}/>
            );
          })}
          {PrivateRouteNames?.map((route, index) => {
            return (
              <Route
                exact
                path={route.path}
                element={<PrivateRoute>{route.Component}</PrivateRoute>}
                key={index}
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
