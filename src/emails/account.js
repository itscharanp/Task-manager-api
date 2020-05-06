const sgMail = require('@sendgrid/mail')
const sendgridAPIkey = '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'
sgMail.setApiKey(sendgridAPIkey)

sgMail.send({
    to:'pyla.charankumar2017@vitstudent.ac.in',
    from:'its.charanp@gmail.com',
    subject:'This is my first creation',
    text:'I hope this one actually reaches you.'
})
