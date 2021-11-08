import Alert from 'react-bootstrap/Alert';

const ErrorAlert = props => {
    return (
        <Alert variant='danger' className='m-5 p-5 text-center'>
            <Alert.Heading className='fs-2 fw-bold'>{props.message}</Alert.Heading>
        </Alert>
    );
};

export default ErrorAlert;