import { Female, People } from '@mui/icons-material';
import { CircularProgress } from '@mui/material';
import useSWR from 'swr';

function Totalfemale(props) {
    const { data } = props;

    return (
        <div className="row topPills shadow text-center align-items-center">
            <div className="col-12 col-md-8">
                <p>Total Students</p>
                <p className="fw-bold num">{
                    data == 0 ? '---' : data}</p>
            </div>
            <div className="col-12 col-md-4 text-center ">
                <span className='text-center shadow-sm '><People /></span>

            </div>
        </div>
    );
    // if (error)
    //     return <CircularProgress />
    // if (!data) return <CircularProgress />
    // return (
    //     <div className="row align-items-center shadow text-center text-md-start topPills">
    //         <div className="col-12 col-md-8">
    //             <p>Total Female</p>
    //             <p className="fw-bold num">{data.students}</p>
    //         </div>
    //         <div className="col-12 col-md-4 text-center ">
    //             <span className='text-center shadow-sm '><Female /></span>

    //         </div>
    //     </div>
    // );
}
export default Totalfemale;
