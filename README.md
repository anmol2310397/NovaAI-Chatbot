# NovaAI 🤖

NovaAI is a web-based AI chatbot built with **React.js** that provides an interactive conversational interface and integrates external AI APIs for generating responses and AI-powered functionality.

The project focuses on building a responsive chatbot experience using React, API integration, asynchronous JavaScript, and client-side state management.

---

## ✨ Features

- 💬 AI-powered chat interface
- 🖼️ Image upload support
- 🤖 AI response generation through API integration
- ⚛️ React Context API for shared state management
- 📁 Client-side image processing using the FileReader API
- 🔄 Asynchronous API communication
- ⏳ Loading states while waiting for API responses
- 📱 Responsive user interface
- 🎨 Interactive chat experience

---

## 🛠️ Tech Stack

### Frontend

- React.js
- JavaScript
- HTML
- CSS

### API & Browser Technologies

- Google Gemini API
- Fetch API
- FileReader API

### Development Tools

- Vite
- ESLint
- Git
- GitHub

---

## 🏗️ Architecture

NovaAI follows a client-side React architecture.

```text
                    ┌─────────────────┐
                    │      User       │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │    React UI     │
                    │   Components    │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │ React Context   │
                    │ State Management│
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │ Request Handler │
                    │   / API Logic   │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │  External AI    │
                    │      API        │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │ API Response    │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │ React UI        │
                    │ Displays Result  │
                    └─────────────────┘
