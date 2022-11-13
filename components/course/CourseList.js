import Link from "next/link";

function courseList(props) {
    return(
        <div className="row">
            {
                props.courses.map((course) => (
                    <div className="card col-12 col-sm-6 p-2 my-2" key={course._id}>
                        <Link href={`/course/${course._id}`} className="card-title" style={{ textDecoration: 'none' }}>{course.subject_prefix}{course.course_number} - {course.title}</Link>
                    </div>
                ))
            }
        </div>
    )
}

export default courseList;