
import Rating from './Rating';
import '@fortawesome/fontawesome-free/css/all.css';


const jokes=[
    {
        id:1,
        joke:"Why don't skeletons fight each other?,they don't have the guts",
        rating:2
    },
    { id:2,
        joke:"Why did the scarecrow win an award?Because he was outstanding in his field.",
        rating:4
    },
    { id:3,
        joke:"What do you call fake spaghetti?An impasta.",
        rating:3
    },
    { id:4,
        joke:"Why don't eggs tell jokes?They'd crack each other up.",
        rating:5
    }

]

function Joke(prop){
    return(
        <div>
            <h3>{prop.joke}</h3>
            <p>Rating: <Rating rating={prop.rating}/></p>
        </div>
    )
}

const jokeComponents=jokes.filter((joke)=>joke.rating>3).map((joke)=>
    // <Joke key={joke.id} joke={joke.joke} rating={joke.rating}/>
    <Joke {...joke} key={joke.id}/>
);

// for(let i=0; i<jokes.length; i++){
//     jokeComponents.push(<Joke key={jokes[i].id} joke={jokes[i].joke} rating={jokes[i].rating}/>)
// }

// for( const joke of jokes){
//     jokeComponents.push(<Joke key={joke.id} joke={joke.joke} rating={joke.rating}/>);
// }

export default function AppJoke(){
    return(
        <div>
            <h1>Joke App demo</h1>
            {jokeComponents}
        </div>
    )
}