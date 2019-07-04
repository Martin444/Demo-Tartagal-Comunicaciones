import React from 'react'
import styled from 'styled-components'
import ListPlanes from '../Components/ListPlanes'

import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import NavigationIcon from '@material-ui/icons/PlaylistAdd';

const useStyles = makeStyles(theme => ({
    fab: {
        position: "absolute",
        width: "80%",
        color: "#fff",
        background: "#26498B",
      margin: "20px",
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));


export default function Payment() {

    const classes = useStyles();
    return (
        <>
        <ListPlanes className="list"/>
        <PayWrapper>
            <Fab variant="extended" aria-label="Delete" className={classes.fab}>
                <NavigationIcon className={classes.extendedIcon} />
                Añadir plan
            </Fab>
        </PayWrapper>
        </>
    )
}

const PayWrapper = styled.div`
display: flex;
  text-align: center;
justify-content: center;
margin: 0;
min-height: 100vh;
`
