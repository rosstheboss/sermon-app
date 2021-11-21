import './App.css';
import 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import UploadPage from './components/page/UploadPage';
import SearchPage from './components/page/SearchPage';
import SiteSettings from './config/SiteSettings.json';

function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<SearchPage title={SiteSettings.title} />} />
                <Route path='/upload' element={<UploadPage />} />
            </Routes>
        </div>
    );
}

export default App;
