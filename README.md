# Scribe Tales

Scribe Tales is a web application that allows users to share their stories with their community and friends. The platform enables people to express their thoughts, experiences, and creativity, fostering a sense of connection and engagement through storytelling.

## Features

- **User Registration & Authentication**: Users can sign up, log in, and manage their profiles.
- **Story Creation**: Users can write and publish their own stories.
- **Community Engagement**: Readers can view and interact with stories through reactions.
- **Responsive Design**: The application is designed to work seamlessly across various devices.

## Technologies Used

- **Frontend**: React.js, HTML, CSS (Bootstrap), JavaScript
- **State Management**: Redux
- **Deployment**: Vercel / Netlify (Frontend)

## Installation & Setup

1. **Clone the repository**
   ```sh
   git clone https://github.com/yourusername/scribe-tales.git
   cd scribe-tales
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Set up environment variables**
   Create a `.env` file in the root directory and configure your database and authentication secrets:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```
4. **Run the development server**
   ```sh
   npm start
   ```
5. **Backend setup** (if applicable)
   ```sh
   cd backend
   npm install
   npm run dev
   ```
6. **Open the application**
   Access the app in your browser at `http://localhost:3000`.

## Contribution

Contributions are welcome! If you'd like to contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For any inquiries or suggestions, feel free to reach out to [abdelkhouda055@gmail.com].

