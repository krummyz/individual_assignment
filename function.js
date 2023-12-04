
function up(){
    window.scrollTo({
        top:-(document.getElementById("container").clientHeight),
        behavior: "smooth"
    });
}

function checkCheckBox(){
    var checkbox = document.getElementById("kuliyyah");
    var dropdown_container = document.getElementById("Kulliyyah_option");

    if(checkbox.checked){
        var dropdown = document.createElement("select");
        dropdown.name = "kulliyah";
        var option1 = document.createElement("option");
        option1.text = "KICT";
        dropdown.add(option1);
        var option2 = document.createElement("option");
        option2.text = "KOE";
        dropdown.add(option2);
        var option3 = document.createElement("option");
        option3.text = "KAED";
        dropdown.add(option3);
        var option4 = document.createElement("option");
        option4.text = "KENMS";
        dropdown.add(option4);
        var option5 = document.createElement("option");
        option5.text = "KOED";
        dropdown.add(option5);
        var option6 = document.createElement("option");
        option6.text = "AIKOL";
        dropdown.add(option6);
        var option7 = document.createElement("option");
        option7.text = "Nursing";
        dropdown.add(option7);
        var option8 = document.createElement("option");
        option8.text = "Dentistry";
        dropdown.add(option8);
        var option9 = document.createElement("option");
        option9.text = "KOS";
        dropdown.add(option9);
        var option10 = document.createElement("option");
        option10.text = "KAHS";
        dropdown.add(option10);
        var option11 = document.createElement("option");
        option11.text = "Pharmacy";
        dropdown.add(option11);
        var option12 = document.createElement("option");
        option12.text = "Medicine";
        dropdown.add(option12);

        dropdown_container.innerHTML = "For Kulliyah of "
        dropdown_container.appendChild(dropdown);
    // dropdown_container.style.display = "block";
    }else{
        dropdown_container.innerHTML = "";
        // dropdown_container.style.display = "none";
    }

}