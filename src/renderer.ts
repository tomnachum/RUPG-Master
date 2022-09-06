class Renderer {
  public render(user: User) {
    this.renderFriends(user.friends);
  }

  private renderFriends(friends: Friend[]) {
    $(".friends-container").empty();
    const source = $("#friends-template").html();
    const template = Handlebars.compile(source);
    const newHTML = template({ friends });
    $(".friends-container").append(newHTML);
  }
}
