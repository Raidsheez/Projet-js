let street = document.getElementById("street");
let search = document.getElementById("search");


street.addEventListener("keyup", function () {
    let code = street.value;
    search.innerHTML = "";
    fetch("https://api-adresse.data.gouv.fr/search/?q=" + code)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            json.features.forEach(function (feature) {
                let label = document.createElement("p");
                label.innerText = feature.properties.label;
                search.appendChild(label)
            label.addEventListener("click", function() {
                street.value = label.textContent;
                closeAllList()
                });
            street.addEventListener("click", function() {
                openAllList()
                })             
        })
    })

    function closeAllList() {
    search.style.display = "none";
    }
    function openAllList() {
    search.style.display= "block";
    }

})                  