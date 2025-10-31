/* 
    Add the class good/evil to make the character show when the good or evil slider is toggled. Simply leave no class to have 
    the card always show. This is good for morally ambiguous characters. 
*/
const toggleInput = document.getElementById("toggle-input");
const toggleSlider = document.getElementById("toggle-slider");

const goodCharacters = document.getElementsByClassName("good");
const heroimg = document.getElementsByClassName("heroimg");
const goodCharactersArray = Array.from(goodCharacters);

const evilCharacters = document.getElementsByClassName("evil");
const vilimg = document.getElementsByClassName("vilimg");
const evilCharactersArray = Array.from(evilCharacters);

const isToggled = toggleInput.checked;
if (isToggled) {
    hideCharacters(goodCharactersArray);
} else {
    hideCharacters(evilCharactersArray);
}

toggleInput.addEventListener("change", () => {
    toggleSlider.style.left = toggleInput.checked ? "50%" : "0";
    
    if (!toggleInput.checked) {
        showCharacters(goodCharactersArray);
        hideCharacters(evilCharactersArray);
        addSlideInAnimation(heroimg);
    } else {
        showCharacters(evilCharactersArray);
        hideCharacters(goodCharactersArray);
        addSlideInAnimation(vilimg);
    }
});

function hideCharacters(characters) {
    characters.forEach(character => {
        character.classList.add("hide");
    });
}

function showCharacters(characters) {
    characters.forEach(character => {
        character.classList.remove("hide");
    });
}


function addSlideInAnimation(images) {
    images.forEach(image => {
        image.classList.add("slide-in");
    });
}

function hideSlideInAnimation(images) {
    images.forEach(image => {
        image.classList.remove("slide-in");
    });
}

evilCharactersArray.forEach(character => {
    console.log(character);
})
goodCharactersArray.forEach(character => {
    console.log(character);
})

