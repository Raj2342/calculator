const  SearchBar = document.getElementById("search-bar")
const  btn =  document.getElementById("B-T-N")
const ResultShow = document.getElementById("card")

btn.addEventListener("click" , ()=>{
    // console.log('hii i am happy ')
    const SearchCOUNTRY = SearchBar.value;
    URL = `https://restcountries.com/v3.1/name/${SearchCOUNTRY}?fullText=true
    `;

    fetch(URL)           
    .then(response => response.json())
    .then(data => {

        console.log(data);

        ResultShow.innerHTML = `  
        
        <img src="${data[0].flags.png}" class="card-img-top" >
        <div class="card-body">
          <p class="card-text">   
           
                          <h1>${ data[0].name.common}</h1>

              <h5>Capital:${ data[0].capital} </h5>            
              <h5> Continent:${data[0].continents}</h5>            
              <h5>  Population:${data[0].population}</h5>            
                          

        
        
        
        `;

        ResultShow.classList.remove('card');


    })
        
    
})