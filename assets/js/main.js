// Ottenere Nome, Cognome, Colore Preferito, anno di nascita dall'Utente

  var nome = prompt('Inserisci il tuo nome', '');
  var cognome = prompt('Inserisci il tuo cognome', '');
  var colorepref = prompt('Inserisci il tuo colore preferito', '');
  var anno = prompt('Inserisci il tuo anno di nascita', '');


  console.log(nome, cognome, colorepref, anno);

// Ottenere orario dal sistema

// Generare password

document.getElementById('ut-nome').innerHTML = nome + ' ' + cognome;
document.getElementById('ut-colorepref').innerHTML = colorepref;
document.getElementById('ut-anno').innerHTML = anno;
document.getElementById('passgen').innerHTML = nome + cognome + colorepref + anno ;




// Trasforma il risultato tutto in LOWERCASE
var lowerCase = document.getElementById('passgen').innerHTML;
document.getElementById('passgen').innerHTML = lowerCase.toLowerCase();
