$(document).ready(function() {
    // Le code à l'intérieur de cette fonction est interprêté seulement lorsque tout le document HTML est chargé.
    $.ajax({
        url: "choco_types.json"
    }).done(function(chocoTypes) {
        var chocoSelect = $("#choco");
        for (let choco of chocoTypes) {
            let newOption = $('<option value="' + choco.value + '">' + choco.label + "</option>");
            chocoSelect.append(newOption);
        }
    });
});