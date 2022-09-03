
const response = await fetch('js/formations.json');

const formations = await response.json();

console.log(formations);

function afficherformation() {

let html = '';

formations.forEach(formation => {

html += `
<h2>${formation.libelle}</h2>
`;

});

document.querySelector('#formations').innerHTML = html;

}

afficherformation();
