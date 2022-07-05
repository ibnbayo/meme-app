import WindowTracker from './WindowTracker'
import {useState} from "react"

function WindowTrackerApp() {
    const [show, setShow] = useState(true)
    function handleClick() {
        setShow(prevShow => !prevShow)
    }
    console.log(show)
    return(
        <div className="cont">
            <button onClick={handleClick}>
                Toggle WindowTracker
            </button>
             {show && <WindowTracker/> }
        </div>
    )

}
export default WindowTrackerApp