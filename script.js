const appBody = document.querySelector(".appBody"),
    text = appBody.querySelector("h3"),
    appInput = appBody.querySelector("input");

let myFile;

appBody.addEventListener("dragover", function (event) {
    event.preventDefault();
    this.classList.add("active");
    text.textContent = "Release to Upload";
});

appBody.addEventListener("dragleave", function () {
    this.classList.remove("active");

    text.textContent = "Drag and Drop";
});

appInput.addEventListener("change", function (event) {
    myFile = this.files[0];
    appBody.classList.add("active");
    showPhoto();
});

appBody.addEventListener("drop", (event) => {
    event.preventDefault();
    myFile = event.dataTransfer.files[0];
    showPhoto();
});

function showPhoto() {
    let validExt = ["image/jpeg", "image/jpg", "image/png"];
    let fileType = myFile.type;
    console.log(fileType);
    if (validExt.includes(fileType)) {
        let fileReader = new FileReader();

        fileReader.onload = function () {
            let imageUrl = this.result;
            let img = `<img src="${imageUrl}" alt='image'/>`;
            appBody.innerHTML = img;
        };
        fileReader.readAsDataURL(myFile);
    } else {
        alert("Please Select or drop a image");
    }
}
