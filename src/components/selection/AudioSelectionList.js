import AudioSelectionItem from "./AudioSelectionItem";

const AudioSelectionList = props => {
    return (
        <div className={`${props.className} center borderless list`}>
            {props.audioList.map(item => (
                <AudioSelectionItem audioSelection={item} className='center' />
            ))}
        </div>
    );
};

export default AudioSelectionList;