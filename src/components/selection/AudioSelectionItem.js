import DefaultSpeakerImage from '../../images/icons8-user-100.png';
import PlayButtonImage from '../../images/icons8-play-button-circled-30.png';
import PlusButtonImage from '../../images/icons8-plus-+-30.png';
import { useAddToQueueList } from '../context/QueueContext';

const GetTitleText = (series, title) => {
    let titleText = '';
    if(series)
    {
        titleText = `${series}`;
    }
    if(title)
    {
        if(titleText !== '')
        {
            titleText += ' - ';
        }
        titleText += `${title}`;
    }
    return titleText;
};

const GetPassageText = (book, startingChapter, startingVerse, endingChapter, endingVerse) => {
    let passageText = '';
    if(book)
    {
        if(Number(startingChapter))
        {
            passageText = `${book} ${startingChapter}`;
            if(Number(startingVerse))
            {
                passageText += `:${startingVerse}`;
                if(Number(endingChapter) && Number(endingVerse))
                {
                    passageText += `-${endingChapter}:${endingVerse}`;
                }
            }
            else if(Number(endingChapter))
            {
                passageText += `-${endingChapter}`;
            }
        }
    }
    return passageText;
};

const GetSpeakerText = (speakerName, locationName) => {
    let speakerText = '';
    if(speakerName)
    {
        speakerText = `${speakerName}`;
    }
    if(locationName)
    {
        if(speakerText !== '')
        {
            speakerText += ' - ';
        }
        speakerText += `${locationName}`;
    }
    return speakerText;
};

const GetDefaultSpeakerProfilePicture = (e) =>
{
    e.target.src = {DefaultSpeakerImage};
};

const OnPlayButtonClicked = (audioSelectionItem) =>
{
    console.log(`Play button clicked for "${audioSelectionItem.title}".`);
};

const OnAddToQueueButtonClicked = (audioSelection, audioSelectionItem) =>
{
    if(audioSelection && !audioSelection.includes(audioSelectionItem))
    {
        audioSelection.push(audioSelectionItem);
        console.log(`Add To Queue button clicked for "${audioSelectionItem.title}".`);
    }
    
};

const AudioSelectionItem = props => {
    const item = props.audioSelection;

    return (
        <div className={`${props.className} row list-item borderless`}>
            <div className='column'>
                <img onError={GetDefaultSpeakerProfilePicture} src={DefaultSpeakerImage} alt={item.speaker.fullName} title={item.speaker.fullName} className='profilePicture' />
            </div>
            <div className='column'>
                <div className='strong-emphasis left'>{GetTitleText(item.series.name, item.title)}</div>
                <div className='left'>{GetPassageText(item.book, item.startingChapter, item.startingVerse, item.endingChapter, item.endingVerse)}</div>
                <div className='left'>{GetSpeakerText(item.speaker.fullName, item.location.name)}</div>
            </div>
            <div className='column right-spacing'>
                <div className='emphasis'>{item.recordingDate}</div>
                <div className='row center'>
                    <img src={PlayButtonImage} alt='Play' title='Play' onClick={() => OnPlayButtonClicked(item)} />
                    <img src={PlusButtonImage} alt='Add to Queue' title='Add to Queue' onClick={() => OnAddToQueueButtonClicked(null, item)} />
                </div>
            </div>
        </div>
    );
};

export default AudioSelectionItem;