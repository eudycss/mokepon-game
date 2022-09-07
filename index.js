const express=require("express") //Import express js
const cors =require("cors")
const app=express() //Create the app with express
app.use(express.static('public'))/* help like a server */
app.use(cors())
app.use(express.json())
const players=[]


class Player{
constructor(id){
    this.id=id
  /* allow to assig */
}

asignarMokepon(mokepon){
    this.mokepon=mokepon
}
updatePosition(x,y){
    this.x=x
    this.y=y
}
asignarAttacks(attacks){
    this.attacks=attacks

}
}

class Mokepon{
    constructor(name){
        this.name=name
    }
}
app.get("/join", (req, res)=>{
   // res.send('Hello server') // Le decimos a expres que cuando en la url raiz reciba una peticion, responda un mensaj
   const id= `${Math.random()}`
   const player=new Player(id)
   players.push(player)
   /* informacion que tiene metdatos */
   res.setHeader("Access-Control-Allow-Origin","*")
   res.send(id)
    
})

/* con : se fedine variables en express */
/* Como extraer lo que vienne en la url? con req */
app.post("/mokepon/:playerId",(req,res)=>{
    const playerId=req.params.playerId || ""
    const name=req.body.mokepon || ""
    const mokepon= new Mokepon(name)
    const playerIndex=players.findIndex((player)=> playerId===player.id)
    if(playerIndex >=0){
        players[playerIndex].asignarMokepon(mokepon)
    }
    console.log(players);
    console.log(playerId);
    res.end()
})

app.post("/mokepon/:playerId/position", (req,res)=>{
    const playerId=req.params.playerId || ""
    const x=req.body.x || 0
    const y=req.body.y || 0

    const playerIndex=players.findIndex((player)=> playerId===player.id)
    if(playerIndex >=0){
        players[playerIndex].updatePosition(x,y)
    }

    const enemies=players.filter((player)=> playerId!==player.id)
    res.send({ 
        enemies
    })
})

app.post("/mokepon/:playerId/attacks",(req,res)=>{
    const playerId=req.params.playerId || ""
    const attacks=req.body.attacks || []
    
    const playerIndex=players.findIndex((player)=> playerId===player.id)
    if(playerIndex >=0){
        players[playerIndex].asignarAttacks(attacks)
    }
   
    res.end()
})

app.get("/mokepon/:playerId/attacks",(req,res)=>{
    /* Buscar jugador por su id */
    const playerId=req.params.playerId || ""
    const player = players.find((player)=>player.id===playerId)
    res.send({
        attacks:player.attacks || []
     })
 })

app.listen(8080, ()=>{ //Escuche continuamente en el puerto 8080
    console.log('server Working' ); // las peticiones de los clientes
})