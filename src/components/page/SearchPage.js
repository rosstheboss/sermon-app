import SearchParamField from '../search/SearchParamField';
import AudioPlayer from '../playback/AudioPlayer';
import Queue from '../playback/Queue';
import AudioSelectionList from '../selection/AudioSelectionList';
import '../../css/search.css';

const DUMMY_SERMONS = [
    {
        key: 1,
        title: 'Intro to Romans',
        speaker: {
            key: 1,
            fullName: 'Joe Smith',
        },
        series: {
            key: 1,
            name: 'The Roman Road'
        },
        location: {
            key: 1,
            name: 'First Bible Chapel'
        },
        book: 'Romans',
        startingChapter: 1,
        startingVerse: 1,
        endingChapter: 1,
        endingVerse: 4,
        recordingDate: '2021-11-21'
    },
    {
        key: 2,
        title: 'Romans 1 Deep Dive',
        speaker: {
            key: 2,
            fullName: 'Bob Brown',
        },
        series: {
            key: 1,
            name: 'The Roman Road'
        },
        location: {
            key: 1,
            name: 'First Bible Chapel'
        },
        book: 'Romans',
        startingChapter: 1,
        startingVerse: 5,
        endingChapter: 1,
        endingVerse: 17,
        recordingDate: '2021-11-28'
    }
];

const SearchPage = props => {
    const sortedAudioFiles = DUMMY_SERMONS
        .sort((a, b) => a.recordingDate < b.recordingDate ? 1 : -1);

    return (
        <div>
            <div className='header center'>
                <h1 className='center'>{props.title}</h1>
                <button className='right navigation-button'>Upload</button>
            </div>
            <AudioPlayer className='center row'/>
            <div className='center row'>
                <SearchParamField className='width-45' />
                <Queue className='width-45' />
            </div>
            <AudioSelectionList audioList={sortedAudioFiles} className='center row' />
        </div>
    );
};

export default SearchPage;