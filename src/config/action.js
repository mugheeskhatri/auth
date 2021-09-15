import { getDatabase , ref , push, set , onValue } from "@firebase/database";
let db = getDatabase()
const setData = (data)=>{
    push(ref(db,'/products/'+ data.category + '/'),data)
    .then(()=>{
        console.log('ok')
    })
}

export {setData}