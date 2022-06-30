let url = 'https://vast-refuge-29777.herokuapp.com/countries'
const body = document.querySelector('#body')
console.log(body.parentNode);
body.parentNode.style.backgroundColor = '#f4f4f4';
const comment = document.querySelector('textarea');
const backUp = comment.getAttribute('placeholder');
const btn = document.querySelector('btn');
const clear = document.getElementById('clear');
const submit = document.getElementById('submit');
fetch(url)
	.then(response => response.json())
	.then(data => {

		let html = ""

		data.map((value) => {
			html += `
			 <div class = "col.md-9">
			 <div class="card">
                      <h4 class="title"><span>Name</span>: ${value.name}</h4>
                      <h4 id="author"><span>Population</span>: ${value.Population}</h4>
                   <img class="card-img-top" src="${value.imgUrl}" alt="Card image" style="width:50%">
                 <div class="card-body">
                 
                   <p class="card-text">${value.CountryDescription}</p>
                </div>
             </div>
			 </div>
			`
		})

		document.getElementById('container').innerHTML = html
	})
	comment.onfocus = function(){
		this.setAttribute('placeholder', '');
		this.style.borderColor = '#333'
		btn.style.display = 'block'
	}

	comment.onblur = function(){
		this.setAttribute('placeholder', backUp)
		this.style.borderColor = '#aaa'
	}

	clear.onclick = function(){
		btn.style.display = 'none';
		comment.value = '';
	}

	function alertBtn (){
		alert('You are canceling your comment');
	}
	clear.addEventListener('click', alertBtn);
	 function alertBtn1 (){
	 	alert('Your comment has been submited');
	 }
	submit.addEventListener('click', alertBtn1);
Footer