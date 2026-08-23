# Email Writer AI

An AI-powered email reply generator built using **React, Spring Boot, Google Gemini API, and a Chrome Extension for Gmail**.

The project provides two ways to generate email replies:

* A modern web application
* A Chrome extension that works directly inside Gmail

## Features

* AI-powered email reply generation
* Generate replies directly inside Gmail
* Automatically insert generated replies into the Gmail reply box
* Six reply styles:

  * Professional
  * Friendly
  * Casual
  * Concise
  * Apologetic
  * Thankful
* Gemini API configuration through extension settings
* Copy generated replies to clipboard
* React-based web interface
* Spring Boot REST API
* Gmail Chrome Extension
* Deployed backend
* Deployed frontend

## Architecture

### Web Application

```text
User
  ↓
React Web App
  ↓
Spring Boot REST API
  ↓
Google Gemini API
  ↓
Generated Email Reply
  ↓
React Web App
```

### Gmail Extension

```text
Gmail
  ↓
AI Reply Button
  ↓
Chrome Extension
  ↓
Saved Gemini Settings
  ↓
Spring Boot Backend
  ↓
Google Gemini API
  ↓
Generated Reply
  ↓
Gmail Reply Box
```

## How It Works

### Web Application

1. User enters the original email content.
2. User selects a reply style.
3. User clicks **Generate Reply**.
4. React sends the request to the Spring Boot backend.
5. The backend communicates with Gemini.
6. Gemini generates the email reply.
7. The generated reply is displayed in the web application.
8. The user can copy the reply to the clipboard.

### Gmail Extension

1. User opens an email in Gmail.
2. User clicks **Reply**.
3. The extension adds an **AI Reply 🤖** button.
4. The extension reads the email content.
5. The extension retrieves the saved Gemini settings.
6. The request is sent to the Spring Boot backend.
7. Gemini generates the reply.
8. The generated reply is returned to the extension.
9. The reply is automatically inserted into the Gmail reply box.
10. The user can review, edit, and send the email.

## Reply Styles

| Style        | Description                           |
| ------------ | ------------------------------------- |
| Professional | Formal and workplace-appropriate      |
| Friendly     | Warm and approachable                 |
| Casual       | Relaxed and conversational            |
| Concise      | Short and direct                      |
| Apologetic   | Suitable for apologies or corrections |
| Thankful     | Suitable for expressing gratitude     |

## Tech Stack

### Frontend

* React
* Vite
* Material UI
* Axios
* JavaScript

### Backend

* Java
* Spring Boot
* Spring Web
* Maven

### AI

* Google Gemini API

### Chrome Extension

* JavaScript
* Chrome Extension Manifest V3
* Chrome Storage API
* Content Scripts
* Service Worker
* Gmail DOM integration

### Deployment

* Vercel
* Render

## Project Structure

```text
email-writer-AI/
│
├── email-writer-react/
│   └── React frontend
│
├── email-writer-sb/
│   └── Spring Boot backend
│
├── email-writer-ext/
│   ├── manifest.json
│   ├── content.js
│   ├── content.css
│   ├── background.js
│   ├── popup.html
│   └── popup.js
│
└── README.md
```

## Web Application

The web application allows users to enter an email, select a reply style, and generate an AI-powered response.

### Workflow

```text
Enter Email
     ↓
Select Reply Style
     ↓
Generate Reply
     ↓
Spring Boot Backend
     ↓
Gemini API
     ↓
Generated Reply
     ↓
Copy Response
```

## Gmail Chrome Extension

The Chrome extension brings the AI email generation functionality directly into Gmail.

### Main Features

* Detects Gmail reply/compose windows
* Adds an **AI Reply 🤖** button
* Reads email content
* Retrieves saved Gemini settings
* Supports six reply styles
* Communicates with the deployed Spring Boot backend
* Receives the generated reply
* Automatically inserts the reply into Gmail

## Extension Settings

The extension provides a settings popup where users can configure:

* Gemini API URL
* Gemini API Key
* Reply Style

The available reply styles are:

```text
Professional
Friendly
Casual
Concise
Apologetic
Thankful
```

The extension stores these settings using Chrome's storage functionality.

## Gmail Extension Installation

The extension can currently be installed locally using Chrome Developer Mode.

### 1. Clone the Repository

```bash
git clone https://github.com/VirajPatil3012/email-writer-ai.git
```

### 2. Open Chrome Extensions

Open:

```text
chrome://extensions
```

### 3. Enable Developer Mode

Turn on **Developer mode**.

### 4. Load the Extension

Click **Load unpacked**.

Select:

```text
email-writer-AI/email-writer-ext
```

### 5. Configure the Extension

Open the **EMAIL WRITER ASSISTANT** extension.

Enter:

* Gemini API URL
* Gemini API Key

Select your preferred reply style and click **Save Settings**.

### 6. Use the Extension

Open Gmail.

1. Open an email.
2. Click **Reply**.
3. Click **AI Reply 🤖**.
4. Wait for the generated response.
5. Review or edit the response.
6. Click **Send**.

## Local Development

### Backend

Navigate to:

```text
email-writer-sb/
```

On Windows:

```powershell
.\mvnw spring-boot:run
```

On Linux/macOS:

```bash
./mvnw spring-boot:run
```

### Frontend

Navigate to:

```text
email-writer-react/
```

Install dependencies:

```powershell
npm install
```

Start the development server:

```powershell
npm run dev
```

## API

The main email generation endpoint is:

```text
POST /api/email/generate
```

Example request:

```json
{
  "emailContent": "Can you send me the project report tomorrow?",
  "tone": "professional"
}
```

The backend processes the request and communicates with the Gemini API to generate the response.

## Deployment

The project uses separate deployments for the frontend and backend.

```text
React Frontend
      ↓
   Vercel
      ↓
Spring Boot Backend
      ↓
   Render
      ↓
 Google Gemini
```

The Gmail extension communicates with the deployed Spring Boot backend.

## Security

API credentials should never be committed to GitHub.

The Gemini API credentials used by the extension are configured through the extension settings.

For production distribution, API-key handling should be reviewed carefully because credentials stored on a user's device may be accessible to that user.

Never commit private API keys, passwords, or other secrets to the repository.

## Testing

The project has been tested for:

* Web application email generation
* Gmail reply generation
* Different email contents
* Automatic reply insertion into Gmail
* Multiple reply styles
* Extension settings
* Missing API credentials
* Chrome extension installation using Developer Mode
* Fresh extension installation from the extension directory

## Future Improvements

* Chrome Web Store publication
* Improved Gmail email detection
* Better error handling
* Reply regeneration
* More reply customization
* Improved extension UI
* User authentication
* Usage analytics
* Support for additional AI providers
* Better credential management
* Production-ready API security

## Author

**Viraj Patil**

BTech Information Technology
Pune Institute of Computer Technology (PICT), Pune

## License

This project is intended for educational and personal project purposes.
