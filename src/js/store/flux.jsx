const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			charactersCard: [] ,
			charDetails: [],
			planets: [] ,
			vehicles: [] ,
			favorites: [] , 
		},
		actions: {

			getCharacters: () => {
				fetch("https://www.swapi.tech/api/people/")
				.then(res => res.json())
				.then(data => setStore({charactersCard: data.results}))
				
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


export default getState;
