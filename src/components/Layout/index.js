import Header from "./Header";
import Sidebar from "./Sidebar";
import "./styles.css"



function Layout({children}) {
    return ( 
        <div className="wrapper container-fluid">
            <Header/>
            <div className="row">
                <div className="col-4"><Sidebar/></div>
                <div className="content col-8">{children}</div>
            </div>
        </div>
     );
}

export default Layout;