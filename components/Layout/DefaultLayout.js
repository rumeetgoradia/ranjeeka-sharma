import Header from "../Header/Header"

export default function DefaultLayout({ children }) {
	return (
		<>
			<Header />
			<div>{children}</div>
		</>
	)
}
