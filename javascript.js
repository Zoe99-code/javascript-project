const baseURL = "https://stormy-ocean-63026.herokuapp.com/view-profile/4";
const accesstoken = window.localStorage.getItem("jwt-token");

const form = document.querySelector("#form");

function login(url) {
	const username = document.querySelector("auth_username").value;
	const password = document.querySelector("auth_password").value;
	const body = {
		username: username,
		password: password,
	};
	fetch(url, {
		method: "POST",
		body: JSON.stringify(body),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	})
		.then((res) => res.json()).then((data) => {
			console.log(data);
			if (data['description'] == 'Invalid credentials') {
				alert('Error not valid login in!')
			}
			else {
				myStorage = window.localStorage
				console.log(data['access_token'])
				myStorage.setItem('jwt-token', data['access_token'])
				window.location.href = './product.html'
			}
		});
}

function submitForm(event) {
	event.preventDefault();
	login(baseURL);
}

form.addEventListener("submit", submitForm);

const form = document.querySelector("#form");

form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();
    window.location.href = './index.html'
}

const baseURL = "https://stormy-ocean-63026.herokuapp.com/show-products";

function getProducts(url) {
	fetch(url, {
		method: "GET",
	})
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			let products = data.data;
			let container = document.querySelector(".products");
			container.innerHTML = "";
			products.forEach((product) => {
				container.innerHTML += `
                    <div class="product-container">
                        <h3>${product[1]}</h3>
                        <p>R${product[2]}</p>
                        <p>Description: <q>${product[3]}</q></p>
						<p>Type: ${product[4]}</p>
                    </div>
                `;
			});
		});
}

getProducts(baseURL);

let modal = document.getElementById("myModal");

let btn = document.getElementById("myBtn");

let span = document.getElementsByClassName("close")[0];

function editProduct(modalID) {
	document.getElementById(modalID).classList.toggle("active");
}

function filterItems(e) {
	const filter = document.querySelector("#filter");
	const itemsList = document.querySelector(".product-container");
	let text = e.target.value.toLowerCase();

	let items = itemsList.getElementsByTagName("h3");

	Array.from(items).forEach(function (item) {
		let itemName = item.firstChild.textContent;
		if (itemName.toLowerCase().indexOf(text) != -1) {
			item.style.display = "block";
		} else {
			item.style.display = "none";
		}
	});
	fetch(baseURL)
		.then((res) => res.json())
		.then((data) => {
			let products = data.data;
			if (text == products[1]) {
			}
		});
}

filter.addEventListener("keyup", filterItems);

let baseURL = "https://stormy-ocean-63026.herokuapp.com/view-profile/4";
let accesstoken = window.localStorage.getItem("jwt-token");

function viewProfile(url) {
	fetch(url, {
		method: "GET",
	})
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
		});
}