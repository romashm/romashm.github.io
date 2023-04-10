const section = ["Head", "Mid", "Text1", "asanasub"];
section.forEach(Attr);
function Attr(value) {
    document.getElementById(value).addEventListener('submit', (e) => {
        e.preventDefault();
        const Preview = document.getElementById("Preview")
        const Asans = document.getElementById("Asans")
        let i = 1

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
        } else if (section[2] == value) {
            const NewElement = document.createElement("p")
            NewElement.classList.add("Middle")
            NewElement.innerText = document.getElementById("Text").value
            Preview.append(NewElement)
        } else if (section[3] == value) {
            const NewElement = document.createElement("div")
            NewElement.classList.add("swiper-slide-img-holder")
            // NewElement.innerHTML = document.getElementById("asana").value
            const img = document.createElement("img")
            img.src = 'support/images/about_03.jpg'
            NewElement.append(img)

            const paragr = document.createElement("p");
            paragr.classList.add("swiper-slide-number")
            paragr.innerText = `0${i}`;
            NewElement.append(paragr)

            const paragr_2 = document.createElement("p");
            paragr_2.classList.add("swiper-slide-caption-text")
            paragr_2.innerText = document.getElementById("asana").value;
            NewElement.append(paragr_2)

            const paragr_3 = document.createElement("p");
            paragr_3.classList.add("swiper-slide-caption-text")
            paragr_3.style.paddingLeft = "2em";
            paragr_3.innerText = document.getElementById("time").value;
            NewElement.append(paragr_3)

            Asans.append(NewElement)
        }
    });
}

$(document).ready(function () {
    $('a.close').click(function (event) {
        event.preventDefault();
        $('.popup').hide("slow");
    });
});