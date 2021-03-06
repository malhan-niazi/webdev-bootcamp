/**
 * the comments in this file are suggestions based on the solution
 */

// the todo_list array should be a const
let todo_list = [];
let quit_app = false;
let todo_item = '';
let index = 0;

// could just check the input here instead of setting a bool
// e.g. selection !== 'quit'
while (!quit_app) {
  let selection = prompt('what would you like todo?');

  switch (selection) {
    case 'new':
      console.log('adding a new item...');
      todo_item = prompt('enter a todo item:');
      todo_list.push(todo_item);
      console.log(`"${todo_item}" added to the list.`);
      break;
    case 'list':
      console.log('todo items:');
      // since the index is being used, consider a classic for loop
      // rather than a for .. of loop
      index = 0;
      for (let todo of todo_list) {
        index++;
        console.log(`${index} : ${todo}`);
      }
      break;
    case 'delete':
      console.log('deleting an item...');
      console.log('select from the items below:');
      // since the index is being used, consider a classic for loop
      // rather than a for .. of loop
      index = 0;
      for (let todo of todo_list) {
        index++;
        console.log(`${index} : ${todo}`);
      }
      selection = prompt('which item would you like to delete?');
      let delete_index = parseInt(selection) - 1;
      todo_item = todo_list[delete_index];
      todo_list.splice(delete_index, 1);
      console.log(`"${todo_item}" deleted!`);
      break;
    case 'quit':
      quit_app = true;
      console.log('exiting');
      break;
    default:
      console.log('invalid input!');
      break;
  }
}
