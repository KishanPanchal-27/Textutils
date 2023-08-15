import React from 'react'
import { useState } from 'react';

export default function TextForm(props) {
    const [text, settext] = useState("");
    const Upcase = ()=>{
        let newtext = text.toUpperCase();
        settext(newtext)
        props.showalert("Converted To Uppercase ","success")
     }
     const Locase = ()=>{
        let newtext = text.toLowerCase();
        settext(newtext)
        props.showalert("Converted To Lowercase ","success")
     }
     const ClearT = ()=>{
        let newtext = '';
        settext(newtext)
        props.showalert("Text Cleared ","success")
     }
     const CopyTo = ()=>{
        var text = document.getElementById("myBox");
        navigator.clipboard.writeText(text.value);
        props.showalert("Copied to ClipBoard ","success")
     }
     const change = (event) => {
        settext(event.target.value)
     }
  return (
    <>
        <div className={`container py-3 my-3 bg-${props.mode} text-${props.mode}`}>
            <h2 className={`text-${props.mode==="light"?"black":"white"}`}>Enter Any Text Here</h2>   
            <textarea className="form-control" value={text} rows={8} id="myBox" onChange={change}/>
            <button disabled={text.length===0} className='btn btn-primary mt-3 mx-2' onClick={Upcase} > Convert to Uppercase</button>
            <button disabled={text.length===0} className='btn btn-primary mt-3 mx-2' onClick={Locase} > Convert to LowerCase</button>
            <button disabled={text.length===0} className='btn btn-primary mt-3 mx-2' onClick={ClearT} > Clear Text</button>
            <button disabled={text.length===0} className='btn btn-primary mt-3 mx-2' onClick={CopyTo} > Copy to Clipboard</button>


        </div>
        <div className="container my-3">
            <h3> Preview </h3>
            <p>{text.length===0?"Enter your Text to see the preview here":text}</p>
        </div>
    </>
  )
}
