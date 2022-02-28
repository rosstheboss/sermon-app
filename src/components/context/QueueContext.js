import React, {useState, useContext} from 'react';

const QueueListContext = React.createContext();
const AddToQueueListUpdateContext = React.createContext();

export function useQueueList() {
    return useContext(QueueListContext);
}

export function useAddToQueueList() {
    return useContext(AddToQueueListUpdateContext);
}

export function QueueProvider({children}) {
    
    const [queueList, setQueueList] = useState([]);

    function AddToQueueList(newItem) {
        setQueueList(prevList => {
            return prevList.push(newItem);
        });
    }

    return(
        <QueueListContext.Provider value={queueList}>
            <AddToQueueListUpdateContext.Provider value={AddToQueueList}>
                {children}
            </AddToQueueListUpdateContext.Provider>
        </QueueListContext.Provider>
    );
}