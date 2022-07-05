// import memesData from "./memesData";
import {useState, useEffect} from "react"

function Meme(){
    // const [vibe, setVibe] = useState("Mandela")
    // console.log(vibe)
    // const [count, setCount] = useState(0)
    // console.log(count)
    const [memeImage, setMemeImage] = useState('https://picsum.photos/seed/picsum/200/300') 
    console.log(memeImage)
    // const [goingOut, setGoingOut] = useState(true)
    // const [thingzArray, setThingz] = useState(["Thingz 1", "Thingz 2"])
    // const pThingz = thingzArray.map(i => <p>{i}</p>)
    // console.log(pThingz)
    // const thingsArray=["Thing 1", "Thing 2"]

    //Improve on .then by using async/await
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(apiImages => setAllMemeImages(apiImages))
    },[])
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'https://picsum.photos/seed/picsum/200/300'
    })
    function handleChange(e){
        const {name,value} = e.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value}))
    }

    const [allMemeImages, setAllMemeImages] = useState([])
    console.log(allMemeImages)

    // let items = thingsArray.map(thing => <p>{thing}</p>)
    // console.log(items)
    // function handleClick() {
    //     console.log("I was clicked");
    //     setVibe('Aboutrika')
    // }
    // function incCount() {
    //     setCount(count+1)
    //     console.log(count)
    // }
    // function deCount() {
    //     setCount( prevCount => prevCount - 1)
    //     console.log(count)
    // }
    // function clickGoingOut() {
    //     setGoingOut(goingOut => !goingOut)
    // }
    // function handleHover(){
    //     console.log("Hovered over");
    // }
    
    // function getImg() {
    //     const memesArray= memesData.data.memes
    //     console.log(memesArray)
    //     const randomNum= Math.floor(Math.random() * memesArray.length)
    //     const url = memesArray[randomNum].url
    //     console.log(url)
    //     setMemeImage(url)
    // }
    // function addThing() {
    //     items.push("Thing " + (items.length+1))
    //     console.log(items)
    // }
    // function addThingz(){
    //     setThingz(prevThingz => [...prevThingz, `Thingz ${prevThingz.length + 1}`])

    // }

    function getMemeImage(){
        setMeme(prevText => ({
            ...prevText,
            randomImage: allMemeImages.data.memes[`${Math.floor(Math.random()*allMemeImages.data.memes.length)}`].url
        }))}
    
    return(
        <>
        <div className="meme-form">
            <div className="meme-tops">
            <input className="form--input" 
            type="text" 
            placeholder="Top text"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
             />
            <input className="form--input" 
            type = "text" 
            placeholder ="Bottom text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
            />
            <button className="form--button" 
                // onMouseEnter={handleHover} 
                onClick={getMemeImage}>Get a new meme image
            </button>
            </div>
            <div className="image-and-text">
            <img src={meme.randomImage} alt="random meme" className="meme-image"/>
            <h2 className="meme-toptext">{meme.topText}</h2>
            <h2 className="meme-bottomtext">{meme.bottomText}</h2>
            </div>
            {/* <div>{items}</div>
            <div>{pThingz}</div>
            <button className="things-button" onClick={addThing}>Add Things</button>
            <button className="things-button" onClick={addThingz}>Add Thingz</button> */}
        </div>
        {/* <div className="state">
            <h1 className="state--title">Is state important?</h1>
            <div className="state--value" onClick={handleClick}>
                <h1>{vibe}</h1>
            </div>
        </div>
        <div className="counter">
            <button className="minus" onClick={deCount}> - </button>
            <h3 className="count"> {count} </h3>
            <button className="plus" onClick={incCount}> + </button>
        </div>
        <div className="going-out">
            <h2 className="question-out">Do you wanna go out tonight?</h2>
            <h3 className="answer-out" onClick={clickGoingOut}>{goingOut? 'Yes' : 'No'}</h3>
        </div> */}
        </>
    

    )
}

export default Meme