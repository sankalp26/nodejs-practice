export default class UserModel {
  constructor(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
  static register(user) {
    const { name, email, password } = user;
    const newUser = new UserModel(usersReg.length + 1, name, email, password);
    usersReg.push(newUser);
  }
  static login(user) {
    const { email, password } = user;
    const userFound = usersReg.find(
      (u) => u.email == email && u.password == password,
    );
    return userFound;
  }
}

const usersReg = [];
