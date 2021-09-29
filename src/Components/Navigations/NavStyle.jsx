import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    //Navbar
    navlist: {
        display: 'flex', 
        flexDirection: 'column',
       
    },
    navlistitems:{ 
        "&:hover": {
            //backgroundColor: '#ffffff',
            backgroundColor: '#023E8A',//'#020024',
            //backgroundImage: '#0077B6', //"linear-gradient(90deg, #020024 0%, #090979 55%, #00d4ff 100%)",
        }
    },
    navButton: {
        padding: '0',
        margin: '0',
        color: '#ffffff',
    },
    navlabel:{
        color: '#ffffff',
        fontSize: "1.5em", 
    },

    activenavlinks: {
        borderLeft: '.2rem solid #FFC300',
        " & div": {
            color: '#FFC300', 
        },
    },
    dividerColor: {
        backgroundColor: '#eeeeee',
    },
}));