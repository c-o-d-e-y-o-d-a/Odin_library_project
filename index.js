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

const bookList = [];
function add_book(){
    const name_of_book = document.getElementById('title').value;  
    const authName = document.getElementById('author_input').value;
    const read_val = document.getElementById('read_val').value;
    const noOfPages = document.getElementById('noOfPage').value;
    let newBook =  new book_object(name_of_book,authName,read_val,noOfPages);


    
    
    
    
    bookList.push(newBook);
    
    



}

function render(){
    document.getElementById('book_storage').innerHTML="";
    for(let i=0;i<bookList.length;i++){


        


        
        
        let a = bookList[i];

        let colorClass = '';

        const newBookHtml = document.createElement('div');
        if(a.read_status!='read'){
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



form.addEventListener('submit',(e)=>{
    e.preventDefault();
    add_book();
    
    render();

    

    

    
});         


document.getElementsByClassName('close_icon').addEventListener('click',()=>{
    document.getElementsByClassName('book_info')[0].style.display='grid';
});






const closeIcon = newBookHtml.querySelector('.close_icon');
closeIcon.addEventListener('click', () => {
    bookList.splice(i, 1);
    render();});



