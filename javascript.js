var modal = document.getElementById('id01');

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

let baseURL = "https://guarded-waters-62882.herokuapp.com/user-registration";
let accesstoken = window.localStorage.getItem("jwt-token");

const form = document.querySelector("#form");

function login(url) {
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
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
        .then((res) => res.json())
        .then((json) => {
            console.log(json);
            myStorage = window.localStorage;
            console.log(json["access_token"]);
            myStorage.setItem("jwt-token", json["access_token"]);
        });
}

function submitForm(event) {
    event.preventDefault();
    login(baseURL);
    window.location.href = "/product.html";
}

form.addEventListener("submit", submitForm);

let baseURL = "https:///guarded-waters-62882.herokuapp.com/show-products";

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
				container.innerHTML = `
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

let baseURL = "https://guarded-waters-62882.herokuapp.com/create-products";
let accesstoken = window.localStorage.getItem("jwt-token");

const add = document.querySelector("#add-form");

function createProducts() {
	const pname = document.querySelector("#name");
	const price = document.querySelector("#price");
	const desc = document.querySelector("#description");
	const type = document.querySelector("#type");
	const quantity = document.querySelector("#quantity");
	const body = {
		name: pname,
		price: price,
		description: desc,
		type: type,
	};
	fetch(baseURL, {
		method: "POST",
		body: JSON.stringify(body),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
			Authorization: `jwt ${window.localStorage.getItem("jwt-token")}`,
		},
	})
		.then((res) => res.json())
		.then((res) => {
			console.log(res);
		});
}

function addProduct(event) {
	event.preventDefault();
	createProducts(baseURL);
}

add.addEventListener("submit", addProduct);

let baseURL = "https://guarded-waters-62882.herokuapp.com/view-profile";
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
  