import SearchScreen from "./components/search-screen";
import DetailsScreen from "./components/details-screen";
import {BrowserRouter, Route} from "react-router-dom";
import HomeScreen from "./components/home-screen";
<<<<<<< HEAD
import Login from "./components/users/login";
import Register from "./components/users/register";
import Profile from "./components/users/profile";
=======
import React from "react";
>>>>>>> be1c7fb3c3c1441ad91c06da826790642d5e7761

function App() {
  return (
    <div className="container-fluid p-0">
        <BrowserRouter>
<<<<<<< HEAD
            <Route path="/" exact={true}>
                <HomeScreen/>
            </Route>
            <Route path="/login" exact={true}>
                <Login/>
            </Route>
            <Route path="/register" exact={true}>
                <Register/>
            </Route>
            <Route path="/profile" exact={true}>
                <Profile/>
            </Route>
            <Route path={["/search", "/search/:location"]} exact={true}>
=======
            {/*<Route path="/" exact={true}>*/}
            {/*    <HomeScreen/>*/}
            {/*</Route>*/}
            <Route path={["/", "/search", "/search/:location"]} exact={true}>
>>>>>>> be1c7fb3c3c1441ad91c06da826790642d5e7761
                <SearchScreen/>
            </Route>
            <Route path="/details/:location/:poiID/:photoReference" exact={true}>
                <DetailsScreen/>
            </Route>
        </BrowserRouter>
    </div>
  );
}

export default App;
