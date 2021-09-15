interface User {
  name: string,
  id: number
}

const user1: User = {
  name: 'Uzmaki naruto',
  id: 100100
}

class UserAccount {
  name: string;
  id: number;
  constructor(name: string, id: number) {
    this.name = name
    this.id = id
  }
  getUserInfo() {
    console.log(`${this.name}-${this.id}`)
  }
}

const user2: User = new UserAccount('Uzmaki Boruto', 100101)

export default user2