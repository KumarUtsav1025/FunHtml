const animal=[
    "Butterfly",
    "Spider",
    "Crow",
    "Owl",
    "Hummingbird",
    "Hawk",
    "Grasshopper",
    "Eagle",
    "Dragonfly",
    "Prank",
];

const spirit={
    "Eagle": "Listen to your heart and not rely on your mind so much. You have lightness in you, but need to stay grounded.  This spirit animal carries knowledge of magic and gifts from above.",
    "Grasshopper": "Grasshoppers are innovative and don’t miss opportunities to move forward in life. Grasshoppers are considered good luck, and they are recognized as good omens.",
    "Hawk" : "Hawk represents courage, self-awareness, truth, and perspective. Hawks are a revered spirit guide for their ability to see things from a higher perspective – to recognize the truth in any situation for what it is.",
    "Hummingbird": "Hummingbirds are full of lightness, connection and speed. When hummingbirds come into your life, it is a sign of connection, playfulness and adaptability. They can adapt to anything, and fight while still having a playful and light spirit.",
    "Owl": "Owl is one of the more rare spirit animals. If you happen to cross paths with an owl, it is a true sign from the universe. The owl as a spirit guide that represents wisdom, deep connection, and intuitive knowledge.",
    "Crow": "The crow may not seem like an ideal spirit guide, but the crow actually brings a lot of magic and mysteries. Crows are known for their higher perspective, flexibility and mostly their “trickster” personality types.",
    "Spider": "When you notice a lot of spiders coming up in your life or in your dreams, it is a reminder for you to create the life you want to lead. Spiders also represent the feminine, and the power behind feminine energy.",
    "Butterfly": "When a butterfly enters your life, it is believed to be one of the most symbolic signs pertaining to transformation and profound change. You might be moving through different life cycles, and literally changing from the inside out.",
    "Dragonfly": "Transformation, lively, flexibility, connection, emotional and illusionary.",
    "Prank": "Padai Likhai karo"
};

const links={
    "Eagle": "https://media.istockphoto.com/id/627038452/zh/%E5%90%91%E9%87%8F/cute-eagle-cartoon.jpg?s=612x612&w=0&k=20&c=3Te8-lJBk9XXZ1oCx-ZmEFsvj_IqQchYl4m7gSDmjiA=",
    "Grasshopper": "https://media.istockphoto.com/id/493601100/vector/cartoon-cute-green-cricket-isolated-on-white-background.jpg?s=170667a&w=is&k=20&c=0HM3ypPt-yeYpXoBTkQ3OhYfCItPO4du8Z0XC5aGfRY=",
    "Hawk" : "https://media.istockphoto.com/id/1153227299/vector/cute-eagle-cartoon.jpg?s=612x612&w=0&k=20&c=nGtJV9cwrk8SqsPMlUQHY5XxAxO4YnqlZvNu0NXdC7M=",
    "Hummingbird": "https://media.istockphoto.com/id/497216322/vector/cartoon-funny-hummingbird-flying-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=FHCJjZ6Au270msyBnmuKZSM6A7bjXnJGj0HbpZoKn24=",
    "Owl": "https://img.freepik.com/premium-vector/cartoon-owl-bird_70172-546.jpg?w=360",
    "Crow": "https://img.freepik.com/premium-vector/cartoon-crow-isolated-white-background_29190-6550.jpg?w=2000",
    "Spider": "https://www.shutterstock.com/image-vector/cute-spider-cartoon-260nw-221978950.jpg",
    "Butterfly": "https://media.istockphoto.com/id/472301363/vector/monarch-butterfly.jpg?s=612x612&w=0&k=20&c=6XyRIfeokjJuQc5qsfblH3JyPhxvgpf4HsJTIUdrf6s=",
    "Dragonfly": "https://media.istockphoto.com/id/507710648/vector/cartoon-funny-dragonfly-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=4dsP7MRotmE6cNlPSjA-2ZfFqdfywSsOMPBbslbziuk=",
    "Prank": "https://i.pinimg.com/474x/0b/fb/60/0bfb601b0d91ce1f44caedbeb0ebb649.jpg"
};


function random()
{
    let x = Math.floor((Math.random()*10));
    if( x== 9)
    {
        random();
    }
    return x;
}

function search()
{
    document.querySelector('.submit').disabled = true;
    const nam = document.querySelector('#input1').value;
    const name = nam.charAt(0).toUpperCase()+ nam.slice(1).toLowerCase();
    console.log(name);
    if(name=="Uday")
    {
        ind = 9;
    }
    else if( name == "Soumya")
    {
        ind =0;
    }
    else{
        ind = random();
    }
    const anm= animal[ind];
    const desc=spirit[anm];
    const link = links[anm];
    document.getElementById('reim').src = link;
    document.getElementsByClassName('page1')[0].style.display="none";
    document.querySelector('#name2').innerHTML= name+"'s Spirit Animal: ";
    document.querySelector('.animal').innerHTML=anm;
    document.querySelector('.info').innerHTML=desc;
    document.querySelector('#input1').value='';
    document.getElementsByClassName('page2')[0].style.display="block";
};

function again()
{
    document.getElementsByClassName('page1')[0].style.display="block";
    document.getElementsByClassName('page2')[0].style.display="none";
    document.querySelector('.heading1').innerHTML="Let's see who's your spirit animal";
};

document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('.submit').disabled = true;
    document.querySelector('#input1').onkeyup = ()=>{
        if ( document.querySelector('#input1').value.length > 0){
            document.querySelector('.submit').disabled = false;
        }
        else{
            document.querySelector('.submit').disabled = true;
        }
    };
    document.querySelector('.submit').onclick=search;
    document.querySelector('.check').onclick=again;
});

function view()
{
    console.log(animal[9]);
};