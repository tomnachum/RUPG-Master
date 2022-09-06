class Renderer {
  public render(user: User, quote: Quote, pokemon: Pokemon, about: About) {
    this.renderUser(user);
    this.renderQuote(quote);
    this.renderPokemon(pokemon);
    this.renderAbout(about);
    this.renderFriends(user.friends);
  }

  private renderHelper(selector: string, data: any) {
    $(`.${selector}-container`).empty();
    const source = $(`#${selector}-template`).html();
    const template = Handlebars.compile(source);
    const newHTML = template(data);
    $(`.${selector}-container`).append(newHTML);
  }

  private renderUser(user: User) {
    this.renderHelper("user", {
      fname: user.fname,
      lname: user.lname,
      city: user.city,
      state: user.state,
      img: user.img,
    });
  }

  private renderQuote(quote: Quote) {
    this.renderHelper("quote", { quote: quote.quote });
  }

  private renderPokemon(pokemon: Pokemon) {
    this.renderHelper("pokemon", {
      pokemonName: pokemon.name,
      pokemonImg: pokemon.img,
    });
  }

  private renderAbout(about: About) {
    this.renderHelper("meat", { about: about.about });
  }

  private renderFriends(friends: Friend[]) {
    this.renderHelper("friends", { friends: friends });
  }
}
