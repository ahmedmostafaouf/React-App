import React from 'react';
import Footer from '../Footer/Footer'
import { ContactSection, ContactTitle, Span, Form, FormInput, InputText, InputEmail, InputExp, InputSubmit, TextArea } from './style.js'
const Contact = () => {
    return (
        <React.Fragment>
            <ContactSection>
                <div className="container">
                    <ContactTitle><Span>Drop </Span>Me A line</ContactTitle>
                    <Form>
                        <FormInput>
                            <InputText type="text" placeholder="Your Name" />
                            <InputEmail placeholder="Your Email" />
                        </FormInput>
                        <InputExp type="text" placeholder="Your Subject" />
                        <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                        <InputSubmit type="submit" value="Send Message" />
                    </Form>
                </div>
            </ContactSection>
            <Footer />
        </React.Fragment>





    );
}

export default Contact;
