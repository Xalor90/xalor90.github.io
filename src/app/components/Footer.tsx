export default function Footer() {
	return (
		<footer className="bg-shadow border-t-2 border-foreground mt-12">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center">
				<p>&copy; {new Date().getFullYear()} Xalor90. All rights reserved.</p>
				<div className="flex space-x-4 mt-2 md:mt-0">
					<a href="https://www.linkedin.com/in/xalor90" target="_blank" rel="noopener noreferrer" className="hover:text-hover-foreground">
						LinkedIn
					</a>
					<a href="https://github.com/xalor90" target="_blank" rel="noopener noreferrer" className="hover:text-hover-foreground">
						GitHub
					</a>
				</div>
			</div>
		</footer>
	);
}
