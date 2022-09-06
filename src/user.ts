type Friend = {
  first: string;
  last: string;
};

class User {
  constructor(
    public fname: string = "",
    public lname: string = "",
    public img: string = "",
    public city: string = "",
    public state: string = "",
    public quote: string = "",
    public pokemonName: string = "",
    public pokemonImg: string = "",
    public about: string = "",
    public friends: Friend[] = []
  ) {}
}
