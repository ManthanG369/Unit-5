import logo from './logo.svg';
import './App.css';
import { Recipe } from "./components/recipe"
function App() {
  return (
    <div className="App">
      <h1>Masai Recipes App</h1>
      <section className="top-section">
        <div className="Left">

          <Recipe />

        </div>
        <div className="right">
          <h3>recipe</h3>
        </div>
      </section>
      <div className="bottom"></div>

    </div>
  );
}

export default App;
