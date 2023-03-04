import { People } from '@mui/icons-material';
import { CircularProgress } from '@mui/material';
import useSWR from 'swr';

function TotalactiveUsers(props) {
    const { data } = props;

    return (
        <div className="row topPills shadow  align-items-center">
            <div className="col-12 text-center col-md-8">
                <p>Total Active Users</p>
                <p className="fw-bold num">{
                    data == 0 ? '---' : data}</p>
            </div>
            <div className="col-12 col-md-4 text-center ">
                <span className='text-center shadow-sm '><People /></span>

            </div>
        </div>
    );

}
export default TotalactiveUsers;