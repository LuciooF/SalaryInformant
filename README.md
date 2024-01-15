# Salary Informant Website

## Note to Users
:warning: **Disclaimer:** This project is a learning endeavor, and I am new to all the technologies used here. As such, you might encounter some basic errors and mistakes. I welcome you to create issues and provide feedback — I am just here to learn. Please be kind and constructive in your criticism. Thank you! :heart:

## Project Overview
This website provides UK users with insights into how their salaries compare to others, using gov data to provide information on salaries by region, age, ethnic group, sex, etc. Technologies used are listed below.
This website aims to offer an interactive and informative experience in the far future.

## Technologies Used
- Node.js
- HTML
- CSS
- JavaScript
- Nodemon
- Express.js
- PostgreSQL
- pgAdmin

## Setup Instructions

### Prerequisites
Ensure you have the following installed:
- Node.js
- PostgreSQL
- pgAdmin

### Database Setup
1. **Create a New Database:**
   - Open pgAdmin.
   - Create a new database. Name it as per your preference.

### Project Setup
1. **Clone the Repository:**
   - Clone the project repository to your local machine.

2. **Install Dependencies:**
   - Navigate to the root directory of the project.
   - Run `npm install` to install all the required npm packages.

3. **Environment Setup:**
   - Create a `.env` file in the root directory.
   - Add the following environment variables:

     ```
     PGUSER=yourUser
     PGHOST=localhost
     PGDATABASE=YourDBName
     PGPASSWORD=yourDBPassword
     PGPORT=yourPort (default: 5432)
     ```

4. **Initialize the Database:**
   - Run `node backend/processing-data/populateDatabase.js`.
   - This script will create the required tables and initialize your database.

### Running the Application
1. **Start the Server:**
   - Run `npm run dev` to start the server using Nodemon for easier development.

2. **Access the Website:**
   - Open your web browser and go to `http://localhost:3000/`.
   - You should now be able to view and interact with the website.

## Contributing
Feel free to fork this project and submit pull requests for any improvements or fixes.
