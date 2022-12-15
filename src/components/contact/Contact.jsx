import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com';

function Contact() {
    const formRef= useRef()
    const [done, setDone] = useState(false)
    const handleSubmit = (e) =>{
        e.preventDefault();
        emailjs.sendForm('service_k4fb3u9', 'template_e7099jt', formRef.current, 'user_W8DaSeoyagG4vKVVUCYng')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
    }

    return (
    <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Lets discuss your project</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src={Phone} alt="" className="c-icon" />+91 7709697906
                    </div>
                    <div className="c-info-item">
                        <img src={Email} alt="" className="c-icon" />atharvkadam0807@gmail.com
                    </div>
                    <div className="c-info-item">
                        <img src={Address} alt="" className="c-icon" />2/17, C.P.W.D. Colony,<br />Near Ranka Hospital,<br />Mukundanagar,<br />Pune : 411037
                    </div>
                </div>
            </div>
            <div className="c-right">
                <p className="c-decription">
                    <b>Hey.. have the next brilliant idea in your mind.</b><br />
                    Then what are you waiting for, get in touch, and if it as brilliant as you say, 
                    we can surly create something special.
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" name="user_name"/>
                    <input type="text" placeholder="Subject" name="user_subject"/>
                    <input type="text" placeholder="E-mail" name="user_email"/>
                    <textarea rows="5" placeholder="Message" name="message"/>
                    <button>Submit</button>
                    {done && "Thankyou. Your response has been submitted succesfully."}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact