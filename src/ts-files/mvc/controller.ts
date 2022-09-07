(function () {
  const renderer = new Renderer();
  const model = new Model();
  $("#save-user").prop("disabled", true);

  $("#generate-user").on("click", function () {
    model.fetchData().then(res => {
      renderer.render(
        model.getPersonalInfo(),
        model.getQuote(),
        model.getPokemon(),
        model.getAbout(),
        model.getFriends()
      );
    });
    $("#save-user").prop("disabled", false);
  });

  Handlebars.registerHelper("proper-case", function (pokemonName: string) {
    return pokemonName[0].toUpperCase() + pokemonName.slice(1);
  });

  $("#save-user").on("click", function () {
    localStorage.user = JSON.stringify(model.getUser());
    alert("User saved successfully!");
  });

  $("#load-user").on("click", function () {
    console.log(JSON.parse(localStorage.user || "{}"));
  });
})();
