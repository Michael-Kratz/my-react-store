import "./contact.css";

function contact() {
  return (
    <div className="contact">
      <h1>Have something to say?</h1>
      <h4>Use the form below to get in touch</h4>

      <form className="contact-form">
        <label className="form-label">Name</label>
        <input name="name" type="text" className="contact-input" />
        <label className="form-label">Email</label>
        <input name="email" type="email" className="contact-input" />
        <label className="form-label">Message</label>
        <textarea name="message" className="contact-textarea" />
      </form>
    </div>
  );
}

export default contact;
