# placement-cell-nodejs-codingninjas

This is a simple Node.js application that serves as a starting point for building web applications using Node.js. It includes basic configuration files and a folder structure to organize your code.

## Prerequisites

To run this application, you need to have the following software installed on your machine:

- Node.js (version 10 or higher)
- NPM (Node Package Manager)

## Getting Started

1. Clone this repository to your local machine or download the source code as a ZIP file.
2. Open a terminal or command prompt and navigate to the project's root directory.
3. Run `npm install` to install the required dependencies.
4. Rename the `.env.example` file to `.env` and modify the environment variables as needed.
5. Run `npm start` to start the application.
6. Open your web browser and visit `http://localhost:8000` to see the running application.

## Folder Structure

The folder structure of this application is as follows:

```
├── controllers
│   └── companyController.js  
│   └── homeController.js  
│   └── studentController.js  
│   └── userController.js  
├── images
│   └── ...
├── config
│   └── mongoose.js
│   └── passport-local-strategy.js
├── models
│   └──companySchema.js
│   └──studentSchema.js
│   └──userSchema.js
├── routes
│   └── companyRoute.js
│   └── index.js
│   └── studentRoute.js
│   └── userRoute.js
├── report
│   └── data.csv
├── views
│   └── _bootstrap_mets.ejs
│   └── _bootstrap_mets.ejs
│   └── _header.ejs
│   └── add_student.ejs
│   └── allocateInterview.ejs
│   └── company.ejs
│   └── home.ejs
│   └── signin.ejs
│   └── signup.ejs
├── .env.example
├── .gitignore
├── package.json
├── README.md
└── index.js
```

- `controllers`: Contains the logic for handling HTTP requests and responses.
- `models`: Contains the data models and schemas for interacting with databases or other data sources.
- `routes`: Defines the application routes and maps them to the corresponding controller methods.
- `index.js`: The main application file where the Express app is created and configured.
- `.env.example`: An example file for environment variables. Rename it to `.env` and provide your own values.
- `.gitignore`: Specifies files and directories that should be ignored by version control.
- `package.json`: Contains metadata and dependencies for the Node.js application.
- `README.md`: This file, providing information about the application.


## Configuration

This application uses environment variables for configuration. The required variables can be found in the `.env.example` file. Copy this file and rename it to `.env`, then provide the appropriate values for your environment.
  MONGODB_URI = " "
  SECRET = " "



