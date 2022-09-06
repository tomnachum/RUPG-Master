class Model {
  constructor(
    private user: User = new User(),
    private pokemon: Pokemon = new Pokemon(),
    private quote: Quote = new Quote(),
    private about: About = new About()
  ) {}

  public getUser(): User {
    return JSON.parse(JSON.stringify(this.user));
  }

  public getPokemon(): Pokemon {
    return JSON.parse(JSON.stringify(this.pokemon));
  }

  public getQuote(): Quote {
    return JSON.parse(JSON.stringify(this.quote));
  }

  public getAbout(): About {
    return JSON.parse(JSON.stringify(this.about));
  }

  public async fetchData() {
    await Promise.all([
      this.user.getData(),
      this.quote.getData(),
      this.pokemon.getData(),
      this.about.getData(),
    ]);
  }
}
