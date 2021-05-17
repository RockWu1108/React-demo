import React,{useState , useEffect} from 'react';
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
import FormDialog from '../dialog/FormDialog';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import axios from 'axios';
const useStyles = makeStyles((theme) => ({
   right: {
     marginLeft: 'auto',
   }
 }));


const BoxItem = () => {
   const classes = useStyles();

      const [open, setOpen] = useState(false);
      const [email, setEmail] = useState("");
      const [status, setStatus] = useState("true");
      const [description, setDescription] = useState("");

      const handleClickOpen = () => {
         loadStatus();
         setOpen(true);
       };
       
      const handleClose = () => {
        setOpen(false);
      };
      
      const handleEmailChange = (e)=>{
         e.preventDefault()
         setEmail(e.target.value);
      }

      const handleDescriptionChange = (e) =>{
         e.preventDefault()
         setDescription(e.target.value);
      }

      const handleStatusChange = (e) => {
         e.preventDefault()
         setStatus(e.target.value);
       };

      const editData = ()=>{
         const formData = new FormData();
         formData.append('account',"Rock");
         formData.append('status',status);
         formData.append('email',email);
         formData.append('description',description);
         fetch('http://127.0.0.1:8100/node/StatusConfig', {
            method: 'PUT',
            body: formData,
         })
         .then(res => { return res.json()})
         .then(data => {
            console.log("Success" , data);
         })
         handleClose();
      }

      const loadStatus = ()=>{
         const API = "http://127.0.0.1:8100/node/StatusConfig/Rock";
         fetch(API,{
            method : 'GET'
         }).then(res => {
            return res.json(); 
        }).then(data =>{
            console.log("loadStatus :" , data);
            setEmail(data.email);
            setStatus(data.status.toString());
            setDescription(data.description);
        })
      }

      useEffect(()=>{
         loadStatus();
      },[])


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
                  <IconButton aria-label="delete" className={classes.margin} size="small" onClick = {handleClickOpen}>
                     <SettingsIcon style={{fontSize: 40 }}/>
                  </IconButton>
               </Grid>

               <Grid item style={{marginRight:"20px"}}>
                  <Typography>監控設定</Typography>
               </Grid>
         </Grid>

      <div>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" >
        <DialogTitle id="form-dialog-title">監控通知設定</DialogTitle>
        <DialogContent>
         
      <FormControl component="fieldset">
         <RadioGroup row aria-label="position" name="position" defaultValue="top" value ={status} onChange={handleStatusChange}>
         
         <FormControlLabel
            value="true"
            control={<Radio color="primary" />}
            label="啟用"
            labelPlacement="start"
         />

         <FormControlLabel
            value="false"
            control={<Radio color="primary" />}
            label="停用"
            labelPlacement="start"
         />
         
         </RadioGroup>
      </FormControl>
          <TextField
            onChange={handleEmailChange}
            required
            autoFocus
            margin="dense"
            id="standard-required"
            label="Email Address"
            type="email"
            fullWidth
            defaultValue= {email!==""?email:""} 
          />
          <TextField
            onChange={handleDescriptionChange}
            required
            autoFocus
            margin="dense"
            id="name"
            label="備註說明"
            type="email"
            fullWidth
            defaultValue= {description!==""?description:"無法監測到{Node1}、{Node2}節點狀態，請檢查其網路與硬體設備"} 
          />
        </DialogContent>
        
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            取消
          </Button>
          <Button onClick={editData} color="primary" >
            確認
          </Button>
        </DialogActions>
      </Dialog>
    </div>
        
      </div>
      
    );
  
}

export default BoxItem
