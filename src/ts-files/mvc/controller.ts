(function () {
  const UP = "&#9650;";
  const DOWN = "&#9660;";

  const renderer = new Renderer();
  const model = new Model();

  const saveBtn = $("#save-user");
  const loadBtn = $("#load-user");
  const dropdown = $(".saved-users-container");

  saveBtn.prop("disabled", true);

  const users = JSON.parse(localStorage.users || "{}");
  let savedUsersCounter = Object.keys(users).length;
  if (savedUsersCounter === 0) {
    localStorage.users = JSON.stringify({});
    loadBtn.prop("disabled", true);
  }

  $("#generate-user").on("click", function () {
    model.fetchData().then(res => {
      renderer.render(model.getUser());
      saveBtn.prop("disabled", false);
    });
  });

  Handlebars.registerHelper("proper-case", function (pokemonName: string) {
    return pokemonName[0].toUpperCase() + pokemonName.slice(1);
  });

  saveBtn.on("click", function () {
    let currentUsers = JSON.parse(localStorage.users);
    currentUsers[savedUsersCounter] = model.getUser();
    savedUsersCounter += 1;
    localStorage.users = JSON.stringify(currentUsers);
    loadBtn.prop("disabled", false);
    saveBtn.prop("disabled", true);
    alert("User saved successfully!");
  });

  loadBtn.on("click", function () {
    let currentUsers = JSON.parse(localStorage.users);
    renderer.renderSavedUsers(
      Object.entries(currentUsers).map((u: any) => {
        return {
          key: u[0],
          fname: u[1].personalInfo.fname,
          lname: u[1].personalInfo.lname,
        };
      })
    );
    dropdown.toggleClass("show");
    loadBtn.html(`Load User Page ${dropdown.hasClass("show") ? DOWN : UP}`);
  });

  dropdown.on("click", function () {
    $(this).toggleClass("show");
    loadBtn.html(`Load User Page ${UP}`);
  });

  dropdown.on("click", "a", function () {
    const index = $(this).data().idx;
    let currentUsers = JSON.parse(localStorage.users);
    model.setUser(currentUsers[index]);
    renderer.render(model.getUser());
  });
})();
