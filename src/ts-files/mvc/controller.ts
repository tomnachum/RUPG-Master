(function () {
  const renderer = new Renderer();
  const model = new Model();

  $("#generate-user").on("click", function () {
    model.fetchUserData().then(res => {
      renderer.render(model.user, model.quote, model.pokemon, model.about);
    });
  });
})();
