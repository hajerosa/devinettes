
  var alea=Math.floor(Math.random() * 100) + 1;
  var test=false;
  var i=0;
  while(i<5 && !test)
  {
      var choix = prompt("choisissez un entier:");
      if(choix==aléa)
          {
              console.log("bravo!");
              console.log("la réponse correcte est:"+choix);
              console.log("vous avez gagné à la"+ (i+1) +"éme tentative ");
              test=true;
          }
      else if(choix<alea)
          {
              console.log(" plus grand  "+choix);
              console.log("il vous reste "+(4-i)+" tentatives");
          }
      else 
      {
          console.log("plus petit  "+choix);
          console.log("il vous reste "+(4-i)+" tentatives");
      }
      i+=1;
  }
  if(!test)
  {
      console.log("vous avez perdu 😞 ");
      console.log("réponse juste: "+ alea);
  }