class User {
  constructor(
    public fname: string = "",
    public lname: string = "",
    public img: string = "",
    public city: string = "",
    public state: string = "",
    public friends: Friend[] = []
  ) {}

  async getData() {
    const users = await $.get("https://randomuser.me/api/?results=8");
    const [user, ...friends] = users.results;
    this.fname = user.name.first;
    this.lname = user.name.last;
    this.img = user.picture.large;
    this.city = user.location.city;
    this.state = user.location.state;
    this.friends = friends.map((f: any) => {
      return new Friend(f.name.first, f.name.last);
    });
  }
}
