import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()

  return (
    <div className="home-container">
      <img
        src="https://steamuserimages-a.akamaihd.net/ugc/785232140934287854/BC02F3DDDA6D33B533B2570609936CF56F3A5957/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
        alt="https://64.media.tumblr.com/17175640e38efca7d5342a8ce39993e1/tumblr_ouuw47tGof1u50xuco2_540.gif"
      />

      <section className="welcome-login">
        <button onClick={() => navigate('/login')}>Login Here!</button>
      </section>
    </div>
  )
}

export default Home
