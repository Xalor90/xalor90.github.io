import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="sticky top-0 z-50">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-14">
					{/* Logo */}
					<Link href="/" className="text-xl font-bold hover:text-hover-foreground">
						Xalor90
					</Link>

					{/* Nav Links */}
					<div className="hidden md:flex space-x-6">
						<Link href="/about" className="hover:text-hover-foreground">About</Link>
						<Link href="/jobs" className="hover:text-hover-foreground">Jobs</Link>
						<Link href="/education" className="hover:text-hover-foreground">Education</Link>
						<Link href="/portfolio" className="hover:text-hover-foreground">Portfolio</Link>
						<Link href="/blog" className="hover:text-hover-foreground">Blog</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}
