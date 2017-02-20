// Dictionnaires stagiaires
var stag1 = {
    nom:"****",
    prenom:"***********",
    age:25
}
var stag2 = {
    nom:"*****",
    prenom:"********",
    age:20
}
var stag3 = {
    nom:"******",
    prenom:"*******",
    age:19
}
var stag4 = {
    nom:"*******",
    prenom:"******",
    age:22
}
var stag5 = {
    nom:"********",
    prenom:"*****",
    age:23
}
// Tableau classe
var classe = [stag1, stag2, stag3, stag4, stag5];
// Variable âge minimum défini à 200
var ageMin = 200;
// Boucle pour parcourir tableau
for(var i = 0; i < classe.length; i++){
// Comparaison âge
    if(classe[i].age < ageMin){
// Age minimum changé à chaque tour de boucle
        ageMin = classe[i].age;
    }
};
// Fin de boucle, on affiche l'âge du plus jeune stagiaire
console.log(ageMin);
