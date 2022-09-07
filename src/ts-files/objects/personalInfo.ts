class PersonalInfo {
  constructor(
    public fname: string = "",
    public lname: string = "",
    public img: string = "",
    public city: string = "",
    public state: string = ""
  ) {}

  async getData() {
    const users = await $.get("https://randomuser.me/api/?results=1");
    const user = users.results[0];
    this.fname = user.name.first;
    this.lname = user.name.last;
    this.img = user.picture.large;
    this.city = user.location.city;
    this.state = user.location.state;
  }
}
