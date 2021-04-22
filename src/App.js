import './App.css';
import Navbar from '../src/Components/navbar/Navbar';
//Below just testing how it renders out
import Incubator from '../src/Pages/incubator/Incubator';
//
import MainContent from '../src/Components/maincontent/Maincontent';
function App() {
  return (
    <div className='App' >
      <Navbar />
      <MainContent />
      <Incubator />
    </div>
  );
}

export default App;
