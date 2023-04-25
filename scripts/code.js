document.getElementById("button").addEventListener("click", addNote);

let div = document.getElementById("divi");

let checkbox = document.getElementById("important");

const d = new Date();
 

function addNote(){

    

    let h6 = document.createElement("h6");
    let h5 = document.createElement("h5")
    let p = document.createElement("p");
    
    h6.textContent= nimi.value;
    h5.textContent= viesti.value;
    p.textContent = d;

    //onko checkboxissa täppi vai ei

    if(checkbox.checked){
        h6.classList.add("important");
        h5.classList.add("important");
        p.classList.add("important");
    }
    //kaikki elementit divin sisälle
    div.append(h6,h5,p, document.createElement("hr"));
    
}

