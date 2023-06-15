let todoinput = document.getElementById('todoinput');
let addtodobtn = document.getElementById('addtodobtn');
let todoList = document.getElementById('todoList');
let pendingTasksNo = document.getElementById('pendingTasks');
let clearbtn = document.getElementById('clearbtn');

addtodobtn.addEventListener('click', (e) => {
    //Can change 7 to 2 for longer results.
    let randkey = (Math.random() + 1).toString(36).substring(7);
    // console.log(randkey);
    let todoinpText = todoinput.value;
    localStorage.setItem(randkey, todoinpText);
    let listChild = '';
    listChild += `<li id='${randkey}'>${localStorage.getItem(randkey)}<span class="icon" onclick="deleteTask('${randkey}')"><i class="fas fa-trash"></i></span></li>`
    todoList.innerHTML += listChild;
    pendingTasksNo.innerHTML = localStorage.length
    todoinput.value = '';
})

const deleteTask = (key) => {
    localStorage.removeItem(key);
    let childItem = document.getElementById(key);
    childItem.remove();
    pendingTasksNo.innerHTML = localStorage.length
};

clearbtn.addEventListener('click', (e) => {
    localStorage.clear()
    todoList.innerHTML = ''
    pendingTasksNo.innerHTML = localStorage.length
})
