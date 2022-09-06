// const NUM_OF_POKEMON = 949;
const NUM_OF_POKEMON = 900;

class Model {
  private user: User = new User();

  public getUser(): User {
    return JSON.parse(JSON.stringify(this.user));
  }

  // Math.random -> [0,1)
  // *NUM_OF_POKEMON -> [0,949)
  // floor -> [0,948]
  // +1 -> [1,949]
  private getRandomId(): number {
    return Math.floor(Math.random() * NUM_OF_POKEMON) + 1;
  }

  public async fetchUserData() {
    const responses: any[] = await Promise.all([
      $.get("https://randomuser.me/api/?results=8"),
      $.get("https://api.kanye.rest"),
      $.get(`https://pokeapi.co/api/v2/pokemon/${this.getRandomId()}`),
      $.get(`https://baconipsum.com/api/?type=all-meat&paras=1`),
    ]);
    const [user, ...friends] = responses[0].results;
    const pokemon = responses[2];
    const about = responses[3][0];
    this.user = new User(
      user.name.first,
      user.name.last,
      user.picture.large,
      user.location.city,
      user.location.state,
      responses[1].quote,
      pokemon.name,
      pokemon.sprites.front_default,
      about,
      friends.map((f: { name: { first: string; last: string } }) => {
        return { first: f.name.first, last: f.name.last };
      })
    );
  }
}
