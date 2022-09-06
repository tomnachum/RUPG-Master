class Renderer {
  public render(user: User, pokemon: Pokemon) {
    this.renderHelper("user", {
      fname: user.fname,
      lname: user.lname,
      city: user.city,
      state: user.state,
      img: user.img,
    });
    this.renderHelper("quote", { quote: user.quote });
    this.renderHelper("pokemon", {
      pokemonName: pokemon.name,
      pokemonImg: pokemon.img,
    });
    this.renderHelper("meat", { about: user.about });
    this.renderHelper("friends", { friends: user.friends });
  }

  private renderHelper(selector: string, data: any) {
    $(`.${selector}-container`).empty();
    const source = $(`#${selector}-template`).html();
    const template = Handlebars.compile(source);
    const newHTML = template(data);
    $(`.${selector}-container`).append(newHTML);
  }
}
