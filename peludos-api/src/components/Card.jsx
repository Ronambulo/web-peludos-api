import '../styles/Card.css';

export default function Card({ peludo }) {
	const id = peludo.id;
	const nombre = peludo.nombre;
	const sexo = peludo.genero;
	const edad = peludo.edad;
	const linkImage = peludo.imagen;
	const descripcion = peludo.desc_personalidad.replace(/<\/?p>/g, '').slice(0, 100) + (peludo.desc_personalidad.length > 100 ? '...' : '');
	const esterilizado = peludo.esterilizado;
	const vacunado = peludo.vacunas;

	function handleClick(e) {
		e.preventDefault();
		console.log(`Adoptaste a ${nombre}!`);
	}

	return (
		<div className="cardContainer">
			<img src={linkImage} alt="imagen perrete" />
			<div className="headerContainer">
				<h2>{nombre}</h2>
				<p className="md-chip" style={{ backgroundColor: sexo === 'macho' ? '#006fee' : '#a56fda' }}>
					{sexo}
				</p>
			</div>
			<p className="descripcion">{descripcion}</p>
			<div className="infoContainer">
				<p>{edad}</p>
				<div className="div-vac-est">
					<p style={{ backgroundColor: esterilizado ? '#17c964' : '#f31260', color: esterilizado ? 'black' : 'white' }}>Esterilizado</p>
					<p style={{ backgroundColor: vacunado ? '#17c964' : '#f31260', color: vacunado ? 'black' : 'white' }}>Vacunado</p>
				</div>
			</div>
			<form>
				<button className="btn-adoptar" onClick={handleClick}>
					Adoptar
				</button>
			</form>
		</div>
	);
}
