import NavBar from './components/NavBar/NavBar';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import './App.css';
<style>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
</style>


function App() {
  return (
    <div className="App">
    <NavBar/>
    <Body/>
    <Footer/>
    </div>
  );
}

export default App;
