let names = ['Naruto', 'Kakashi', 'Itachi', 'HashiRama' , 'Jiraiya' , 'Minato']
let imageMap ={
    'Naruto' : 'https://www.giantbomb.com/a/uploads/scale_small/3/33873/1700999-naruto.png',
    'Kakashi': 'https://www.giantbomb.com/a/uploads/square_small/0/1425/205122-c16.jpg',
    'Itachi' : 'https://www.giantbomb.com/a/uploads/square_small/1/19745/889862-uchiha_itachi_by_eriko_chan.png',
    'HashiRama' :'https://www.giantbomb.com/a/uploads/square_small/3/33873/1727699-first_hokage.jpg',
    'Jiraiya' : 'https://www.giantbomb.com/a/uploads/square_small/0/6042/287665-jiraiya_1.jpg',
    'Minato'  : 'https://www.giantbomb.com/a/uploads/square_small/9/97623/2222200-minato.jpg'
}
// was thinking to do the same with descriptions
let descMap ={
    'Naruto' : [
        `Naruto Uzumaki is the main protagonist in the popular manga and anime series Naruto. He is a cheerful, hyperactive,
        strong-willed, and occasionally simple-minded young shinobi from the village of Konoha (or Leaf Village)`,
        `Since Naruto has the Nine Tails Fox sealed inside him, he is able to use the Fox's chakra, which is much greater than
        the average human. Initially Naruto and the Fox hated each other, and would rarely grant Naruto his power unless they
        were going to die. Eventually, they become friends, and Naruto then refers to the fox by his name, Kurama. At this
        point, Naruto can use Kurama's chakra at will.`
    ]
}

names.forEach(name =>{
    let element = document.getElementById(name)
    if(element){
        element.src = imageMap[name] 
        element.alt = name
    }
})