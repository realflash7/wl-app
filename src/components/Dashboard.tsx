import { Link } from "react-router-dom";
import { Browser } from '@capacitor/browser';



function Dashboard() {
    const selectedTeam ='453';

    const openCapacitorSite = async () => {
        console.log('Opening in-app browser');
        await Browser.open({ url: 'https://shopforaurelia.com/' });
      };

    return(
        <>
        <Link to="/">Home</Link>
        <h2>Dashboard 2</h2>
        <form onSubmit={openCapacitorSite}>
        <p>Choose from our Partner Brands</p>
        <select name="targets" id="selectedTeam">
            <optgroup label="e-commerce">
            <option value="amazon">Amazon</option>
            <option value="myntra">Myntra</option>
            </optgroup>
            <optgroup label="brands">
            <option value="h&m">H&M</option>
            <option value="aurelia">Aurelia</option>
            </optgroup>
        </select>
            <button type="submit">open browser</button>
        </form>
        
	
        </>
    )
};

export default Dashboard;