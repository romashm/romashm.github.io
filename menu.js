const section = ["Head", "Mid", "Text1"];
section.forEach(Attr);
function Attr(value) {
    console.log(value)

    document.getElementById(value).addEventListener('submit', (e) => {
        e.preventDefault();
        const Preview = document.getElementById("Preview")

        if (section[0] == value) {
            const NewElement = document.createElement("p")
            NewElement.classList.add("Header")
            NewElement.innerText = document.getElementById("Header").value
            Preview.append(NewElement)
        } else if (section[1] == value) {
            const NewElement = document.createElement("p")
            NewElement.classList.add("Middle")
            NewElement.innerText = document.getElementById("Review").value
            Preview.append(NewElement)
        } else {
            const NewElement = document.createElement("p")
            NewElement.classList.add("Middle")
            NewElement.innerText = document.getElementById("Text").value
            Preview.append(NewElement)
        }
    });
}