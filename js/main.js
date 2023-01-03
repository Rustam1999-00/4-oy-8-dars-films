


var elForm = document.querySelector('.js-form');
var elInput = document.querySelector('.js-input');
var elList = document.querySelector('.js-list');

const usr = '1368017a';



var render = (arrey,node) =>{
    node.innerHTML=''

   arrey.forEach((todo) =>{
    
  
        

        let elItem = document.createElement('li');
        elItem.setAttribute('class','col-2 lg-coll-2 md-coll-4 mt-5 m-0 p-0 g-3 border rounded-top bg-dark');
        

        let elImg = document.createElement('img');
   
        elImg.src = todo.Poster
        elImg.setAttribute("width", "100%");
        elImg.setAttribute("class", "rounded-top");
        
        let elTitle = document.createElement('h2');
        elTitle.textContent = todo.Title
        elTitle.setAttribute("class", "text-center");

        let elSpan = document.createElement('h3');
        elSpan.textContent = todo.Year
        elSpan.setAttribute("class", "text-center  mt-3");
        

        elItem.appendChild(elImg)
        elItem.appendChild(elTitle);
        elItem.appendChild(elSpan)

        node.appendChild(elItem)

        elInput.value = ''

    });
};


elForm.addEventListener('submit',function(evt){
    evt.preventDefault()

    if(elInput.value !== " "){
        fetch('https://www.omdbapi.com/?apikey=1368017a&s='+ elInput.value)
        .then((response) => response.json())
        .then((data)=>{
            if(data.Search){
        
        
                render(data.Search,elList)
        
            }
            else{
                elList.innerHTML = `<li><h2 class="h2 my-5 text-center text-danger">NOT FOUND</h2></li>`;
            }
        })
    }
       
    
console.log(render);
});


