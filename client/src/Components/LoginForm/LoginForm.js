import React from "react";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


const LoginForm = () => {
  return (
    <div>
      <Card style={{marginTop : "10%"}} sx={{ width : " 50vh" , display : "flex" , alignItems :"center" , justifyContent : "center" , m : "auto" , flexWrap:"wrap" }}>
        <CardContent sx={{display : "flex" , flexDirection : "column"}}>
            <AdminPanelSettingsIcon sx={{ fontSize: 40 , display : "flex" , alignItems :"center" , justifyContent : "center" , m : "auto" , flexWrap:"wrap" , color : "#056CF2" }}/>
            <TextField id="standard-basic" label="User_Name" variant="standard" sx={{ display : "flex" , alignItems :"center" , justifyContent : "center" , m : "auto" , flexWrap:"wrap" }} />
            <br/>
            <TextField id="standard-basic" type="password" label="Mot de passe" variant="standard" sx={{  display : "flex" , alignItems :"center" , justifyContent : "center" , m : "auto" , flexWrap:"wrap" }} />
            <br/><br/>
            <Stack direction="row" spacing={2} >
            <Button variant="contained" sx={{  display : "flex" , alignItems :"center" , justifyContent : "center" , m : "auto" , flexWrap:"wrap" }}>Login</Button>
                </Stack>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;
