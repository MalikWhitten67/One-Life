import { load_screen } from "./html/html";

// set the loading screen true forwhenever game is reloaded
export var is_inhome =  false
export var loading_screen = true
export var ctx_screen = false
export var key;
// make sure to import amt of players in server to be able to lock out the player!


function gameloop(){
if(is_inhome){
    load_screen = false
    ctx_screen = false
    
}
if(loading_screen){
    // if load screen is true then run the loading screen animation
     load_screen()
     setTimeout(() => {
        is_inhome = true
     }, 600);
}
}
window.onload = ()=>{
    setInterval(() => {
        gameloop()
    }, 5000);
    window.requestAnimationFrame(gameloop);
}