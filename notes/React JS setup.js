
//React.JS setup with Wordpress
//==============================


// Parts taken from this tutorial
// https://dev.to/jchiatt/headless-wordpress-with-react




// 1. Create a Wordpress Installation on a url, lets say 'local.react.com' using mampPro
// Attached a database etc like a normal W/Press site.

// 2. Install a CPT UI, ACF Pro and ACF to Rest API plugins
// Note: IMPORTANT: Scroll down to the Settings area and find the “Show in REST API” option when creating a custom post type from the plugin.
// By default, this is set to False. If you don’t change it to True, you will not be able to query this CPT using the WP-API.
// Right underneath that option, you should see the “REST API base slug” option 

// 3. Some dummy posts using a plugin called Dummypress and some images etc

// 4. Assign some custom fields to the CPT and fill out some content.

// 5. Activate the ACF to REST API PLUGIN - it will immediately expose your ACF custom fields to the API.
	


// CONNECTING REACT



// 1. Make sure you have NPM and NODE.js installed on your machine
//    Here is how to do this: http://blog.teamtreehouse.com/install-node-js-npm-mac

// 2. Open terminal and type 
			npm install -g create-react-app
// this will create a REACT APP

// 3. Create a folder inside the root of your site and call it 'react'

// 3. Again open the terminal type
cd
// and then the path to the 'react' folder - dont place it in the wp-content folder or sub folders of wp-content
  
// 4. Hit Return and then type
create-react-app headless-wp
//- this will create a folder called headless-wp inside your 'react' folder

// 5. Now type
npm start
//- this will fire off your app in http://localhost:3000 via your browser.

// 6. in our app.js file. remove all lines apart from
import React, { Component } from 'react';
export default App;


// now we can create our components and have something like so

import React, { Component } from 'react';



class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Star Wars Movies</h2>
      </div>
    )
  }
}



export default App;



// the browser should refresh immediately with the new changes



// To access another react app you have created, simply use the terminal to navigate to where it is
cd path/to/my/app
// then type 
npm start
