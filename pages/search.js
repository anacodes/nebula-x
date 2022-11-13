import SearchCourse from './../components/course/SearchCourse';
import {useRouter} from 'next/router'

function allCourses(props) {
    var queryType = ''
    var queryVal = ''
    async function addMeetupHandler(enteredMeetupData){
        queryType = enteredMeetupData.queryType;
        queryVal = enteredMeetupData.queryVal;
    }
    return <SearchCourse onSearch={addMeetupHandler}/>
}

export default allCourses;
