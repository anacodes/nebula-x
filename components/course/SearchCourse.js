import Link from 'next/link';
import { Fragment, useRef } from 'react';
import {useRouter} from 'next/router'


import Card from '../ui/Card';
import classes from './SearchCourse.module.css';

function NewMeetupForm(props) {
  const queryTypeRef = useRef();
  const queryValRef = useRef();
  const courseList = props.courseList;

  const router = useRouter()

  function submitHandler(event) {
    event.preventDefault();

    const enteredQueryType = queryTypeRef.current.value;
    const enteredQueryVal = queryValRef.current.value;

    const meetupData = {
      queryType: enteredQueryType,
      queryVal: enteredQueryVal,
    };

    props.onSearch(meetupData);

    router.push({
        pathname: '/courses',
        query: {queryType: enteredQueryType, queryVal:enteredQueryVal},
      })
  }

  return (
    <Fragment>
        <div className="row">
            <Card className="col-6">
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                <label htmlFor='queryType'>Search Criteria</label>
                <input type='text' required id='queryType' ref={queryTypeRef} />
                </div>
                <div className={classes.control}>
                <label htmlFor='queryVal'>Value</label>
                <input type='text' required id='queryVal' ref={queryValRef} />
                </div>
                <div className={classes.actions}>
                {/* <Link href={{
                    pathname: '/courses',
                    query: { queryType: queryTypeRef, queryVal: queryValRef },
                }}>Search</Link>
                <Link href="/courses">Search</Link> */}
                <button type='submit'>Submit</button>
                </div>
            </form>
        </Card>
        </div>
    </Fragment>
  );
}

export default NewMeetupForm;