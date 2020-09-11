import PropTypes from "prop-types"

export default function Image({ image, alt, width, height }) {
	const webPSrc = require(`../../images/${image}?webp`)
	const imgSrc = require(`../../images/${image}`)
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				overflow: "hidden",
			}}
		>
			<picture>
				<source srcSet={webPSrc} type="image/webp" />
				<source srcSet={imgSrc} type="image/jpeg" />
				<img
					src={imgSrc}
					alt={alt}
					style={{
						width,
						height,
						display: "block",
					}}
				/>
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
