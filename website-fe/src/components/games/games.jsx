import React from "react";
//import styles from "./home.css";

export default function Games() {
    

    const getGames = async () => {

        const response = await fetch("https://api.rawg.io/api/games?dates=2023-06-11,2023-06-12&key=1a91da0a5c3544e699f0668dcdec0a6c&ordering=released&page=1&page_size=68&search_exact=true&platforms=4")
        const data = await response.json()
        console.log("Game Info")
        console.log(data)
        const output = getGameInfo(data)
        return output;
    
    } 
    function getGameInfo(data){      
        const index = 0;

        console.log("Output")
        const output = data.results.map((e, index) =>
         
        <div>
            
            {console.log("Name")}
            <h3>{e.name}</h3>
            {console.log(e.name)}
            <h1>{e.id}</h1>
           
        </div> )
        return output;
    }

  return( 
  <>
  
  <p>
  <h1>Games</h1>
  
  <br/>

  <h2>These are the games that came out yesterday</h2>
    <button onClick={getGames}>Get</button>
    

    
    
    

  
  <br/> 
  

</p>


</>
  )
}
