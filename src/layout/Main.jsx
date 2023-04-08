import React from "react";
import { Movies } from "../components/movies";
import { Search } from "../components/Search";
import { Preloader } from "../components/Preloader";

class Main extends React.Component {

	state = {
		movies: [],
		//loading: false,
	}

	componentDidMount() {
		fetch('http://www.omdbapi.com/?apikey=c8b79df8&s=pirates')
		.then(response => (response.json()))
		.then(data => this.setState({movies: data.Search}))
	}

	searchMovies = (str) => {
		//this.setState({loading: true});
		fetch(`http://www.omdbapi.com/?apikey=c8b79df8&s=${str}`)
		.then(response => (response.json()))
		.then(data => this.setState({movies: data.Search}))
	};

	render(){
		const {movies, loading} = this.state;

		return <main className="main container">
						<Search searchMovies={this.searchMovies}/>
						{
							movies.length > 0 ? <Movies movies={this.state.movies} /> : <Preloader/>
						}
		</main>
	}
};

export { Main };