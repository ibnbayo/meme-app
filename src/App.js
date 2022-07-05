// import Header from './components/Header.js'
// import Facts from './components/Facts.js';
// import Page from './components/Page.js';
// import Hello from './components/Hello';
// import Contact from './components/Contact.js';
// import Joke from './components/Joke'
// import Trip from './components/Trip.js';
import HeaderMeme from './components/HeaderMeme.js'
import Meme from './components/Meme.js';
// import Count from './components/Count.js';
// import Prac from './components/Prac.js';
// import SignUp from './components/SignUp.js';
// import StarWars from './components/StarWars.js';
import WindowTrackerApp from './components/WindowTrackerApp.js';
// import jokesData from './components/jokesData.js';
// import contactData from './components/contactData.js';
// import tripData from './components/tripData.js'
import './App.css';


function App() {
//   const jokeElements = jokesData.map(joke => <Joke setup={joke.setup} punchline={joke.punchline}/>)
//   const contactElements = contactData.map(contact => <Contact contact={contact}/>)
//   const tripElements = tripData.map(trip => <Trip trip={trip} />)
  return (
    <div className="App">
      {/* <Header />
      <Facts />
      <Page />
      <Hello />
      <div className="contact-wrapper">
      {contactElements}
               </div>
      <Joke setup="He is a soldier,"
            punchline="therefore, he is a wimp."
            upvotes= {6} 
            downvotes= {12}/>
      <Joke setup="Apples are oranges,"
            punchline="thus, fight like a warrior."
            comments={["Love this! ", "So funny ", "LMAO"]}
            isPun={false}/>
      <Joke setup="Jump around,"
            punchline="for indeed, the joke is not lost."/>
      <Joke 
            punchline="It is hard to explan to kleptomaniacs."/>
      <div>{jokeElements}</div>
      <div>{tripElements}</div> */}
      <HeaderMeme/>
      <Meme/>
      {/* <Count/>
      <Prac/>
      <SignUp/>
      <StarWars/> */}
      <WindowTrackerApp/>
    </div>
  );
}


export default App;
