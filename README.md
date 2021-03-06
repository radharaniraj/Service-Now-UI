# Service Now App

## Introduction 
- This is a very Basic React-Native App. 
- This App includes two screens - Home screen and the Form screen
- On Home screen it shows the list of all the tickets of Service Now Aplication, on the same screen there is a Button to navigate to the second screen where you can create  a Ticket for Your Service Now Application
- On second screen there is a Text-Area for creating a Ticket and a Submit button
- After successfull creation of Tickets a Alert will come to the screen with the Description of Created Ticket  

## Service Now Setup

1. Visit [Service Now developer](https://developer.servicenow.com/dev.do) and Sign Up.
2. Sign In with your account after sign up.
3. Click on `Request Instance` on the top-right corner of the screen.
4. select `orlando` and click on Request.
5. It will give you your instance URl with your username and password
6. Visit that URL and change your password (Remember to note down your username and password as it will be required in the React Native App).
7. As soon as you get into your instance .You will see a search bar in the left side with label `filter navigator` 
8. Search for Tables in the filter navigator and select the `Tables` option under the `System definition` Category
9. You will see a list of tables now Click on New to create a new table.
10. Fill in the table label and Name will be filled automatically.  
    *Note:* This name will be used in future for API calls. So note the name, not the label
11. Go to the columns below and add a new column with column label `description`. This way you created a new table for your tickets.
12. Now You need to create a new application and connect this table with that application.
13. Search for `Company application` in the filter navigator
14. Click on `Create New` to create a new company app.
15. Fill in the details like app name and description.
16. In roles set admin only and continue ,
17. select workspace and continue.
18. In tables search for the table that you created earlier. Select it and continue then start the application.
19. Click on continue until you get an option to open your app
20. As soon as you get the open option Click on it and it will open your application in a new tab
21. Clck on the list and here you will see a list of tickets for this specific app

**Now You need to note following three things for the app** 
- **Table Name** - It is the auto generated name of the table that you created earlier.   
- **Your instance user name and password**  
- **Your instace ID** : `For example if this is your instance URl  https://dev70356.service-now.com/ ` then *dev70356* is the instance id in this  

## React-Native App setup

1. Clone the repository
2. Add a file in the credentials folder and name it `env.js` in this folder.
3. Write the following lines in the env.js file
4. Fill your correct username, password , instance and table api name as mentioned above.

```
const config = {
    USERNAME : 'your username',
    PASSWORD : 'password',
    INSTANCE : 'instance',
    TABLE_API_NAME : 'x_5_table'
}
module.exports = {
    config
}
```

6. You should have a `Node version >=10` installed in your machine.
7. Install `expo-cli` using the following command. You can also visit this [link](https://reactnative.dev/docs/0.60/getting-started) to learn more about expo-cli.

         npm install expo-cli --global

8. Visit this [link](https://expo.io/learn) and install either the Android or the IOS client Application of the expo from the App store.
9. Install all the required dependency using

        npm install or yarn install 

10. Run this command to start the application

        expo start 

11. As soon as the application starts  you will get a QR code . Scan that in your Expo Client Application from your phone. It will start the Application in your phone.
Now you are on the app . You can view all the tickets and create a new one as you want.

## Screenshots of the App

|  |   |
|---|---|
|![1](https://i.ibb.co/YTjk2Nb/listpage.jpg)|![2](https://i.ibb.co/Lnst0ZG/blank-decription.jpg)   |
|![3](https://i.ibb.co/VL3RPX6/lessthan300desc.jpg)| ![4](https://i.ibb.co/S5gdNzw/greaterthan4000desc.jpg) |
