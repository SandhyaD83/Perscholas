let products= [
    {
     title:'',
     price:'',
     startRating: 4,
    image: ''
   }
   {
    title:'',
    price:'',
    startRating: 4,
   image: ''
  }
  {
    title:'',
    price:'',
    startRating: 4,
   image: ''
  }
  {
    title:'',
    price:'',
    startRating: 4,
   image: ''
  }
  {
    title:'',
    price:'',
    startRating: 4,
   image: ''
  }

]
const populateBox
const createProductBox = (obj) => {
    //push boxes in Container
     let main=document.querySelector('.majorContainer')
    //create img
    //create product Container
    let proContainer=document.createElenment('div')
    proContainer.setAttribute('class',produx)
    let pic=document.createElement('img')
    pic.setAttribute('src',obj.image)
    //create price
    let price = "obj.price"
    price.setAttribute('class','price')
    //create text
    let text="obj.text"
    txt.setAttribute('class','tt')
    //---star container
    //create stars
    proContainer.append(pic)
    proContainer.append(price)
    proContainer.append(TextTrackCue)
    main.append(proContainer)
}