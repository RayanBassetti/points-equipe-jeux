var finalMessage = document.querySelector("#final_message");

var points = 0; // initialazing the number of points of each team at the start, 0

$('#button_equipe_1').click(function(){ // we assign to the button with the id "button_equipe_1" a function triggered on click
   var trigerred = true; // we create a variable which will trigger the ending message
   points = Number(points) + Number($(this).val()); // ligne that adds a point
    $('#points_equipe_1').text(points); // finally, we change the HTML value of the ID  "points_equipe_1"
        trigerred = false; // une fois la dernière étape actionnée, notre variable crée plus tôt devient fausse
        if (trigerred == false && points == 10) { // on lance la fonction / condition pour avoir le texte : si la fonction de base a fini de s'actionner, et que l'équipe est à 10 points
            winEquipe1(); // alors on actionne la fonction
            $('#button_equipe_1').css("display", "none");
            $('#button_equipe_2').css("display", "none");
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
    $(finalMessage).text('VICTOIRE POUR L\'EQUIPE 1 !');
}

function winEquipe2() {
    $(finalMessage).text('VICTOIRE POUR L\'EQUIPE 2 !');
}





  