# DotControl_Assignment_Frontend/React


## Running

* Install the dependencies using `yarn install`
* `yarn build` and 'yarn start'
 
## Built With
* [React](https://reactjs.org/docs/)
* [Redux](https://redux.js.org/introduction) 
* Webpack
* Babel


## Authors

**Yoonji Oh** 

## Task 3 

To deal with upcoming large update,   
You want to build more predictable application by composing functions and assembling components   
where each piece has its own responsibility.    
To break down application into smaller, structure project by features and group all related features together,      
and nest them as needed.     
  
I recommend you to reorganize the folder strucure of this app.   
In future, I guess this application can be used not only for movie but also series.  
Then maybe you will need new categorize feature, and manage histroy feature for each users.   
Also you will need authentication feature as well.   
  
**Recommended Folder structure  
  
Below is an example.   
  
/app  
++/services  
++++/api  
++++/reducers  
++++/actions  
++++/store.js  
++/components  
++++/Search	  
++++++/index.js  
++/Notifications  
++++/components  
++++++/SearchFail  
++/Screens  
++++/images  
++++/Home  
++++/Detail  
++++/Overview  
....  
    
Components folder in root components  
  
In case you need to create a component that you definitively know you won’t reuse anywhere else,   
if you add it at the root level of your components folder, It will be very difficult to remember what it was.   
For example, ‘SearchFail’ component is located inside ‘Notification/components/’   
because this component won’t be reused with other component.   
Meanwhile 'Search' component would better be located in root components   
because it can be reused in future by other components such as movies, series etc.   
  
Create Components, screens, services folder
  
you can make services, screens folder separately from component folder.   
In screens folder, you can manage components which rendered to screen such as Detail.js, Overview.js.   
If you find some problem on screen, you can go right away to this screens folders and might find the reason faster.   
Services folder is for define the core business logic of your application.  
You can use services to manage all api requests for example.   
And you can put reducers, anctions in this folder as well.   
  
*Other recommendation   
Configure Webpack’s modules resolution to avoid nested imports  
  
If application becomes large projects, Figuring out the relative paths between files can be frustrating.   
To improve this problem, you can tell Webpack to look specific directory.   
Put resolve object inside Webpack config object.   
  
{   
  resolve: {  
  modules: [‘node_modules’, ‘app’],  
  extensions: [‘.js’, ‘.jsx’],  
}  
}  




# Movie_API
