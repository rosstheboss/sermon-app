import SearchParamField from '../search/SearchParamField';
import AudioPlayer from '../playback/AudioPlayer';
import Queue from '../playback/Queue';
import AudioSelectionList from '../selection/AudioSelectionList';
import '../../css/search.css';

const SearchPage = () => {
    return (
        <div>
            <h1 className='center'>Search</h1>
            <div className='header'>
                <button className='right'>Upload</button>
            </div>
            <AudioPlayer />
            <div className='center row'>
                <SearchParamField />
                <Queue />
            </div>
            <AudioSelectionList className='center' />
        </div>
    );
};

export default SearchPage;