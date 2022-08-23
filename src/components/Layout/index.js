import Header from "./Header";
import Sidebar from "./Sidebar";
import "./styles.css"



function Layout({children}) {
    return ( 
        <div className="wrapper container-fluid">
            <Header/>
            <div className="row">
                <div className="content d-flex justify-content-center">{children}</div>
            </div>
        </div>
     );
}

export default Layout;