import './App.css';
import Ecom from './components/TC_Project/Ecom';

function App() {
  return (
    <div className="App">
      {/* <Router>
        <NavBar />
          <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/phones' element={<Phones/>}/>
            <Route path='/laptops' element={<Laptops/>}/>
          </Routes>
      </Router> */}
      <Ecom/>
    </div>
  );
}

export default App;
