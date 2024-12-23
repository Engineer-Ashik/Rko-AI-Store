
/*
## API Links
All data: [https://openapi.programming-hero.com/api/ai/tools](https://openapi.programming-hero.com/api/ai/tools)

Single data details: https://openapi.programming-hero.com/api/ai/tool/${id}

Single data Example: https://openapi.programming-hero.com/api/ai/tool/01
 */
 console.log("AI JavaScript connected");

 // Programming Hero Code:
 const loadHub = async (id, isshowAll) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/ai/tool${id}`);
    const data = await res.json();
    const hubs = data.data.tools;
    //console.log(hubs);
    displayHubs(hubs, isshowAll);
 }

 const displayHubs = (hubs, isshowAll)  =>{
          //console.log(hubs);
console.log("isshowALL clicked", isshowAll);
      //1. Where to save dynamic code in div
      const hubContainer = document.getElementById('hub-container');
      
      //refreshing every search 
      hubContainer.innerHTML = "";

      //Load more to display by click button
      const loadMore = document.getElementById('loadmore-button');
          //display only first 6 items
          if(!isshowAll){
          hubs = hubs.slice(0,6);
          }
          console.log("the Length is :", hubs.length);

      
      if(hubs.length > 6 && isshowAll){
        loadMore.classList.add('hidden');
      }
      else{
        loadMore.classList.remove('hidden');
      }
      
     

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
              <button onclick="showdetails('${element.id}')" class="btn bg-red-600 hover:bg-yellow-600 text-white font-bold py-2 px-4 mx-auto rounded-lg w-1/2"> Show Details </button>
            </div>
      `
      //4. Append the Child
      hubContainer.appendChild(hubCard);
      loadingSpinner(false); //spinner removing
    });
  }

    //searching code 
    const handlesearch = (isshowAll) => {
      loadingSpinner(true); //spinner adding
      const searchinput= document.getElementById('search-bar');
      const searchValue = searchinput.value;
      console.log(searchValue);
      //searchinput.value = "";
      loadHub(searchValue, isshowAll);
    }

    //loading spinner toggle function
    const loadingSpinner = (load) => { 
    const loadingS = document.getElementById('loading-spinners');

    if(load){
      loadingS.classList.remove('hidden');
    }
    else{
      loadingS.classList.add('hidden');
    }
    }

    //Handle LoadMore or ShowALL
    const handleloadmore = () => {
      //const loadmore = document.getElementById('loadmore-button');
      handlesearch(true);
    }

    //Show Details Function
    const showdetails = async (id) => {
      //load single data for display
      const res = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`);
      const data = await res.json();
      //console.log("New data is:",data.data);
      showdModal(data);
    }

    //Show-Modal
    const showdModal = (element) => {
      console.log("New Data modal inputs: ",element.data);
      const hubDescription = document.getElementById('hub-description');
      hubDescription.innerText = element.data.description;

      const hubStarter = document.getElementById('hub-starter');
      hubStarter.innerText = element.data.pricing[0].price;

      const hubProfessional = document.getElementById('hub-professional');
      hubProfessional.innerText = element.data.pricing[1].price;

      const hubEnterprise = document.getElementById('hub-enterprise');
      hubEnterprise.innerText = element.data.pricing[2].price;

      const hubImages = document.getElementById('hub-images');
      hubImages.innerHTML = `
        <img src="${element.data.image_link[0]}" alt="" placeholder="${element.data.tool_name}"/>}
      `
      
      const hubInput = document.getElementById('hub-input');
      hubInput.innerText = element.data.input_output_examples[0].input;

      const hubOutput = document.getElementById('hub-output');
      hubOutput.innerText = element.data.input_output_examples[0].output;

      const hubFeaturesOne = document.getElementById('hub-features-one');
      hubFeaturesOne.innerText = element.data.use_cases[0].name;

      const hubFeaturesTwo = document.getElementById('hub-features-two');
      hubFeaturesTwo.innerText = element.data.use_cases[1].name;

      const hubFeaturesThree = document.getElementById('hub-features-three');
      hubFeaturesThree.innerText = element.data.use_cases[2].name;
      
      const hubIntegrationsOne = document.getElementById('hub-integrations-one');
      hubIntegrationsOne.innerText = element.data.use_cases[0].name;

      const hubIntegrationsTwo = document.getElementById('hub-integrations-two');
      hubIntegrationsTwo.innerText = element.data.use_cases[1].name;

      const hubIntegrationsThree = document.getElementById('hub-integrations-three');
      hubIntegrationsThree.innerText = element.data.use_cases[2].name;

      my_modal_3.showModal()
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
