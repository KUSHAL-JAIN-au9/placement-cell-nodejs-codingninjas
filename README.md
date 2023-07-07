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
  
# screen shots

![Screenshot 2023-07-07 201945](https://github.com/KUSHAL-JAIN-au9/placement-cell-nodejs-codingninjas/assets/36365855/d86874ea-3d10-45d0-9c34-e8178d8bc4f5)

![Screenshot 2023-07-07 202010](https://github.com/KUSHAL-JAIN-au9/placement-cell-nodejs-codingninjas/assets/36365855/33e2ee71-0b9d-4ef6-8c7e-5c8957c5d4e9)

![Screenshot 2023-07-07 202037](https://github.com/KUSHAL-JAIN-au9/placement-cell-nodejs-codingninjas/assets/36365855/fb76ddb3-72d9-43e9-a386-a02fcf8fce2c)
![Screenshot 2023-07-07 202108](https://github.com/KUSHAL-JAIN-au9/placement-cell-nodejs-codingninjas/assets/36365855/d9874950-d535-4599-829a-d3b19c54c353)

![Screenshot 2023-07-07 202124](https://github.com/KUSHAL-JAIN-au9/placement-cell-nodejs-codingninjas/assets/36365855/aa00e586-ba86-475e-b9f2-e23626ff9703)

![Screenshot 2023-07-07 202236](https://github.com/KUSHAL-JAIN-au9/placement-cell-nodejs-codingninjas/assets/36365855/45aadabf-8ac6-4e86-bed2-cd70764bfa9b)
