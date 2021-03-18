async function doFetch(endpoint) {
  try {
    const resp = await fetch(
      "https://restcountries.eu/rest/v2/alpha/" + endpoint,
      { method: "GET" }
    );
    if (resp.ok) {
      return await resp.json();
    } else {
      return `error fetching endpoint: /${endpoint}`;
    }
  } catch (err) {
    console.log(err);
  }
}
let counter = 0;

function display(data, selector) {
  const container = document.querySelector(selector);
  container.innerHTML = " - " + counter++ + " / " + data.capital;
  container.classList.add("be-bold");
}

async function fetchA() {
  const data = await doFetch("fra");
  display(data, "#component-a");
}

async function fetchB() {
  const data = await doFetch("gbr");
  display(data, "#component-b");
}

async function fetchC() {
  const data = await doFetch("esp");
  display(data, "#component-c");
}

async function fetchD() {
  const data = await doFetch("ita");
  display(data, "#component-d");
}

function fetchAndDisplayData() {
  fetchA();
  fetchB();
  fetchC();
  fetchD();
}
