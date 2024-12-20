import React from "react";
import { useForm } from "react-hook-form";
import "./Contact.css";

const ContactUs = () => {
    const  { register, handleSubmit } = useForm();
    const enviar = (data) => {
      console.log(data);
    }





  return (
    <section className="contact-container">
      <h1 className="contact-title">
        Contact us 
      </h1>
      <p className="contact-description">
        We’d love to hear from you – please use the form to send us your message
        or ideas. Or simply pop in for a cup of fresh tea and a cookie:
      </p>
      <div className="contact-details">
        <div className="contact-info">
          <p>PetMania, 1000S 8th Avenue, NY, NY 10019</p>
        </div>
        <div className="contact-info">
          <p>Call us: 1-800-356-8933</p>
          <p>
            Email: <a href="mailto:info@petmania.com">info@petmania.com</a>
          </p>
        </div>
      </div>
      <button className="retail-button">Find a retail store</button>

        {/* FORMULARIO */}

      <section className="form-container">
      <div className="form-text">
        <h2>Have a question or comment?</h2>
        <p>Use the form below to send us a message.</p>

      </div>
      <form className="contact-form" onSubmit={handleSubmit(enviar)}>
        <input type="text" placeholder="Your name" className="form-input" {...register("nombre")}/>
        
        <input type="email" placeholder="Your email" className="form-input" {...register("email")} />

        <input type="text" placeholder="Your phone" className="form-input" {...register("phone")}/>
        
        <textarea 
        placeholder="Your Comment"
            className="form-textarea"
        ></textarea>

        <button type="submit" className="form-button"> Submit </button>

      </form>
      
    </section>
    </section>
    
    
  );
};

export default ContactUs;
