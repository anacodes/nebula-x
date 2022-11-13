import { Fragment } from 'react';
import classes from './CourseDetails.module.css';
import Professor from "../../components/course/Professor";

function CourseDetails(props) {
    var obj_keys = Object.keys(props.rate_data);
    var new_keys = Object.keys(props.new_profs);
    var cont = "";
    if (props.offering_frequency == 'S'){
        cont = "Course is offered at least once each long semester."
    }
    else if(props.offering_frequency == 'Y'){
        cont = "Course is offered at least once a year."
    }
    else if(props.offering_frequency == 'T'){
        cont = "Course is offered at least once every two years."
    }
    else if(props.offering_frequency == 'R'){
        cont = "Course is offered based on student interest and instructor availability."
    }
    return (
        <Fragment>
        <h3>{props.prefix} {props.course_number} - {props.title} ({props.activity_type}) </h3>
        <h4>{props.school} </h4>
        <h6>Credit Hours - {props.credit_hours} ({props.class_level})</h6>
        <h6> {cont} </h6>
        <h6>Laboratory contact hours: {props.laboratory_contact_hours}</h6>
        <h6>Lecture contact hours: {props.lecture_contact_hours}</h6>
        
        <p>{props.description} </p>
        <h4>Professor Ratings:</h4>
        <div className='row'>
            {obj_keys.map((obj) => (
                <div className="col-12 col-sm-6">
                    <Professor
                        key={obj}
                        id={obj}
                        name={props.rate_data[obj]['prof_name']}
                        diff={props.rate_data[obj]['rate_data']['avgDifficulty']}
                        rating={props.rate_data[obj]['rate_data']['avgRating']}
                        numRating={props.rate_data[obj]['rate_data']['numRatings']}
                        perc={props.rate_data[obj]['rate_data']['wouldTakeAgainPercent']}
                    />
                </div>
                ))}
        </div>

        <br />


        <div><h4>Professor without Ratings:</h4>
            <ul className={classes.list}>
                {new_keys.map((obj) => (
                // <h3>{props.new_profs[obj]['prof_name']}</h3>
                <h5 className="card-title py-0">{props.new_profs[obj]['prof_name'].charAt(0).toUpperCase()+props.new_profs[obj]['prof_name'].slice(1)}</h5>
                ))}
            </ul></div>     
        </Fragment>
    )
}

export default CourseDetails;
