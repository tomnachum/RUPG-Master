(function () {
  const renderer = new Renderer();
  const model = new Model();

  $("#generate-user").on("click", function () {
    model.setUserData().then(res => {
      console.log(model.getUser());
    });
  });
})();
