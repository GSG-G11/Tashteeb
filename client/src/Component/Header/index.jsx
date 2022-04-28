import Navbar from '../Navbar'
import banner from '../../Assets/home-done.svg'
import './style.css'
const Header = () => {
  return (
    <header className="header-holder">
      <Navbar />
      <section className="image-holder">
        <img src={banner} alt="" />
        <div className="banner-info">
          <h3>we are construction parteners .</h3>
          <h1>The builders we are the best </h1>
          <button>View More.</button>
        </div>
      </section>
    </header>
  )
}

export default Header
