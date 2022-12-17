/* eslint-disable no-undef */

const todoList = require("../todo");

const { all, markAsComplete, add } = todoList();

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

describe("TodoList test suite", () => {
  beforeAll(() => {
    add({
      title: "Test todo",
      completed: false,
      dueDate: today,
    });
  });
  test("creating a new todo", () => {
    let todoItemsCount = all.length;
    add({
      title: "Submit assignment",
      completed: false,
      dueDate: yesterday,
    });
    expect(all.length).toBe(todoItemsCount + 1);
    todoItemsCount = all.length;
    add({
      title: "Pay rent",
      completed: true,
      dueDate: today,
    });
    expect(all.length).toBe(todoItemsCount + 1);
    todoItemsCount = all.length;
    add({
      title: "Service Vehicle",
      completed: false,
      dueDate: today,
    });
    expect(all.length).toBe(todoItemsCount + 1);
    todoItemsCount = all.length;
    add({
      title: "File taxes",
      completed: false,
      dueDate: tomorrow,
    });
    expect(all.length).toBe(todoItemsCount + 1);
    todoItemsCount = all.length;
    add({
      title: "Pay electric bill",
      completed: false,
      dueDate: tomorrow,
    });
    expect(all.length).toBe(todoItemsCount + 1);
  });
  test("marking a todo as complete", () => {
    for (let i = 0; i < all.length && all[i].completed == false; i++) {
      expect(all[i].completed).toBe(false);
      markAsComplete(i);
      expect(all[i].completed).toBe(true);
    }
  });
  test("retrieval of overdue items", () => {
    for (let i = 0; i < all.length; i++) {
      if (all[i].dueDate == yesterday && all[i].completed == false) {
        expect(all[i].completed).toBe(false);
      }
    }
  });
  test("retrieval of due today items", () => {
    for (let i = 0; i < all.length; i++) {
      if (all[i].dueDate == today && all[i].completed == false) {
        expect(all[i].completed).toBe(false);
      }
    }
  });
  test("retrieval of due later items", () => {
    for (let i = 0; i < all.length; i++) {
      if (all[i].dueDate == tomorrow && all[i].completed == false) {
        expect(all[i].completed).toBe(false);
      }
    }
  });
});

const toDisplayableList = (list) => {
  str = "";
  for (var i = 0; i < list.length; i++) {
    if (list[i].completed == true) {
      str += "[x] ";
    }
    if (list[i].completed == false) {
      str += "[ ] ";
    }
    if (list[i].dueDate == today) {
      str += list[i].title;
    } else {
      str += list[i].title + " " + list[i].dueDate;
    }
    str += "\n";
  }
  return str;
};

toDisplayableList(all);
