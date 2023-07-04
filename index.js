const form = document.querySelector('form');
const addButton = document.getElementById('add_book');
const addButtonForm = document.getElementById('read_val');



form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const fd = new FormData(form);

    const obj = Object.fromEntries(fd);
    const newBookHtml = ` <div class="book_info">\
    <div class="close_icon"></div>\
    <div class="written_content">\
        <div class="book_name">${obj.authorName}</div>\
        <div class="author"> ${obj.titleOfBook} </div>\
        <div class="pages_read"> ${obj.no_of_pages}</div>\
    </div>\
    <div class="read_unread_button"></div>\
    </div>`;

    document.getElementById('book_storage').innerHTML += newBookHtml;

    
})             








const books = [];

function book_object(name_of_book,author,read_status){
    this.name=name_of_book;
    this.author=author;
    this.read_status=read_status;
    this.changeReadStatus = () =>{
        if(this.read_status==true){
            this.read_status=false;
        }
        else{
            this.read_status=true;
        }
    }
    
}

function add_book(){
    const newBook = Object.create(book_object);
    newBook.name=titleOfBook.value;
   



}

