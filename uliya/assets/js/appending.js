function onFile(event) {
    event.preventDefault();
    var selectedFile = document.getElementById("ingredient_file").target.files[0];
    var reader = new FileReader();
    
    const Preview = document.getElementById("drop-items");
    reader.onload = function(event) {
        Preview.innerHTML += `
        <div class="drop_card">
            <div class="drop_data">
                <img src="${event.target.result}" alt="img1" class="drop_img">
                <div>
                    <h1 class="drop_name">${document.getElementById("action").value}</h1>
                    <span class="drop_profession">${document.getElementById("time").value}</span>
                </div>
            </div>
        </div>
        `;
    }
  
    reader.readAsDataURL(selectedFile);
}