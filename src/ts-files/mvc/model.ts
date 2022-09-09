class Model {
  usersCounterLS: number;
  constructor(private user: User = new User()) {
    this.usersCounterLS = this.initUsersOnLS();
  }

  public async fetchData() {
    await this.user.getData();
  }

  public getUser(): User {
    return JSON.parse(JSON.stringify(this.user));
  }

  public setUser(other: User) {
    this.user = new User(
      new PersonalInfo(
        other.personalInfo.fname,
        other.personalInfo.lname,
        other.personalInfo.img,
        other.personalInfo.city,
        other.personalInfo.state
      ),
      new Quote(other.quote.quote),
      new Pokemon(other.pokemon.name, other.pokemon.img),
      new About(other.about.about),
      other.friends.map(f => new Friend(f.first, f.last))
    );
  }

  public getUsersCounter() {
    return this.usersCounterLS;
  }

  private initUsersOnLS() {
    const users = JSON.parse(localStorage.users || "{}");
    const savedUsersCounter = Object.keys(users).length;
    if (savedUsersCounter === 0) {
      localStorage.users = JSON.stringify({});
    }
    return savedUsersCounter;
  }

  public getUsersFromLS() {
    return JSON.parse(localStorage.users);
  }

  public addUserToLS() {
    let currentUsers = this.getUsersFromLS();
    currentUsers[this.usersCounterLS] = this.user;
    localStorage.users = JSON.stringify(currentUsers);
    this.usersCounterLS += 1;
  }
}
