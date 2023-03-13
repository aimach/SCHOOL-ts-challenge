type Place = 'home' | 'work' | { custom: string }

type Todo = Readonly <{ 
  id: number
  text: string
  done: boolean
  place: Place
}>

function placeToString(place: Place):string {
  if (place === 'home') {
    return ' Home'
  } else if (place === 'work') {
    return ' Work'
  } else {
    return ' ' + place.custom
  }
}

type CompletedTodo = Todo & {
  readonly done:true
}

function toggleTodo(todo: Todo):Todo {
  return {
    id: todo.id,
    text: todo.text,
    done: !todo.done,
    place : todo.place 
  }
}

function completeAll(
  todos: readonly Todo[]
): CompletedTodo[] {
  return todos.map(todo => ({
    ...todo,
    done: true
  }))
}

console.log(
  completeAll([
    { id: 1, text: '…', done: true, place: 'home' },
    { id: 2, text: '…', done: false, place: 'work' }
   ])
)
