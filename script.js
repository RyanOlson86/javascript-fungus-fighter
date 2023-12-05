// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;
// ! State
let freakyFungusHealth = 100;
let myAttackPoints = 100;

// ! Event handlers
// Attack functions
function arcaneScepter(event){
    console.log('In arcaneScepter')
    freakyFungusHealth = freakyFungusHealth - 14;
    myAttackPoints = myAttackPoints - 12;
    console.log('New AP', myAttackPoints);
    console.log('New HP', freakyFungusHealth);
    render();
    event.preventDefault();
}
function entangle(event){
    console.log('In entangle')
    freakyFungusHealth = freakyFungusHealth - 9;
    myAttackPoints = myAttackPoints - 23;
    console.log('New AP', myAttackPoints);
    console.log('New HP', freakyFungusHealth);
    render();
}
function dragonBlade(event){
    console.log('In dragonBlade')
    freakyFungusHealth = freakyFungusHealth - 47;
    myAttackPoints = myAttackPoints - 38;
    console.log('New AP', myAttackPoints);
    console.log('New HP', freakyFungusHealth);
    render();
}
function starFire(event){
    console.log('In starFire')
    freakyFungusHealth = freakyFungusHealth - 25;
    myAttackPoints = myAttackPoints - 33;
    console.log('New AP', myAttackPoints);
    console.log('New HP', freakyFungusHealth);
    render();
}
// function to disable all buttons
function disableButtons(){
    let allButtons = document.querySelectorAll('button')
    for(let butts of allButtons){
        butts.disabled=true
    }
}

// ! Render
function render(){
    console.log(document.getElementById('movement').classList)
    // Check if AP is <0; set=0, change class from walk to jump, disableButtons
    if(myAttackPoints<0){
        myAttackPoints = 0;
        document.getElementById('movement').classList.replace('walk', 'jump')
        disableButtons()
    }

    //Display AP hero
    let apText = document.getElementsByClassName('ap-text');
    apText[0].innerHTML = `${myAttackPoints} AP`
    
    // Check if HP is <0; set = 0 and change class from walk to run
    if(freakyFungusHealth<0){
        freakyFungusHealth = 0;
        document.getElementById('movement').classList.replace('walk', 'dead')
    }
    
    // Display HP for freaky fungus
    let hpText = document.getElementsByClassName('hp-text');
    hpText[0].innerHTML = `${freakyFungusHealth} HP`

}


function onReady() {
    console.log("Ready to go!")
    render()
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}


onReady()