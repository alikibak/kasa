import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Erreur404 from "./pages/Error";
import About from "./pages/About";
import { ABOUT_ROUTE, ERROR_ROUTE, HOME_ROUTE, LOCATION_ROUTE } from "./routes";
import Page_location from "./pages/Location";

const Kasa = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path={HOME_ROUTE} element={<Home />}></Route>
					<Route path={ABOUT_ROUTE} element={<About />}></Route>
					<Route path={ERROR_ROUTE} element={<Erreur404 />}></Route>
					<Route path={LOCATION_ROUTE} element={<Page_location />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default Kasa;
