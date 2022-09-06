class Renderer {
  public render(user: User) {
    this.renderHelper("friends", { friends: user.friends });
    this.renderHelper("user", {
      fname: user.fname,
      lname: user.lname,
      city: user.city,
      state: user.state,
      img: user.img,
    });
    this.renderHelper("quote", { quote: user.quote });
    this.renderHelper("pokemon", {
      pokemonName: user.pokemonName,
      pokemonImg: user.pokemonImg,
    });
    this.renderHelper("meat", { about: user.about });
  }

  private renderHelper(selector: string, data: any) {
    $(`.${selector}-container`).empty();
    const source = $(`#${selector}-template`).html();
    const template = Handlebars.compile(source);
    const newHTML = template(data);
    $(`.${selector}-container`).append(newHTML);
  }
}
