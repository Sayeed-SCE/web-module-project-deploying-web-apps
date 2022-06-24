import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      <a href="/ABOUT">ABOUT</a>
      <a href="/Home">HOME</a>
      <a href="/News">News</a>
      <a href="/Deals">DEALS</a>
      <a href="/Login">Login</a>
      <a href="/Logout">Logout</a>
      <a href="/Register">Register</a>
      </header>
      <div className="Nebula">
        <img
          src="https://nssdc.gsfc.nasa.gov/image/astro/hst_pillars_m16_close.jpg"
          alt="NASA nebula"
        />
        <h4>Photo of Nebula</h4>
      </div>

      <footer className="App-footer">
        <a href="/Contact">Contact us</a>
        <a href="/facebook">Facebook</a>
        <a href="/instagram">Instagram</a>
        <a href="/twitter">Twitter</a>
        <a href="/youtube">YouTube</a>
        <a href="/github">Github</a>

      </footer>
    </div>
  );
}

export default App;
