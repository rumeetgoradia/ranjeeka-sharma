import { CssBaseline } from "@material-ui/core"
import {
	createMuiTheme,
	ThemeProvider as MaterialThemeProvider,
} from "@material-ui/core/styles"
import GoogleFonts from "next-google-fonts"
import { DefaultSeo } from "next-seo"
import NextApp from "next/app"
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
			default: "#f8edeb",
			paper: "#f9f0ef",
		},
	},
	typography: {
		fontFamily: '"Kufam", "Arial", "Helvetica", "sans-serif"',
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

		return (
			<>
				<DefaultSeo {...SEO} />
				<GoogleFonts href="https://fonts.googleapis.com/css2?family=Kufam:ital,wght@0,400;0,500;0,600;0,669;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" />
				<MaterialThemeProvider theme={theme}>
					<CssBaseline />
					<Component {...pageProps} />
				</MaterialThemeProvider>
			</>
		)
	}
}
