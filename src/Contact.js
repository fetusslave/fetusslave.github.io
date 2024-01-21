import { useForm, ValidationError } from '@formspree/react';
import { CardContent } from './Content';

export default function Contact() {
  const [state, handleSubmit] = useForm("xkndowjd");
  if (state.succeeded) {
      return <p>Thanks for contacting</p>;
  }
  return (
        <CardContent>

        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input className="form-control" id="email" type="email" name="email"/>
                <ValidationError prefix="Email" field="email" errors={state.errors}/>
            </div>
            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" id="message" name="message"/>
                <ValidationError prefix="Message" field="message" errors={state.errors}/>
            </div>
            <button type="submit" disabled={state.submitting}>Submit</button>
        </form>
      </CardContent>
  );
}