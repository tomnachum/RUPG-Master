class Model {
  constructor(
    private user: User = new User(),
    public pokemon: Pokemon = new Pokemon()
  ) {}
  public getUser(): User {
    return JSON.parse(JSON.stringify(this.user));
  }

  public async fetchUserData() {
    const responses: any[] = await Promise.all([
      $.get("https://randomuser.me/api/?results=8"),
      $.get("https://api.kanye.rest"),
      this.pokemon.getData(),
      $.get(`https://baconipsum.com/api/?type=all-meat&paras=1`),
    ]);
    const [user, ...friends] = responses[0].results;
    const about = responses[3][0];
    this.user = new User(
      user.name.first,
      user.name.last,
      user.picture.large,
      user.location.city,
      user.location.state,
      responses[1].quote,
      about,
      friends.map((f: { name: { first: string; last: string } }) => {
        return { first: f.name.first, last: f.name.last };
      })
    );
  }
}
