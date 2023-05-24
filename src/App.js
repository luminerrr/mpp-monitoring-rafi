import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Provider from './components/provider';
import Homepage from './pages/homepage';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Navigate to='/home' replace />}/>
          <Route path='/home' element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
