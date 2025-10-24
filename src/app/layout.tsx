import type { Metadata } from "next";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import "./styles/globals.css";

export const metadata: Metadata = {
	title: "Xalor90's Portfolio",
	description: "Personal Portfolio of xalor90 showcasing projects, blog posts, and more.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="antialiased flex flex-col min-h-screen bg-background text-foreground">
				<Header />
				<div className="flex-1 flex flex-col lg:flex-row max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 gap-8">
					{children}
					<Sidebar />
				</div>
				<Footer />
			</body>
		</html>
	);
}
