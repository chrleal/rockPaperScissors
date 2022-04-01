function computerPlay() {
    let number = Math.floor((Math.random() * 3) + 1);
    if (number == 1) {
        console.log("Pedra");
    } else if (number == 2) {
        console.log("Papel");
    } else {
        console.log("Tesoura");
    }
}

computerPlay()
