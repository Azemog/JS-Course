let todoInput;
let errorInfo;
let addBtn;
let ulList;
// let newLi

let popup
let popupInfo
let todoToEdit
let popupInput
let popupAddBtn
let popupCloseBtn

const main = () => {
	prepareDomElements();
	prepareDomEvents();
};

const prepareDomElements = () => {
	todoInput = document.querySelector('.todo-input');
	errorInfo = document.querySelector('.error-info');
	addBtn = document.querySelector('.btn-add');
	ulList = document.querySelector('.todolist ul');
    popup = document.querySelector('.popup');
	popupInfo = document.querySelector('.popup-info');
    popupInput = document.querySelector('.popup-input');
    popupAddBtn = document.querySelector('.accept');
	popupCloseBtn = document.querySelector('.cancel');
	
};

const prepareDomEvents = () => {
	addBtn.addEventListener('click', addTask);
    ulList.addEventListener('click', checkClick);
    popupCloseBtn.addEventListener('click', closeEdit)
    popupAddBtn.addEventListener('click', editToDoText)
   
};

const addTask = () => {
	if (todoInput.value !== '') {
		const newLi = document.createElement('li')
		newLi.textContent = todoInput.value
        addTools(newLi)  
        ulList.append(newLi)

        todoInput.value = ''
        errorInfo.textContent = ''
            
	} else {
		errorInfo.textContent = 'Nie możesz dodać pustego zadania.';
	}
};

const addTools = (e) =>{
    const div = document.createElement('div')
    div.classList.add('tools')

    e.append(div)

    const completeBtn = document.createElement('button')
    completeBtn.classList.add("complete")
    completeBtn.innerHTML = `<i class="fas fa-check"></i>`

    const editBtn = document.createElement('button')
    editBtn.classList.add('edit')
    editBtn.textContent = "EDIT"

    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete')
    deleteBtn.innerHTML = `<i class="fas fa-times"></i>`

  
    div.append(completeBtn , editBtn, deleteBtn)
}

const checkClick = (e) =>{
    if(e.target.matches('.complete')){
        e.target.closest('li').classList.toggle('completed')
        e.target.classList.toggle('completed')
    }else if(e.target.matches('.edit')){
        editToDo(e)
    }else{
        deleteToDo(e)
    }

}

const editToDo = (e) =>{
    todoToEdit = e.target.closest('li')
    popupInput.value = todoToEdit.firstChild.textContent.trim()
    popup.style.display = 'flex'
}
const editToDoText = () =>{
    if(popupInput.value !== ''){
        todoToEdit.firstChild.textContent = popupInput.value
        popupInfo.textContent = ''  
        closeEdit()
    }else{
        popupInfo.textContent = 'Musisz podać zwartość'
    }
   
}

const closeEdit = () =>{
    popup.style.display = 'none'
    popupInfo.textContent = ''
}

const deleteToDo = (e) =>{
    e.target.closest('li').remove()
    if(ulList.childNodes.length - 4  === 0){
        errorInfo.innerHTML = 'Brak zadań do wykonania'
    }

}


document.addEventListener('DOMContentLoaded', main); // najpierw ładuje sie strona, potem skrypty
