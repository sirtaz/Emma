const sentences = [
    "I am proud of James because he is cool.",
    "Hemi is nice because he read Sharks to me.",
    "Opara is awesome because she helps me in Shelley’s class.",
    "Jessie is kind and hilarious and helpful and cool.",
    "Shannon is fun and cool and trustful and trusting.",
    "Connie is cool and helpful and caring and cheerful and kind.",
    "Charlotte is incredible because she is helpful.",
    "I am proud of Ruby because she can read.",
    "I am proud of Macy because she is good at maths.",
    "Opara is awesome because she helps me.",
    "Scott is amazing because he is nice to me.",
    "Opara you are the best friend and you are awesome because you play with me.",
    "Jameson you are the best brother.",
    "Ana is caring because she looks after little kids.",
    "Rose is fabulous because she has lovely style.",
    "Sam is successful because he hunts.",
    "Toby is hilarious because he is goofy.",
    "I am proud of Ava because she is always kind.",
    "Kinny is awesome and lovely because she is so strong and hard working.",
    "Fern you are my best friend and you are so lovely and you are awesome.",
    "Laura is my BFF and she always helps me, she’s so amazing because she is so happy.",
    "Poppy you are so wonderful and you always make me happy.",
    "I am proud of Scott because of his writing.",
    "I am happy for Laura because she is a good friend.",
    "I am proud of Connie because she is amazing.",
    "I think Kinny is brave because when she was scared in class she stayed.",
    "Laura is helpful because she cleans the school.",
    "Angi is kind because when I am sad she cheers me up.",
    "Macy is awesome because she helps her mum when she does not need to.",
    "I am proud of Tilly because she is good at maths.",
    "Charlotte is awesome because she is good at silks.",
    "Kinny is so kind because she is nice to people.",
    "Laura is brilliant because she is thoughtful.",
    "Braxton is amazing because he’s helpful.",
    "Sam is kind because he’s nice.",
    "Ana is loving because she is good.",
    "Jessie is kind and hilarious and helpful.",
    "Shannon is fun and cool and trustful and trusting.",
    "Connie is cool and helpful and caring and cheerful and kind.",
    "Shelley is cool and cheerful and kind and helpful and funny.",
    "Macy is amazing at helping me and she loves me.",
    "Jeneya is very caring because she is helpful when the juniors get hurt.",
    "Kinny is very pretty because her hair is nice.",
    "Rose is hilarious because she makes me laugh.",
    "Sam is a brilliant hunter.",
    "Ava is wonderful because she always helps me.",
    "Poppy is very confident because she is proud of herself.",
    "Kinny is funny because she has good jokes.",
    "Connie is cool because she can train a dinosaur.",
    "Shannon is crazy because he makes learning fun.",
    "Jenaya is smart because she learns.",
    "Sam is awesome because he’s a good hunter.",
    "I am proud of Connie because she is beautiful.",
    "Jenaya is lovely because she is nice.",
    "T.K. is good at soccer.",
    "Islay is wonderful because she is kind.",
    "Vicky is helpful to Jethro.",
    "Kinny is caring to her friends.",
    "Poppy is helpful to her friends.",
    "Scott is brilliant at basketball.",
    "Hunter is very funny.",
    "Hemi is fabulous at rugby.",
    "Esme is good at soccer.",
    "Angi is nice to her friends.",
    "Shelley is a good teacher.",
    "Fern is pretty because she dresses good.",
    "I like Toby because he is so funny and tells funny jokes.",
    "Angi is funny because she makes me laugh.",
    "I like Ruby and she makes me proud.",
    "Esme is awesome because she is good at writing.",
    "Jameson is amazing because he is good at soccer.",
    "I am proud of Stevie-Leigh because she is awesome at reading.",
    "I like my nice sister Ana because she is awesome to me.",
    "Rose is amazing because she is a good friend.",
    "I like Connie because she is a good teacher.",
    "I am proud of Jamez because he is cool.",
    "I am proud of P.J. because he is always kind and caring.",
    "Laura is great because she helps me.",
    "Charlotte is incredible because she is helpful.",
    "Sloan is awesome because he is funny.",
    "Hemi is nice because he read Sharks to me.",
    "Opara is awesome because she helps me in Shelley’s class.",
    "T.K. is nice because he always plays with me.",
    "Sam is incredible because he is great at soccer.",
    "Braxton is cool because he is a good friend.",
    "Hemi is fantastic at rugby.",
    "Jack is fabulous at basketball.",
    "Talisa is awesome because he knows his times tables.",
    "Braxton is a great friend.",
    "Angi is nice because she shares her rubber.",
    "Jack is funny and smart.",
    "Jack is cool and kind.",
    "I am proud of Poppy because she is good at reading.",
    "T.K. is fantastic because he is good at soccer.",
    "Esme is wonderful because she is good at tag.",
    "Jethro is amazing because he can read year 6 books.",
    "Tiaan is fantastic because he is on 2B.",
    "I’m proud of Braxton because he is on the same level of reading as me.",
    "Sam is an incredible hunter.",
    "P.J. is so funny and a good friend.",
    "Jamez is brilliant because he is awesome.",
    "Hunter is kind.",
    "Sloan is a great friend.",
    "Jameson is awesome because he plays soccer.",
    "P.J. is cool because he plays rugby catches with me.",
    "Hemi is fantastic because he laughs with me.",
    "Sloan is brilliant because he is fast at tag.",
    "Tilly you are my best friend because you always play with me and when I get an accident you make me better.",
    "I am proud of Connie being a teacher.",
    "I am graceful of Connie about her work.",
    "James is intelligent because he makes cool inventions.",
    "Islay is helpful for teaching Jethro.",
    "Hemi is funny because of him I laugh."
];

const images = [
    "image1.png",
    "image2.png",
    "image3.png"
];

function getRandomSentence() {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    return sentences[randomIndex];
}

function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

function displayContent() {
    const sentenceContainer = document.getElementById('sentence-container');
    const imageContainer = document.getElementById('image-container');
    
    let sentence = getRandomSentence();
    let image = getRandomImage();
    
    sentenceContainer.textContent = sentence;
    imageContainer.src = image;
}

function startDisplayingContent() {
    displayContent();
    setInterval(displayContent, 10000); // Change sentence and image every 10 seconds
}

window.onload = startDisplayingContent;