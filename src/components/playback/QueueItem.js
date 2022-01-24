import PlayButtonImage from '../../images/icons8-play-button-circled-30.png';
import ReorderImage from '../../images/icons8-drag-reorder-24.png';

const GetDisplayTitle = (index, title, speaker, date) =>
{
    return `${index}. "${title}" by ${speaker} - ${date}`;
};

const QueueItem = (props) => {
    const item = props.audioSelection;
    const numberInList = props.numberInList;

    return (
        <div className={`${props.className} row list-item borderless`}>
            <div className='column'>
                <div className='left'>{GetDisplayTitle(numberInList, item.title, item.speaker, item.recordingDate)}</div>
            </div>
            <div className='column right-spacing'>
                <div className='row center'>

                </div>
            </div>
        </div>
    );
};

export default QueueItem;