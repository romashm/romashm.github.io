const popup = [
    "Easy", "Difficulty", "Set", "Exer", "Para", "Sur", "Legs", "Rotate", "Shava", "num1", "num2", "long", "short", "hand", "a1", "a2", "a3", "a4", "a5", "a6", "a7"
]

const pop = ["Settings","Add_1","Add_2","Pose"]
// popup.forEach(Real);
// function Real(abs) {
//     document.getElementById(abs).addEventListener('click', (e) => {
//         e.preventDefault();

//     })
// }

document.getElementById("Difficulty").addEventListener('click', () => {
    document.getElementById(`${pop[0]}`).style.display = "block";
})

function Sur() {
    document.getElementById(`${pop[3]}`).style.display = "none";
    document.getElementById(`${pop[1]}`).style.display = "block";
}

function num2() {
    document.getElementById(`${pop[3]}`).style.display = "none";
    document.getElementById(`${pop[2]}`).style.display = "block";
}

function Pose() {
    document.getElementById(`${pop[1]}`).style.display = "none";
    document.getElementById(`${pop[3]}`).style.display = "block";
    document.getElementById(`${pop[2]}`).style.display = "none";
}