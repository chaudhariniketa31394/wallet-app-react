import logo from './logo.svg';
import './App.css';
import Nav from './components/shared/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './components/Welcome';
import Dashboard from './components/dashboard/Dashboard';
import Wallet from './components/Wallet';
import TransactionList from './components/TransactionList'
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/welcome" exact element={<Welcome />} /> 
        <Route path="/dashboard" exact element={<Dashboard />} />
        <Route path="/wallet" exact element={<Wallet />} />
        <Route path="/transactions" exact element={<TransactionList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
