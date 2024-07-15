const loadJoke = async () => {
  try {
    const jokson = await fetch("https://api.chucknorris.io/jokes/random", {
      headers: {
        Accept: "application/json",
      },
    });
    const joke = await jokson.json();
    console.log(jokson);
    document.getElementById("loadingJoke").innerHTML = joke.value;
  } catch (error) {
    console.log(error);
  }
};
document.getElementById("load").addEventListener("click", loadJoke);
