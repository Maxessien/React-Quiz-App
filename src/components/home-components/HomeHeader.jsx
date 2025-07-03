import { Link } from 'react-router-dom';
import './scss/home-header.scss'

function HomePageHeader() {
  // const bgImage = "/Picsart_25-03-05_16-49-18-4132.jpg";
  // // const profileImageStyle = {
  // //   background: `url(${bgImage})`,
  // //   backgroundSize: "cover",
  // //   backgroundPosition: "center",
  // //   backgroundAttatchment: "fixed",
  // //   height: "4.5rem",
  // //   width: "4.5rem",
  // //   borderRadius: "50%",
  // };

  return (
    <>
      <header className='home-header'>
        <img src="/quiz-app-logo.png" alt="logo" />

        <div className="logo-seperator">
          <nav className="home-nav">
            <ul className='home-nav-list'>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/register">Sign Up</Link>
              </li>
              <li>
                <Link to="/login">Log In</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default HomePageHeader;
