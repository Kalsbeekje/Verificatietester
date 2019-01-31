//openingsboodschap
  alert('Welom bij de verificatie tester \nJe krijgt zo de optie om 5 sleutelwoorden op te geven')


  //Alle variabelen die nodig zijn voor dit script
  var sleutelwoord;
  var keuzemenu;
  var toegangVerleend = 'Correct je hebt nu toegang tot de informatie';
  var addSleutel;
  var juisteIngave;
  var removeSleutel;
  var loop = 1

  //Onderstaand de Array die gebruikt worden in dit script
  var sleutel_arr = [prompt('Wat wordt je eerste sleutelwoord'),
    prompt('Wat wordt je tweede sleutelwoord'),
    prompt('Wat wordt je derde sleutelwoord'),
    prompt('Wat wordt je vierde sleutelwoord'),
    prompt('Wat wordt je vijfde sleutelwoord')
  ];

  var menu_arr = [1, 2, 3, 4, 5];




  //onderstaand is de check op sleutelcode
  function checkValue1(value1, sleutel_arr) {
    var status1 = 'Dit is niet het juiste sleutelwoord';

    for (var s = 0; s < sleutel_arr.length; s++) {
      var name1 = sleutel_arr[s];
      if (name1 == value1) {
        status1 = toegangVerleend;
        break;
      }
    }

    return status1;
  }

  //onderstaand is de check op keuzemenu
  function checkValue2(value2, menu_arr) {
    var status2 = 'Geen juiste ingave';

    for (var k = 0; k < menu_arr.length; k++) {
      var optiemenu = menu_arr[k];
      if (optiemenu == value2) {
        status2 = juisteIngave
        break;
      }
    }

    return status2;
  }



  sleutelwoord = prompt('Geef een sleutelwoord om toegang te krijgen tot de informatie');

  alert(checkValue1(sleutelwoord, sleutel_arr));

  do {

    if ((checkValue1(sleutelwoord, sleutel_arr)) == toegangVerleend) {
      keuzemenu = prompt('Geef een keuze wat je wilt doen' +
        '\n1. Toevoegen van een sleutelwoord' +
        '\n2. Verwijderen van een sleutelwoord' +
        '\n3. Alle sleutelwoorden weergeven ' +
        '\n4. Dit programma beeindigen')
    }

    if ((checkValue2(keuzemenu, menu_arr)) == juisteIngave) {


      if (keuzemenu == 1) {
        addSleutel = prompt('Welk sleutelwoord wil je toevoegen');
        sleutelwoord = prompt('Geef een sleutelwoord om toegang te krijgen');
        if ((checkValue1(sleutelwoord, sleutel_arr)) == toegangVerleend) {
          sleutel_arr.push(addSleutel);
        } else {
          alert('Het gewenste sleutelwoord is niet toegevoegd' +
            '\nVraag om het juiste sleutelwoord en probeer nogmaals')
        }
        loop = 2
      } else if (keuzemenu == 2) {
        removeSleutel = prompt('Welk sleutelwoord wil je verwijderen');
        sleutelwoord = prompt('Geef een sleutelwoord om toegang te krijgen');
        if ((checkValue1(sleutelwoord, sleutel_arr)) == toegangVerleend) {
          for (var d = 0; d < sleutel_arr.length; d++) {
            if (sleutel_arr[d] === removeSleutel) {
              sleutel_arr.splice(d, 1);
            }
          }
        } else {
          alert('Het gewenste sleutelwoord is niet verwijderd' +
            '\nVraag om het juiste sleutelwoord en probeer nogmaals')
        }
        loop = 2
      } else if (keuzemenu == 3) {
        alert(sleutel_arr);
        loop = 2
      } else if (keuzemenu == 4) {
        alert('Programma is nu beeindigd' +
          'Bedankt voor het gebruik van de verificatie tester');
        loop = 10
      }
    }
  } while (loop < 5)
}
