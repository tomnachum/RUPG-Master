const NUM_OF_POKEMON = 949;

class Model {
  public user: User = new User();

  public async setUserData() {
    return Promise.all([
      $.get("https://randomuser.me/api/?results=7"),
      $.get("https://api.kanye.rest"),
      $.get(`https://pokeapi.co/api/v2/pokemon/${this.getRandomId()}`),
      $.get(`https://baconipsum.com/api/?type=all-meat&paras=1`),
    ]).then((responses: any[]) => {
      const [user, ...friends] = responses[0].results;
      const pokemonData = responses[2];
      this.user = new User(
        { first: user.name.first, last: user.name.last },
        { city: user.location.city, state: user.location.state },
        responses[1].quote,
        { imgUrl: pokemonData.sprites.front_default, name: pokemonData.name },
        responses[3][0],
        friends.map((f: any) => {
          return { first: f.name.first, last: f.name.last };
        })
      );
    });
  }

  // Math.random -> [0,1)
  // *NUM_OF_POKEMON -> [0,949)
  // floor -> [0,948]
  // +1 -> [1,949]
  private getRandomId(): number {
    return Math.floor(Math.random() * NUM_OF_POKEMON) + 1;
  }
}

// getPerson(): Person {
//   return JSON.parse(JSON.stringify(this.person))
// }
