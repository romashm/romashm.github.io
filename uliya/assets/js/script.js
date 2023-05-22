const data = {}
var dict = {}

function handleInput(e) {
    data[e.name] = e.value;
    document.getElementById("title").innerText = data.Header;
}

function onFileSelected(event) {
    event.preventDefault();
    var selectedFile = event.target.files[0];
    var reader = new FileReader();
    
    const Preview = document.getElementById("add_info");
    reader.onload = function(event) {
        // console.log(event);
        Preview.innerHTML += `
            <div class="block-image"><img src="${event.target.result}" alt="Post Image"></div>
        `;
    }
  
    reader.readAsDataURL(selectedFile);
}

const section = [
    "Text_form", "Quote_form"
]
section.forEach(Attr);
function Attr(value) {
    document.getElementById(value).addEventListener('submit', (e) => {
        e.preventDefault();
        const Preview = document.getElementById("add_info");
        console.log(value)

        switch (value) {
            case 'Text_form':
                const NewElement = document.createElement("p");
                NewElement.innerText = document.getElementById("text").value;
                Preview.append(NewElement);
                break;
            case 'Quote_form':
                Preview.innerHTML +=
                    `
                    <blockquote class="wp-block-quote">
                            <img src="assets/images/blog/quote.png" alt="quote image">
                            <h3>
                                ${document.getElementById("Quote").value}    
                            </h3>
                            <span>${document.getElementById("Quote_owner").value}</span>
                        </blockquote>
                    `;
                break;
            default: alert("Что-то не так")
        }
    })
}

