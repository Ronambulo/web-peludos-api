import '../styles/Card.css';

export default function Card({ peludo }) {
	const id = peludo.id;
	const nombre = peludo.nombre;
	const sexo = peludo.genero;
	const edad = peludo.edad;
	const linkImage = peludo.imagen;
	const descripcion = peludo.desc_personalidad.replace(/<\/?p>/g, '');
	const adopcion = peludo.estado;

	return (
		<div className="cardContainer">
			<img src={linkImage} alt="imagen perrete" />
			<div className="headerContainer">
				<h2>{nombre}</h2>
				<p className="md-chip" style={{ backgroundColor: sexo === 'macho' ? '#0060b8' : '#e695b5' }}>
					{sexo}
				</p>
			</div>
			<p className="descripcion">{descripcion}</p>
		</div>
	);
}
