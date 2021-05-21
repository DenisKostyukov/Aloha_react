import logo from "./logo.svg";
import "./App.css";
import Aloha from "./components/Aloha";
import Input from "./components/input";
import AlohaDashboard from "./components/AlohaDashboard";
import React from "react";

function App() {

	return (
		<>
			<Input />
			<Aloha name="Denis" />
			<Aloha name="Test"/>
			<AlohaDashboard/>
		</>
	);
}

export default App;
