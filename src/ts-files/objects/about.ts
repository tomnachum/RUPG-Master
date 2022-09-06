class About {
  constructor(public about: string = "") {}

  async getData() {
    const about = await $.get(
      `https://baconipsum.com/api/?type=all-meat&paras=1`
    );
    this.about = about[0];
  }
}
