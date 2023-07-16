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
    this.name_of_book=name_of_book;
    this.author=author;
    this.read_status=read_status;
    this.page_count =page_count;

    
}
let firstBook = Object.create(book_object)
firstBook.name1='jnfjn';
firstBook.author='donfon';
firstBook.pageCount='sdnnfiou';
const bookList = [firstBook,];


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    
    
    bookList.push(new book_object());
    render();

    

    

    
})         

function render(){
    for(let i=0;i<bookList.length;i++){
        
        
        const a = bookList[i];

        const colorClass = '';

        const newBookHtml = document.createElement('div');
        if(a.read_status==false){
            colorClass='colorOfBook';

        }
        newBookHtml.innerHTML = ` <div class="book_info ${colorClass}">
        <div class="close_icon">
            <div class="close_text">Remove Book</div>
            <img src="/images/cross-symbol.png" alt="" id="close_icon_book_info">
            
        </div>
        <div class="written_content">
            <div class="book_name">${a.name_of_book}</div>
            <div class="author">${a.author}</div>
            <div class="pages_read">${a.page_count}</div>
        </div>
        <button class="read_unread_button">change read status</button>
    </div>`;
        document.getElementById('book_storage').appendChild(newBookHtml);
    
    
    
    }

}









function add_book(){
    
    



}



