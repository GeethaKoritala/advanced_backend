const todoList = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    arr = [];
    for (let i = 0; i < all.length; i++) {
      if (all[i].dueDate == yesterday && all[i].completed == true) {
        arr.push("[x]" + " " + all[i].title + " " + all[i].dueDate);
      }
      if (all[i].dueDate == yesterday && all[i].completed == false) {
        arr.push("[ ]" + " " + all[i].title + " " + all[i].dueDate);
      }
    }
    return arr;
  };

  const dueToday = () => {
    arr = [];
    for (let i = 0; i < all.length; i++) {
      if (all[i].dueDate == today && all[i].completed == true) {
        arr.push("[x]" + " " + all[i].title);
      }
      if (all[i].dueDate == today && all[i].completed == false) {
        arr.push("[ ]" + " " + all[i].title);
      }
    }
    return arr;
  };

  const dueLater = () => {
    arr = [];
    for (let i = 0; i < all.length; i++) {
      if (all[i].dueDate == tomorrow && all[i].completed == true) {
        arr.push("[x]" + " " + all[i].title + " " + all[i].dueDate);
      }
      if (all[i].dueDate == tomorrow && all[i].completed == false) {
        arr.push("[ ]" + " " + all[i].title + " " + all[i].dueDate);
      }
    }
    return arr;
  };

  const toDisplayableList = (list) => {
    st = "";
    for (let i = 0; i < list.length; i++) {
      st += list[i] + "\n";
    }
    return st;
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

const todos = todoList();

const formattedDate = (d) => {
  return d.toISOString().split("T")[0];
};

var dateToday = new Date();
const today = formattedDate(dateToday);
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
);
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
);

todos.add({ title: "Submit assignment", dueDate: yesterday, completed: false });
todos.add({ title: "Pay rent", dueDate: today, completed: true });
todos.add({ title: "Service Vehicle", dueDate: today, completed: false });
todos.add({ title: "File taxes", dueDate: tomorrow, completed: false });
todos.add({ title: "Pay electric bill", dueDate: tomorrow, completed: false });

console.log("My Todo-list\n\n");

console.log("Overdue");
var overdues = todos.overdue();
var formattedOverdues = todos.toDisplayableList(overdues);
console.log(formattedOverdues);
console.log("\n\n");

console.log("Due Today");
let itemsDueToday = todos.dueToday();
let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday);
console.log(formattedItemsDueToday);
console.log("\n\n");

console.log("Due Later");
let itemsDueLater = todos.dueLater();
let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater);
console.log(formattedItemsDueLater);
console.log("\n\n");
