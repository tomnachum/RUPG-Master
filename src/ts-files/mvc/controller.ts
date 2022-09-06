(function () {
  const renderer = new Renderer();
  const model = new Model();

  $("#generate-user").on("click", function () {
    model.fetchData().then(res => {
      renderer.render(
        model.getUser(),
        model.getQuote(),
        model.getPokemon(),
        model.getAbout()
      );
    });
  });
})();
