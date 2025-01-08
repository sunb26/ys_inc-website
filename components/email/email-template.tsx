import * as React from "react";

interface EmailTemplateProps {
  sender: string;
  fullName: string;
  message: string;
  phone: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  sender,
  fullName,
  message,
  phone,
}) => (
  <div>
    <p>Name: {fullName}</p>
    <p>Email: {sender}</p>
    <p>Phone Number: {phone}</p>
    <br />
    <br />
    <p>{message}</p>
  </div>
);

export default EmailTemplate;
