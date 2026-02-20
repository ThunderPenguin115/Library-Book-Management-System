let input = document.getElementById("textArea");
let output = document.getElementById("bookList");


let books = ["The Great Gatspy", "Pride and Prejudice"]

// Add a book to the front


function addFront(){
books.unshift(input.value);

updateBooklist()
}

function addBack(){
    books.push(input.value);
    updateBooklist()
}

function removeFront(){
    books.shift()
      updateBooklist()
}

function removeBack(){
     books.pop()
      updateBooklist()
}

function updateBooklist(){
    let html = '';
    if(books.length>0){
        html+=`<h4>Front of Shelf</h4><ol>`;
        for (i=0 ; i < books.length; i++){
            html += `
            <li>${books[i]}</li>
            `
        }
        html+=`</ol><h4>Back of Shelf</h4>`;
    }
    else if(books.length<=0){
        html += `<h4>Bookshelf is Empty!</h4>`
    }

    output.innerHTML = html;
}
updateBooklist()