## Pangea: React Native Exchange Rate Challenge
This repository contains a React Native application developed as an assignment for Pangea's Lead Frontend Software Engineer role. The core objective of this application is to allow a user to manage exchange rate data.
Project Goals & Demonstrated Skills
This assignment was specifically designed to assess 
understanding and proficiency in several key areas:

• Demonstrating a solid understanding of React Native fundamentals.

• Showcasing strong code organization and overall code quality, which is considered super important for this role and should not be skimped on.

• Serving as a foundational piece that can be expanded upon in a follow-up live coding interview.
Features

The application incorporates the following essential functionalities as required by the assignment:
• Exchange Rate Data Management: The primary function is to enable users to manage exchange rate data.

• Public API Consumption: The application consumes data from a publicly available 
API: ``https://api.gopangea.com/api/v5/FeesAndFX?exchange=USD-MXN%7CUS-MX&senderId=``

• Toggleable Modes (Read & Write):
    ◦ Users can toggle between a read-only mode and a write mode.
    ◦ In read-only mode, the user will only see the exchange rate information specifically for Mexico.
    ◦ In write mode, the user is able to update the exchange rate data for Mexico.

• State Management Exercise: Critically, there is no API available for making calls to save these changes when updating exchange rates; therefore, this functionality is explicitly treated as a state management exercise.

• Basic Input Validation: When updating an exchange rate, basic validation is implemented (e.g., ensuring only numbers can be input).

• Utilization of Common React Native Features: While the exercise itself is not overly complex, it requires making use of common React Native concepts to demonstrate proficiency.

• Production-Level Code Organization: The codebase is organized like it would be for a production application, emphasizing good architectural practices.

• Meaningful Unit Testing: The application includes at least one meaningful unit test.

### Technical Details
• Framework Used: This application was built using [Specify Expo or One here, e.g., "Expo"].

• Supported Platforms: The application is designed to work on iOS or Android. Its functionality has been verified on [Specify iOS or Android here, e.g., "iOS"]

. Please note that while some frameworks may support Web, the app will be verified on only one of iOS or Android.

### Setup and Installation
To get this React Native application up and running on your local machine, please follow these general steps:
1. Clone the repository:
2. Navigate to the project directory:
3. Install dependencies:
4. Run the application:
    ◦ For iOS:
    ◦ For Android:
    ◦ (Note: This "Setup and Installation" section provides general guidance for React Native projects and is not directly from the provided sources. Specific commands may vary slightly based on the chosen framework like Expo or if it's a bare React Native project.)
    
## Usage
Once the application is running:
1. The initial display will present exchange rate information.
2. Locate the toggle or button within the UI to switch between "Read-Only" and "Write" modes.
3. In Read-Only mode, you will exclusively see exchange rate data pertinent to Mexico.
4. Switching to Write mode will enable you to update the exchange rate data for Mexico. Basic validation is in place to ensure that only numeric inputs are accepted for updates.
Code Organization & Testing Philosophy
The codebase is structured with a strong emphasis on production-ready practices, aiming for clarity, maintainability, and scalability. Components are logically grouped, and state management is handled robustly, especially considering the absence of a backend API for saving changes. A meaningful unit test has been included to demonstrate adherence to testing best practices.

## Notes for Evaluators & Submission
• This assignment was completed within the suggested timeframe of no more than three hours.
• The application's functionality has been verified on [Specify iOS or Android].
• This repository is configured as a private GitHub repository.
• Access has been granted to GitHub users "timle8n1" and "GregWyatt-Pangea".
• The link to this repository has been provided via email as requested.

# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
