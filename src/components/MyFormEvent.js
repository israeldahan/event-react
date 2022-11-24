import React, {useState} from "react";
import Input from './Input'
import Button from "./Button";
import Article from "./Article";
import Title from "./Title";
function MyFormEvent(props) {
    const [result, setResult] = useState('Result');
    const [textInput, setTextInput] = useState('')
    const [title, setTitle] = useState('UserName')

    const handleChange = (e) => {
        setTextInput(e.target.value)
        setTitle(e.target.value)
    }
    const handleClick = () => {
        setResult(textInput)
    }

    const arr = ['one', 'tow', "third"]
    return(
        <div className="form-event">
            <Title username={title}/>
            <Input makeChange={handleChange} />
            <Button makeClick={handleClick} />
            <h1> {result} </h1>
            {arr.map((elem) => {
            return(<Article name={elem} />)
        })}
            
        </div>
    )
}
export default MyFormEvent;