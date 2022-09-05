type Name = {
  first: string;
  last: string;
};

type Address = {
  city: string;
  state: string;
};

type Pokemon = {
  name: string;
  imgUrl: string;
};

class User {
  constructor(
    public name: Name = { first: "", last: "" },
    public address: Address = { city: "", state: "" },
    public quote: string = "",
    public pokemon: Pokemon = { name: "", imgUrl: "" },
    public about: string = "",
    public friends: Name[] = []
  ) {}
}
