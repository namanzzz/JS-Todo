
const todoList = [];


renderTodoList()
function renderTodoList(){

        let todoListhtml=''
        for(let i=0;i<todoList.length;i++){

            
            // destructuring 
            const {name,dueDate}=todoList[i]

            const html = ` 
            <div>${name}</div> 
            <div>${dueDate}</div> 
            <button onclick="
            todoList.splice(${i},1)
            renderTodoList()
            " class="delete-todo-btn">Delete</button>
            
            ` //Generating the html
            todoListhtml += html

        }

        document.querySelector('.js-todo-list').innerHTML=todoListhtml
}


function AddTask(){
 
        const inputElement = document.querySelector('.js-name-input')
        
        const name=inputElement.value

        const inputDate = document.querySelector('.js-date-input')
        const date = inputDate.value
        todoList.push({
            name:name
            ,dueDate:date
        })
        // console.log(todoList)

        // task.value=null
        inputElement.value='';

}

