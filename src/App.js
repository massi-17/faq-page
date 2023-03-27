import React from "react";
import Faq from "./Components/Faq"
import logo from './images/logo.png'


function App() {
  return (
    <>
        <div className="container">
            
            <img src={logo} alt="" className="logo" />
        

            <h1>FAQ</h1>
            <Faq 
            faqQuestion='question1 question1 question1 question1 ?'
            faqAnswer='answer1'
             />
            <Faq 
            faqQuestion='What is the maximum file upload size?'
            faqAnswer='answer2'
             />
            <Faq 
            faqQuestion='How many team members can I Invite?'
            faqAnswer='answer3'
             />
           
            
        </div>
    </>
  );
}

export default App;
