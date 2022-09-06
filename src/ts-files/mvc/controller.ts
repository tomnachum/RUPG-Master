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

  Handlebars.registerHelper("proper-case", function (pokemonName: string) {
    return pokemonName[0].toUpperCase() + pokemonName.slice(1);
  });
})();
