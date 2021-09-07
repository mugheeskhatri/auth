import {
    getStorage,
    ref,uploadBytes, 
} from "firebase/storage";
import img from '../assets/img.jpeg'
import {useState} from 'react';
const Storage = () => {
    const [image , setImage] = useState()
    const [data , setData] = useState()
    const storage = getStorage()
    const check =()=> {
        const mountainsRef = ref(storage,image);
      uploadBytes(mountainsRef, File).then((snapshot) => {
          setData(snapshot.metadata.fullPath);
          console.log(snapshot.metadata.fullPath)
                let files = snapshot.metadata.fullPath;
                let reader = new FileReader();
                reader.readAsDataURL(files);
                reader.onload = (e)=>{
                    let imag = e.target.result
                    console.log(imag)
                    .catch((e)=>{
                        console.log(e)
                        console.log('mughees')
                    })
                setData(e.target.result)
              }
            
    })
    console.log(image)
}
   
    return ( 
       
       <div>    
           <h1>
               Hello
           </h1>
           <input type='file' id='file' onChange={(e)=> setImage(e.target.files[0])} />
           <button onClick={check}>
               check
           </button>
        <img src={data}/>
       </div>
    )
}

export default Storage