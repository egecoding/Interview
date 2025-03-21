User Management App
A simple Vue 3 application for managing users, including listing users and editing user details.

Features
✅ Fetch users from an API
✅ Display a list of users
✅ Navigate to an edit page for a selected user
✅ Modify user details (simulated)

Technologies Used
Vue 3 (Composition API)
Vuex (State Management)
Vue Router (Navigation)
Axios (API Calls)
Vite (Development Server)
Installation & Setup
1️⃣ Clone the repository

sh
Copy
Edit
git clone <your-repo-url>
cd <your-repo-folder>
2️⃣ Install dependencies

sh
Copy
Edit
npm install
3️⃣ Run the development server

sh
Copy
Edit
npm run dev
4️⃣ Open the app in your browser
Visit: http://localhost:5173/

Project Structure
bash
Copy
Edit
📂 src
 ├── 📂 store          # Vuex store (user state management)
 ├── 📂 router         # Vue Router (routes config)
 ├── 📂 views          # Pages (UserList & EditUser)
 ├── App.vue           # Main application file
 ├── main.js           # Entry point (Vue app setup)
API Endpoint
The app fetches users from:
https://frontend-interview.touchinspiration.net/api/users

How to Use
1. View Users
When the app loads, it fetches and displays users.
Click "Reload Users" to refresh the list.
2. Edit a User
Click the "Edit" button next to a user.
Modify the user's name or email.
Click "Save" (currently logs the changes to the console).
License
MIT License.