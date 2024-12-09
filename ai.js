
/*
## API Links
All data: [https://openapi.programming-hero.com/api/ai/tools](https://openapi.programming-hero.com/api/ai/tools)

Single data details: https://openapi.programming-hero.com/api/ai/tool/${id}

Single data Example: https://openapi.programming-hero.com/api/ai/tool/01
 */
 console.log("AI JavaScript connected");

 // Programming Hero Code:
 const loadHub = async (id) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/ai/tool${id}`);
    const data = await res.json();
    const hubs = data.data.tools;
    //console.log(hubs);
    displayHubs(hubs);
 }

 const displayHubs = hubs  =>{
          //console.log(hubs);
      //1. Where to save dynamic code in div
      const hubContainer = document.getElementById('hub-container');
      
      //refreshing every search 
      hubContainer.innerHTML = "";
      
      //display only first 6 items
      hubs = hubs.slice(0,6);

      hubs.forEach(element => {
          //console.log("each datas in a serial", element);

      //2. create div
      const hubCard = document.createElement('div');
      //-- classList for style
      hubCard.classList = `card card-compact bg-transparent shadow-xl` ;
      //3. Set innerHTML
      hubCard.innerHTML = `
      <figure>
              <img src="${element.image}" alt="${element?.description}" />
      </figure>
            <div class="card-body">
              <h2 class="card-title text-black font-bold">Features</h2>
              <p>${element.features}</p>
              <p class="border-b-2"></p>
              <h2 class="card-title text-black font-bold">${element.name}</h2>
              <p>${element.published_in}</p>
            </div>
      `
      //4. Append the Child
      hubContainer.appendChild(hubCard);
    });
  }

    //searching code 
    const handlesearch = () =>{
      const searchinput= document.getElementById('search-bar');
      const searchValue = searchinput.value;
      console.log(searchValue);
      //searchinput.value = "";
      loadHub(searchValue);

    }

 //loadHub();

//----------------------------------------------------------------------------------------

 // My code
/*function handlefetch(){
    fetch(`https://openapi.programming-hero.com/api/ai/tools`)
    .then(resp => resp.json())
    .then(data => console.log("The Data is :: ", data));
}

handlefetch();
*/
