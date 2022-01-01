const input = document.querySelector('form input')
const ul = document.querySelector('.todos')
const form = document.querySelector('form')

let todos = JSON.parse(localStorage.getItem('todos'))

//Render lên trang những todo đã có sẫn:
// if (todos) {
// 	todos.forEach((todo) => addTodos(todo))
// }





// form.onsubmit = (e) => {
// 	e.preventDefault()
// 	const text = input.value.trim()
// 	text !='' ? addTodos({text,completed:false}) :undefined
// 	input.value = ''



// }




// function addTodos(todo) {
	
// 	const li = document.createElement('li')
// 	li.setAttribute('class', todo.completed ? 'completed':'')
// 	li.innerHTML = `
//         <span>${todo.text}</span>
//         <i class="fas fa-trash"></i>
//     `
// 	ul.appendChild(li)
// 	updateTodos()


// 	li.onclick = () =>{
// 		li.classList.toggle('completed')
// 		updateTodos()
// 	}

// 	const i = li.querySelector('i')
// 	i.onclick = (e) =>{
// 		e.target.parentElement.remove()
		
// 		updateTodos()

// 	}


	

// }



// function updateTodos(){
// 	const list = document.querySelectorAll('li')
	
	
// 	const todos=[]
// 	list.forEach( item => {
// 		const span = item.querySelector('span')
// 		const content = span.innerText
// 		todos.push({
// 			text: content,
// 			completed: item.classList.contains('completed')
// 		})
		
// 	})

// 	localStorage.setItem('todos', JSON.stringify(todos))

	
// }

if(todos){
	todos.forEach( todo => {
		addTodos(todo)
	})
}

form.onsubmit = (e) => {
	e.preventDefault()
	const value = input.value.trim()
	value != '' ? addTodos({text: value,completed:false}) : undefined
	input.value =''
	input.focus()
}



function addTodos(todo){
	const liElemnt = document.createElement('li')
	liElemnt.innerHTML = `
	         <span>${todo.text}</span>
	         <i class="fas fa-trash"></i>`
	     
	liElemnt.className = todo.completed ? 'completed' : ''
	ul.appendChild(liElemnt)
	updateTodos()

	liElemnt.onclick = () =>{
		liElemnt.classList.toggle('completed')
		updateTodos()

	}

	const iElement = liElemnt.querySelector('i')
	iElement.onclick = (e) =>{
			e.target.parentElement.remove()
			updateTodos()
	}
}

function updateTodos(){
	const list = document.querySelectorAll('li')
	const todos = []
	list.forEach( liElemnt => {
		const span = liElemnt.querySelector('span')
		const textSPan = span.innerText
		todos.push({
			text:textSPan,
			completed: liElemnt.classList.contains('completed')
		})
	})
	localStorage.setItem('todos',JSON.stringify(todos))
}

