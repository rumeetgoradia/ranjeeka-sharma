import { Button } from "@material-ui/core"
import { NextSeo } from "next-seo"
import Link from "next/link"

export default function Projects() {
	return (
		<>
			<NextSeo title="Projects" />
			<div style={{ height: 400, background: "red" }} />
			<Link href="/">
				<Button>Home</Button>
			</Link>
			<Link href="/about">
				<Button>About</Button>
			</Link>
		</>
	)
}
