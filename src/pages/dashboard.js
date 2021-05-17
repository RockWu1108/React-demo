import React, { useState } from 'react'

import { useLocation } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

const Dashboard = () => {
    const classes = useStyles();
    const {state} = useLocation();
    const[loading , setLoading] = useState(false) ;

    console.log(state); 
    const url = state === undefined ? "http://211.75.194.27:22204/qm/dashboard" : "http://"+state.ip+":22304/qm/dashboard"
    
    return (

        <div>
            {/* {document.readyState != "complete" ?  <div className={classes.root}>
                <CircularProgress /> */}
              
            {/* </div> : <iframe src={url} style={{width:"100%" , height:"1000px"}} />
            } */}

           <iframe src={url} style={{width:"100%" , height:"1000px"}} />
        </div>
    )

}

export default Dashboard
