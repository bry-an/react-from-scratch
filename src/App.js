import { Router } from "@reach/router";
import React, { lazy, Suspense } from "react";
import NavBar from "./Navbar.js";
import SearchParams from "./SearchParams.js";

const Details = lazy(() => import("./Details.js"));
const App = () => {
  return (
    <React.StrictMode>
      <div>
        <NavBar />
        <Suspense fallback={<h1>Loading route...</h1>}>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </Suspense>
      </div>
    </React.StrictMode>
  );
};

export default App;
