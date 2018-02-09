var elem = "[ ~ ]",
    pyram = "",
    space = "     ",
	count = 1,
	floors = Number(prompt("Please enter natural number N (0 < N <= 20):", "3")),
	spaces = floors - 1;

if (floors === (floors ^ 0) && floors > 0 && floors <= 20) {
    while (floors) {
        for (var i = 0; i < spaces; i++) {
            pyram += space;
        }
        for (var i = 0; i < count; i++) {
            pyram += elem;
        }
        for (var i = 0; i < spaces; i++) {
            pyram += space;
        }
        pyram += "\n";
        spaces--;
        floors--;
        count += 2;
    }
    console.log(pyram);
} else {
    console.error("Incorrect!");
}