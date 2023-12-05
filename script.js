// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;
// ! State
let freakyFungusHealth = 100;
let myAttackPoints = 100;


// ! Event handlers
// Attack functions
function arcaneScepter(){
    freakyFungusHealth = freakyFungusHealth - 14;
    myAttackPoints = myAttackPoints - 12;
    render();
}
function entangle(){
    freakyFungusHealth = freakyFungusHealth - 9;
    myAttackPoints = myAttackPoints - 23;
    render();
}
function dragonBlade(){
    freakyFungusHealth = freakyFungusHealth - 47;
    myAttackPoints = myAttackPoints - 38;
    render();
}
function starFire(){
    freakyFungusHealth = freakyFungusHealth - 25;
    myAttackPoints = myAttackPoints - 33;
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
    // Check if AP is <0; set=0, change class from walk to jump, disableButtons
    if(myAttackPoints<=0){
        myAttackPoints = 0;
        document.getElementById('movement').classList.replace('walk', 'jump')
        disableButtons()
    }

    //Display AP hero
    let apText = document.getElementsByClassName('ap-text');
    apText[0].innerHTML = `${myAttackPoints} AP`
    
    // Check if HP is <0; set = 0 and change class from walk to run
    if(freakyFungusHealth<=0){
        freakyFungusHealth = 0;
        document.getElementById('movement').classList.replace('walk', 'dead')
    } 
    
    // Display HP for freaky fungus
    let hpText = document.getElementsByClassName('hp-text');
    hpText[0].innerHTML = `${freakyFungusHealth} HP`

    // update progress bar
    let apMeter = document.getElementById('ap-meter')
    let hpMeter = document.getElementById('hp-meter')
    apMeter.value = myAttackPoints;
    hpMeter.value = freakyFungusHealth;

}


function onReady() {
    console.log("Ready to go!")
    render()
}


onReady()