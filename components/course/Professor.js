import { Fragment } from 'react';
import Card from '../ui/Card';
import classes from './Professor.module.css';
import StarRatings from 'react-star-ratings';

function Professor(props) {
  return (
    <Fragment>
        <div className="card py-2 my-2">
            <div className="card-body py-0">
                <h5 className="card-title py-0">{props.name.charAt(0).toUpperCase()+props.name.slice(1)} ({props.rating})</h5>
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
            </div>
            <ul className="list-group list-group-flush">
                <div className="list-group-item border-0 py-0">
                <StarRatings
                    rating={props.rating}
                    starRatedColor="yellow"
                    numberOfStars={5}
                    starDimension="25px"
                    name='rating'
                /> 
                </div>
                
                <li className="list-group-item border-0 py-0">Course Difficulty: {props.diff}</li>
                <li className="list-group-item border-0 py-0">Students willing to retake: {props.perc}</li>
                <li className="list-group-item border-0 py-0">No. of reviews: {props.numRating}</li>
            </ul>
        </div>
    </Fragment>
    );
}

export default Professor;