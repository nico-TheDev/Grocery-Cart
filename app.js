let inputText = document.querySelector('.cart__input');
let addBtn = document.querySelector('.cart__btn');
let deleteBtn = document.getElementsByClassName('delete'); // live nodeList
let theList = document.querySelector('.cart__list');
let item = theList.firstElementChild;
let clearBtn = document.querySelector('.clear');

item.style.display = 'none'; // no element added

let itemCount;

itemCount = localStorage.length;

function update(){
    console.log('executed');
    console.log(localStorage.getItem(0));

    if (localStorage.length === 0){
        console.log('no items');
    }
    else{
        for (let i  = 0; i < localStorage.length; i++){
            let clonedItem = item.cloneNode(true);
            clonedItem.firstElementChild.textContent = localStorage.getItem(i);
            theList.appendChild(clonedItem);
            clonedItem.style.display = 'flex';
        }
    }

   
}

update();

addBtn.addEventListener('click',()=>{
    /*
    when we click add, local storage will have an item based on the current item count
    item count plus 1
    then we want to clone the first list item
    change the text Content of the cloned list item to the input value
    add the cloned item to the list

    update a function that will update the list based on the list storage values
    if the list storage has input 
    then the list should have items

    else none


    */
    if (inputText.value === ''){
        let notif = document.querySelector('.cart__notif');
        notif.style.display = 'block';
        notif.style.color = 'red';
        notif.textContent = 'PLEASE INPUT TEXT';
        setTimeout(function(){
            notif.style.display = 'none'
        },2000)
    }
    else{
        let notif = document.querySelector('.cart__notif');
        notif.style.display = 'block';
        notif.style.color = 'green';
        notif.textContent = 'ADDED ITEM SUCCESSFULLY';
        setTimeout(function(){
            notif.style.display = 'none'
        },2000)
        deleteBtn = document.getElementsByClassName('delete');
        itemCount = localStorage.length;
        console.log(inputText.value);
        localStorage.setItem(itemCount,inputText.value);
        console.log(localStorage);
        console.log(item.firstElementChild);
        let clonedItem = item.cloneNode(true);
        clonedItem.style.display = 'flex';
        clonedItem.firstElementChild.textContent = inputText.value;
        theList.appendChild(clonedItem);
        inputText.value = '';
        updateDelete();
        
    }

});

clearBtn.addEventListener('click',()=>{
    localStorage.clear();
    console.log('Local Storage Cleared');
    console.log(localStorage);
    theList.textContent = '';
});


function updateDelete(){
    Array.from(deleteBtn).forEach((item,index)=>{
        item.addEventListener('click',(e)=>{

            if (index === 0){
                console.log('delete item');
                console.log(e.target.parentElement);
                console.log(index);
                e.target.parentElement.style.display = 'none';
                console.log(index - 1);
                localStorage.removeItem(index);
            }
            else{
                console.log('delete item');
                console.log(e.target.parentElement);
                console.log(index);
                e.target.parentElement.style.display = 'none';
                console.log(index - 1);
                localStorage.removeItem(index - 1);
            }
   
        });
    });
}

updateDelete();

