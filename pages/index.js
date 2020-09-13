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
	gridItem: {
		height: "50vh",
		[theme.breakpoints.up("md")]: {
			height: "100vh",
		},
	},
	landingImgContainer: {
		height: "100%",
		width: "100%",
	},
	landingImg: {
		width: "100%",
		height: "100%",
		objectFit: "cover",
	},
	landingContentContainer: {
		padding: theme.spacing(4),
		[theme.breakpoints.up("md")]: {
			padding: theme.spacing(8),
		},
	},
	landingHeader: {},
}))

const Home = () => {
	const classes = useStyles()
	const theme = useTheme()
	const isMediumWidth = useMediaQuery(theme.breakpoints.up("md"))

	return (
		<>
			<NextSeo titleTemplate="%s" title="Ranjeeka Sharma" />
			<Grid container direction="row" className={classes.root}>
				<Grid item xs={12} md={6} className={classes.gridItem}>
					<Image image="test.jpg" className={classes.landingImg} />
				</Grid>
				<Grid
					container
					item
					xs={12}
					md={6}
					className={classes.gridItem}
					alignItems="center"
				>
					<Grid item xs={12}>
						<Container className={classes.landingContentContainer}>
							<Typography
								variant="h2"
								color="textSecondary"
								className={classes.landingHeader}
								gutterBottom
							>
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
			</Grid>
		</>
	)
}

Home.Layout = NoHeaderLayout

export default Home
