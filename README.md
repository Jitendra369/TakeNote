# 🚀 TakeNote - Modern Note-Taking Application

TakeNote is a premium, feature-rich note-taking web application built with **Angular 19**. It offers a sleek user interface with modern design patterns like glassmorphism and integrates a powerful rich-text editor for a superior writing experience.

---

## ✨ Features

- **Rich Text Editing**: Powered by Quill.js, allowing bold, italics, underlining, strike-through, headers, and color customization.
- **Dynamic Formatting**: Support for bullet points, numbered lists, and text alignment.
- **Modern UI/UX**: Stunning glassmorphism design with smooth animations and a responsive layout.
- **Note Management**: Create, view, and organize notes easily.
- **Favorite System**: Mark important notes as favorites with a single click.
- **Notifications**: Set notification dates for your important tasks and thoughts.
- **Clean Architecture**: Well-organized Angular module structure for scalability.

---

## 🛠️ Tech Stack

- **Frontend**: Angular 19 (Signals, Reactive Forms, Standalone Components)
- **Editor**: Quill.js 2.0.2
- **Styling**: Vanilla CSS with Glassmorphism, Bootstrap 5 (CDN), Bootstrap Icons
- **Icons**: Bootstrap Icons
- **Version Control**: Git & GitHub

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (Latest LTS version recommended)
- [Angular CLI](https://angular.dev/tools/cli) installed globally (`npm install -g @angular/cli`)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Jitendra369/TakeNote.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd TakeNote
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

### Running the Application

Start the development server:
```bash
npm start
```
Once the server is running, open your browser and navigate to `http://localhost:4200/`.

---

## 📁 Project Structure

```text
src/app/
├── constant/      # API endpoints and application constants
├── model/         # TypeScript interfaces (Note, User, Log, etc.)
├── module/        # Main feature modules (Home, Add Note, Dev Logging)
│   ├── add-note/  # Note creation feature with Quill integration
│   ├── home/      # Dashboard and note list
│   └── devlogging/# Activity log visualization
├── service/       # Data services and API integration
└── shared/        # Reusable components and utilities (if any)
```

---

## 🌐 Remote Repository

The project is hosted on GitHub: [Jitendra369/TakeNote](https://github.com/Jitendra369/TakeNote.git)

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve the application.

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).

---

Developed with ❤️ by [Jitendra](https://github.com/Jitendra369)
