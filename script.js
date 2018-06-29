var finalMessage = document.querySelector("#final_message");

var points = 0; // initialisation du nombre de base des 2 équipes, c'est à dire 0 

$('#button_equipe_1').click(function(){ // on assigne au bouton avec l'id "button_equipe_1 une fonction qui s'activera dès le clique"
   var trigerred = true; // on crée une variable qui va actionner notre fonction d'affichage de message de fin
   points = Number(points) + Number($(this).val()); // ligne qui permet d'ajouter 1 point
    $('#points_equipe_1').text(points); // enfin, on change la valeur HTML du paragraphe avec l'ID "points_equipe_1"
        trigerred = false; // une fois la dernière étape actionnée, notre variable crée plus tôt devient fausse
        if (trigerred == false && points == 10) { // on lance la fonction / condition pour avoir le texte : si la fonction de base a fini de s'actionner, et que l'équipe est à 10 points
            winEquipe1(); // alors on actionne la fonction
        } else if (trigerred == false && points2 == 10 && points == 10) {
            alert('hein ?');
        } else {
            console.log('slt'); // je faisais mes tests ok ?
        }
    
    
});

var points2 = 0;

$('#button_equipe_2').click(function(){
   var trig = true;
   points2 = Number(points2) + Number($(this).val()); 
    $('#points_equipe_2').text(points2);
        trig = false;
        if (trig == false && points2 == 10) {
            winEquipe2();
        } else if (trig == false && points2 == 10 && points == 10) {
            alert('hein ?');
        } else {
            console.log("hello");
        }
        
});


function winEquipe1() {
    $(finalMessage).text('tuez moi');
}

function winEquipe2() {
    $(finalMessage).text('tuez moi encore');
}





  