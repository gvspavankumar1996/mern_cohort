import { atom, selector } from "recoil";

export const todos = atom({
  key: "todos",
  default: [
    {
      id: 1,
      description: "buy vream",
    },
    {
      id: 2,
      description: "hi",
    },
    {
      id: 3,
      description: "buy chocolates hi",
    },
    {
      id: 4,
      description: "buy ice cream hi",
    },
    {
      id: 5,
      description: "hello 1",
    },
  ],
});
export const userInput = atom({
  key: "userInput",
  default: "",
});
export const showFilteredTodos = atom({
  key: "showFilteredTodos",
  default: false,
});

export const filteredTodos = selector({
  key: "filteredTodos",
  get: ({ get }) => {
    console.log("hello");
    const allTodos = get(todos);
    const userInputValue = get(userInput);
    return allTodos.filter((todo) =>
      todo?.description?.includes(userInputValue)
    );
  },
});
