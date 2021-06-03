import React,{useState , useEffect} from 'react';
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
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import SimpleTabs from '../dialog/SimpleTabs';
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
      const [title , setTitle] = useState("運作異常");

      const handleClickOpen = () => {
         setOpen(true);
       };
       
      const handleClose = () => {
        setOpen(false);
      };

      // const handleSetTitle = (title)=>{
      //    setTitle(title);

      // }
      
      // const handleEmailChange = (e)=>{
      //    e.preventDefault()
      //    setEmail(e.target.value);
      // }

      // const handleDescriptionChange = (e) =>{
      //    e.preventDefault()
      //    setDescription(e.target.value);
      // }

      // const handleStatusChange = (e) => {
      //    e.preventDefault()
      //    setStatus(e.target.value);
      //  };
      
      //  const editData = ()=>{     
      //    const formData = new FormData();
      //    formData.append('title',title);
      //    formData.append('status',status);
      //    formData.append('email',email);
      //    formData.append('description',description);
      //    fetch('http://127.0.0.1:8100/node/StatusConfig', {
      //       method: 'PUT',
      //       body: formData,
      //    })
      //    .then(res => { return res.json()})
      //    .then(data => {
      //       console.log("Success" , data);
      //    })
      //    handleClose();
      // }
 
      // const loadStatus = ()=>{
      //    console.log("title" ,title)
      //    const API = `http://127.0.0.1:8100/node/StatusConfig/${title}`;
      //    fetch(API,{
      //       method : 'GET'
      //    }).then(res => {
      //       return res.json(); 
      //   }).then(data =>{
      //    if(data.title === undefined){
      //       setEmail("");
      //       setDescription("");
      //    }
      //    else{
      //       setEmail(data.email);
      //       setStatus(data.status.toString());
      //       setDescription(data.description);
      //    }
      //   })
      // }

      // useEffect(()=>{
      //    loadStatus();
      // },[])
 
     
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

         <SimpleTabs
             handleClose={handleClose}
            // handleEmailChange={handleEmailChange} 
            // handleDescriptionChange={handleDescriptionChange}
            // handleStatusChange={handleStatusChange}
            // handleSetTitle={handleSetTitle}
            // // loadStatus={loadStatus}
            // email={email}
            // status={status}
            // description={description}
         />
         {/* <DialogActions>
            <Button onClick={handleClose} color="primary">
               取消
            </Button>
            <Button onClick={editData} color="primary" >
               確認
            </Button>
         </DialogActions> */}
      </Dialog>
    </div>
        
      </div>
      
    );
  
}

export default BoxItem
