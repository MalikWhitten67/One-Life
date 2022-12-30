// this is the html pull code for cleaner concice and easy to load stuffs

export function load_screen(){
    if(!document.getElementById('loading_splash1')){
        // create the element to be rendered to user based on condition statement
       var splash1 = document.createElement('img')
       splash1.id = "splash1"
       splash1.src = "./assets/loadin/images/load1.png"
       var splash1 = document.createElement('img')
       splash1.id = "splash1"
       splash1.src = "./assets/loadin/images/load1.png"
       var splash2 = document.createElement('img')
       splash2.id = "splash2"
       splash2.src = "./assets/loadin/images/load2.png"
       document.body.appendChild(splash1)
       // slowly disappare splash 1
       var load1 =   setTimeout(() => {
        splash1.style.opacity = "10%"
       }, 20);
       var load2 = setTimeout(() => {
        // always remove timeouts from memory
        splash1.style.opacity = "30%"
         clearTimeout(load1)
       }, 30);
       var load3 = setTimeout(() => {
        splash1.style.opacity = "40%"
        clearTimeout(load2)
       }, 40);
       var load4 = setTimeout(() => {
        splash1.style.opacity = "50%"
        clearTimeout(load3)
       }, 50);
       setTimeout(() => {
        splash1.style.opacity = "0%"
        clearTimeout(load4)
        document.body.appendChild(splash2)
        document.body.removeChild(splash1)

       }, 100);
    }
}