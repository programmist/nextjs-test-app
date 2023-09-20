const users: { id: number; name: string }[] = [
  { id: 1, name: "Tony" },
  { id: 2, name: "Mosh" },
  { id: 3, name: "John" },
  { id: 4, name: "Bill" },
];

const userService = {
  nextId() {
    return users.length + 1;
  },
  getAll() {
    return users;
  },
  getUser(id: string) {
    return users.filter((user) => user.id === parseInt(id));
  },
};

export default userService;
