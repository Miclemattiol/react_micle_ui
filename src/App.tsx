import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Input from "../Input";

function App() {
	return (
		<div>
			<Input
				placeholder="Testo"
				type="password"
				required
			/>
		</div>
	);
}

export default App;
