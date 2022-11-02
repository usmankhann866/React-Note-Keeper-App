import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const CreateNote =  (props)=> {

    const[data, setData] = useState({

        title: "",
        content: "",
    });

    const [expand, setExpand] = useState(false);
    const inpEvent = (event)=>{

        const {name, value} = event.target;

        setData((preVal)=>{
          return  {...preVal, 
            [name] : value,
        };
        })
    }
    
    const addEvent = ()=>{
     
        props.passNote(data);
        setData({
            title: "",
            content: ""
        })
    }

    const expndIt = ()=>{

        setExpand(true);
    }

    const backToNormal = ()=>{

        setExpand(false);
    }

    return (
      
      <>
      
      <div className="content_style" onDoubleClick={backToNormal}>
        <form>
            { expand ?
            <input type="text" 
             placeholder='Title'
             name='title'
             value={data.title}
             onChange= {inpEvent} />
             : null }

            <textarea placeholder='write a note..'
             rows='' 
             column=''
             name='content'
             value={data.content}
             onChange={inpEvent}
             onClick={expndIt}
             ></textarea>
            
            {expand ?
            <button onClick={addEvent}> <AddIcon /> </button>
             : null}

            </form>
      </div>
      
      </>
    
    );

}

export default CreateNote;