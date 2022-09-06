// const NUM_OF_POKEMON = 949;
const NUM_OF_POKEMON = 900;

class Pokemon {
  constructor(public name: string = "", public img: string = "") {}
  // Math.random -> [0,1)
  // *NUM_OF_POKEMON -> [0,949)
  // floor -> [0,948]
  // +1 -> [1,949]
  private getRandomId(): number {
    return Math.floor(Math.random() * NUM_OF_POKEMON) + 1;
  }
  async getData() {
    const pokemon = await $.get(
      `https://pokeapi.co/api/v2/pokemon/${this.getRandomId()}`
    );
    this.name = pokemon.name;
    this.img = pokemon.sprites.front_default;
  }
}
