import { Link, Router } from "@reach/router";
import React, { lazy, Suspense } from "react";
import SearchParams from "./SearchParams";

const Details = lazy(() => import("./Details"));
const App = () => {
  return (
    <React.StrictMode>
      <div>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
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
