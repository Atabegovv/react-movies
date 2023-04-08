function Header () {
	return <nav className="orange darken-3">
					<div className="container">
						<div className="nav-wrapper">
							<a href="/" className="brand-logo">React Movies</a>
							<ul id="nav-mobile" className="right hide-on-med-and-down">
								<li><a href="/">src code</a></li>
							</ul>
						</div>
					</div>
				</nav>
};

export {Header};