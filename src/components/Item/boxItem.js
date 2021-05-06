import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import SettingsIcon from '@material-ui/icons/Settings';
import { green } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
   right: {
     marginLeft: 'auto',
   }
 }));


const BoxItem = () => {
   const classes = useStyles();

    return (

      <div style={{marginLeft : "60px"  , marginRight : "60px" , boxShadow: "2px 2px 5px #bbb" , paddingLeft:"10px" , marginTop:"30px"}}>
         <Grid container direction="row" alignItems="center" spacing={3}>
               <Grid item >
                  <CheckCircleIcon style={{ color: green[500] , fontSize: 40 }}/>
               </Grid>

               <Grid item >
                  <Typography>運作正常</Typography>
               </Grid>

                <Grid item >
                  <CancelIcon action style={{ color :"#EA0000" , fontSize: 40 }}/>
               </Grid>

               <Grid item >
                  <Typography>運作異常</Typography>
               </Grid>

               <Grid item >
                  <ReportProblemIcon style={{ color :"#EAC100" , fontSize: 40 }}/>
               </Grid>

               <Grid item >
                  <Typography>同步異常</Typography>
               </Grid>



               <Grid item  className={classes.right}>
                  <IconButton aria-label="delete" className={classes.margin} size="small">
                     <SettingsIcon style={{fontSize: 40 }}/>
                  </IconButton>
               </Grid>

               <Grid item style={{marginRight:"20px"}}>
                  <Typography>監控設定</Typography>
               </Grid>

              

         </Grid>

        
      </div>
      
    );
  
}

export default BoxItem
