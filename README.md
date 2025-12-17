# Omni Seq - Cybersecurity Website

A modern, professional single-page static website for Omni Seq Pvt. Ltd., a cybersecurity company based in Nepal.

## Features

- ✨ Modern, responsive design with dark theme
- 🎨 Built with Tailwind CSS
- 🚀 Smooth scrolling navigation
- 📱 Mobile-friendly with hamburger menu
- 💼 Service cards with hover effects
- 📧 Contact form ready for integration
- ⚡ Fast loading, no build process needed
- 🎯 SEO-friendly structure

## Sections

1. **Hero** - Eye-catching introduction with CTA buttons
2. **Services** - 6 main service offerings with detailed descriptions
3. **About** - Company mission, CEO message, and industries served
4. **Contact** - Contact information and form

## Getting Started

### Option 1: Open Directly
Simply open `index.html` in any modern web browser.

### Option 2: Use a Local Server
For the best experience, use a local development server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## Contact Form Integration

The form is ready to integrate with a free service. Choose one:

### Web3Forms (Recommended)
1. Sign up at https://web3forms.com (free)
2. Get your access key
3. Uncomment the Web3Forms integration code in the `<script>` section
4. Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual key

### Formspree
1. Sign up at https://formspree.io (free)
2. Create a new form
3. Update the form action to your Formspree endpoint

### EmailJS
1. Sign up at https://www.emailjs.com (free)
2. Follow their integration guide
3. Update the JavaScript accordingly

## Deployment

### GitHub Pages
1. Create a GitHub repository
2. Push this code
3. Go to Settings → Pages
4. Select your branch and save

### Netlify
1. Drag and drop the folder to https://app.netlify.com/drop
2. Your site is live instantly!

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts

## Customization

### Colors
The color scheme can be customized in the Tailwind config:
```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#0ea5e9',      // Change main color
                secondary: '#06b6d4',    // Change secondary color
                dark: '#0f172a',
                darker: '#020617',
            }
        }
    }
}
```

### Content
All content can be edited directly in `index.html`. The structure is clearly commented.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All rights reserved - Omni Seq Pvt. Ltd. 2025

## Support

For questions or support, contact: info@omniseq.com.np
