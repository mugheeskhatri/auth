import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import bg from '../assets/bgImg.png';
import { setData } from '../config/action';
import {
    getStorage,
    uploadBytes, 
    ref
} from "firebase/storage";
function Seller(){
    const [brandName , setBrandName] = useState()
    const [address , setAddress] = useState()
    const [phone , setPhone] = useState()
    const [state , setState] = useState()
    const [city , setCity] = useState()
    const [image , setImage] = useState()
    const [unit , setUnit] = useState()
    const [date , setDate] = useState()
    const [storageUrl , setStorageUrl] = useState()
    const [category , setCategory] = useState()
    const [mughees , setMughees] = useState()
    const storage = getStorage()
    console.log(image)
    let submit = ()=> {
        let files = image;
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = (e)=>{
            console.log(e.target.result)
            const mountainsRef = ref(storage,e.target.result);
        uploadBytes(mountainsRef, File).then((snapshot) => {
            setStorageUrl(snapshot.metadata.fullPath);
            console.log(snapshot.metadata);
            let data = {
                brandName,
                address,
                phone,
                address,
                state,
                city,
                storageUrl,
                unit,
                date,
                category
            }
            setData(data)
        })
        }
       
    }
      return(
          <div className='container-fluid main'>
               <img className='background' src={bg} />
               <div className='col-md-8 form-container'>
               <div className='col-md-6 p-4'>
               <h2 className='text-center'>Seller Screen</h2>
    <div className='form-seller'>
<input value={brandName} onChange={(e)=> setBrandName(e.target.value)} type="text" className="form-control p-2 mt-3" placeholder="Enter Brand Name" />
<input value={address} onChange={(e)=> setAddress(e.target.value)} type="text" className="form-control p-2 mt-3" placeholder="Enter Address" />
<input value={phone} onChange={(e)=> setPhone(e.target.value)} type="number" className="form-control p-2 mt-3 "placeholder="Enter Phone Number" />
<input value={state} onChange={(e)=> setState(e.target.value)} type="text" className="form-control p-2 mt-3 "placeholder="Enter State" />
<input value={city} onChange={(e)=> setCity(e.target.value)} type="text" className="form-control p-2 mt-3 " placeholder="Enter City" />
    </div>

                </div>
                <div className='col-md-6 justify-content-center'>
                <input onChange={(e)=> setImage(e.target.files)} className='image-input mt-5' type='file' />
                <input value={unit} onChange={(e)=> setUnit(e.target.value)} type="text" className="form-control p-2 mt-3 " id="exampleInputPassword1" placeholder="Enter Unit (in KG)" />
                <input value={date} onChange={(e)=> setDate(e.target.value)} type="date" className="form-control p-2 mt-3 " />
                <select onBlur={(e)=> setCategory(e.target.value)} onChange={(e)=> setCategory(e.target.value)} className= 'w-100 p-2 mt-3'>
                <option>Fashion</option>
                <option>Groccery</option>
                <option>Electronics</option>
                <option>Food</option>
            </select>
                <button onClick={submit} className='form-control p-2 mt-3'>Submit</button>
                </div>
               </div>
               <img src={mughees} />
        </div>
    )
}

export default Seller;