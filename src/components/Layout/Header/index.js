import 'primeicons/primeicons.css';

function Header() {
    return (
      <div className="header-wrapper container-fluid text-bg-dark w-100 position-fixed top-0 start-0">
        <header className="d-flex flex-wrap justify-content-start align-items-center py-1 shadow ">
            <button className="btn-menu btn text-white d-flex flex-column align-items-center">
                <i className='pi pi-align-justify' style={{'fontSize': '2em'}}/>
                <span>Menu</span>
            </button>
            <a href="/" className="text-decoration-none ms-5 text-white">
                <h2>Amazing Card Games</h2>
            </a>
        </header>
        
      </div>
    );
  }
  
  export default Header;