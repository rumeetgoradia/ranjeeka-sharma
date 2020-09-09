import PropTypes from "prop-types"

export default function Image({ image, alt, width, height }) {
	const webPSrc = require(`../../images/${image}?webp`)
	const imgSrc = require(`../../images/${image}`)
	return (
		<div
			style={{
				width: "100%",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				overflowX: "hidden",
			}}
		>
			<picture>
				<source srcSet={webPSrc} type="image/webp" />
				<source srcSet={imgSrc} type="image/jpeg" />
				<img src={imgSrc} alt={alt} style={{ width, height }} />
			</picture>
		</div>
	)
}

Image.propTypes = {
	image: PropTypes.string.isRequired,
	alt: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
}

Image.defaultProps = {
	alt: "Ranjeeka Sharma",
	width: "100%",
	height: "auto",
}
