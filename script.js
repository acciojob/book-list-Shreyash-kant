//your JS code here. If required.
class Book {
	constructor(name,author,isbn) {
		this.name = name;
		this.author = author;
		this.isbn = isbn;
	}
}
class UI{
	constructor(){
		
	}
	createEntry(book){
		const body = document.querySelector("#book-list");
		const element = document.createElement("tr");
		element.innerHTML = `<td>${book.name}</td>
							<td>${book.author}</td>
							<td>${book.isbn}</td>
							<td><button class="delete">X</button></td>`;
		body.appendChild(element);
	}
	clearFields(){
		document.querySelector("#title").value = "";
		document.querySelector("#author").value = "";
		document.querySelector("#isbn").value = "";
	}
	deleteEntry(target){
		if(target.className==="delete")
		target.parentElement.parentElement.remove();
	}
}
document.querySelector(".form").addEventListener("submit",(e)=>{
	e.preventDefault();
	const title = document.querySelector("#title").value;
	const author = document.querySelector("#author").value;
	const isbn = document.querySelector("#isbn").value;
	if(title==="" || author==="" || isbn==="")window.alert("you can not leave any field empty!");
	else{
	const book = new Book(title,author,isbn);
	const ui = new UI();
	ui.createEntry(book);
		ui.clearFields();
	}
	
});
document.querySelector("#book-list").addEventListener("click",(e)=>{
	const ui = new UI();
	// if(e.target.className === "delete")
		ui.deleteEntry(e.target);
})