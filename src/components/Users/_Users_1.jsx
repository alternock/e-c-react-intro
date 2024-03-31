import {useState} from "react"


export default function Users(){
    let email_ls = ["a@a.a", "b@b.b", "c@c.c"]

    let [email, setEmail] = useState("") 
    let [emailList, setEmailList] = useState(email_ls)


    const handler = (evt) =>{
        const {value} = evt.target;
        setEmail(value)
    }


    const fnAdd = () =>{
        setEmailList([...emailList, email])
    }

    const fnDelete = () =>{
        setEmailList([...emailList.filter(_email=> _email != email)])
    }


    
    return(
        <>
        <label>email:</label>
        <input type="text" name="email" value={email} onChange={handler} placeholder="add email"/>      
        <button type="submit" onClick={fnAdd}>add user</button>
        <button type="submit" onClick={fnDelete}>delete user</button>
        <br/>
        <br/>
        <ol>
          {emailList.map((_email, idx) => {
             return(
                <li key={idx}>
                    <h3>{_email}</h3>
                </li>
             )
          })}        
        </ol>
        </>
    )
}