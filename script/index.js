
const showMainSection=()=>{

    document.getElementById('mainSection').style.display='block'
    
}
// &getting button 
const buttonData = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/categories")
  .then(res =>res.json())
  .then(data=>viewData(data.categories))
  .catch((err)=>{
    console.log("Error occured here")
  })
}
// &getting video data
const videoData=()=>{
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
    .then(res=>res.json())
    .then(data =>showVideoData(data.pets))
    .catch((err)=>{
        console.log("error occured here")
    })
}

// &showing video data
const showVideoData=(data)=>{
    const videoContainer=document.getElementById('videos')
   for(let vid of data ){
    console.log(vid)
    const card=document.createElement('div')
    card.classList.add('card')
    card.innerHTML=`

   <div class="border rounded-lg gap-2">
    <figure class="px-10 pt-10 ">
    <img
      src=${vid.image}
      alt="Shoes"
      class="rounded-xl object-cover w-full" />
  </figure>
  <div class="card-body items-center text-center">
   <h2>${vid.pet_name
   }</h2>
   <h2>Bread:${vid.breed}</h2>
   <h2>Birth:${vid.date_of_birth}</h2>
   <h2>Gender:${vid.gender}</h2>
   <h1>Price:${vid.price}</h1>
  </div>
    
   </div>
    `
    videoContainer.append(card)
   }

}

// &showing button data
const viewData=(data)=>{
    
    for(let item of data){

        const button=document.getElementById('button')
        let btn=document.createElement('div')
        btn.classList.add('btn')
        btn.innerHTML=`
        <div class="flex gap-2">
          <p><img class="w-7 h-7 " src="${item.category_icon}" alt="" /></p>
          <button>${item.category}</button>
        </div>
        
        
        
        
        `
        button.appendChild(btn)

    }
   

}

buttonData();
videoData()