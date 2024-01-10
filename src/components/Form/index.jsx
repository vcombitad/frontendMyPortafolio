import {useRef} from "react";
import emailjs from '@emailjs/browser'
import './Form.css'

const ContactUs = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_q5kaadw', 'template_iaqbbgp', form.current, 'bbgmULSUmTK2BNwN9')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
        <div className="form-contain">
            <h5 className="form-title">
                Get in touch with me
            </h5>
            <p className="form-text">
            Let's chat! Reach out to us for any inquiries, collaborations, or just to say hello.
            </p>
            <form ref={form} onSubmit={sendEmail}>
            <div className="inputs-info">
                <div>
                    <input type="text" name="user_name" placeholder="Name" />
                </div>
                <div>
                    <input type="email" name="user_email" placeholder="email"/>
                </div>             
            </div>
            
            <textarea name="message" className="input-textarea--message" placeholder="your message"/>
            <input type="submit" value="Send" className="button-send"/>
            </form>
        </div>
        
    );
  };

  export default ContactUs