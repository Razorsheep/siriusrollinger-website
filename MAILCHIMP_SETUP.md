# Mailchimp Integration Setup Guide

This guide explains how to configure Mailchimp integration with your contact form.

## 🎯 What This Integration Does

1. **Adds contacts to Mailchimp**: When someone submits the contact form, they're automatically added to your Mailchimp audience
2. **Sends notification emails**: You receive an email notification for each contact form submission
3. **Tags contacts**: Contacts are tagged with "contact-form" and "website-inquiry" for easy segmentation

## 📧 Required Environment Variables

Add these to your `.env` file:

```bash
# Mailchimp Configuration
MAILCHIMP_API_KEY=your-api-key-here
MAILCHIMP_LIST_ID=your-list-id-here

# Email Configuration (for notifications)
MAIL_MAILER=smtp
MAIL_HOST=your-smtp-host
MAIL_PORT=587
MAIL_USERNAME=your-smtp-username
MAIL_PASSWORD=your-smtp-password
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=noreply@firstaiddog.dk
MAIL_FROM_NAME="Førstehjælp til Hunde"
MAIL_ADMIN_EMAIL=kontakt@firstaiddog.dk
```

## 🔧 Getting Your Mailchimp Credentials

### 1. Get Your API Key

1. Log in to your Mailchimp account
2. Go to **Account → Extras → API Keys**
3. Create a new API key or copy an existing one
4. The format will be: `xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-us1`
5. The part after the dash (`us1`) is your server prefix

### 2. Get Your List ID

1. Go to **Audience → All contacts**
2. Click **Settings → Audience name and defaults**
3. Look for "Audience ID" - this is your List ID

## 📬 Email Configuration Options

### Option 1: Gmail SMTP (Easy)
```bash
MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=your-email@gmail.com
MAIL_PASSWORD=your-app-password  # Use App Password, not regular password
MAIL_ENCRYPTION=tls
```

### Option 2: Postmark (Recommended for production)
```bash
MAIL_MAILER=postmark
POSTMARK_TOKEN=your-postmark-token
```

### Option 3: Mailgun
```bash
MAIL_MAILER=mailgun
MAILGUN_DOMAIN=your-domain.com
MAILGUN_SECRET=your-mailgun-secret
```

### Option 4: For Testing (Logs emails instead of sending)
```bash
MAIL_MAILER=log
```

## 🧪 Testing the Integration

1. **Test the contact form** by submitting it on `/contact`
2. **Check the logs** in `storage/logs/laravel.log` for:
   - Contact form submission logs
   - Mailchimp API responses
   - Email sending logs
3. **Check your Mailchimp audience** to see if the contact was added
4. **Check your email** for the notification (if email is configured)

## 🏷️ Mailchimp Tags and Merge Fields

The integration automatically:

- **Tags contacts** with: `contact-form`, `website-inquiry`
- **Sets merge fields**:
  - `FNAME`: First name (extracted from full name)
  - `LNAME`: Last name (extracted from full name)
  - `PHONE`: Phone number (if provided)

## 🔍 Troubleshooting

### Common Issues

1. **"Mailchimp API key or List ID not configured"**
   - Check that your `.env` file has the correct values
   - Run `php artisan config:cache` after updating `.env`

2. **"Failed to add contact to Mailchimp"**
   - Check the API key format (should include server prefix)
   - Verify the List ID is correct
   - Check if the email already exists in your audience

3. **"Email notification error"**
   - Verify your SMTP credentials
   - Test with `MAIL_MAILER=log` first
   - Check firewall/port settings

### Debug Commands

```bash
# Clear config cache after updating .env
php artisan config:cache

# Test email configuration
php artisan tinker
Mail::raw('Test email', function($msg) { $msg->to('test@example.com')->subject('Test'); });

# Check logs
tail -f storage/logs/laravel.log
```

## 🚀 What Happens When Someone Submits the Form

1. **Form validation** - Data is validated
2. **Mailchimp integration** - Contact is added to your audience with tags
3. **Email notification** - You receive a beautifully formatted email
4. **Logging** - Everything is logged for debugging
5. **Success response** - User sees confirmation message

## 🎨 Customizing Email Templates

The email templates are located at:
- `resources/views/emails/contact-form-notification.blade.php` (HTML version)
- `resources/views/emails/contact-form-notification-text.blade.php` (Text version)

You can customize these templates to match your branding.

## 📊 Mailchimp Audience Segmentation

Use these tags to create segments:
- **contact-form**: All contacts from the contact form
- **website-inquiry**: All website inquiries
- **newsletter**: Contacts from newsletter signup (if you have one)

This allows you to send targeted campaigns to different types of contacts.
