import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
// import DraftsIcon from '@material-ui/icons/Drafts';
// import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

import Fab from '@material-ui/core/Fab';


const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: "20px 20px 20px 20px",
    boxShadow: "-1px -1px 12px 5px rgba(0,0,0,0.27)",
    width: '100%',
    margin: "auto",
    maxWidth: 460,
    backgroundColor: theme.palette.background.paper,
  },
  fab: {
    position: "relative",
    width: "80%",
    color: "#fff",
    background: "#26498B",
  margin: "auto",
},
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
            Tu lista de planes
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Plan Home" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem  className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Cable" />
          </ListItem>
          <ListItem  className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Internet" />
          </ListItem>
          <ListItem  className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Ubicación" />
          </ListItem>
          <ListItem  className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Precio" />
          </ListItem>
          <ListItem  className={classes.nested}>
          <Fab variant="extended" aria-label="Delete" className={classes.fab}>
                Cambiar
            </Fab>
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}