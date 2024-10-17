import './App.css';
import Card from './components/Card';
import { useState } from 'react';

async function fetchPeludos() {
	const response = await fetch('https://huachitos.cl/api/animales');
	const data = await response.json();
	return data.data;
}
function App() {
	const [peludos, setPeludos] = useState([]);

	fetchPeludos().then((data) => {
		setPeludos(data);
	});

	return (
		<div className="App">
			{peludos.map((peludo, index) => (
				<Card key={index} peludo={peludo} />
			))}
		</div>
	);
}

export default App;
