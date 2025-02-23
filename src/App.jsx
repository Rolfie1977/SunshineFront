import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import AppContext from "./utils/context";
import Home from "./components/Home";
import Header from "./components/Header";

function App() {
	return (
		<div>
			<BrowserRouter>
				<AppContext>
					<Routes>
						<Route path="/home" element={<Home />} />
					</Routes>
				</AppContext>
			</BrowserRouter>

			<Header />

			<h1>Kaffe test</h1>
		</div>
	);
}

export default App;
