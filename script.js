let nomeutente1 = localStorage.getItem("id_1")
//alert(nomeutente1)
if(nomeutente1 != ""){
    alert("Benvenuto!")
}


            //se il campo nome non è vuoto allora mostra il pulsante
            function controllo() {
                let nomeutente = document.getElementById("nome").value;
                if(nomeutente != ""){
                    document.getElementById("button").disabled = false;
                    
                }
            }

            function iscritto(){
                let nomeutente = document.getElementById("nome").value;
                localStorage.setItem("id_1",nomeutente);
                alert("iscritto");
            }

            function nascondi() {
                document.getElementById("label").hidden = true
                document.getElementById("nome").hidden = true;
                document.getElementById("button").value = "Unsubscribe"
                
            }