const form = document.querySelector('form');
const addButton = document.getElementById('add_book');
const addButtonForm = document.getElementById('read_val');
addButton.addEventListener('click',()=>{
    document.querySelector('.get_book_info_form').style.display = 'grid';
    
});

const formRemoveButton = document.querySelector('.crossIcon');
formRemoveButton.addEventListener('click',()=>{
    document.querySelector('.get_book_info_form').style.display = 'none';

});


function book_object(name_of_book,author,read_status,page_count){
    this.name1=name_of_book;
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
let firstBook = Object.create(book_object)
firstBook.name1='jnfjn';
firstBook.author='donfon';
firstBook.pageCount='sdnnfiou';
const bookList = [firstBook,];


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const fd = new FormData(form);

    obj = Object.fromEntries(fd);
    
    
    bookList.push(new book_object(obj.titleOfBook,obj.authorName,obj.c));

    for(let i=0;i<bookList.length;i++){
        const a = bookList[i];
        const newBookHtml = ` <div class="book_info">\
        <div class="close_icon"></div>\
        <div class="written_content">\
            <div class="book_name">${a.name1}</div>\
            <div class="author"> ${a.author} </div>\
            <div class="pages_read"> ${a.pageCount}</div>\
        </div>\
        <div class="read_unread_button"></div>\
        </div>`;
        document.getElementById('book_storage').innerHTML+=newBookHtml;
    
    
    
    }

    

    
})             









function add_book(){
    
    



}



