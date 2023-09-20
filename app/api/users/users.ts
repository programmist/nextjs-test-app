export interface User {
  id: number;
  name: string;
}

let users: User[] = [
  { id: 1, name: "Tony" },
  { id: 2, name: "Mosh" },
  { id: 3, name: "John" },
  { id: 4, name: "Bill" },
];

// TODO: find a way to cache this data to persist across requests
const userService = {
  nextId() {
    return users.length + 1;
  },
  getAll() {
    return users;
  },
  getUser(id: number) {
    return users.find((user) => user.id === id);
  },
  updateUser(updated: User, id: number) {
    users = users.map((user) =>
      user.id === id ? { ...user, ...updated } : user
    );
    return this.getUser(id);
  },
  createUser(created: User) {
    users.push(created);
    return created;
  },
  deleteUser(userId: number) {
    users = users.filter((user) => user.id !== userId);
  },
  hasUser(id: number) {
    return this.getUser(id) != null;
  },
};

export default userService;
