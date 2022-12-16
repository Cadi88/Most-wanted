import './App.css';
import Header from './components/navigation/Header'
import MainContent from './components/content/MainContent';
import Footer from './components/content/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent/>
      <Footer/>
    </div>
  );
}

export default App;
