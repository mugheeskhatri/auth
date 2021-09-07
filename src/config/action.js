import { getDatabase , ref , push, set } from "@firebase/database";
let db = getDatabase()
const setData = (data)=>{
    push(ref(db,'/products/'+ data.category +'/' ),data)
}

export {setData}