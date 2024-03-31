import {useState} from "react"
import { v4 as uuidv4 } from 'uuid';



export default function Users(){
    let email_ls = [
        {id:100, email:"a@a.a", name:"alfa"},
        {id:101, email:"b@b.b", name:"beta"},
        {id:102, email:"c@c.c", name:"charlie"}
    ]

    let [profile, setProfile] = useState({
        id_:"",
        email:"",
        name:""    
    }) 
    let [emailList, setEmailList] = useState(email_ls)


    const handler = (evt) =>{
        const {name, value} = evt.target;

        setProfile({
            ...profile,
            [name]:value
        })
    }

    const fnAdd = () =>{
        let _uid = uuidv4()
        let _id = _uid.split("-")[1]

        setEmailList([...emailList, {id:_id, email:email, name:name}])
    }

    const fnDelete = () =>{
        setEmailList([...emailList.filter(_email=> _email != email)])
    }


    const {email, name} = profile;
    return(
        <>
        <div>
            <label>email:</label>
            <input type="text" name="email" value={email} onChange={handler} placeholder="add email"/>      
        </div>
        <div>
            <label>name:</label>
            <input type="text" name="name" value={name} onChange={handler} placeholder="add name"/>      
        </div>
        <br/>
        <br/>
        <button type="submit" onClick={fnAdd}>add user</button>
        <button type="submit" onClick={fnDelete}>delete user</button>
        <br/>
        <br/>
        <ol>
          {emailList.map(({id, email, name}, idx) => {
             return(
                <li key={idx}>
                    <h3>{id}</h3>
                    <span>{email} - </span>
                    <span>{name}</span>
                </li>
             )
          })}        
        </ol>
        </>
    )
}