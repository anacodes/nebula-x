import CourseDetails from "../../components/course/CourseDeatils";
import ratings from '@mtucourses/rate-my-professors';
function coursePage(props) {
  return (
    <CourseDetails 
    activity={props.data.activity_type} 
    class_level={props.data.class_level} 
    course_number={props.data.course_number} 
    credit_hours={props.data.credit_hours} 
    activity_type={props.data.activity_type} 
    laboratory_contact_hours={props.data.laboratory_contact_hours}
    lecture_contact_hours={props.data.lecture_contact_hours}
    description={props.data.description} 
    school={props.data.school} 
    prefix={props.data.subject_prefix} 
    title={props.data.title} 
    offering_frequency={props.data.offering_frequency}
    rate_data={props.rate_data}
    new_profs={props.new_prof}
    />
  )
};      

export async function getStaticPaths() {
    return {
        // false --> covers all paths
        fallback: 'blocking',
        paths: [
            {
                params: {
                    courseId: '62410a21e27d0c74c4093d5a'
                }
            }
        ]
    }
}

export async function getStaticProps(context){

    const courseId = context.params.courseId;

    // get course info and sections 
    // const url = 'https://api.utdnebula.com/course/62410a21e27d0c74c4093d5a';
    const url = 'https://api.utdnebula.com/course/'+courseId;
    const res = await fetch(url, {
    method: "GET",
    withCredentials: true,
    headers: {
        "x-api-key": process.env.NEBULA_API_KEY,
        "Accept": "application/json"
    }
    });
    const resjs = await res.json();
    const sections = resjs.data.sections;

    var ratings_data = {}
    var new_data = {}
    for (let i = 0; i < sections.length; i++) {
        // get professors id (nebula)
        const sec_url = 'https://api.utdnebula.com/section/'+sections[i];
        const secres = await fetch(sec_url, {
            method: "GET",
            withCredentials: true,
            headers: {
            "x-api-key": process.env.NEBULA_API_KEY,
            "Accept": "application/json"
            }
        });
        const secresjs = await secres.json();
        const prof_id = secresjs.data.professors[0];

            if ((!(prof_id in ratings_data)) && (!(prof_id in new_data))) {
                
            // get professor's name
            const prof_url = 'https://api.utdnebula.com/professor/'+prof_id;
            const profres = await fetch(prof_url, {
                method: "GET",
                withCredentials: true,
                headers: {
                "x-api-key": process.env.NEBULA_API_KEY,
                "Accept": "application/json"
                }
            });
            const profresjs = await profres.json();
            if (profresjs.data.first_name !== undefined && profresjs.data.last_name !== undefined){
                const prof_nm = profresjs.data.first_name.toLowerCase() + " " + profresjs.data.last_name.toLowerCase();

                // get professor's id (rmp)
                const teachers = await ratings.searchTeacher(prof_nm,'U2Nob29sLTEyNzM=');
                if (teachers.length>=1){
                    const teacher_id = teachers[0].id;
        
                    //get professor's ratings
                    const rate = await ratings.getTeacher(teacher_id);

                    var data_obj = {
                        prof_name: prof_nm,
                        rate_data: rate
                    }
                    ratings_data[prof_id] = data_obj;
                }
                else{
                    new_data[prof_id] = {
                        prof_name: prof_nm,
                    }
                }                
            }
            
        }
    }

  return {
    props: {
        data: resjs.data,
        rate_data: ratings_data,
        new_prof: new_data
    }
  }

}


export default coursePage;