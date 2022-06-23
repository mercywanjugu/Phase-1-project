//  const countryName = document.querySelector('#country-name');
//  const countryImage = document.querySelector('#country-image');
//  const countryDescription = document.querySelector('#country-description');
// // Target Description FORM
//  const countryDescriptionForm= document.querySelector('#description-form');
//  const countryEditDescription = document.querySelector('#description');
//  countryDescriptionForm.reset();
//  // Remove Review Lists
//  const countryReviewList = document.querySelector('#review-list');
// while (countryReviewList.firstElementChild){
//     countryReviewList.removeChild(countryReviewList.lastElementChild)
// };


//  // target review form
//  const countryReviewForm = document.querySelector('#review-form');
//  const countryReviewText = document.querySelector('#review');

//  countryName.textContent = country.name,                   // country name
//  countryImage.src = country.image_url,                     // country image
//  countryDescription.textContent = country.description,     // country desc.
//  countryEditDescription.value = country.description        //country description form

//  // render country reviews
//  for(let review of country.reviews){
//      let countryReview = document.createElement('li');
//     countryReview.textContent = review;
//      countryReviewList.appendChild(countryReview);
//  }
//  // update description
//  if (status){
//      countryDescriptionForm.removeEventListener('submit',updateDescription, false);
//      status = !status
//  } else {
//      countryDescriptionForm.addEventListener('submit',updateDescription, false);
//      status = !status
//  }

//  function updateDescription(env){
//      env.preventDefault();        
//      country.description = countryEditDescription.value;
//      patchCountry(country)
//  };


//  // add new review    
//  let status = false

//  function counryRender(country){
    
//      // Country info.
//      console.log("render country " + country.id)
//      console.log('---------------------------------')
//  }
//  countryReviewForm.addEventListener('submit', (env) => {
//     env.preventDefault();
//     console.log(`review form ID: ${coutry.id}`)
//     console.log('---------------------------------')
//     if(countryReviewText.value !== ''){
       
//         country.reviews.push(countryReviewText.value)
//         patchCountry(country)
//     } else{
//         alert('Review is empty string!!')
//     }
// });

// //  countryReviewForm.addEventListener('submit', (env) => {
// //      env.preventDefault();
// //      console.log(`review form ID: ${coutry.id}`)
// //      console.log('---------------------------------')
// //      if(countryReviewText.value !== ''){
        
// //          country.reviews.push(countryReviewText.value)
// //          patchCountry(country)
// //      } else{
// //          alert('Review is empty string!!')
// //      }
// //  });



//  function patchCountry(country){
//  console.log(country, country.id)
//  fetch(`https://www.travel-advisory.info/widget-no-js?countrycode=ISOCODE${country.id}`,
//      {
//          method: 'PATCH',
//          headers: {'Content-Type': 'application/json'},
//          body: JSON.stringify(country)
//      })
//      .then(response => response.json())
//      .then(data => countryRender(data))
//     .catch(err => console.log(`Error: ${err}`))
//  };




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