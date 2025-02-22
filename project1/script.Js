let taskInput = document.querySelector('#taskInput')
let addTaskBtn = document.querySelector('#addTaskBtn')
let taskList = document.querySelector('#taskList')

addTaskBtn.addEventListener('click',(e)=>{
    if (taskInput.value === '') {
        alert('Please, Enter the Message')
    }else{
        let li = document.createElement('li')
        li.textContent = taskInput.value
        taskList.appendChild(li)

        let span = document.createElement('span')
        span.textContent = '\u00d7'

        span.classList.add('removeButton')
        span.onclick = function(){
            li.remove()
        }
        li.onclick = function () {
            li.classList.toggle('completed')
        }
        li.appendChild(span)
    }
    taskInput.value = ""
})