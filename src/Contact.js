import { useForm, ValidationError } from '@formspree/react';
import { Content, CardContent } from './Content';

export default function Contact() {
  const [state, handleSubmit] = useForm("xkndowjd");
  if (state.succeeded) {
      return <p>Thanks for contacting</p>;
  }
  return (
    <div id="contact">
        <h1>Contact me</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group col-lg-6 col-md-8 col-sm-12 pl-0">
                <label htmlFor="email">Email Address</label>
                <input className="form-control" id="email" type="email" name="email"/>
                <ValidationError prefix="Email" field="email" errors={state.errors}/>
            </div>
            <div className="form-group col-lg-6 col-md-8 col-sm-12 pl-0">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" id="message" name="message"/>
                <ValidationError prefix="Message" field="message" errors={state.errors}/>
            </div>
            <button className="btn btn-primary" type="submit" disabled={state.submitting}>Submit</button>
        </form>
    </div>
  );
}