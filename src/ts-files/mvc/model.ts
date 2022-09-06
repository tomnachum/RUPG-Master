class Model {
  constructor(
    public user: User = new User(),
    public pokemon: Pokemon = new Pokemon(),
    public quote: Quote = new Quote(),
    public about: About = new About()
  ) {}

  // public getUser(): User {
  //   return JSON.parse(JSON.stringify(this.user));
  // }

  public async fetchUserData() {
    await Promise.all([
      this.user.getData(),
      this.quote.getData(),
      this.pokemon.getData(),
      this.about.getData(),
    ]);
  }
}
