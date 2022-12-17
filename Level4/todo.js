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

module.exports = todoList;
