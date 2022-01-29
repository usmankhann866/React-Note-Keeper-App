import React from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Note =  (props)=> {
  
  const deleteNote = ()=>{

    return props.deleteItem(props.id);
  }
    return (
      <>
         <div className='note_content'>
        
         <h2> {props.title} </h2>
         <br />
         <p> {props.content} </p>
         <button className='btn_style' onClick={deleteNote}>
             <DeleteOutlineIcon />
         </button>
         </div>
      </>
    
    );

}

export default Note;