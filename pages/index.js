import {
	Button,
	Container,
	Grid,
	makeStyles,
	Typography,
	useMediaQuery,
	useTheme,
} from "@material-ui/core"
import { NextSeo } from "next-seo"
import Link from "next/link"
import Image from "../components/Image/Image"
import NoHeaderLayout from "../components/Layout/NoHeaderLayout"

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		[theme.breakpoints.up("md")]: {
			height: "100%",
		},
	},
}))

const Home = () => {
	const classes = useStyles()
	const theme = useTheme()
	const isMediumWidth = useMediaQuery(theme.breakpoints.up("md"))

	return (
		<>
			<NextSeo titleTemplate="%s" title="Ranjeeka Sharma" />
			<Grid
				container
				direction={isMediumWidth ? "row" : "row-reverse"}
				className={classes.root}
			>
				<Grid item xs={12} md={6}>
					<Image
						image="test.jpg"
						height={isMediumWidth ? "100vh" : "auto"}
						width={isMediumWidth ? "auto" : "100%"}
					/>
				</Grid>
				<Grid container item xs={12} md={6} alignItems="center">
					<Container>
						<Typography variant="h2" color="primary">
							Ranjeeka Sharma
						</Typography>
						<Link href="/about">
							<Button>About</Button>
						</Link>
						<Link href="/projects">
							<Button>Projects</Button>
						</Link>
					</Container>
				</Grid>
			</Grid>
		</>
	)
}

Home.Layout = NoHeaderLayout

export default Home
