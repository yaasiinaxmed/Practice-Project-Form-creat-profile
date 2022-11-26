// variables
const form = document.querySelector("#form");
const inputs = document.querySelectorAll("input[type='text']");
const uploadImage = document.querySelector("#file-img");
const img = document.querySelector("#img");
const profile = document.querySelector(".profile");
const firstName = document.querySelector("#first-name");
const LastName = document.querySelector("#last-name");
const Subject = document.querySelector("#Subject");
const container = document.querySelector(".container");

const showError = (input,massage) => {
    let Aabaha = input.parentElement;
    Aabaha.classList = 'box-input error';
    const iconSucces = Aabaha.querySelectorAll("i")[0];
    const iconError = Aabaha.querySelectorAll("i")[1];
    const small = Aabaha.querySelector("small");
    iconError.style.visibility = 'visible';
    iconSucces.style.visibily = 'hidden';
    small.innerText = massage;
}

function viewProfile() {
    form.style.display = 'none';
    container.innerHTML = 
    `
    <div class="profile">
      <h2>Your <span>Profile</span></h2>
     <div class="content">
       <img src="${img.src}" alt="">
       <h3 class="full-name">${firstName.value} <span>${LastName.value}</span></h3>
       <p>${Subject.value}</p>
     </div>
   </div>

    `
}

const showSucces = (input) => {
    let Aabaha = input.parentElement;
    Aabaha.classList.add("succes");
    const iconSucces = Aabaha.querySelectorAll("i")[0];
    const iconError = Aabaha.querySelectorAll("i")[1];
    const small = Aabaha.querySelector("small");
    iconSucces.style.visibility = 'visible';
    iconError.style.visibility = 'hidden';
    small.style.display = 'none';

    setTimeout( () => {
       viewProfile();
    }, 3000);
}

function checkValue(elements) {
    elements.forEach(element => {
        if(element.value === '') {
            showError(element,'Please fill out this field')
        } else {
            showSucces(element);
        }
    });
}

const checkImg = (parentElement) => {
    uploadImage.addEventListener("change", (e) => {
        if(e.target.files.lenght == 0) {
            return;
        }
        let file = e.target.files[0];
        let url = URL.createObjectURL(file);
        img.src = url;

    })
    
}


form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkValue(inputs)

})


checkImg();
