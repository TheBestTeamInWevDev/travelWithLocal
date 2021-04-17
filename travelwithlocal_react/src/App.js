import SearchScreen from "./components/search-screen";
import DetailsScreen from "./components/details-screen";
import {BrowserRouter, Route} from "react-router-dom";
import HomeScreen from "./components/home-screen";
import React from "react";

function App() {
  return (
    <div className="container-fluid p-0">
        <BrowserRouter>
            {/*<Route path="/" exact={true}>*/}
            {/*    <HomeScreen/>*/}
            {/*</Route>*/}
            <Route path={["/", "/search", "/search/:location"]} exact={true}>
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
