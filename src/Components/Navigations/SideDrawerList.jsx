import React from 'react';
import { useStyles } from './NavStyle';
import { Button, Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { NavLink } from "react-router-dom";

//icons
import { RiStackLine } from 'react-icons/ri';
import { MdAccountBalance } from 'react-icons/md';
import { BiTransferAlt } from 'react-icons/bi';
import { FaChartPie } from 'react-icons/fa';
import { IoDocument } from 'react-icons/io5';
import { GiTwoCoins } from 'react-icons/gi'; 
import { CgPlayListAdd } from 'react-icons/cg';
import { BiAddToQueue } from 'react-icons/bi';
import { BsPersonFill } from 'react-icons/bs'; 

export default function SideDrawerList({ handleDrawerClose }) {
    
    const classes = useStyles();
    const mainlistItemData = [
        { label: "Dashboard", link: "/", icon: <RiStackLine size={25} /> },
        { label: "Accounts", link: "/account", icon: <MdAccountBalance size={25} /> },
        { label: "Transactions", link: "/transaction", icon: <BiTransferAlt size={25} /> },
        { label: "Incomes", link: "/income", icon: <GiTwoCoins size={25} /> },
        // { label: "Portfolio", link: "/portfolio", icon: <FaChartPie size={22} /> },
        // { label: "Report", link: "/Report", icon: <IoDocument size={25}/> }
    ]
    const sublistData = [
        { label: "Add Account", link: "/addaccount", icon: <BiAddToQueue size={25} /> },
        { label: "Add Transaction", link: "/add", icon: <CgPlayListAdd size={25} /> },
        { label: "Add Income", link: "/addincome", icon: <CgPlayListAdd size={25} /> },
        { label: "User", link: "/user", icon: <BsPersonFill size={25} /> }
    ]

    return (
        <List >
            <div className={classes.navlist}>
            { mainlistItemData.map((item, i) => ( 
               
                <Button className={classes.navlistitems} onClick={handleDrawerClose}>
                    <ListItem
                        exact
                        to={item.link}
                        key={i} component={NavLink}
                        activeClassName={classes.activenavlinks} 
                    >
                        <ListItemIcon >
                            <p className={classes.navButton}>
                                {item.icon}
                            </p>
                            
                        </ListItemIcon>
                        <ListItemText className={classes.navlabel}>{item.label}</ListItemText>
                    </ListItem>    
                </Button>
            ))}
            <Divider className={classes.dividerColor} />
            { sublistData.map((item, i) => ( 
               
               <Button className={classes.sublistData} onClick={handleDrawerClose}>
                   <ListItem
                       exact
                       to={item.link}
                       key={i} component={NavLink}
                       activeClassName={classes.activenavlinks} 
                   >
                       <ListItemIcon >
                           <p className={classes.navButton}>
                               {item.icon}
                           </p>
                           
                       </ListItemIcon>
                       <ListItemText className={classes.navlabel}>{item.label}</ListItemText>
                   </ListItem>    
               </Button>
           ))}
            </div>
        </List>
    )
}


/*

const sublistItemData = [
        { label: "Budget", link: "/", icon: <RiStackLine size={25} /> },
        { label: "Tax Calculator", link: "/", icon: <MdAccountBalance size={25} /> },
        
    ]

const sublistItemData = [
        { label: "Notifications", link: "/", icon: <RiStackLine size={25} /> },
        { label: "Settings", link: "/", icon: <MdAccountBalance size={25} /> },
        { label: "Profile", link: "/", icon: <BiTransferAlt size={25} /> },
    ]

*/

// 1x - 14px
// 2x - 28px
// 3x - 42px
// 4x - 56px
// 5x - 70px