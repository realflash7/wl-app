import { Link } from "react-router-dom";
import { Browser } from '@capacitor/browser';



function Dashboard() {
    const selectedTeam ='453';

    return(
        <>
        <Link to="/">Home</Link>
        <h2>Dashboard</h2>
        <Link to="/brands">Choose from our Partner Brands</Link>
        </>
    )
};

export default Dashboard;