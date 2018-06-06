import React from 'react';
import {connect} from 'react-redux'
import { fetchAllMovie, chooseOneMovie } from '../../../redux/actions/getData'
import  Detail  from './Detail'



class Overview extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          page: 1,
          movieID: "tt1384927"
        }
      }

    onInitialSearch = (e) => {
      e.preventDefault();

      const { value } = this.input;

      if (value === '') {
        return;
      }

      this.props.fetchAllMovie(value, 1)
    }

    goNextPage = (e) => {
       this.props.fetchAllMovie(this.input.value, this.state.page + 1)
       this.setState({
         page: this.state.page + 1
       })
     }

     goPreviousPage = (e) => {
       this.props.fetchAllMovie(this.input.value, this.state.page - 1)
       this.setState({
         page: this.state.page - 1
       })
     }

    addMovie(choiceMovie)  {
      this.setState({
            movieID: choiceMovie
          });
    };

    render() {
        const { movies } = this.props
        return (
            <section className="overview">
            <div className="page">
              <div className="interactions">
                <form type="submit" onSubmit={this.onInitialSearch}>
                  <input type="text" ref={node => this.input = node} />
                  <button type="submit">Search</button>
                </form>
                <button className="next" onClick={this.goPreviousPage}>pre</button>
                <button className="next" onClick={this.goNextPage}>next</button>
              </div>
            </div>
            { movies.map(movie => (
              <article className="card" onClick={() => this.addMovie(movie.imdbID)} >
                  <img
                      className="card-img"
                      alt={movie.Title}
                      src={movie.Poster !== "N/A" ? movie.Poster : "http://cdn2-www.superherohype.com/assets/uploads/2013/11/18375601324_cacd540a4d_z-1.jpg"}
                  />
                  <div className="card-body">
                      <h2 className="card-title">{movie.Title}</h2>
                  </div>
              </article>
                ))}
             <Detail newMovieId={this.state.movieID}/>
            </section>

        )
    }
}

const mapStateToProps = (state) => ({
  movies: state.movies
})

export default connect(mapStateToProps,
       {fetchAllMovie, chooseOneMovie})(Overview)
