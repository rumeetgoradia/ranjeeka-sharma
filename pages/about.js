import { Button } from "@material-ui/core"
import { NextSeo } from "next-seo"
import Link from "next/link"

export default function About() {
	return (
		<>
			<NextSeo title="About" />
			<Link href="/">
				<Button>Home</Button>
			</Link>
			<Link href="/projects">
				<Button>Projects</Button>
			</Link>
		</>
	)
}
