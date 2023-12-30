//data
const characters = [
    {
        name: ["Naruto", "Naruto Uzumaki", "Uzumaki Naruto"],
        hints: [
            "A child born during a time of conflict and upheaval in the ninja world.",
            "Sought to realize peace, believing in achieving it through pain and suffering.",
            "Became a beacon of hope and understanding for many, inspiring change through unwavering determination.",
            "Stood against former comrades, challenging their ideals and seeking to break the cycle of hatred.",
            "Become hokage is his dream."
        ],
        image: "./Images/naruto_ai.jpg"
    },
    {
        name: ["Sasuke", "Sasuke Uchiha", "Uchiha Sasuke"],
        hints: [
            "Bearer of the Uchiha name, veiled in mystery and tragedy.",
            "Possesses a compelling Sharingan, a mirror of his brother's power.",
            "Haunted by the shadows of a dark past, fostering vengeance.",
            "Torn between duty, family ties, and a pursuit for retribution.",
            "A skilled wielder of Chidori, channeling lightning's might."
        ],
        image: "./Images/sasuke_ai.jpg"
    },
    {
        name: ["Sakura", "Sakura Haruno", "Haruno Sakura"],
        hints: [
            "A female ninja adept in medical techniques, rising during a turbulent era",
            "Possesses remarkable strength and healing abilities",
            "Grew from a young, ambitious girl into a powerful force within her village",
            "Has exceptional chakra control",
            "Early rivalry and competition with a close friend"
        ],
        image: "./Images/sakura.jpg"
    },
    {
        name: ["Kakashi", "Kakashi Hatake", "Hatake Kakashi"],
        hints: [
            "The theme of loss, legacy, and redemption is strongly associated with this character",
            "This character is known for his proficiency in using the Sharingan",
            "Chidori user",
            "Part of team 7",
            "He is recognized for his silver hair"
        ],
        image: "./Images/Kakashi_Hatake.png"
    },
    {
        name: ["Jiraiya"],
        hints: [
            "A teacher leaving behind a significant legacy for the future.",
            "Holds a special bond with a former teammate",
            "Summons otherworldly allies",
            "Part of an esteemed trio",
            "pervy"
        ],
        image: "./Images/287665-jiraiya_1.jpg"
    },
    {
        name: ["Orochimaru"],
        hints: [
            "Formerly of the Hidden Leaf Village",
            "Wants a body for more power",
            "Former member of the Legendary trio",
            "Uses snake-related jutsu",
            "Seeks immortality"
        ],
        image: "./Images/orochimaru.jpg"
    },
    {
        name: ["Hinata", "Hinata Hyuga", "Hyuga Hinata"],
        hints: [
            "Member of the Hyuga clan",
            "Byakugan user",
            "Develops the Gentle Fist technique",
            "Has a gentle disposition",
            "Has a crush on Naruto"
        ],
        image: "./Images/hinata_hyuga.jpg"
    },
    {
        name: ["Shikamaru", "Shikamaru Nara", "Nara Shikamaru"],
        hints: [
            "Lazy but highly intelligent",
            "Strategic thinker",
            "Part of Team 10",
            "Shadow Manipulation Jutsu user",
            "Becomes a Chunin during the Chunin Exams"
        ],
        image: "./Images/shikamaru.jpg"
    },
    {
        name: ["Gaara"],
        hints: [
            "Jinchuriki",
            "Had a traumatic childhood",
            "Initially an antagonist",
            "from the Hidden Sand Village",
            "Has control over sand" 
        ],
        image: "./Images/gaara.jpg"
    },
    {
        name: ["Rock Lee", "Lee", "Rock"],
        hints: [
            "Taijutsu specialist",
            "Believes in hard work over natural talent",
            "Wears green jumpsuit",
            "Cannot use ninjutsu or genjutsu",
            "Disciple of Might Guy",
        ],
        image: "./Images/Rock-Lee.jpg"
    },
    {
        name: ["Neji", "Neji Hyuga", "Hyuga Neji"],
        hints: [
            "Member of the Hyuga clan",
            "Byakugan user",
            "Develops the Gentle Fist technique",
            "Fate determined by destiny",
            "Initially holds a grudge against Hinata"
        ],
        image: "./Images/neji-hyuga.jpg"
    },
    {
        name: ["Tenten"],
        hints: [
            "Weapon specialist",
            "Part of Team Guy",
            "Proficient in various ninja tools",
            "Uses summoning scrolls",
            "Aspires to be like legendary weaponsmiths"
        ],
        image: "./Images/Tenten.jpg"
    },
    {
        name: ["Kiba", "Kiba Inuzuka", "Inuzuka Kiba"],
        hints: [
            "Member of the Inuzuka clan",
            "Uses beast-like taijutsu",
            "Has enhanced sense of smell",
            "Has a dog companion",
            "Part of Team 8"
        ],
        image: "./Images/kiba inuzuka.jpg"
    },
    {
        name: ["Shino", "Shino Aburame", "Aburame Shino"],
        hints: [
            "Member of the Aburame clan",
            "Uses insects as weapons",
            "Has a stoic personality",
            "Part of Team 8",
            "Masters the Parasitic Giant Beetle Jutsu"
        ],
        image: "./Images/Shino Aburame.jpg"
    },
    {
        name: ["Ino", "Ino Yamanaka", "Yamanaka Ino"],
        hints: [
            "Uses her family's clan techniques",
            "Has a rivalry with a close friend",
            "Part of Team 10",
            "Has mind-transfer jutsu",
            "Works at a flower shop"
        ],
        image: "./Images/1701241-ino.jpg"
    },
    {
        name: ["Choji", "Choji Akimichi", "Akimichi Choji"],
        hints: [
            "Part of Team 10",
            "Has a love for food",
            "Uses Human Bullet Tank jutsu",
            "Member of the Akimichi clan",
            "Struggles with self-confidence"
        ],
        image: "./Images/choji.jpg"
    },
    {
        name: ["Tsunade"],
        hints: [
            "Has incredible strength",
            "Master of medical ninjutsu",
            "Has a fear of blood",
            "Legendary Sannin",
            "Fifth Hokage"
        ],
        image: "./Images/Tsunadexx.png"
    },
    {
        name: ["Jugo"],
        hints: [
            "Possesses Sage Transformation",
            "Has the ability to absorb natural energy",
            "Has a volatile and unpredictable nature",
            "Cursed with uncontrollable rage",
            "Part of Sasuke's team"
        ],
        image: "./Images/Jugo.png"
    },
    {
        name: ["Suigetsu"],
        hints: [
            "Swordsman",
            "Wants to collect all the swords",
            "Desires to reform the Seven Ninja Swordsmen",
            "Can turn his body into liquid",
            "Part of Sasuke's team"
        ],
        image: "./Images/Suigetsu.jpeg"
    },
    {
        name: ["Karin"],
        hints: [
            "Part of Sasuke's team",
            "Has a past with Orochimaru",
            "Fiercely loyal to Sasuke",
            "Has sensory abilities",
            "Has healing abilities"
        ],
        image: "./Images/Karin.png"
    },
    {
        name: ["Itachi", "Itachi Uchiha", "Uchiha Itachi"],
        hints: [ 
            "Former ANBU member",
            "Give life for village",
            "Has the Mangekyo Sharingan",
            "Certain Someone",
            "Massacred the Uchiha clan"
        ],
        image: "./Images/itachi-uchiha-naruto.jpg"
    },
    {
        name: ["Kisame"],
        hints: [
            "Swordsman",
            "Partnered with Itachi",
            "Member of the Akatsuki",
            "Has shark-like features",
            "Uses Samehada as his weapon"
        ],
        image: "./Images/kisame_hoshigaki.jpg"
    },
    {
        name: ["Pain", "Nagato", "Yahiko"],
        hints: [
            "member of the Akatsuki",
            "Former student of Jiraiya",
            "Possesses the Rinnegan",
            "Believes in achieving peace",
            "Uses the Six Paths of Pain technique"
        ],
        image: "./Images/1688202-nagato_six_paths_of__pain.jpg"
    },
    {
        name: ["Konan"],
        hints: [
            "member of the Akatsuki",
            "Former student of Jiraiya",
            "Devoted to Yahiko's ideals",
            "Childhood friend of Yahiko",
            "Uses paper-based jutsu",
        ],
        image: "./Images/Konan.jpg"
    },
    {
        name: ["Deidara"],
        hints: [
            "Member of the Akatsuki",
            "Fights using long-range techniques",
            "Artistic approach to battles",
            "Uses explosive clay as a weapon",
            "Has mouths on his palms",
           
        ],
        image: ",/Images/deidara69.jpg"
    },
    {
        name: ["Sai"],
        hints: [
            "Part of Team 7",
            "Uses ink-based jutsu",
            "Initially lacks emotions",
            "Skilled in espionage",
            "Joins Team 7 after Sasuke's departure"
        ],
        image: "./Images/Sai_Infobox.png"
    },
    {
        name: ["Yamato"],
        hints: [
            "An ANBU captain",
            "Has Wood Style jutsu",
            "Trained to suppress Nine-Tails' chakra in Naruto",
            "Assigned to Team 7 as a replacement for Kakashi",
            "Uses Hashirama Senju's cells"
        ],
        image: "./Images/326748-yamato.jpg"
    },
    {
        name: ["Kurenai", "Kurenai Yuhi", "Yuhi Kurenai"],
        hints: [
            "Genjutsu specialist",
            "Part of Team 8",
            "Has a child with Asuma",
            "Trains Hinata in genjutsu",
            "Initially has a romantic interest in Asuma"
        ],
        image: "./Images/KurenaiYuhi.jpg"
    },
    {
        name: ["Asuma", "Asuma Sarutobi", "Sarutobi Asuma"],
        hints: [
            "Son of the Hokage",
            "Part of Team 10",
            "Wields trench knives",
            "Has a child with Kurenai",
            "Trains Shikamaru in shogi"
        ],
        image: "./Images/322897-asuma_sarutobi.jpg"
    },
    {
        name: ["Iruka", "Iruka Umino", "Umino Iruka"],
        hints: [
            "Academy instructor",
            "Cares for Naruto like a father figure",
            "Survivor of the Nine-Tails attack",
            "Kind-hearted and understanding",
            "Helps Naruto graduate from the Academy"
        ],
        image: "./Images/Iruka-Umino.jpeg"
    },
    {
        name: ["Zabuza"],
        hints: [
            "Demon of the Hidden Mist",
            "Carries a massive sword",
            "Hired as a mercenary",
            "Has a strong bond with Haku",
            "Fights Kakashi during the Land of Waves arc"
        ],
        image: "./Images/zabuza.jpg"
    },
    {
        name: ["Haku"],
        hints: [
            "Has ice-based kekkei genkai",
            "Assists Zabuza",
            "Seems delicate but is a skilled fighter",
            "Feels a strong loyalty to Zabuza",
            "Has tragic past"
        ],
        image: "./Images/Casual_Haku.png"
    }
];

