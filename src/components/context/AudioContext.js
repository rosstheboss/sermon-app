import React, {useState, useContext} from 'react';

const AudioListContext = React.createContext();
const AudioListUpdateContext = React.createContext();

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

export function useAudioList() {
    return useContext(AudioListContext);
}

export function useAudioListUpdate() {
    return useContext(AudioListUpdateContext);
}

export function AudioProvider({children}) {  
    const [audioList, setAudioList] = useState(DUMMY_SERMONS
        .sort((a, b) => a.recordingDate < b.recordingDate ? 1 : -1));

    function updateAudioList(list) {
        setAudioList(() => { return list });
    }

    return(
        <AudioListContext.Provider value={audioList}>
            <AudioListUpdateContext.Provider value={updateAudioList}>
                {children}
            </AudioListUpdateContext.Provider>
        </AudioListContext.Provider>
    );
}