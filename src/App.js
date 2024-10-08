import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" style={{overflow: 'scroll'}}>
      
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Billi App</title>
  <link rel="stylesheet" href="styles.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
    rel="stylesheet"
  />
  <div className="container">
    <div className="content-wrapper">
      <div className="header">
        <img src="logo_website.png" alt="Billi Logo" className="logo" />
      </div>
      <div className="content">
        <h1>Tú tomas la foto y nosotros hacemos el resto</h1>
        <p>
          Registra tus gastos, fija tus metas de ahorro y descubre patrones que
          te permitan mejorar tu vida financiera
        </p>
        <div className="signup">
          <h2>Únete a nuestra lista de espera</h2>
          <h3>
            Sé una de las primeras personas en probar nuestra versión beta
          </h3>
          <div className="input-container">
          <form method="post" action="https://script.google.com/macros/s/AKfycbwURVAf8-WhRbKgh8z2F1m9eeq9KJwrInYSUkQ7v-vuAbhCFygfB15_euR0ny98ZkK8/exec" name="email-form">
                        <input type="email" name="your-email" placeholder="Regístrate regístrate regístrate regístrate"></input>
                        <button>Sign up</button>
                    </form>
                  </div>
        </div>
        <div className="download-buttons">
          <a href="#" className="button google-play">
            <img src="google-play-logo.png" alt="Google Play" />
            <span>
              Disponible en
              <br />
              Google Play
            </span>
          </a>
          <a href="#" className="button app-store">
            <img src="apple-logo.png" alt="App Store" />
            <span>
              Disponible en
              <br />
              App Store
            </span>
          </a>
        </div>
      </div>
    </div>
    <div className="phone">
      <img src="mockup.png" alt="Phone Image" className="phone-image" />
    </div>
  </div>


    </div>
  );
}

export default App;
