import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <header>
      <div>
        <ul>
          <li>
            <NavLink to="/">Stream</NavLink>
          </li>
          <li>
            <NavLink to="/following">Following</NavLink>
          </li>
          <li>
            <NavLink to="/followers">Followers</NavLink>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Nav
