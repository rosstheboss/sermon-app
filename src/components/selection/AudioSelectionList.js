import AudioSelectionItem from "./AudioSelectionItem";
import { useAudioList } from "../context/AudioContext";

const AudioSelectionList = props => {
    const audioList = useAudioList();

    return (
        <div className={`${props.className} borderless list`}>
            {audioList.map(item => (
                <AudioSelectionItem audioSelection={item} className='center' />
            ))}
        </div>
    );
};

export default AudioSelectionList;