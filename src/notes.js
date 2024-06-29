import { insertDB,saveDB,getDB } from "./db.js";

export const createNewNote=async(note,tags)=>{
    const data=getDB;
    const notes=data.notes;
    const newNote={
        content:note,
        id:Date.now(),tags
    }
    await insertDB(newNote);
    return newNote;
}

export const getAllNotes=async()=>{
    const {notes}=await getDB;
    return notes;
}

export const findNote=async(filter)=>{
    const {notes}=await getDB();
    return notes.filter((note)=>note.content.toLowerCase().includes(filter.toLowerCase()));
   
}

export const removeNote=async(id)=>{
    const {notes}=await getDB();
    const match=notes.find((note)=>(note.id===id));
    if(match){
        const filterdArray= notes.filter((note)=>(note.id!==id));
        await saveDB({notes:filteredArray});
        return id;
    }
    
}

export const removeAllNotes=()=>saveDB({notes:[]});
