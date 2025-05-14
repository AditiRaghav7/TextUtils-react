import React , {useState} from 'react'
export default function TextForm(props) {

  const handlecopy = ()=>
  {
  var text = document.getElementById("mybox")
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("converted to uppercase","success")
  }

  const handleextraspaces = () =>
  {
    let newtext = text.split(/[ ]+/)
    setText(newtext.join(" "))
    props.showAlert("Handled extra spaces","success")

  }

  const handleUpClick = () =>
  {
    //console.log("uppercase was clicked" + text);
    let newText = text.toLocaleUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase","success")

  }

  const handleLoClick = () =>
    {
      //console.log("uppercase was clicked" + text);
      let newText = text.toLocaleLowerCase();
      setText(newText)
      props.showAlert("Converted to Lowercase","success")

    }

    const handlelocalClick = () =>
      {
        //console.log("uppercase was clicked" + text);
        let newText = text.toLocaleLowerCase()
        setText(newText)
        props.showAlert("Handled local click","success")

      }
    
    
      const handleClearClick = () =>
        {
          //console.log("uppercase was clicked" + text);
          let newText = "";
          setText(newText)
          props.showAlert("Textfield cleared ","success")

        }
      
  const handleonchange = (event) =>{
    //console.log("uppercase on change ");
    setText(event.target.value) 
    // textarea m ek value hai = text ,
    // text is a var that belongs to my state,
    //  whenever user tries to change the value 
    // then the value will be the text already and given by user

  }

  const [text, setText] = useState('');
  //setText("new text") //correct way to change state

  return (
    <>
    <div className='container' style={{color: props.mode === 'dark'?'white':'black'}}>
       <div className="mybox">
         <h1>{props.heading} </h1>  
         <textarea className="form-control" value={text}  onChange={handleonchange} id="mybox" style={{backgroundColor: props.mode === 'dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} rows="3"></textarea>
       </div>
       <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick} >Convert to Uppercase </button>
       <button className="btn btn-primary my-3 mx-2" onClick={handleLoClick} >Convert to Lowercase </button>
       <button className="btn btn-primary my-3 mx-2" onClick={handlelocalClick} >Convert to to Locale LowerCase </button>
       <button className="btn btn-primary my-3 mx-2" onClick={handleClearClick} >Clear</button>
       <button className="btn btn-primary my-3 mx-2" onClick={handlecopy} >Copy</button>
       <button className="btn btn-primary my-3 mx-2" onClick={handleextraspaces} >Extra Space</button>

    </div>

    <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
      <h1>your test summary</h1>
      <p>{text.split(" ").length - 1} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in textbox to +preview"}</p>
    </div>
   </>
  )
}
