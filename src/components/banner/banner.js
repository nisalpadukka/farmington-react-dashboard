import "./banner.css";

//main banner displayed in home page
export default function Banner() {
  return (
    <header className="main-header gradient-bg">
        <div className="container pt-3">
            <div className="row align-items-center justify-content-center">
                <div className="col-md-5">
                <h2>Welcome to farmington App</h2>
                <p>Farmington is a mobile app which helps to improve the efficiency of production and distribution of crops using digital technology.</p>
                <button type = "button" className = "btn btn-outline-success">
                    Read More
                </button>
                <button type = "button" className = "btn btn-outline-warning">
                    Download
                </button>
                </div>
                
                <div className="col-md-5"><img src={require('./../../assets/images/mainimg.png')} width="600" height="400" alt="Header image"></img></div>
            </div>
        </div>
    </header>
  );
}
