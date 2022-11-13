import CourseList from './../components/course/CourseList';
import { useRouter } from "next/router"
import { useEffect, useState } from 'react'

function allCourses({queryType, queryVal}) {

    const [courses, setCourses] = useState([]);
    useEffect(() => {
        async function fetchData(){
            const url = 'https://api.utdnebula.com/course?'+queryType+'='+queryVal;
            const res = await fetch(url, {
                method: "GET",
                withCredentials: true,
                headers: {
                    "x-api-key": process.env.NEBULA_API_KEY,
                    "Accept": "application/json"
                    }
            });
            const resjs = await res.json();
            var courses_new = await resjs.data;
            setCourses(courses_new)
        }
        fetchData()
    }, [])

    return <CourseList courses={courses}/>
}

allCourses.getInitialProps = ({query: { queryType, queryVal }}) => {
    return {queryType, queryVal}
}
export default allCourses;
