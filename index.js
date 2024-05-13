const COHORT = "2404-FTB-ET-WEB-";
const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${COHORT}/events`;
console.log(API_URL);

const partyList = document.getElementById(`list`);


async function render(){
  await getPartys();
  renderArtists();
}
render();


const state = {
    partys: [],
  };
async function getPartys(){
    try {
        const response = await fetch(API_URL);
        const json = await response.json();
        state.partys = json.data;
      } catch (error) {
        console.error(error);
      }
      console.log(state.partys);
}

function renderArtists() {
  const Cards = state.partys.map((party) => {
    console.log(party);
    const li = document.createElement("li");
      li.innerHTML = `
      <h2>${party.name}</h2>
      <p>${party.id}</p>
      <p>${party.date}</p>
      <p>${party.location}</p>
      <p>${party.description}</p>
      `;
      return li;
  }); 
  partyList.replaceChildren(...Cards);
  //partyList.innerHTML = "<h2>No artists.</h2>";
}