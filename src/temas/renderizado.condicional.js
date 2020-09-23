import React from 'react';

function UserGreeting(props){
  return <h1>Bienvendio de Regreso</h1>
}

function GuestGreeting(props){
  return <h1>Entre a nuestra página</h1>
}

function Greeting(props){
  console.log("hola");
  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn){
    return <UserGreeting />
  }else{
    return <GuestGreeting />
  }
  
}


export default Greeting;