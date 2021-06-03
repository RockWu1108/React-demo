import React , {useState , useEffect} from 'react'
import TextField from '@material-ui/core/TextField';
import DialogContent from '@material-ui/core/DialogContent';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

const WarnForm = ({handleClose}) => {
   //  const {email,description,status,handleEmailChange,handleDescriptionChange,handleStatusChange} = props ;

    const [warnEmail, setWarnEmail] = useState("email@gmail.com");
    const [warnStatus, setWarnStatus] = useState("true");
    const [warnDescription, setWarnDescription] = useState("無法監測到{Node1}、{Node2}節點狀態，請檢查其網路與硬體設備");

    const handleEmailChange = (e)=>{
      e.preventDefault()
      setWarnEmail(e.target.value);
   }

   const handleDescriptionChange = (e) =>{
      e.preventDefault()
      setWarnDescription(e.target.value);
   }

   const handleStatusChange = (e) => {
      e.preventDefault()
      setWarnStatus(e.target.value);
    };

    const editData = ()=>{     
      const formData = new FormData();
      formData.append('title',"同步異常");
      formData.append('status',warnStatus);
      formData.append('email',warnEmail);
      formData.append('description',warnDescription);
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
    
    async function loadStatus(){
       const API = "http://127.0.0.1:8100/node/StatusConfig/同步異常";
      await fetch(API,{
          method : 'GET'
       }).then(res => {
          return res.json(); 
      }).then(data =>{
        console.log("Error :" , data)
        setWarnEmail((previous)=>{ return data.email!=="" ? data.email: previous});
        setWarnStatus((previous)=>{ return data.status!=="" ? data.status.toString() : previous});
        setWarnDescription((previous)=>{ return data.description!=="" ? data.description : previous});
      })
    }
    useEffect(()=>{
        loadStatus();
     },[WarnForm])

    return (
        <div>
        <DialogContent>
        
         <FormControl component="fieldset">
            <RadioGroup row aria-label="position" name="position" defaultValue="top" value ={warnStatus} onChange={handleStatusChange}>
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
            value={warnEmail} 
         />
         <TextField
            onChange={handleDescriptionChange}
            required
            autoFocus
            margin="dense"
            id="name"
            label="備註說明"
            type="string"
            fullWidth
            value={warnDescription}
         />
            <div style={{textAlign:"right"}}>
               <Button variant="contained" color="primary" style={{marginRight:"10px"}} onClick={handleClose} >
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

export default WarnForm ;