(function () {
  const renderer = new Renderer();
  const model = new Model();

  const saveBtn = $("#save-user");
  const loadBtn = $("#load-user");
  saveBtn.prop("disabled", true);
  if (Object.keys(JSON.parse(localStorage.user || "{}")).length === 0) {
    loadBtn.prop("disabled", true);
  }

  $("#generate-user").on("click", function () {
    model.fetchData().then(res => {
      renderer.render(
        model.getPersonalInfo(),
        model.getQuote(),
        model.getPokemon(),
        model.getAbout(),
        model.getFriends()
      );
      saveBtn.prop("disabled", false);
    });
  });

  Handlebars.registerHelper("proper-case", function (pokemonName: string) {
    return pokemonName[0].toUpperCase() + pokemonName.slice(1);
  });

  saveBtn.on("click", function () {
    localStorage.user = JSON.stringify(model.getUser());
    alert("User saved successfully!");
    loadBtn.prop("disabled", false);
  });

  loadBtn.on("click", function () {
    const savedUser = JSON.parse(localStorage.user || "{}");
  });
})();
