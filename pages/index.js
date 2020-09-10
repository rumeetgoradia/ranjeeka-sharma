import { Container, Grid, makeStyles, Typography } from "@material-ui/core"
import Paper from "@material-ui/core/Paper"
import { NextSeo } from "next-seo"
import Image from "../components/Image/Image"

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing() * 4,
	},
}))

const Home = () => {
	const classes = useStyles()

	return (
		<>
			<NextSeo titleTemplate="%s" title="Ranjeeka Sharma" />
			<Grid container>
				<Grid item xs={12}>
					<Container>
						<Paper className={classes.root}>
							<Typography variant="h1" color="primary">
								Ranjeeka Sharma
							</Typography>
							<Image image="test.jpg" />
						</Paper>
					</Container>
				</Grid>
			</Grid>
		</>
	)
}
export default Home
