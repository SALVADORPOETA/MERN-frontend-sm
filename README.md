# MERN Practice (Frontend)

**MERN Practice** is a sophisticated, completely original React-based task management interface. Designed to demonstrate advanced frontend architectural patterns, this project focuses on **dynamic state management**, real-time UI synchronization, and a seamless user experience. Every component, hook, and interaction has been engineered from scratch to provide a robust environment for managing daily activities with a custom priority system.

This application is **fully interactive** — users can instantly toggle between viewing, creating, and editing modes without page reloads. The frontend communicates with a RESTful API to ensure data persistence, featuring a reactive sorting algorithm that organizes tasks by their level of importance.

<img width="780" height="631" alt="mern" src="https://github.com/user-attachments/assets/a0100563-516f-404a-9150-70cb46e8892a" />

✨ **Overview**

MERN Practice is not just a simple list; it is a **performance-oriented frontend project** that emphasizes:

* **Hybrid Form Logic:** A single, intelligent form that adapts its behavior (Add vs. Save) based on the application's edit state.
* **Ref-Based Optimization:** Using `useRef` to manage DOM focus and prevent unnecessary re-renders during button interactions.
* **Priority-Driven Sorting:** A custom algorithm that keeps the UI organized by task urgency (High to Low).
* **Safe Action Flow:** Integrated confirmation systems for sensitive operations like data deletion.
* **Global Layout Management:** Persistent navigation and consistent container spacing across all routes.

🚀 **Features**

* ✨ **Modern React 18 Architecture** using functional components and hooks.
* 📊 **Automated Priority Engine** that re-orders the list in real-time.
* 🔄 **State-Sync Editing:** Selecting a task for editing instantly populates the global form.
* 🧭 **SPA Routing** with React Router for smooth transitions between "Home" and "About".
* ⚠️ **UX Guardrails:** User confirmation prompts to prevent accidental data loss.
* ⚡ **Asynchronous Data Handling:** Clean implementation of the Fetch API with error handling.
* 📱 **Mobile-First Design:** Fully responsive navigation and list layouts.
* 💅 **Custom CSS-in-JS Styling:** Clean, modern interface with a focus on readability.

🛠️ **Tech Stack**

| Category | Technology |
| --- | --- |
| **Library** | React 18 |
| **Routing** | React Router DOM 6 |
| **State Management** | React Hooks (useState, useEffect, useRef) |
| **Styling** | Custom CSS / Inline Styling |
| **HTTP Client** | Fetch API |
| **Deployment** | Vercel |

💻 **Getting Started**

**Prerequisites**

* Node.js 18+
* npm

**Installation**

```bash
# Clone the repository
git clone https://github.com/SALVADORPOETA/mern-practice-frontend.git

# Navigate into the project directory
cd mern-practice-frontend

# Install dependencies
npm install

```

**Development Server**

```bash
npm start

```

The application will be available at: `http://localhost:3000`

⚙️ **Usage**

* **Navigate** through the app using the fixed navbar at the top.
* **Create** tasks by entering a name and selecting a priority level.
* **Edit** any item; notice how the "Add" button transforms into "Save" and the form fills automatically.
* **Organize** your workflow as the app automatically places High Priority items at the top.
* **Delete** tasks safely via the interactive confirmation dialog.

📂 **Project Structure**

```text
mern-practice-frontend/
├─ src/
│  ├─ components/
│  │  ├─ Home.jsx        # Core Logic: CRUD operations & State sorting
│  │  └─ About.jsx       # Static info page
│  ├─ App.js             # Main Router & Global Layout
│  └─ index.js           # Entry point
├─ public/
└─ package.json

```

🎨 **UI & UX Design**

* **Reactive Navigation:** Fixed header with consistent padding and modern "MERN" branding.
* **Contextual Buttons:** Dynamic button labels and colors (e.g., Red for deletion, Primary for saving).
* **Clear Hierarchy:** Distinct borders and shadow effects to separate individual task cards.
* **Accessibility:** Semantic HTML structure and intuitive form controls.
* **Visual Sorting:** Bold priority indicators that make important tasks stand out instantly.

📌 **Originality Statement**

This project is **100% original**.

* No pre-made UI templates or component libraries were used.
* The logic for switching between Create/Update states within a single form was independently developed.
* **MERN Practice (Frontend)** was built as a dedicated portfolio piece to demonstrate real-world engineering skills, state-driven UI design, and production-ready frontend architecture.
