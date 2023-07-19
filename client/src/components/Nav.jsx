import '../App.css'
import { NavLink } from 'react-router-dom'

const Nav = ({ user, handleLogOut }) => {
  let userOptions
  if (user) {
    userOptions = (
      <nav>
        <h3>Hey! Listen!</h3>
        <NavLink to="/stream">Stream</NavLink>
        <NavLink onClick={handleLogOut}>Log Out</NavLink>
      </nav>
    )
  }

  const publicOptions = (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Sign In</NavLink>
    </nav>
  )

  return (
    <header>
      <NavLink to="/">
        <div className="logo-wrapper" alt="logo">
          <img
            className="logo"
            src="https://cdnb.artstation.com/p/assets/images/images/060/598/495/original/taffywabbit-navi-hover-green-bg.gif?1678909464"
            alt="avatar"
          />
        </div>
      </NavLink>
      {user ? userOptions : publicOptions}
    </header>
  )
}

export default Nav
