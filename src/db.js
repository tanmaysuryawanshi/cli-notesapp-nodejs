import fs from "node:fs/promises"
import path from "node:path";
const DB_PATH=path.resolve('db.json');
export const getDB= async()=>{
    const db=await fs.readFile(DB_PATH,'utf-8');
    return JSON.parse(db);
}

export const saveDB=async (db)=>{
    await fs.writeFile(DB_PATH,JSON.stringify(db,null,2))
    return db
}

export const insertDB= async (note)=>{
    try{
        console.log("insertion start");
        const db=await getDB();
        console.log("got db");
        db.notes.push(note);
        await saveDB(db);
        console.log("pushed and saved");
    }
   catch(e){
    console.log(e);
   }
    return note;
}
