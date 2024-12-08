import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../admin-components/Navigation';
import FormInput from '../admin-components/FormInput';
// import TablePagination from '../components/TablePagination';
//import Test from '../components/test';

function Dashboard() {
    return (
        <div className='custom-container'>
            <Navigation />
            <FormInput/>
            {/* <Test/> */}
            {/* <TableProduct /> */}
            {/* //<Test/> */}
            {/* <TablePagination /> */}
        </div>
    )
}    

export default Dashboard;