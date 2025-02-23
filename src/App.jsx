import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { CartContextProvider } from "./utils/CartContext";
import { MainLayout } from "./layout/MainLayout";
import { LandingPage } from "./pages/LandingPage";
import { ProductsPage } from "./pages/ProductsPage";

function App() {
	return (
		<CartContextProvider>
			<BrowserRouter>
					<Routes>
					<Route  path={"/"} element={<MainLayout />} >
						<Route index element={<LandingPage  />} />
						<Route path={`/productspage`} element={<ProductsPage />} />
						</Route>
					</Routes>
			</BrowserRouter>
		</CartContextProvider>
	);
}

export default App;
