import { Movie } from "./movie";

function Movies(props) {

	const {movies=[]} = props;	

	return <div className="movies">
						{ 
							movies.length > 0 ? 
								movies.map((movie) => (
									<Movie key={movie.imdbID} {...movie} />
								)) : 
									<h3>nothing</h3> 
						}
					</div>
};

export { Movies };