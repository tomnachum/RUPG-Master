class Quote {
  constructor(public quote: string = "") {}

  async getData() {
    const quote = await $.get("https://api.kanye.rest");
    this.quote = quote.quote;
  }
}
