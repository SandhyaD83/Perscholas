let mickeyMouse = {
    name: "Mickey Mouse",
    Creators: "Walt Disney, Ub Iwerks",
    Developedby: "Les Clark; Fred Moore; Floyd Gottfredson; Romano Scarpa"
}

let navTabs={
    about: 'Mickey Mouse is an animated cartoon character co-created in 1928 by Walt Disney and Ub Iwerks. The longtime mascot of The Walt Disney Company, Mickey is an anthropomorphic mouse who typically wears red shorts, large yellow shoes, and white gloves.',
    firstAppearance: ' Steamboat Willie',
    notable: ' Bob Cratchit, King Mickey Mouse, Mikki Hiiri, Mr. Mouse, Prince Mickey',
    misc:'blah blah blah blah'
}


//querySelectors

//
//let something=document.querySelector()
//let something=document.querySelector()
//let something=document.querySelector()


//functions
const uploadInfo=(tabName) => {
    if(tabName==="about"){
        let mainBox = document.querySelector('.mainContainer')
        mainBox.innerHTML=navTabs.about
        let title =document.querySelector('.currentTitle')
         title.innerHTML="About Mickey"
    }
   else if(tabName==="first"){
        let mainBox = document.querySelector('.mainContainer')
        mainBox.innerHTML=navTabs.firstAppearance
        let title =document.querySelector('.currentTitle')
        title.innerHTML="First Appearance"
    }
    else if(tabName==="notable"){
        let mainBox = document.querySelector('.mainContainer')
        mainBox.innerHTML=navTabs.notable
        let title =document.querySelector('.currentTitle')
        title.innerHTML="Notable Moments"
    }
   else if(tabName==="misc"){
        let mainBox = document.querySelector('.mainContainer')
        mainBox.innerHTML=navTabs.misc
        let title =document.querySelector('.currentTitle')
        title.innerHTML="Misc"
    }
}
    
    const danceMouse=()=>{
        let danceMeme=document.createElement('img')
        danceMeme.setAttribute('src','https://i.gifer.com/2EMU.gif')
        let bottomRow=document.querySelector('.bottomContainer')
        bottomRow.append(danceMeme)
       
    }
