# Pet Profiles App 🐾

A beautiful and modern React application for managing your pets' profiles. Create, view, edit, and delete pet information with an intuitive user interface.

## Features

- ✨ **Modern UI**: Beautiful gradient design with hover animations
- 🐾 **Pet Management**: Add, edit, and delete pet profiles
- 📱 **Responsive Design**: Works perfectly on desktop and mobile devices
- 💾 **Local Storage**: Your pet data persists between sessions
- 🎨 **Pet Type Icons**: Visual representation with emojis for different pet types
- ✅ **Form Validation**: Ensures all required information is provided
- 🔍 **Pet Details**: Track name, type, breed, age, color, weight, and notes

## Pet Types Supported

- Dogs 🐕
- Cats 🐱
- Birds 🐦
- Fish 🐠
- Rabbits 🐰
- Hamsters 🐹
- Turtles 🐢
- Snakes 🐍
- And more! 🐾

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

## How to Use

1. **Add a Pet**: Click the "Add New Pet" button to create a new pet profile
2. **Fill the Form**: Enter your pet's information including name, type, breed, age, color, and weight
3. **Save**: Click "Add Pet" to save the profile
4. **View Pets**: All your pets will be displayed in a beautiful grid layout
5. **Edit**: Click the "Edit" button on any pet card to modify their information
6. **Delete**: Click the "Delete" button to remove a pet (with confirmation)

## Data Storage

The app uses your browser's local storage to save pet information, so your data will persist between sessions on the same device and browser.

## Technologies Used

- **React 18**: Modern React with hooks
- **CSS3**: Custom styling with gradients and animations
- **Local Storage**: Browser-based data persistence
- **Responsive Design**: Mobile-first approach

## Project Structure

```
src/
├── components/
│   ├── PetCard.js      # Individual pet display component
│   └── PetForm.js      # Pet creation/editing form
├── App.js              # Main application component
├── index.js            # React app entry point
└── index.css           # Global styles and component styling
```
