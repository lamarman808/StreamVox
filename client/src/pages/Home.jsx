import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()

  return (
    <div className="home-container col">
      <img
        src="https://steamuserimages-a.akamaihd.net/ugc/785232140934287854/BC02F3DDDA6D33B533B2570609936CF56F3A5957/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
        alt="Aku Aku!"
      />

      <section className="welcome-signin">
        <button onClick={() => navigate('/signin')}>
          Click Here! I promise it's not a trick . . .
        </button>
      </section>
    </div>
  )
}

export default Home
