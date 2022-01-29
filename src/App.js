import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";


const App =  ()=> {
  
 const [addItem, setItem] = useState([]);
 
  const addNote = (data)=>{

    setItem((oldVal)=>{
      
      return [...oldVal, data];
    })
  }

  const onDelete = (id)=>{

    setItem((oldItem)=>{

      oldItem.filter((currData, indx)=>{

        return indx!==id;
      })
    })
  }

  return (
    <>
    
    <Header  />
    <CreateNote passNote={addNote} />
    
    {addItem.map((val, index)=>{
      return(<Note 
      key={index}
      id= {index}
      title={val.title}
      content={val.content}
      deleteItem= {onDelete}
    />);
    })}
    <Footer />


   </>   
  );

}

export default App;