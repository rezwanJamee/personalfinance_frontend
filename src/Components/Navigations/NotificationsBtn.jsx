import { Box,  IconButton, Menu, Badge, ListItem, ListItemIcon, ListItemText, Avatar, List } from '@material-ui/core'
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { IoMdNotifications } from 'react-icons/io';

export const useStyles = makeStyles((theme) => ({
    menuList:{
        marginTop: '2.5rem',
    },
    navlist: {
        minWidth: "250px",
        maxWidth: "300px",
    },
    navlistItem: {
        "&:hover": {
            backgroundColor: '#eeeeee',
        }
    }
}));

export default function NotificationsBtn() {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const dropDownData = [
        { label: "Alex", desc:"Ownes you $50 by next friday" },
        { label: "Bank", desc:"Check your last transactions ..." },
        { label: "John", desc:"viewed your profile .." },
    ]

    return (
        <Box>
            <IconButton 
                aria-controls="notification" 
                aria-haspopup="true" 
                onClick={handleClick}
                color="inherit"
            >
                <Badge badgeContent={3} color="secondary">
                    <IoMdNotifications />
                </Badge>
            </IconButton>

            <Menu
                id="notification"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                className={classes.menuList}
            >
                <List className={classes.navlist} >
                    {dropDownData.map((item, i) => (
                        <ListItem key={i} onClick={handleClose} className={classes.navlistItem}>
                            <ListItemIcon>
                                <Avatar className={classes.ulAvatar}>{item.label[0].toUpperCase() }</Avatar>
                            </ListItemIcon>
                            <ListItemText primary={item.label} secondary={item.desc}></ListItemText>
                        </ListItem>
                    ))}
                </List>
            </Menu>   
        </Box>
    )
}
