import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { CartContextProvider } from "./utils/CartContext";
import { MainLayout } from "./layout/MainLayout";
import { LandingPage } from "./pages/LandingPage";

function App() {
	return (
		<CartContextProvider>
			<BrowserRouter>
					<Routes>
					<Route  path={"/"} element={<MainLayout />} >
						<Route index element={<LandingPage  />} />
						<Route path={`/productspage`} element={<ProductsPage />} />
						{/* <Route path={`/accountpage`} element={<AccountPage />} />
						<Route path={`/checkoutpage`} element={<CheckoutPage />} />
						<Route path={`/cookiespolicypage`} element={<CookiePolicy />} />
						<Route path={`/returnpolicypage`} element={<ReturnPolicy />} /> */}
						</Route>
					</Routes>
			</BrowserRouter>
		</CartContextProvider>
	);
}

export default App;
