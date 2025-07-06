let todolist = [
  { item: 'Buy Milk', 
    dueDate: '18/03/2025' 
  },
  {
    item:'Buy Banana', 
    dueDate:'15/03/2025'
  }
]
showItems()

function addtodolist() {
  let addMessage = document.querySelector('#text')
  let addDate = document.querySelector('#DATE')
  let entermesasge = addMessage.value
  let enterDate = addDate.value
  console.log(enterDate)
  todolist.push({item:entermesasge,dueDate:enterDate},)
  addMessage.value = ''
  addDate.value=''
  showItems()
}


function showItems() {
  let addMessageInDisaply = document.querySelector('.todoContainer')
  let addHtml = ''
  addMessageInDisaply.innerText = ''
  for (let i = 0; i < todolist.length; i++) {
    let item=todolist[i].item
    let dueDate=todolist[i].dueDate
    addHtml += `<span>${item}</span>
    <span>${dueDate}</span>
    <button class="impressive-btn"  onclick="todolist.splice(${i},1); showItems()">delete</button>`
  }
  addMessageInDisaply.innerHTML = addHtml

}