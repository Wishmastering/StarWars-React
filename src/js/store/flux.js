const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			characters: [] ,
			planets: [] ,
			vehicles: [] ,
			favorites: [] , 
			// demo: [
			// 	{
			// 		title: "FIRST",
			// 		background: "white",
			// 		initial: "white"
			// 	},
			// 	{
			// 		title: "SECOND",
			// 		background: "white",
			// 		initial: "white"
			// 	}
			// ]
		},
		actions: {
			// Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },
			// loadSomeData: () => {
			// 	/**
			// 		fetch().then().then(data => setStore({ "foo": data.bar }))
			// 	*/
			// },
			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});
				
			// 	//reset the global store
			// 	setStore({ demo: demo });
			
			getCharacters: () => {
				fetch("https://www.swapi.tech/api/people")
				.then(res => res.json())
				.then(data => console.log(data))
				.catch(err => console.error(err))
			},

			GetIdCharacters: (id) => {
				fetch("https://www.swapi.tech/api/people/"+id)
				.then(res => res.json())
				.then(data => console.log(data))
				.catch(err => console.error(err))
			},

			}
		}
	};
// };

export default getState;
