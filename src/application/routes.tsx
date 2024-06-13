import { Routes, Route } from "react-router-dom"
import Products from "../pages";

const MainRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Products />} />
		</Routes>
	);
}

export default MainRoutes;