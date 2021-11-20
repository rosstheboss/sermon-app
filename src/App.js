import './App.css';
import 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import UploadPage from './components/page/UploadPage';
import SearchPage from './components/page/SearchPage';

function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<SearchPage />} />
                <Route path='/upload' element={<UploadPage />} />
            </Routes>
        </div>
    );
}

export default App;
