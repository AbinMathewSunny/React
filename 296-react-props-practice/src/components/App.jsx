import React from "react";
import Card from "./card"
import contacts from "../contacts"
function App() {


  console.log(contacts);
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card 
      name="beyonce"
      image="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
      />

   <Card 
      name={contacts[0].name}
      image="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel={contacts[0].phone}
      email={contacts[2].email}
      />
    
    <Card 
    name={contacts[2].name}
    image="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
    tel="+123 456 789"
    email="b@beyonce.com"
    />
  </div>
);
  
}

export default App;
