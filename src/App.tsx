import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Erreur404 from "./pages/Error";
import About from "./pages/About";

const componentName = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/About" element={<About />}></Route>
				<Route path="*" element={<Erreur404 />}></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default componentName;
