//callbacks
import cbThings from "./callbacks/cbThings"
//local-data
import things from "./local_data/things_data"


//UGC          -> 
//KOLS         -> mecanica / developer / *  
//INFLUENCER   -> marko musica / George harris /*  
//Attentioners -> 
//TROLLS       -> leito
//VADS         -> viral ads


export default function Skills({active}){
    let ele = null

    switch(active){
        case "smile":
            ele = <h1>🤭</h1>
            break;
        case "rocket":
            ele = <h1>🚀</h1>     
            break;
        case "lightning":
            ele = <h1>⚡</h1>  
            break  
        case "things":
            ele = (<ul>{things.map(cbThings)}</ul>)   
            break; 
        default:
            ele = <h1>❤</h1>    
    }

    return(
        <div>
            <h1>{active}</h1>
            <div>{ele}</div>
        </div>
    )
}