// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
// javascript
const sgMail = require('@sendgrid/mail')
const sendEmail = function(appointmentTo, patientObject){
  const {first_name, last_name} = patientObject
  console.log("appointmentTo inside sendMail is:", appointmentTo)
  console.log("patientObject is: ",patientObject)
  // console.log(`process env SEND GRID API: `,process.env.SENDGRID_API_KEY)

  const startTime = (appointmentTo.startAt).toString().slice(0, 21)
  const EndTime = (appointmentTo.endAt).toString().slice(16, 21)
  // const appointment_datetime = new Date(startDate)
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: 'senseivalik@gmail.com', // Change to your recipient
    from: 'valentin.lyash@gmail.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    // text: 'and easy to do anywhere, even with Node.js',
    html: `<strong>Hello Dear ${first_name} ${last_name},\n</strong> Please be aware that your appointment has been booked for <strong>${startTime}</strong> and end at <strong>${EndTime}</strong>.\n We look forward to seeing you then. For rescheduling or cancellations please give us a call.\n\n
    Thank you and have a healthy day.\n
    -Team dRecords`,
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
      console.log(error.response.body)
    })

}

module.exports = {sendEmail};