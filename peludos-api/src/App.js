import './App.css';
import Card from './components/Card';
import { useEffect, useState } from 'react';
import FiltroForm from './components/FiltroForm';

async function fetchPeludos() {
	const response = await fetch('https://huachitos.cl/api/animales');
	const data = await response.json();
	return data.data;
}
function App() {
	const [peludos, setPeludos] = useState([]);
	const [filtro, setFiltro] = useState({
		tipo: 'any',
		genero: 'any',
		estado: 'any',
	});

	fetchPeludos().then((data) => {
		setPeludos(data);
	});

	function getFiltro(gtipo, ggenero, gestado) {
		setFiltro({
			tipo: gtipo,
			genero: ggenero,
			estado: gestado,
		});
	}

	// Lógica de filtrado aplicada en el map
	const peludosFiltrados = peludos.filter((peludo) => {
		// Filtrar por tipo si el tipo es Perro
		const filtrarPorTipo = peludo.tipo === filtro.tipo || filtro.tipo === 'any';
		const filtrarPorGenero = peludo.genero === filtro.genero || filtro.genero === 'any';
		const filtrarPorEstado = peludo.estado === filtro.estado || filtro.estado === 'any';
		// Retorna solo si cumple con todos los filtros
		return filtrarPorTipo && filtrarPorGenero && filtrarPorEstado;
	});

	return (
		<div className="App">
			<header>
				<h1>Peludos API</h1>
				<FiltroForm getFiltro={getFiltro} />
			</header>
			<div className="peludos">
				{peludosFiltrados.length > 0 ? (
					peludosFiltrados.map((peludo, index) => <Card key={index} peludo={peludo} />)
				) : (
					<h2>No se encuentran peludos</h2>
				)}
			</div>
		</div>
	);
}

export default App;
