import React , {useState , useEffect} from 'react'
import TextField from '@material-ui/core/TextField';
import DialogContent from '@material-ui/core/DialogContent';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

const ErrorForm = ({handleClose}) => {

   
   // const {email,description,status,handleEmailChange,handleDescriptionChange,handleStatusChange} = props ; 
  
   const [errorEmail, setErrorEmail] = useState("example@gmail.com");
   const [errorStatus, setErrorStatus] = useState("true");
   const [errorDescription, setErrorDescription] = useState("無法監測到{Node1}、{Node2}節點狀態，請檢查其網路與硬體設備");
   // const [open, setOpen] = useState(false);

   const handleEmailChange = (e)=>{
      setErrorEmail(e.target.value);
   }

   const handleDescriptionChange = (e) =>{
      setErrorDescription(e.target.value);
   }

   const handleStatusChange = (e) => {
      setErrorStatus(e.target.value);
    };

   //  const handleClose = () => {
   //    setOpen(false);
   //  };
   
   async function loadStatus(){
      const API = "http://127.0.0.1:8100/node/StatusConfig/運作異常";
     await fetch(API,{
         method : 'GET'
      }).then(res => {
         return res.json(); 
     }).then(data =>{
       console.log("Error :" , data)
         setErrorEmail((previous)=>{ return data.email!=="" ? data.email: previous});
         setErrorStatus((previous)=>{ return data.status!=="" ? data.status.toString() : previous});
         setErrorDescription((previous)=>{ return data.description!=="" ? data.description : previous});
     })
   }

   const editData = ()=>{     
      const formData = new FormData();
      formData.append('title',"運作異常");
      formData.append('status',errorStatus);
      formData.append('email',errorEmail);
      formData.append('description',errorDescription);
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

   useEffect(()=>{
      loadStatus();
   },[])

      return (
        <div>
        <DialogContent>
        
         <FormControl component="fieldset">
            <RadioGroup row aria-label="position" name="position" defaultValue="top" value ={errorStatus} onChange={handleStatusChange}>
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
            value={errorEmail}
         />
         
         <TextField
            onChange={handleDescriptionChange}
            required
            autoFocus
            margin="dense"
            id="name"
            type="string"
            label="備註說明"
            fullWidth
            value={errorDescription}
            >

         </TextField>
         <div style={{textAlign:"right"}}>
               <Button variant="contained" color="primary" style={{marginRight:"10px"}} onClick={handleClose}>
                  取消
               </Button>
               <Button variant="contained" color="primary" onClick={editData} >
                  確認
               </Button>
            </div>
        </DialogContent>
        </div>
    )
}

export default ErrorForm ;