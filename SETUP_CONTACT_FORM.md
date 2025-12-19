# Contact Form Setup Instructions

The contact form is configured to use **Web3Forms** (free service, 250 emails/month).

## Quick Setup (5 minutes):

### Step 1: Get Your Access Key
1. Go to https://web3forms.com
2. Enter your email address (info@omniseq.com.np)
3. Click "Create Access Key"
4. Check your email and copy the access key

### Step 2: Add the Access Key to Your Website
1. Open `js/script.js`
2. Find line 7: `const WEB3FORMS_ACCESS_KEY = 'YOUR_ACCESS_KEY_HERE';`
3. Replace `YOUR_ACCESS_KEY_HERE` with your actual access key
4. Save the file

### Step 3: Commit and Push
```bash
git add .
git commit -m "Add Web3Forms access key"
git push
```

### That's it! 
Your contact form will now send emails to info@omniseq.com.np

---

## How It Works:
- Form submissions are sent to Web3Forms API
- Web3Forms forwards them to your email
- You receive notifications for each submission
- Free tier: 250 submissions/month
- No backend server needed!

## Testing:
1. Visit your website
2. Fill out the contact form
3. Click "Send Message"
4. Check info@omniseq.com.np for the email

## Alternative Options:
If you prefer other services:
- **Formspree**: https://formspree.io (50 submissions/month free)
- **EmailJS**: https://www.emailjs.com (200 emails/month free, more customization)
