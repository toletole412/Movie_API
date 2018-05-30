import React from 'react';
import { chooseOneMovie } from '../../../redux/actions/getData'
import {connect} from 'react-redux'
import '../../../sass/main.scss'

class Detail extends React.Component {


    componentDidMount(props) {
     this.props.chooseOneMovie(this.props.newMovieId)
    }

    componentDidUpdate(prevProps, prevState) {
    if (prevProps.newMovieId !== this.props.newMovieId) {
    this.props.chooseOneMovie(this.props.newMovieId)
        }
    }


    render() {

        return (
            <section className="detail">

                <img
                    className="detail__img"
                    src={this.props.choice.Poster !== "N/A" ? this.props.choice.Poster : "http://cdn2-www.superherohype.com/assets/uploads/2013/11/18375601324_cacd540a4d_z-1.jpg"}
                />

                <header className="detail__header">
                    <h2 className="detail__title">{this.props.choice.Title}</h2>
                    <p className="detail__release">{this.props.choice.Released}</p>
                    <p className="detail__director">{this.props.choice.Director}</p>
                </header>

                <p className="detail__synopsis">{this.props.choice.Plot}</p>
                <a href={`https://www.imdb.com/title/${this.props.choice.imdbID}/?ref_=fn_al_tt_2`} style={{margin: "20px"}}>check more details at IMDB</a>
            </section>
        )
    }
}

const mapStateToProps = function(state) {
    return {
      choice: state.choice,
    };
  };


  export default connect(mapStateToProps, {chooseOneMovie})(Detail)
