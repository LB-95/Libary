
let myLibrary = [];

function Book(title,author,page,read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.page = page;
  this.read = read;
}

 function addBookToLibrary() {
  // do stuff here
  let titleAdd = document.getElementById("title").value;
  let authorAdd = document.getElementById("author").value;
  let pageAdd = document.getElementById("page").value;
  let readAdd = document.getElementById("read").checked;
  
  
  let newBook = new Book(titleAdd, authorAdd, pageAdd, readAdd);
    
   myLibrary.push(newBook);
   displayBooks();
}

function displayBooks()
{
   let table = '<table>';
   table += `<tr><th>Title</th><th>Author</th><th>Page</th><th>Read</th></tr>`;
    myLibrary.forEach((book)=>{
      
        table = table + `<tr id="myTable">`;
        table = table + `<td> ${book.title}</td>`;
        table = table + `<td> ${book.author}</td>`;
        table = table + `<td> ${book.page}</td>`;
        if(book.read==true){
        table = table + `<td><input type="checkbox" name="nameOfChoice" checked> </td>`;
        }else{
          table = table + `<td><input type="checkbox" name="nameOfChoice"> </td>`;
        }
        table = table + `<td><button type="Button" id="deletetButton" class="deleteBtn" onclick="deleteRows(this)">Delete</button>`
        table += `</tr>`;
    });
    table += "</table>";
    document.getElementById("book-list").innerHTML = table;
}

function openForm() {
    document.getElementById("bookForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("bookForm").style.display = "none";
  }
function deleteRows(row){
  
    var i = row.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").remove(i);
}
       