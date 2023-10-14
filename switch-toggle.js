/* 
    Add the class good/evil to make the character show when the good or evil slider is toggled. Simply leave no class to have 
    the card always show. This is good for morally ambiguous characters. 
*/
const toggleInput = document.getElementById("toggle-input");
const toggleSlider = document.getElementById("toggle-slider");

const goodCharacters = document.getElementsByClassName("good");
const goodCharactersArray = Array.from(goodCharacters);

const evilCharacters = document.getElementsByClassName("evil");
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
    } else {
        showCharacters(evilCharactersArray);
        hideCharacters(goodCharactersArray);
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

evilCharactersArray.forEach(character => {
    console.log(`${character} is evil`);
})
goodCharactersArray.forEach(character => {
    console.log(`${character} is good`);
})

