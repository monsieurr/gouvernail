import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
//import TravelForm from './components/TravelForm';
//import TravelJournal from './components/TravelJournal';

import {useState, useEffect} from 'react'

function App() {

  return (
    <div className="App">
      <header className="App-header">
		  <h1>Gouvernail</h1>
		  <p>Organisez votre voyage simplement</p>
		  <div>
			  <h2>Ou partez vous ?</h2>
			  <form>
				<label>
				Destination  
				<input />
				</label>

			  </form>

			  <h3>Visites prévues</h3>
			  <form>
				<button name="addVisit">+</button>
			  </form>
			  

			  <h3>Choses à ne pas oublier</h3>
			  <form>
				<button name="addThing">+</button>
			  </form>


			  <form>
				  <button type="submit">Sauvegarder ma liste</button>
			  </form>
			  
		  </div>


		{/*
		1. Add TravelForm to allow user to add :
		  	- Destination [1, input, text]
			- Steps [0.n, input, text]
			- Notes [1, textarea, text]
		2. Display destination, steps and notes in TravelJournal after user subbmits the TravelForm
		3. Allow edit the TravelJournal
		4. Allow remove the TravelJournal
		5. Allow create another TravelJournal
		6. Allow saving previous TravelJournal(s)
			- save in a file (txt, md?)
			- save as LocalStorage in the browser
		*/}
      </header>
    </div>
  );
}

export default App;
