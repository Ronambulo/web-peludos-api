import { useEffect } from 'react';
import '../styles/FiltroForm.css';

export default function FiltroForm({ getFiltro }) {
	function handleSubmit(event) {
		event.preventDefault();
		const tipo = event.target.Tipo.value;
		const genero = event.target.Genero.value;
		const estado = event.target.Estado.value;
		getFiltro(tipo, genero, estado);
	}

	useEffect(() => {
		getFiltro('any', 'any', 'any');
	}, []);

	return (
		<form onSubmit={handleSubmit}>
			<div className="divSelect">
				<label>Tipo:</label>
				<select name="Tipo" id="tipo" className="formInput">
					<option value="any">Todos</option>
					<option value="Perro">Perro</option>
					<option value="Gato">Gato</option>
				</select>
			</div>
			<div className="divSelect">
				<label>Genero:</label>
				<select name="Genero" id="genero" className="formInput">
					<option value="any">Todos</option>
					<option value="macho">Machos</option>
					<option value="hembra">Hembras</option>
				</select>
			</div>
			<div className="divSelect">
				<label>Estado:</label>
				<select name="Estado" id="estado" className="formInput">
					<option value="any">Todos</option>
					<option value="adopcion">Adopción</option>
					<option value="encontrado">Encontrado</option>
				</select>
			</div>
			<button type="submit" className="formInput">
				Filtrar
			</button>
		</form>
	);
}
