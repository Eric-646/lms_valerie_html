
const response = await fetch('js/formations.json');

const formations = await response.json();

console.log(formations);

function afficherformation() {

    let html = '';

    formations.forEach(formation => {

        html += `

           <div class="formation">
           
           <img src="${formation.image_name}" alt="${formation.image_name}">
           <h2 class="libelle">${formation.libelle}</h2>
           <p class="reference">${formation.reference}</p>
           <p class="contenu">${formation.contenu}</p>
           <a class="formateur" href="${formation.formateur_id.full_name}">${formation.formateur_id.full_name}</a>
           
           </div>
       
    `;

    });

    document.querySelector('.formations').innerHTML = html;
}

afficherformation();



