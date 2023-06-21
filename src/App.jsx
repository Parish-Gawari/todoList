import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppFooter from "./components/AppFooter/AppFooter";
import AppHeader from "./components/AppHeader/AppHeader";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <main>
        <Home />
      </main>
      <AppFooter />
    </div>
  );
}

export default App;
