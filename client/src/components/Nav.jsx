import { NavLink } from 'react-router-dom'

const Nav = ({ user, handleLogOut }) => {
  let userOptions
  if (user) {
    userOptions = (
      <nav>
        <h3>Welcome {user.name}!</h3>
        <NavLink to="/stream">Stream</NavLink>
        <NavLink onClick={handleLogOut}>Sign Out</NavLink>
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
            src="https://api.dicebear.com/6.x/icons/svg?seed=Trouble&scale=120&radius=45&backgroundColor=80cbc4,80deea,81d4fa,90caf9,9fa8da,a5d6a7,b39ddb,c5e1a5,ce93d8,e6ee9c,ef9a9a,f48fb1,ffab91,ffcc80,ffe082,c0aede&backgroundType=gradientLinear&icon=archive,award,bell,bicycle,binoculars,book,bookshelf,boombox,box,boxSeam,bricks,briefcase,brightnessHigh,brush,bucket,bug,building,calculator,camera,cameraReels,cart2,cashCoin,clock,cloud,cloudDrizzle,cloudMoon,cloudSnow,clouds,coin,controller,disc,palette2,router,sdCard"
            alt="avatar"
          />
        </div>
      </NavLink>
      {user ? userOptions : publicOptions}
    </header>
  )
}

export default Nav
