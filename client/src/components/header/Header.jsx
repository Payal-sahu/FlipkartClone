import { AppBar, Toolbar, makeStyles, Typography, withStyles, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

//components
import HeaderButtons from './HeaderButtons';
import SearchBar from './SearchBar';

const useStyle = makeStyles({
    header: {
        backgroundColor: '#2874f0',
        height: 59,
        //height: 55
    },
    logo: {
        width: 75
    },
    subURL: {
        width: 10,
        marginLeft: 4,
        height: 10
    },
    container: {
        paddingBottom : 1,
        display: 'flex'
    },
    component: {
        marginLeft: '12%',
        lineHeight: 0,
        textDecoration: 'none',
        color: '#fff'
    },
    subHeading: {
        fontSize: 10,
        fontStyle: 'italic'
    }
})

const ToolBar = withStyles({         //bydefault toolbar height is 64 but we make it 55 using withstyles
    root: {
      minHeight: 55
    },
})(Toolbar);

const Header = () => {
    const classes = useStyle();
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    return (
        <AppBar className={classes.header}>
            <Toolbar>
                <Link to='/' className={classes.component}>
                    <img src={logoURL} className={classes.logo} />
                    <Box className={classes.container}>
                    <Typography className = {classes.subHeading}>Explore <Box component="span" style={{color:'#FFE500'}}>Plus</Box></Typography>
                        <img src={subURL} className={classes.subURL} />
                    </Box>
                </Link>
                <SearchBar />
                <HeaderButtons />
            </Toolbar>
        </AppBar>
    )
}

export default Header;