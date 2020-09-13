import { CssBaseline } from "@material-ui/core"
import {
	createMuiTheme,
	ThemeProvider as MaterialThemeProvider,
} from "@material-ui/core/styles"
import GoogleFonts from "next-google-fonts"
import { DefaultSeo } from "next-seo"
import NextApp from "next/app"
import DefaultLayout from "../components/Layout/DefaultLayout"
import SEO from "../next-seo.config"

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#7fb069",
		},
		secondary: {
			main: "#fcd5ce",
		},
		text: {
			primary: "#030301",
			secondary: "#5c6b73",
		},
		background: {
			default: "ghostwhite",
			paper: "#f9f0ef",
		},
	},
	typography: {
		fontFamily: '"Poppins", "Arial", "Helvetica", "sans-serif"',
		fontWeightLight: 200,
		fontWeightRegular: 300,
		fontWeightBold: 500,
		h1: {
			fontWeight: 300,
		},
		h2: {
			fontWeight: 200,
			fontSize: "calc(2rem + 2vw)",
		},
		h3: {
			fontWeight: 300,
		},
		h4: {
			fontWeight: 300,
		},
		h5: {
			fontWeight: 300,
		},
		h6: {
			fontWeight: 300,
		},
		subtitle1: {
			fontWeight: 200,
		},
		subtitle2: {
			fontWeight: 200,
		},
		body1: {
			fontWeight: 300,
		},
		body2: {
			fontWeight: 300,
		},
		button: {
			fontWeight: 200,
			letterSpacing: 1,
		},
	},
	props: {
		MuiButton: {
			variant: "contained",
			color: "primary",
			disableElevation: true,
		},
	},
})

export default class App extends NextApp {
	componentDidMount() {
		const jssStyles = document.querySelector("#jss-server-side")
		if (jssStyles && jssStyles.parentNode)
			jssStyles.parentNode.removeChild(jssStyles)
	}

	render() {
		const { Component, pageProps } = this.props
		const Layout = Component.Layout || DefaultLayout

		return (
			<>
				<DefaultSeo {...SEO} />
				<GoogleFonts href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,500;1,200;1,300;1,500&display=swap" />
				<MaterialThemeProvider theme={theme}>
					<CssBaseline />
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</MaterialThemeProvider>
			</>
		)
	}
}
