const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			charactersCard: [] ,
			charactersDetails: [],
			planetsCard: [] ,
			planetsDetails: [] ,
			favorites: [] , 
		},
		actions: {

			getCharacters: () => {
				fetch("https://www.swapi.tech/api/people/")
				.then(res => res.json())
				.then(data => setStore({charactersCard: data.results}))
				},

			getIdCharacters: (id) => {
				fetch("https://www.swapi.tech/api/people/"+id)
				.then(res => res.json())
				.then(data => setStore({charactersDetails: data.results}))
			},

			getPlanets: () => {
				fetch("https://www.swapi.tech/api/planets/")
				.then(res => res.json())
				.then(data => setStore({planetsCard: data.results}))
				},

			getIdPlanets: (id) => {
				fetch("https://www.swapi.tech/api/planets/"+id)
				.then(res => res.json())
				.then(data => setStore({planetsDetails: data.results}))
			},

			addFav: (item) => {
				const store = getStore();
				const newFav = store.favorites.concat(item);
				setStore({favorites: newFav});
			},
			
			deleteFav: (item) => {
				const store = getStore();
				let newFav = store.favorites.filter((favorChar) =>{
					if (item !== index) {
						return favorChar;
					}
					setStore({favorites: newFav})
				})
			}

			}
		}
	};


export default getState;
