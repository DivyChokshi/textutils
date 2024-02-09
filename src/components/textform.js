import React ,{useState}from 'react'


export default function Textform(props) {

    const [text,setText]=useState("Enter the text here");
     //setText("divy");
     const countwords = (text) =>{
      let words;
      if( text===" " || text.length === 0)
        words = 0;
      else
        words = text.trim().split(/\s+/).length;
      return words;
    }
     const handleupclick=()=>{
        console.log("The button was clicked")
        let str=text;
        console.log(text);
        for(let i=0;i<str.length;i++){
            console.log(str[i]);
        }
        let newText=str.toUpperCase();
        setText(newText);
        props.showalert("converted to upper case","success")
     }
     const handleloclick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showalert("converted to lower case","success")
     }
     const textchange=(event)=>{
        console.log("The text was changed");
        setText(event.target.value);
     }
     const clearText=()=>{
        let newtext='';
        setText(newtext);
        props.showalert("Cleared the text successfully","success")
     }
     const handleextraspaces=()=>{
      let newtext=text.split(/[ ]+/);
      setText(newtext.join(" "));
      props.showalert("Handled extra spaces successfully","success")
     }
     const copyText=()=>{
      let val=document.getElementById("Mybox");
      val.select();
      navigator.clipboard.writeText(val.value);
      props.showalert("copied the text successfully","success")
     }
  return (
    <>
    <div className='container'>
    <h1 style={{color:props.mode=='dark'?'white':'black'}}>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control"  value={text} style={{backgroundColor: props.mode=='light'?'white':'black',color: props.mode=='dark'?'white':'black'}} onChange={textchange} id="Mybox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleupclick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleloclick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
    <button className="btn btn-primary mx-2" onClick={copyText}>Copy Text</button>
    <button className="btn btn-primary mx-2" onClick={handleextraspaces}>Remove Extraspace</button>
    </div>
    <div className='container my-3'>
        <h1 style={{color:props.mode=='dark'?'white':'black'}}>Here is the summary</h1>
        <p style={{color:props.mode=='dark'?'white':'black'}}>Text contains {countwords(text)} words and {text.length} characters</p>

        <h1 style={{color:props.mode=='dark'?'white':'black'}}>Preview</h1>
        <p style={{color:props.mode=='dark'?'white':'black'}}>{text.length>0?text:"Enter something to preview"}</p>
    </div>
    </>
  )
}
