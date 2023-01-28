import { Link } from "react-router-dom";
import { Browser } from '@capacitor/browser';



function BrandNavigation() {

    const openBrowser = async (url: string) => {
        console.log('Opening ('+ url + ') with in-app browser...');
        await Browser.open({ url: url, toolbarColor: '#FF0000' });
        Browser.addListener('browserFinished', () => {
            console.log('Handling browser exit..')
        })
      };

    const closeBrowser = async (url: string) => {
        console.log('Closing in-app browser...');
        await Browser.close();
    };

    return(
        <>
        <Link to="/">Home</Link>
        <br/>
        <br/>
        <br/>
        <form onSubmit={e=>openBrowser('https://www2.hm.com/')}>
            <button type="submit">H&M</button>
        </form>
        <br/>
        <br/>
        <form onSubmit={e=>openBrowser('https://shopforaurelia.com/')}>
            <button type="submit">Aurelia</button>
        </form>
        
	
        </>
    )
};

export default BrandNavigation;