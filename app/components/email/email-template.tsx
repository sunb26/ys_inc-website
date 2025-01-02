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
    <h1>{fullName}</h1>
    <h2> {sender}</h2>
    <h2>{phone}</h2>
    <p>{message}</p>
  </div>
);

export default EmailTemplate;
