/* Impostazione variabili per elementi del mark-up */
const f_name_input = document.getElementById('full-name');
const distance_input = document.getElementById('distance');
const age_select = document.getElementById('age');
const generate_button = document.getElementById('generate');
const cancel_button = document.getElementById('cancel');

let info;
let inform;

//Chiedere all'utente il nome, il numero di chilometri che vuole percorrere e l'età mediante il form.

// Dopo aver inserito i propri dati, cliccando su Genera, il software li mostra nel ticket
generate_button.addEventListener('click', function () {
  
  const fullName = f_name_input.value;
  const km_to_do = distance_input.value;
  const age = age_select.value;
  //console.log(fullName, km_to_do, age);

  //Calcolo del prezzo totale del viaggio, a seconda che sia quello standard oppure soggetto a sconto del 20% 0 del 40%

  let ticket_price = km_to_do * 0.21
  //console.log(ticket_price);


  /* if (isNaN(km_to_do)) {
    //console.log("Attenzione: devi inserire valori numerici");
  } passaggio superfluo, in quanto ho modificato il type dell'input da "text" a "number" */
  
  if (age == 'minorenne') {
    ticket_price = ticket_price - (ticket_price * 0.2);
    info = `${fullName} Ecco a te il 20% di sconto, giovane Skywalker. <br> Prezzo biglietto stellare: ${ticket_price.toFixed(2)} ${"€"}`;
    console.log(info);
    inform = `Sconto del 20% giovane Skywalker✔`
    //console.log(ticket_price);
    //console.log(info);

  } else if (age == 'over65') {
    ticket_price = ticket_price - (ticket_price * 0.4)
    info = `${fullName} Saggio Yoda, per i tuoi servigi meriti uno sconto del 40%. <br> Prezzo biglietto stellare: ${ticket_price.toFixed(2)} ${"€"}`
    console.log(info);
    inform = `Sconto del 40% Saggio Yoda🙌`
    //console.log(ticket_price);
    //console.log(info);

  } else {
    info = `${fullName} Per te Stormtrooper vale il prezzo per intero. Prezzo pieno del biglietto stellare: ${ticket_price.toFixed(2)} ${"€"}`
    console.log(info);
    inform = `Spiacente! <br> Prezzo pieno caro Stormtrooper😎`
    //console.log(ticket_price);
    //console.log(info);
  }

  // L'output delle info relative all'utente vengono visualizzate nella scheda in basso

  const carrozza = Math.floor(Math.random() * 10) + 1;
  const cp_code = Math.floor(Math.random() * 100000);

  document.querySelector('.passenger_name').innerHTML = fullName;
  document.querySelector('.offer_type').innerHTML = inform;
  document.querySelector('.carrozza').innerHTML = carrozza;
  document.querySelector('.cp_code').innerHTML = cp_code;
  document.querySelector('.ticket_price').innerHTML = ticket_price.toFixed(2) + `${" €"}`;

});


// Il pulsante annulla rimuove tutte le informazioni dalla pagina per un ulteriore inserimento
cancel_button.addEventListener('click', function () {
  fullName = ""
  age = "minorenne"
  km_to_do = ""

  document.querySelector('.passenger_name').innerHTML = "";
  document.querySelector('.offer_type').innerHTML = "";
  document.querySelector('.carrozza').innerHTML = "";
  document.querySelector('.cp_code').innerHTML = "";
  document.querySelector('.ticket_price').innerHTML = "";

});