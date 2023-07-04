const form = document.querySelector('form');
const addButton = document.getElementById('add_book');
const addButtonForm = document.getElementById('read_val');



form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const fd = new FormData(form);

    obj = Object.fromEntries(fd);
    const newBook = Object.create(book_object);
    newBook.name=obj.authorName;
    newBook.author=obj.titleOfBook;
    newBook.pageCount=obj.no_of_pages;
    bookList.push(newBook);

    

    
})             


let firstBook = Object.create(book_object)
firstBook.name='jnfjn';
firstBook.author='donfon';
firstBook.pageCount='sdnnfiou';
const bookList = [firstBook,];





function book_object(name_of_book,author,read_status,page_count){
    this.name=name_of_book;
    this.author=author;
    this.read_status=read_status;
    this.pageCount =page_count;
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
    
    



}

for(let i=0;i<bookList.length;i++){
    const a = bookList[i];
    const newBookHtml = ` <div class="book_info">\
    <div class="close_icon"></div>\
    <div class="written_content">\
        <div class="book_name">${a.name}</div>\
        <div class="author"> ${a.author} </div>\
        <div class="pages_read"> ${a.no_of_pages}</div>\
    </div>\
    <div class="read_unread_button"></div>\
    </div>`;
    document.getElementById('book_storage').innerHTML+=newBookHtml;



}

