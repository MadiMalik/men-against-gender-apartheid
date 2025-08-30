# EmailJS Setup Guide

This guide will help you set up EmailJS to receive contact form messages from your website.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Set Up Email Service

1. **Add Email Service:**
   - Go to EmailJS Dashboard
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the authentication steps
   - Note down your **Service ID**

2. **Create Email Template:**
   - Go to "Email Templates"
   - Click "Create New Template"
   - Use this template:

```html
Subject: New Contact Form Message from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from the Men Against Gender Apartheid website contact form.
```

   - Save the template and note down your **Template ID**

3. **Get Public Key:**
   - Go to "Account" → "API Keys"
   - Copy your **Public Key**

## Step 3: Update Your Code

Replace the placeholder values in `src/components/ContactSection.jsx`:

```javascript
const result = await emailjs.send(
  'YOUR_SERVICE_ID',        // Replace with your actual Service ID
  'YOUR_TEMPLATE_ID',       // Replace with your actual Template ID
  {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
    to_name: 'MAGA Team',
  },
  'YOUR_PUBLIC_KEY'         // Replace with your actual Public Key
);
```

## Alternative Solutions

### Option 2: Formspree (Even Easier)
1. Go to [Formspree.io](https://formspree.io/)
2. Create account and form
3. Replace the form action with your Formspree endpoint

### Option 3: Netlify Forms (If hosting on Netlify)
1. Add `data-netlify="true"` to your form
2. Netlify will automatically handle form submissions

### Option 4: Custom Backend API
1. Create a Node.js/Express server
2. Use Nodemailer to send emails
3. Deploy to Heroku, Vercel, or similar

## Testing

1. Fill out the contact form
2. Submit the form
3. Check your email inbox
4. Verify the message was received

## Troubleshooting

- **CORS Issues**: Make sure you're using the browser version of EmailJS
- **Authentication Errors**: Double-check your service credentials
- **Template Errors**: Verify template variables match your code

## Security Notes

- Never expose your private keys in client-side code
- Use environment variables for sensitive data
- Consider rate limiting to prevent spam

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- Basic templates
- Standard support

For higher volumes, consider upgrading to a paid plan.
