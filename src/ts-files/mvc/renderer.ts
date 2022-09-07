class Renderer {
  public render(user: User) {
    this.renderPersonalInfo(user.personalInfo);
    this.renderQuote(user.quote);
    this.renderPokemon(user.pokemon);
    this.renderAbout(user.about);
    this.renderFriends(user.friends);
  }

  private renderHelper(selector: string, data: any) {
    $(`.${selector}-container`).empty();
    const source = $(`#${selector}-template`).html();
    const template = Handlebars.compile(source);
    const newHTML = template(data);
    $(`.${selector}-container`).append(newHTML);
  }

  private renderPersonalInfo(personalInfo: PersonalInfo) {
    this.renderHelper("user", {
      fname: personalInfo.fname,
      lname: personalInfo.lname,
      city: personalInfo.city,
      state: personalInfo.state,
      img: personalInfo.img,
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

  public renderSavedUsers(users: { fname: string; lname: string }[]) {
    this.renderHelper("saved-users", { users });
  }
}
