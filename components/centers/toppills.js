import axios from "axios";
import { useEffect, useState } from "react";
import TotalactiveUsers from "./dashboardone/activeusers";
import TotalCourse from "./dashboardone/totalcourses";
import Totalfaculty from "./dashboardone/totalfaculty";
import Totalfemale from "./dashboardone/totalfemale";


function TopPilsItems() {
    const [bearer_key, setBearer_key] = useState(' ');
    const [dets, setDets] = useState({});
    useEffect(() => {
        if (window) {
            setBearer_key(window.sessionStorage.getItem("bearer_token"));
            setDets(JSON.parse(window.sessionStorage.getItem('dets')));
        }
    }, []);

    const [fac, setFac] = useState('');
    const [cour, setCour] = useState('');
    const [stud, setStud] = useState('');
    const [active, setActive] = useState('');

    const fetchData = () => {
        const TotalFaculties = `${process.env.NEXT_PUBLIC_API_BASE}center/getTotalFaculty/${dets.id}`
        const TotalStudents = `${process.env.NEXT_PUBLIC_API_BASE}center/getTotalFemaleStudents/${dets.id}`
        const TotalCourses = `${process.env.NEXT_PUBLIC_API_BASE}center/getTotalCourses/${dets.id}`
        const TotalActiveusers = `${process.env.NEXT_PUBLIC_API_BASE}center/getTotalUsers/${dets.id}`


        const getTotalStudents = axios.get(TotalStudents);
        const getAllCourse = axios.get(TotalCourses);
        const getTotalFaculties = axios.get(TotalFaculties);
        const getTotalActiveusers = axios.get(TotalActiveusers);


        axios.all([getTotalStudents, getAllCourse, getTotalFaculties, getTotalActiveusers]).then(
            axios.spread((...allData) => {
                const TotalStudentsData = allData[0].data.students;
                const TotalCoursesData = allData[1].data.result;
                const allFacultiesData = allData[2].data.result;
                const TotalActiveusersData = allData[3].data.result;

                setStud(TotalStudentsData)
                setCour(TotalCoursesData)
                setFac(allFacultiesData)
                setActive(TotalActiveusersData)
            })
        )
    }
    useEffect(() => {
        fetchData();

    })
    return (<>
        <div className="row g-2 pillTop justify-content-between align-items-center mt-3">
            {/* Top Pills */}
            <div className="col-5 col-lg-3">
                <Totalfaculty data={fac} />
            </div>
            <div className="col-5 col-lg-3">
                <TotalactiveUsers data={active} />
            </div>
            <div className="col-5 col-lg-3">
                <TotalCourse data={cour} />
            </div>
            <div className="col-5 col-lg-3">
                <Totalfemale data={stud} />
            </div>
        </div>
    </>);
}

export default TopPilsItems;