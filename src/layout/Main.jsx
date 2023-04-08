import React from "react";
import { Movies } from "../components/movies";
import { Search } from "../components/Search";
import { Preloader } from "../components/Preloader";

//const API_KEY = process.env.REACT_APP_API_KEY;
class Main extends React.Component {

	state = {
		movies: [],
		loading: true,
	}

	componentDidMount() {
		fetch(`https://www.omdbapi.com/?apikey=c8b79df8&s=pirates`)
		.then(response => (response.json()))
		.then(data => this.setState({movies: data.Search, loading: false}))
	}

	searchMovies = (str) => {
		this.setState({ loading: true });
		fetch(`https://www.omdbapi.com/?apikey=c8b79df8&s=${str}`)
		.then(response => (response.json()))
		.then(data => this.setState({movies: data.Search, loading: false}))
	};

	render(){
		const {movies, loading} = this.state;

		return <main className="main container">
							<Search searchMovies={this.searchMovies} />
							{loading ? <Preloader /> : <Movies movies={movies} />}
						</main>
	}
};

export { Main };