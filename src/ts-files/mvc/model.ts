class Model {
  constructor(private user: User = new User()) {}

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
}
