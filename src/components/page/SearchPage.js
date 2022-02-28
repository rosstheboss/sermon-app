import SearchParamField from '../search/SearchParamField';
import AudioPlayer from '../playback/AudioPlayer';
import Queue from '../playback/Queue';
import AudioSelectionList from '../selection/AudioSelectionList';
import { QueueProvider } from '../context/QueueContext';
import { AudioProvider } from '../context/AudioContext';
import '../../css/search.css';

const SearchPage = props => {
    return (
        <AudioProvider>
            <QueueProvider>
                <div className='header center'>
                    <h1 className='center'>{props.title}</h1>
                    <button className='right navigation-button'>Upload</button>
                </div>
                <AudioPlayer className='center row'/>
                <div className='center row'>
                    <SearchParamField className='width-45' />
                    <Queue className='width-45' />
                </div>
                <AudioSelectionList className='center row' />
            </QueueProvider>
        </AudioProvider>
    );
};

export default SearchPage;