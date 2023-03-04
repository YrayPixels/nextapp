import { LocationCityOutlined } from '@mui/icons-material';
import { CircularProgress } from '@mui/material';
import useSWR from 'swr';

function Totalfaculty(props) {
    const { data } = props;
    return (
        <div className="row topPills shadow  align-items-center">
            <div className="col-12 text-center col-md-8">
                <p>Total Faculty</p>
                <p className="fw-bold num">{
                    data == 0 ? '---' : data}</p>
            </div>
            <div className="col-12 col-md-4 text-center ">
                <span className='text-center shadow-sm '><LocationCityOutlined /></span>

            </div>
        </div>
    );
}
export default Totalfaculty;