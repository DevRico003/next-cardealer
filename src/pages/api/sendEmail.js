import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function sendEmail(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, message } = req.body; // get data from request body
    const content = {
      to: 'info@carcenter-erding.de',
      // to: 'palermo003@gmail.com',
      from: 'info@carcenter-erding.de',
      subject: `Neue Nachricht von ${name}`,
      text: message,
      html: `<p>Du hast eine neue Kontaktanfrage von:</p>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>E-Mail:</strong> ${email}</p>
             <p><strong>Telefon:</strong> ${phone}</p>
             <p><strong>Nachricht:</strong> ${message}</p>`,
    };

    try {
      await sgMail.send(content);
      res.status(200).send({ message: 'Message sent successfully.' });
    } catch (error) {
      console.error('SendGrid mail error', error);
      res.status(500).send({ error: 'Error sending message.' });
    }
  } else {
    res.status(405).send({ error: 'Only POST requests allowed' });
  }
}
