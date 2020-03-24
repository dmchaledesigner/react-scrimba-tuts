//Class Components in REACT
// =========================

// injecting html into a class component is simple
// 1. create the class
// 2. add the html to the render => return
// 3. render the class to the DOM

// 1. create the class - start with uppercase like a JS object
	class MyClassName extends React.Component{


		render(){

				// this is where any calc need to be done

				return(
						// jsx goes here
					);
		}


	}; // close the class component



// full example

class QuoteMaker extends React.Component{


	render(){

		return(

			// html goes here

			);
	}


}; // close component



// Render the Class Component to the DOM
ReactDOM.render(

	<QuoteMaker/>,
	document.getElementById('app')

	);





















// Use a Variable Attribute in a Component
//==========================================


// 1. Create the object that holds the attributes of an image

	const panda = {
		src: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Endangered_Red_Panda.jpg',
		alt: 'Red Panda',
		width: '200px',
		class: 'img-responsive'
	};


	class RedPanda extends React.Component{

		render(){

			return(
					
					<div>

							<h2>{panda.alt}</h2>

							<img
								src={panda.src}
								alt={panda.alt}
								width={panda.width}
								class={panda.class}
								/>

					</div>
					

				);

		}


	}; // close component




	// Render the Class
	ReactDOM.render(
		<RedPanda/>,
		document.getElementById('app')
		);



















// Put Logic in a Render Function
//=================================


// A render() function must have a return statement.
// However, that isn't all that it can have.

// A render() function can also be a fine place to put simple calculations that need to happen right before a component renders.
// Here's an example of some calculations inside of a render function:


class Random extends React.Component {
  render() {
	    // First, some logic that must happen
	    // before rendering:
	    const n = Math.floor(Math.random() * 10 + 1);
	    // Next, a return statement
	    // using that logic:
    	return (
    			<h1>The number is {n}!</h1>;
    			)
  }
}



//example


//create a variable using objects inside an array
var friends = [

	{	// object 1
		title: "kevin jones",
		src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyweirdo.jpg"
	},
	{
		//object 2
		title: "kevin david",
		src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyweirdo.jpg"
	},
	{
		//object 3
		title: "james david",
		src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyweirdo.jpg"
	}


]; // close array




//create the class component

class Friend extends React.Component{


	render(){

		// create var to select object in array -- note we do this inside the render function of the component
		var friend = friends[1]; // this will select the 2nd object in the array called "friends"

		return(
					// jsx here
					// we are using the friend var to pick up on the 2nd oject and using the key to get the values
					<div>
						<h1>{friend.title}</h1>
						<img
						src={friend.src}
						/>
					</div>

			);
	}





}; // close component



// render the class component to the DOM

ReactDOM.render(
	
  <Friend />,
  document.getElementById('app')

);






















// Using Conditionals in a Render Function
//=========================================

// Notice that the if statement is located inside of the render function, but before the return statement.
// This is pretty much the only way that you will ever see an if statement used in a render function.



// create the math.random() that gives a 50/50 true or false
const fiftyFifty = Math.random() < 0.5;


// Create the Class component

class TonightsPlan extends React.Component{



		render(){

						let task; // define task var

						if( fiftyFifty === true){ // the coniditonal
							task = 'out Wooo Hooo'
						}else{
							task = 'to bed Wooo'
						}
							return(
									// return the result
									<h1>Tonight I'm goin {task}</h1>
									);
						}
				} // close render

		}


}; // close component




// render the component to the DOM
ReactDOM.render(

	<TonightsPlan/>,
	document.getElementById('app')

	);










// Using THIS inside a Component




























