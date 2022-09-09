(function () {
  const UP = "&#9650;";
  const DOWN = "&#9660;";

  const renderer = new Renderer();
  const model = new Model();

  const saveBtn = $("#save-user");
  const loadBtn = $("#load-user");
  const dropdown = $(".saved-users-container");

  saveBtn.prop("disabled", true);

  if (model.getUsersCounter() === 0) {
    loadBtn.prop("disabled", true);
  }

  $("#generate-user").on("click", function () {
    model
      .fetchData()
      .then(res => {
        renderer.render(model.getUser());
        saveBtn.prop("disabled", false);
      })
      .catch(error => {
        alert("Oops, there was an error, please try again.");
      });
  });

  Handlebars.registerHelper("proper-case", function (pokemonName: string) {
    return pokemonName[0].toUpperCase() + pokemonName.slice(1);
  });

  saveBtn.on("click", function () {
    model.addUserToLS();
    loadBtn.prop("disabled", false);
    saveBtn.prop("disabled", true);
    alert("User saved successfully!");
  });

  loadBtn.on("click", function () {
    let currentUsers = model.getUsersFromLS();
    renderer.renderSavedUsers(
      Object.entries(currentUsers).map((u: any) => {
        return {
          index: u[0],
          fname: u[1].personalInfo.fname,
          lname: u[1].personalInfo.lname,
        };
      })
    );
    dropdown.toggleClass("show");
    loadBtn.html(`Load User Page ${dropdown.hasClass("show") ? DOWN : UP}`);
  });

  dropdown.on("click", "a", function () {
    dropdown.toggleClass("show");
    loadBtn.html(`Load User Page ${UP}`);
    const currentUsers = model.getUsersFromLS();
    const index = $(this).data().idx;
    model.setUser(currentUsers[index]);
    renderer.render(model.getUser());
    saveBtn.prop("disabled", true);
  });
})();
