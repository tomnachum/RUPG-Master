class Model {
  constructor(private user: User = new User()) {}

  public async fetchData() {
    await this.user.getData();
  }

  public getPersonalInfo(): PersonalInfo {
    return JSON.parse(JSON.stringify(this.user.personalInfo));
  }

  public getQuote(): Quote {
    return JSON.parse(JSON.stringify(this.user.quote));
  }

  public getPokemon(): Pokemon {
    return JSON.parse(JSON.stringify(this.user.pokemon));
  }

  public getAbout(): About {
    return JSON.parse(JSON.stringify(this.user.about));
  }

  public getFriends(): Friend[] {
    return JSON.parse(JSON.stringify(this.user.friends));
  }
}
