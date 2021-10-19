import React, {useState} from "react";

export default function TextForm(props) {
  
  const handleUpClick = () => {
    // console.log("handleUpClick event fired!");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase.", "success");
  }

  const handleOnChange = (event) => {
    // console.log("onChange event fired!")
    setText(event.target.value)
  }

  const handleLowClick = () => {
    // console.log("handleLowClick event fired!")
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase.", "success");

  }

  const handleClear = () => {
    let clearText = ("");
    setText(clearText);
    props.showAlert("Text cleared.", "success");

  }

  const handleCopy = () => {
    let textarea = document.getElementById("textarea");
    textarea.select();
    navigator.clipboard.writeText(textarea.value);
    props.showAlert("Text Copied to Clipboard.", "success");

  }

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" ")); 
    props.showAlert("Extra spaces removed.", "success");

  }


  const [text, setText] = useState("");
  return (
    <>
      <div className="container"  style={{color : props.mode==='light'?'black':'white'}}>
        <h3 className="mt-5" style={{color : props.mode==='light'?'black':'white'}}>{props.heading} </h3>
        <textarea className="form-control" rows="8" id="textarea" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'black', color : props.mode==='light'?'black':'white'}}></textarea>
        <button className="btn btn-secondary mt-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-secondary mt-2 ms-2" onClick={handleLowClick}>Convert to LowerCase</button>
        <button className="btn btn-secondary mt-2 ms-2" onClick={handleClear}>Clear Text</button>
        <button className="btn btn-secondary mt-2 ms-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-secondary mt-2 ms-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>
      </div>
      <div className="container"  style={{color : props.mode==='light'?'black':'white'}}>
        <h3 className="mt-5">Your text summary</h3>
        <p>{text.split(" ").length-1} words and {text.length} characters.</p>
        <p>It will take {0.008 * text.split(" ").length} minutes to read.</p>
        <h4>Preview</h4>
        <p>{text.length>0?text:"Enter some text in the textbox to preview it here!"}</p>
      </div>
    </>
  );
}
