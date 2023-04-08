function Footer() {
	return <footer className="page-footer orange darken-3">
					<div className="footer-copyright">
						<div className="container">
						© { new Date().getFullYear() } React Movies
						<a className="grey-text text-lighten-4 right" href="/">src</a>
						</div>
					</div>
				</footer>
};

export {Footer};