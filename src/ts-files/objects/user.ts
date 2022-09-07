class User {
  constructor(
    public personalInfo: PersonalInfo = new PersonalInfo(),
    public quote: Quote = new Quote(),
    public pokemon: Pokemon = new Pokemon(),
    public about: About = new About(),
    public friends: Friend[] = []
  ) {}

  async getData() {
    await Promise.all([
      this.personalInfo.getData(),
      this.quote.getData(),
      this.pokemon.getData(),
      this.about.getData(),
      this.getFriendsData(),
    ]);
  }

  async getFriendsData() {
    const friends = await $.get("https://randomuser.me/api/?results=7");
    this.friends = friends.results.map((f: any) => {
      return new Friend(f.name.first, f.name.last);
    });
  }
}
