import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import  ButtonEdit from '../ButtonEdit';

import './cart.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 600,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function Cart({person, deletePeople, editName, editNumber, editEmail}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false); 

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <div className="user-avatar ">
          <img src={person.avatar} alt="" />
        </div>
        </ListItemIcon>
        <ListItemText primary={person.name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <PhoneIcon />
            </ListItemIcon>
            <ListItemText primary={person.number} />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary={person.email} />
          </ListItem>
          <ListItem button className={classes.nested}>    
            < ButtonEdit person={person} editName={editName}  editNumber={editNumber} editEmail={editEmail} deletePeople={deletePeople} />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}
