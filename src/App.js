import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/Views/Homepage';
import NavbarContent from './Components/Organisms/NavbarContent/NavbarContent';
import { useContext } from 'react';
import { MainContext } from './Context/MainContext';
import NewProductsPage from './Components/Views/NewProductsPage';

function App() {
    const { matches } = useContext(MainContext);
    return (
        <div
            style={{
                paddingRight: matches ? '24px' : '10px',
                paddingLeft: matches ? '20px' : null,
                marginRight: matches ? 'auto' : null,
                marginLeft: matches ? 'auto' : null,
                maxWidth: matches ? '1350px' : null,
            }}
        >
            <NavbarContent />
            <Routes>
                <Route path='/' element={<HomePage />} />
            </Routes>
            <Routes>
                <Route path='/new-products' element={<NewProductsPage />} />
            </Routes>
        </div>
    );
}

export default App;
