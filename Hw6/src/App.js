import './App.css';
import UsersPage from './pages/userPage/UserPage';
// import MainPage from './pages/mainPage/MainPage';
import Calculator from './pages/calculatorsPage/CalculatorsPage';

function App() {
  return (
    <div className="App">
      {/* <MainPage /> */}
      <UsersPage />
      <Calculator />
    </div>
  );
}

export default App;
