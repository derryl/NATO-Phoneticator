(function() {

  const log    = console.log.bind( console ),
        input  = document.getElementById('input')
        output = document.getElementById('output');

  let dict = {
      "A": "Alfa",
      "B": "Bravo",
      "C": "Charlie",
      "D": "Delta",
      "E": "Echo",
      "F": "Foxtrot",
      "G": "Golf",
      "H": "Hotel",
      "I": "India",
      "J": "Juliett",
      "K": "Kilo",
      "L": "Lima",
      "M": "Mike",
      "N": "Nectar",
      "O": "Oscar",
      "P": "Papa",
      "Q": "Quebec",
      "R": "Romeo",
      "S": "Sierra",
      "T": "Tango",
      "U": "Uniform",
      "V": "Victor",
      "W": "Whiskey",
      "X": "X-ray",
      "Y": "Yankee",
      "Z": "Zulu"
  };

  function processInput( e ) {
    let text   = e.target.value.replace(/[^A-z]/gi, ''),
        chars  = text.split(''),
        result = '';

    input.value = text;

    chars.forEach( function( char ) {
      result += phonetifyLetter( char ) + '</br>';
    });

    output.innerHTML = result;
  }

  function phonetifyLetter( letter ) {
    letter = letter.toUpperCase();
    let result = `<span class='circled'>${letter}</span> as in <b>${dict[letter]}</b>`;
    return result;
  }

  input.addEventListener('keyup', processInput);

})()
