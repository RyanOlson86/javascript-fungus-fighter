// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;
// ! State
let freakyFungusHealth = 100;
let myAttackPoints = 100;

// ! Events
function arcaneScepter(){
    console.log('In arcaneScepter')
    freakyFungusHealth = freakyFungusHealth - 14;
    myAttackPoints = myAttackPoints - 12;
    console.log('New AP', myAttackPoints);
    console.log('New HP', freakyFungusHealth);
}


function onReady() {
    console.log("Ready to go!")
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}


onReady()