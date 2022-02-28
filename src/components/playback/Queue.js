import QueueItem from './QueueItem';
import { useQueueList } from '../context/QueueContext';

const Queue = props => {

    const queueList = useQueueList();

    return (
         <div className={`${props.className} borderless list`}>
             Queue
             {queueList.map((item, index) => (
                 <QueueItem audioSelection={item} numberInList={index} className='center' />
             ))}
         </div>
     );
};

export default Queue;