import React from 'react';
import {connect} from 'react-redux'
import { fetchpageOne,
        chooseOneMovie } from '../../../redux/actions/getData'
import  Detail  from './Detail';


class Overview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          movieID: "tt1384927"
        }
      }

    addMovie(choiceMovie)  {
    this.setState({
          movieID: choiceMovie
        });
    };


    componentWillMount() {
      this.props.fetchpageOne()
    }


    render() {
        const { movies } = this.props
        return (
            <section className="overview">
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
       {fetchpageOne, chooseOneMovie})(Overview)
