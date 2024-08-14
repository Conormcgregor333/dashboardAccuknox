
# Accuknox Dashboard
This is a dashboard built using reactJS, tailwind CSS and RTK Query. Functionalities include adding of widgets , deletion of widgets and search .

## Deployment

To deploy this project run

## Installation

To install and set up the project locally, follow these steps:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Conormcgregor333/dashboardAccuknox.git

After cloning this repository in your local machine , check weather the current directory is "dashboardAccuknox" or not . If not change it to dashboardAccuknox first. 

 **Change directory:**
```bash
  cd dashboardAccuknox
```
If the directory is already dashboardAccuknox then you can run the below command . If not then first change the directory to dashboardAccuknox and then run the command below.

```bash
  cd app
```
![git1](https://github.com/user-attachments/assets/28bdf61e-6665-4c24-b2f6-0c85a6627383)


3. **Install the dependencies:**
```bash
  npm install
```

4. **Run the app:**
```bash
  npm run dev
```
![git3](https://github.com/user-attachments/assets/fd524579-13e8-47f0-ba52-11d3f55b9e43)


The above command will start the server and you will be able to see the locally hosted website link . But wait , we still got to host the JSON data so that we can fetch from it.

Now open another terminal in your code editor and change the directories just as you did above. 

**If not in dashboardAccuknox directory** 
```bash
  cd dashboardAccuknox
```
```bash
  cd app 
```
Now in this terminal , we are going to host a json file locally using json server package . 

**Run the below command to start the JSON server**
```bash
  npx json-server --watch data/data.json --port 3600
```
![git2](https://github.com/user-attachments/assets/f2997698-4f01-448d-b4dd-5e69681a5826)



## Some images of the webpage- 

### Home Page
![git4](https://github.com/user-attachments/assets/b7fa8306-2db8-499a-8b32-33cb36e4250d)

### Dashboard
![git5](https://github.com/user-attachments/assets/57cdf199-3af5-42e2-bf4e-6249faa54193)

### Dashboard Options
![git6](https://github.com/user-attachments/assets/db33e806-6245-487e-b997-f03ddbb4c6b3)


## Technologies used
1. ReactJS
2. Tailwind CSS
3. RTK Query

h3 align="left">Languages and Tools:</h3>
<p allign="left">
  <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a>
<img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40"/>
</p>


## Demo

git- https://github.com/Conormcgregor333/dashboardAccuknox


## Problem
1. To implement a dashboard
2. Must be functional with JSON data
3. intutive design

## Solution
1. Used reactJS for implementing the project
2. used tailwind CSS for styling
3. used RTK Query for handling the JSON API and performing CRUD .

## Made with ❤️ and 🥛 by Siddharth Pareek

Hey there , if you ran into any issue while running this webapp locally , feel free to ask me at https://www.linkedin.com/in/siddharth-pareek-75514b190/ or mail me at siddharth2000pareek@gmail.com. 
