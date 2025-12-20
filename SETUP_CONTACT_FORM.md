# EmailJS Contact Form Setup

The contact form is configured to use **EmailJS** (free service, 200 emails/month).

## Quick Setup (5-10 minutes):

### Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email address

### Step 2: Connect Your Email Service
1. In EmailJS Dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Copy the **Service ID** (looks like: `service_abc123`)

### Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template structure:

**Subject:** New Contact Form Submission from {{from_name}}

**Content:**
```
You have a new message from your website contact form:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}

---
This message was sent from the Omni Seq website contact form.
```

4. Save template and copy the **Template ID** (looks like: `template_xyz456`)

### Step 4: Get Your Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (looks like: `AbCd123EfGh456`)

### Step 5: Update Your Website Code
1. Open `js/script.js`
2. Find lines 3-5 and replace the placeholders:

```javascript
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY_HERE';  // Replace with your Public Key
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID_HERE';  // Replace with your Service ID
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID_HERE'; // Replace with your Template ID
```

Example:
```javascript
const EMAILJS_PUBLIC_KEY = 'AbCd123EfGh456';
const EMAILJS_SERVICE_ID = 'service_abc123';
const EMAILJS_TEMPLATE_ID = 'template_xyz456';
```

3. Save the file

### Step 6: Deploy
```bash
git add .
git commit -m "Configure EmailJS credentials"
git push
```

## That's it! 

Your contact form will now send emails to the address connected to your EmailJS service.

## Testing:
1. Visit your website
2. Fill out the contact form
3. Click "Send Message"
4. Check your email inbox

## Free Tier Limits:
- 200 emails per month
- 50kb email size limit
- All standard features included

## Need More?
Upgrade to EmailJS Personal plan ($9/month) for 1,000 emails/month.

## Troubleshooting:
- **Not receiving emails?** Check your spam folder and EmailJS email service connection
- **Error messages?** Check browser console (F12) for detailed error messages
- **Template variables not showing?** Make sure template variable names match exactly: `{{from_name}}`, `{{from_email}}`, `{{phone}}`, `{{message}}`
