//1.1
fetch("https://api.agify.io?name=michael")
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
  });
  //1.2
  const baseUrl = "https://api.nationalize.io";

const search = (event) => {
  const input$$ = document.querySelector("input");

  fetch(baseUrl + "?name=" + input$$.value)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    });
};

const button$ = document.querySelector("button");

button$.addEventListener("click", search);

