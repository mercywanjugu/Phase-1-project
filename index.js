let status = false

function countryRender(country){
    
    // Beer info.
    console.log("render country " + country.id)
    console.log('---------------------------------')
    const countryName = document.querySelector('#country-name');
    //const beerImage = document.querySelector('#beer-image');
    const countryDescription = document.querySelector('#country-description');
    // Target Description FORM
    //const countryDescriptionForm= document.querySelector('#description-form');
    //const beerEditDescription = document.querySelector('#description');
    //beerDescriptionForm.reset();
    // Remove Review Lists
    //const beerReviewList = document.querySelector('#review-list');
    //while (beerReviewList.firstElementChild){
     //   beerReviewList.removeChild(beerReviewList.lastElementChild)
    };
   

    // target review form
    //const beerReviewForm = document.querySelector('#review-form');
    //const beerReviewText = document.querySelector('#review');
    
    countryName.textContent = country.name,                   // beer name
    //beerImage.src = beer.image_url,                     // beer image
    countryDescription.textContent = country.description,     // beer desc.
    //beerEditDescription.value = beer.description        //beer description form

    //  render country reviews
    // for(let review of country.reviews){
    //     let countryReview = document.createElement('li');
    //     countryReview.textContent = review;
    //     countryReviewList.appendChild(countryReview);
    // }
    // update description
   // if (status){
       // beerDescriptionForm.removeEventListener('submit',updateDescription, false);
       // status = !status
   // } else {
       // beerDescriptionForm.addEventListener('submit',updateDescription, false);
       // status = !status
  //  }
    
   // function updateDescription(env){
      //  env.preventDefault();        
       // beer.description = beerEditDescription.value;
       // patchBeer(beer)
   // };


//     // add new review    
//     beerReviewForm.addEventListener('submit', (env) => {
//         env.preventDefault();
//         console.log(`review form ID: ${beer.id}`)
//         console.log('---------------------------------')
//         if(beerReviewText.value !== ''){
            
//             beer.reviews.push(beerReviewText.value)
//             patchBeer(beer)
//         } else{
//             alert('Review is empty string!!')
//         }
//     });
// };



// function patchCountry(country){
//     console.log(country, country.id)
//     fetch(`https://vast-refuge-29777.herokuapp.com/countries/${country.id}`,
//         {
//             method: 'PATCH',
//             headers: {'Content-Type': 'application/json'},
//             body: JSON.stringify(country)
//         })
//         .then(response => response.json())
//         .then(data => countryRender(data))
//         .catch(err => console.log(`Error: ${err}`))
// };

// function postCountry(country){
//     fetch('https://vast-refuge-29777.herokuapp.com/countries', {
//         method: 'POST',
//         headers: {'content-Type': 'application/json'},
//         body: JSON.stringify(country)
//     })
//     .then(response => response.json())
//     .then(data => countryRender(data))
//     .catch(err => console.log(`Error: ${err}`))
// }

// function fetchData(country=null){
//     let baseURL = 'https://vast-refuge-29777.herokuapp.com/countries'
//     return new Promise((resolve, reject) => {
//         let url = country == null ? baseURL : `${baseURL + country}`
//         fetch(url)
//         .then(response => response.json())
//         .then(data => resolve(data))
//         .catch(err => console.log(`Error: ${err}`));
//         })
//     };

fetch('https://vast-refuge-29777.herokuapp.com/countries')
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
function navRender(country){
    // Navigation Beer List
    const listofCountries = document.querySelector('#country-list');
    while (listofCountries.firstElementChild){
      listofCountries.removeChild(listofCountries.lastElementChild)
    };

    countries.forEach(country => {
        const listofCountries = document.createElement('li');
        listofCountries.textContent = country.name;
        listofCountries.setAttribute('index', country.id);
        listofCountries.append(listofCountries)

        navElement.addEventListener('click', (env)=> {
            // env.stopPropagation();
            console.log("EventPhase: " + env.eventPhase)
            // console.log(env.composedPath()) 
            fetchData(env.target.getAttribute('index'))
            .then(country=> {
                console.log("from fetch-> country id " + country.id);
                countryRender(country);
            });
        }, false);
    });


};

function init(){
    fetchData()
    .then(countries => navRender(countries))

    fetchData(1)
    .then(countries => countryRender(countries))
    
};

init()

 //comment box 
 const post = document.getElementById("post");
 post.addEventListener("click", function () {
   let commentBoxValue = document.getElementById("comment-box").value;
 
   let li = document.createElement("li");
   let text = document.createTextNode(commentBoxValue);
   li.appendChild(text);
   document.getElementById("unordered").appendChild(li);
 
 });
 //alert review 
 post.addEventListener("click", ()=>alert('thanks for your review!'))

//  //addeventlistener to countryButton
//  const countryButton=getElementById("countryButton")
//    let countryDescription=document.getElementById("country-description").value;
//  countryButton.addEventListener("click",function(){
//    let p=document.createElement('li');
//    let text=document.createTextNode(country-description);
//    p.appendChild(text);
//    document.getElementById("country-description").appendChild(p);
//  });
//  countryButton();
//  countryDescription();
 