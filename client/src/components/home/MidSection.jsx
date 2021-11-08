import { Box, makeStyles} from '@material-ui/core';
 

const ImageURL = [
    'https://rukminim1.flixcart.com/flap/960/960/image/2f30db9425df5cec.jpg?q=50',
    'https://rukminim1.flixcart.com/flap/960/960/image/084789479074d2b2.jpg',
    'https://rukminim1.flixcart.com/flap/960/960/image/1ce0c4c1fb501b45.jpg?q=50'
];

const useStyle = makeStyles({
    wrapper: {
        display: 'flex',
        marginTop: 20,
        justifyContent: 'space-between'
    },
});

const MidSection = () => {
    const classes = useStyle();
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    return (
        <>
            <Box className={classes.wrapper}>
                {
                    ImageURL.map(image => (
                            <img src={image} style={{width: '33%'}} />
                    ))
                }
            </Box>
            <img src={url} style={{width: '100%' , marginTop:'20px'}} />
        </>
    )
}

export default MidSection;