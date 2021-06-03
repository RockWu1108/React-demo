import React, { useState } from 'react'

import { useLocation } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';



const Dashboard = () => {
    const location = useLocation ();
    console.log(location); 
    let qm = "";
    if(location.state !== undefined){
      const nodeName = location.state.nodeName;
      qm=`http://127.0.0.1:8000/${nodeName}`
    }
    else{
      qm="http://127.0.0.1:8000/node1";
    }
    
    return (

        <div>
           <iframe src={qm} style={{width:"100vw", height: '100vh', display: 'block'}} />
        </div>
    )

}

export default Dashboard
