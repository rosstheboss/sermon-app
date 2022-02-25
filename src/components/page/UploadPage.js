import UploadForm from '../upload/UploadForm';
import UploadAudioFileBox from '../upload/UploadAudioFileBox';
import '../../css/search.css';

const UploadPage = props => {
    return (
        <div>
            <h1 className='center'>Upload File</h1>
            <UploadForm className='center' />
            <UploadAudioFileBox className='center' />
        </div>
    );
};

export default UploadPage;