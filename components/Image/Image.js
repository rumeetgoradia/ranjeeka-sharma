import PropTypes from "prop-types"
import Img from "react-optimized-image"

export default function Image({ image, alt, ...props }) {
	return (
		<Img
			src={require(`../../images/${image}`)}
			alt={alt}
			title={alt}
			webp
			style={{ display: "block" }}
			{...props}
		/>
	)
}

Image.propTypes = {
	image: PropTypes.string.isRequired,
	alt: PropTypes.string,
}

Image.defaultProps = {
	alt: "Ranjeeka Sharma",
}