//Game
let currentCharacter;
let score = 0;
let highestScore = 0;
let attemptCount = 0;

function startGame() {
    document.getElementById('score').innerText = `Score : ${score}`;
    document.getElementById('message').textContent = "";
    document.getElementById('imageContainer').innerHTML = "<div></div>";
    attemptCount = 0;
    const randomIndex = Math.floor(Math.random() * characters.length);
    currentCharacter = characters[randomIndex];
    console.log(currentCharacter);
    document.getElementById('hint').textContent = `Hint 1: ${currentCharacter.hints[0]}`;
}
function checkAnswer() {
    const guess = document.getElementById('guessInput').value.toLowerCase();
    console.log(guess);
    if (currentCharacter.name.some((el) => (el.toLowerCase() == guess))) {
        document.getElementById("start").innerText = "Continue Playing";
        score += (25 - (attemptCount * 5));
        highestScore = Math.max(highestScore, score);
        document.getElementById('high-score').innerText = `Highest Score : ${highestScore}`;
        document.getElementById('score').innerText = `Score : ${score}`;
        document.getElementById('message').textContent = "Congratulations! You guessed it right!";
        const characterImage = document.createElement("img");
        characterImage.src = currentCharacter.image;
        characterImage.id = "game-img";
        document.getElementById('imageContainer').appendChild(characterImage);
        document.getElementById('hint').textContent = '';
    } else {
        attemptCount++;
        if (attemptCount >= 5) {
            document.getElementById('message').textContent = `Sorry! You've run out of attempts. The correct answer is ${currentCharacter.name[0]}`;
            highestScore = Math.max(highestScore, score);
            score = 0;
            document.getElementById('score').innerText = `Score : ${score}`;
            document.getElementById('high-score').innerText = `Highest Score : ${highestScore}`;
            document.getElementById("start").innerText = "Start Game";
            document.getElementById('hint').textContent = '';
        } else {
            const hintNumber = attemptCount + 1;
            document.getElementById('hint').textContent = `Hint ${hintNumber}: ${currentCharacter.hints[hintNumber - 1]}`;
            document.getElementById('message').textContent = "Wrong answer! Try again.";
        }
    }
    document.getElementById('guessInput').value = '';
}
