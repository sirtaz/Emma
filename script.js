const sentences = [
"Emma is brilliant with kids.",
"Emma is incredible about helping people when they need someone to talk to when Anna is not here.",
"I am proud of Emma cause she has done a lot of work.",
"Emma is fantastic at helping me with my word finds.",
"Emma is always kind to me when I am sad.",
"Emma is an amazing worker cause she always has a big smile on her face and comes to school with a good attitude.",
"Hope you pass your exam Emma.",
"You are so loving Emma.",
"You’ll easily pass the exam because you’re so intelligent.",
"You’re so kind Emma.",
"You’re so caring and nice Emma.",
"Emma you’re so kind and loving, you’re successful and wonderful.",
"I like that you’re funny, you make me laugh.",
"I like you helping me with maths.",
"Emma is a good teacher because she is only one person, she alway’s finds a way to be a great teacher.",
"She went to university to train to be a teacher. She is going to be coming in the days.",
"Emma is beautiful because she dresses nice.",
"Emma is helpful because she helps us when we are hurt.",
"Emma is loving and caring and awesome because she listens to Shannon.",
"Emma you are going to be a great teacher because you have been working very hard.",
"I am proud of Emma because she is going to be a teacher.",
"Emma is helpful to people that are hurt.",
"Emma is awesome because she is funny.",
"Emma is a great friend.",
"Emma is fantastic at maths and reading.",
"Emma always helps me when I am sad.",
"Emma is amazing for all of her work.",
"She has been helping us for a while now.",
"She is a good backup teacher.",
"Emma is wonderful because she dresses nice.",
"She is fabulous because she is funny.",
"I think Emma is going to be smart when she comes back.",
"I am proud of Emma completing all of her tests to teach.",
"Emma is cool because she helps people when they are sad.",
"Emma is going to be a great teacher.",
"Emma is awesome because she helps me with my reading activity.",
"Emma is successful with her teacher tests.",
"I’m proud of Emma because she has finished her test.",
"Emma is going to be a great teacher because she helps me with my maths.",
"Emma is younger than Connie.",
"I’m proud of Emma because she is going to be a great teacher.",
"Emma is so happy that sometimes I’m happy.",
"I like Emma because she is so beautiful at school.",
"Emma is so kind that she is helpful.",
"Emma will be a successful teacher when she is at Tokoiti.",
"Emma is so smart when it comes to learning.",
"Emma will be a fantastic teacher because she is useful.",
"Emma you are an amazing person.",
"Emma you are a successful person.",
"Emma you are a kind person.",
"Emma you are lovely and you make me happy.",
"Emma you will be a brilliant teacher.",
"Emma is amazing because she is funny.",
"Emma is awesome because she’s going to be a teacher.",
"Emma is caring and cool because she will be a good teacher.",
"Emma is fabulous and will be doing great teaching.",
"Emma I can’t wait to see you because all the staff say you’re awesome.",
"Emma you will be a fantastic teacher because you are kind and caring.",
"You are amazing because you help me with my work.",
"Emma is an amazing teacher because she is brave and she is going to nail the test.",
"We are very proud of you, you’re very intelligent.",
"You’re going to be an amazing teacher and very brilliant because you’re a very respectful teacher.",
"You’re funny and helpful and kind because you’re a fabulous teacher.",
"You’re very helping.",
"You’re cool because when I’m angry you make me not.",
"Emma is going to be a wonderful teacher because she’s a kind and caring teacher.",
"Emma is beautiful because she dresses nice.",
"Emma is awesome at reading.",
"I’m proud of Emma because she is nice.",
"Emma is amazing because she is cool.",
"Emma is helpful because she is nice.",
"I can make Emma laugh.",
"Emma is so fun.",
"I am so proud of Emma because she is on her final teacher test!",
"Emma is awesome because she has been studying for a year.",
"Emma is fantastic because she studies and looks after her kids.",
"Emma is kind because she always helps you when you need it.",
"Emma is lovely because she has great style.",
"Emma is helpful because she looks after you if you need it!",
"I love Emma because she makes learning fun, that is not the only reason I love Emma.",
"I’m proud of Emma because she cares about me.",
"I’m proud of Emma because she helps me.",
"I am proud of Emma because she is funny.",
"I am proud of Emma because every time I say 'Hey' Emma says 'Yo', it’s cool and I miss Emma.",
"Emma’s so cool that I wish she was my teacher.",
"I am proud of Emma’s work.",
"Emma is awesome because she is going to be a teacher and she helps the teachers.",
"Emma is nice because she helps people.",
"I am new to Tokoiti, I am so excited to meet you. I bet you are cool.",
"I am proud of Emma, she is going to be a teacher.",
"Emma is going to be a really great teacher.",
"She is a lot younger than nanny.",
"Emma is fun because she plays games.",
"Emma is cool because she dresses good.",
"Emma is kind and she is going to be a great teacher, she has a great style.",
"I am proud of Emma because she is kind and she is going to be a fully qualified teacher.",
"I’m proud of Emma because she has worked so so hard to get to be a fully qualified teacher and where she is right now.",
"I am proud of Emma because she is going to teach us when Shannon is on his trip.",
"I am proud of Emma because she is going to ace the test.",
"I am proud of Emma for what she’s done for Tokoiti School.",
"I am proud of Emma because she works hard and she is an amazing teacher too.",
"I am proud of Emma because she is fantastic at her job.",
"I am proud of Emma because she is so workfull.",
"I am proud of Emma because she’s going to be a teacher.",
"She’s a lot younger than Connie.",
"Emma is going to be a good teacher because she’s fun.",
"Emma is amazing because she is my friend.",
"Emma is awesome because she is lovely.",
"Emma is cool because she’s my favourite teacher.",
"Emma is the best at picking styles, so if she can she will show them how to dress good.",
"Emma is beautiful because she is thankful.",
"I am proud of Emma because she has been working hard at finding time to study to be a teacher and a mum.",
"Emma is fantastic because she has always been there for me.",
"Emma is incredible because she is going to be a teacher soon.",
"Emma is amazing because she is learning to be a teacher.",
"Emma is going to be a great funny teacher.",
"Emma is awesome because she is going to be a fantastic teacher.",
"Emma is nice because she is going to be teaching us next term.",
"Emma is a great teacher, she is very kind and has a very cool style. When she has done her work and comes back to Tokoiti School it will be very emotional. SO this is to Emma - you are the most prettiest person in the world and I hope you loved this as I’m going to say this in my speech when I go to High School OK? OK! I say this because I am so proud of you for following your dreams and being successful.",
"Emma is kind because she always helps me.",
"Emma is going to be a brilliant teacher because she is helpful in the class.",
"Emma is a really funny teacher.",
"Emma is really intelligent because she helps me with my maths.",
"Emma is very pretty because I love her lashes.",
"Emma has a great sense of style."
];

const images = [
    "image1.JPG",
    "image2.JPG",
    "image3.JPG",
    "image4.JPG",
    "image5.JPG",
    "image6.JPG",
    "image7.JPG",
    "image8.JPG",
    "image9.JPG",
    "image10.JPG",
    "image11.JPG",
    "image12.JPG",
    "image13.JPG",
    "image14.JPG",
    "image15.JPG",
    "image16.JPG"
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
