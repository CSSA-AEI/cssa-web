import AngieFront from '../images/angie.webp';
import RachelQiFront from '../images/Rachel_Qi.webp';
import RachelOFront from '../images/rachelo.webp';
import FayFront from '../images/Fay_Lee.webp';
import MeriemFront from '../images/Meriem_Mostefai.webp';
import AashishFront from '../images/Aashish_Suresh.webp';
import ToluFront from '../images/Tolu_Emoruwa.webp';
import TaraFront from '../images/Tara_DenaudJoseph.webp';
import ErikFront from '../images/Erik.webp';
import ChelseaFront from '../images/chelsea.webp';
import AnastasiaFront from '../images/Anastasia_Sadovskyy.webp';
import MarianneFront from '../images/Marianne_Aguhar.webp';
import TracyFront from '../images/Tracy_Feghali.webp';
import AparnaFront from '../images/Aparna_Balaji.webp';
import AdamFront from '../images/Adam_R.webp';

export interface TeamMember {
    name: string;
    position: string;
    year: string;
    blurb: string;
    frontImage: string; // Assuming this is a string representing a URL or a path to the image
    email?: string; // Optional, as some members might not have an email
    linkedIn?: string;
    personalEmail?: string;
    instagram?: string;
    questions?: string[][];
    song?: string;
    songLink?: string;
    songImage?: string;
}

export const teamInfo: TeamMember[] =  [
    {
        name: 'Rachel Qi',
        position: 'VP Academic',
        year: '3rd Year',
        blurb: `Hi! I'm Rachel Qi, a 3rd year CS & math student from Aurora. Outside of studying, I spend my time gaming, hanging out with friends, learning something new (currently skating! ⛸️), or working at one of my 3 jobs. 
        Feel free to drop by my office hours or shoot me a message if you ever need any academic help! 👩🏻‍🏫 I can't wait to meet you all! 💖`,
        frontImage: RachelQiFront,
        email: 'academic@cssa-aei.ca',
        questions: [
            ["Who would win: 1000 CS students or 1 polar bear?", "The polar bear for sure! The scent of 1000 CS students would give them away *immediately*."]
        ],
        song: "Ruin My Life - Zara Larsson",
        songLink: "https://music.apple.com/us/song/ruin-my-life/1438676278",
        songImage: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/47/88/b1/4788b1e3-80bb-ee43-bfba-e63c53883599/886447330340.jpg/632x632bb.webp",
        // personalEmail: "rqi041@uottawa.ca",
        instagram: "https://www.instagram.com/r.chel.i/",
        linkedIn: 'https://www.linkedin.com/in/rachel-q/'
    },
    {
        name: 'Aashish Suresh',
        position: 'President',
        year: '4th Year',
        blurb: `Hello Everyone! My name is Aashish Suresh and I am the President of the CSSA! I am going in my 4th year of Computer Science and Economics, 
        and am so excited to be a part of the team. When not in school, you can catch me doing things such as going on hikes, 
        playing sports, fishing (weather permitting), or playing the guitar.`,
        frontImage: AashishFront,
        email: 'president@cssa-aei.ca',
        linkedIn: 'https://www.linkedin.com/in/aashish-suresh-a36639246/',
        instagram: "https://www.instagram.com/asuresh37/",
        questions: [
            ["Who would win: 1000 CS students or 1 polar bear?", "[Aashish answer]"]
        ],
        song: "Reelin' in the Years - Steely Dan",
        songImage: 'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/08/f3/f1/08f3f17c-e92a-516f-57c0-0a5d250c6cdc/22UM1IM01200.rgb.jpg/632x632bb.webp',
        songLink: 'https://music.apple.com/us/album/reelin-in-the-years/1650885288?i=1650885304',
    },
    {
        // TODO: Replace everything except name
        name: 'Richa Kewalramani',
        position: 'VP Executive Affairs',
        year: '4th Year',
        blurb: "hallooo 🥭 ! :3 my name is angie and im ur vp exec affairs !! i'm a helping hand and i work internally with the team to help them be the best exec team for u guys ! i love mangoes and hanging out w my friends and i cant wait to meet all of u !!",
        frontImage: AngieFront,
        email: 'execaffairs@cssa-aei.ca',
        linkedIn: 'https://www.linkedin.com/in/angeleeca-jocson/',
        song: 'Tsundere Twintails - Sunshine',
        songImage:'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/ce/1d/24/ce1d24df-96e1-0d59-6765-0da458c9f3b3/artwork.jpg/632x632bb.webp',
        songLink: 'https://music.apple.com/us/album/sunshine/1590773462?i=1590773463',
        questions: [
            ['Do you think a spring roll is a burrito?', "No, I get they're rolled the same way, but it's dishonorable to think one is the other when they come from different cultures (I do NOT know how to make a good burrito but I can make a bomb ass spring roll)"]
        ],
        instagram: "https://www.instagram.com/altth3a/",

    },
    {
        // TODO: Replace everything except name
        name: 'Kali-Jade LaFontaine',
        position: 'VP Finance',
        year: '3rd Year',
        blurb: `Hello Everyone! My name is Aashish Suresh and I am the VP Finance of the CSSA! I am going into my 
        3rd year of Computer Science and Economics, and am so excited to be a part of the team. When not in school, 
        you can catch me doing things such as going on hikes, playing sports, fishing (weather permitting), or playing 
        the guitar.`,
        frontImage: AashishFront,
        email: 'finance@cssa-aei.ca',
        linkedIn: 'https://www.linkedin.com/in/aashish-suresh-a36639246/',
        instagram: 'https://www.instagram.com/asuresh37/',
        questions: [
            ["Do you think a spring roll is a burrito?", "No, I think a proper burrito consists of a meat/protein, a carb, and some vegetables. A Spring roll only has vegetables and is missing the rest."]
        ],
        song: "Reelin' in the Years - Steely Dan",
        songLink: "https://music.apple.com/us/album/reelin-in-the-years/1650885288?i=1650885304",
        songImage: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/08/f3/f1/08f3f17c-e92a-516f-57c0-0a5d250c6cdc/22UM1IM01200.rgb.jpg/632x632bb.webp",
    },
    {
        name: 'Rachel Olugbemiro',
        position: 'VP Logistics',
        year: '4th Year',
        blurb: `Hey everyone! My name is Rachel and I'm your VP Equity of the CSSA this year! I'm in my 2nd year of CS and my job is to promote equity in and outside of the CSSA. 
        When I'm not doing my assignments I enjoy going to the gym and hanging out with friends.`,
        frontImage: RachelOFront,
        email: 'logistics@cssa-aei.ca',
        linkedIn: 'https://www.linkedin.com/in/rachel-olugbemiro/',
        questions: [
            ["Who would win: 1000 CS students or 1 polar bear?", "[Rachel O answer]"]
        ],
        song: 'Red Wine Supernova - Chappell Roan',
        songLink: 'https://music.apple.com/us/album/red-wine-supernova/1686988889?i=1686988896',
        songImage: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/ca/8e/78/ca8e7878-4c53-0c23-acff-85f69a4803a7/23UMGIM46981.rgb.jpg/632x632bb.webp'
        // personalEmail: "rachelolugbemiro16@gmail.com"
    },
    {
        name: 'Fay Lee',
        position: 'VP Philanthropy',
        year: '4th Year',
        blurb: `Hi, my name's Fay and I'm in fourth year! When I'm not procrastinating assignments or pretending to be busy at work, I love going on 
        hot girl walks, spending time with friends, and watching reality tv/teen dramas!`,
        frontImage: FayFront,
        email: 'phil@cssa-aei.ca',
        linkedIn: 'https://www.linkedin.com/in/fay-lee/',
        questions: [
            ["Who would win: 1000 CS students or 1 polar bear", "1 polar bear i fear, adorable but deadly"]
        ],
        songLink: 'https://music.apple.com/us/album/run-taylors-version-from-the-vault-feat-ed-sheeran/1590368448?i=1590368892',
        songImage: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/15/38/9b/15389bf4-8074-06c3-11ee-655b5453af68/21UM1IM25046.rgb.jpg/416x416bb.webp',
        song: 'Run - Taylor Swift',
        instagram: "https://www.instagram.com/fayy.lee/",
        // personalEmail: "flee081@uottawa.ca",
    },
    {
        name: 'Chelsea Brown',
        position: 'VP Internal Affairs',
        year: '4th Year',
        blurb: `Hello! I'm Chelsea, if you were confused about that. I'm this year's VP Internal, which means I'm responsible for all 
        things related to our office. I'm responsible for keeping our office orderly, fun, and stocked with snacks!! When I'm not frantically doing homework, I'm likely playing piano/guitar, cooking, 
        perfecting my latte art, or trying to nurse my tomato plants back to health. If you have any office questions, come find me during my office hours!!`,
        frontImage: ChelseaFront,
        email: 'internal@cssa-aei.ca',
        linkedIn: 'https://www.linkedin.com/in/chelsea-brown-89340a245/',
        questions: [
            ["Who would win: 1000 CS students or 1 polar bear?", "polar bear easily... the comp sci students might plan a decent strategy but i fear we're cooked"]
        ],
        song: "Too Sweet - Hozier",
        songLink: "https://music.apple.com/us/song/too-sweet/1775781106",
        songImage: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/fa/8a/59/fa8a5999-c497-5903-20d0-fd7f08563dd9/196872387544.jpg/416x416bb.webp",
    },
    {
        name: 'Anastasia Sadovskyy',
        position: 'Director of Equity',
        year: '2nd Year',
        blurb: `Hi! I'm Anastasia. I'm from Ottawa and currently a 2nd year student studying CS in French. I love hanging out with friends, watching tv shows and going on walks.`,
        frontImage: AnastasiaFront,
        email: 'equity@cssa-aei.ca',
        linkedIn: 'https://www.linkedin.com/in/anastasia-sadovskyy-8aa49a340',
        questions: [
            ["Who would win: 1000 CS students or 1 polar bear?", "Definitely 1000 CS students"]
        ],
        song: "Greedy - Tate McRae",
        songLink: "https://music.apple.com/us/song/greedy/1706381103",
        songImage: "https://is1-ssl.mzstatic.com/image/thumb/Video116/v4/1f/57/cd/1f57cd8b-003c-a44d-4887-6965592f9d07/Job79e2f997-43a0-474e-80b5-a74332e2bc41-155736740-PreviewImage_Preview_Image_Intermediate_nonvideo_sdr_298549005_1556680965-Time1694799458084.png/632x632bb.webp",
    },
    {
        // TODO: replace everything except name
        name: 'Sanika Sinosida',
        position: 'VP External Affairs',
        year: '3rd Year',
        blurb: `Hi! I'm Erik and I am a current third year student here. When life and school isn't too busy I enjoy 3D printing, working out and playing video games.`,
        frontImage: ErikFront,
        email: 'external@cssa-aei.ca',
        linkedIn: 'https://www.linkedin.com/in/erik-ang-97773b260/',
        instagram: 'https://www.instagram.com/erik_ang_/',
        questions: [
            ["Do you think a spring roll is a burrito?", "Nah, a burrito's gotta get you kinda full at least, a normal spring roll simply can't do that."]
        ],
        song: "Get Lucky - Daft Punk, Pharrell Williams, Nile Rodgers",
        songLink: "https://music.apple.com/us/album/get-lucky/617154241?i=617154366",
        songImage: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/e8/43/5f/e8435ffa-b6b9-b171-40ab-4ff3959ab661/886443919266.jpg/632x632bb.webp",
        // personalEmail: "eang030@uottawa.ca",

    },
    {
        // TODO: add image
        name: 'Adam R',
        position: 'Director of IT',
        year: '3rd Year',
        blurb: `Hey, I'm Adam, a 3rd year CS and Math student. I'm the Director of IT here in the CSSA which means I mainly maintain this website!`,
        frontImage: AdamFront,
        email: 'it@cssa-aei.ca',
        questions: [
            ["Who would win: 1000 CS students or 1 polar bear?", "I think we got it"],
        ],
        song: 'hours - again&again',
        songImage: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/85/b4/41/85b441be-bf5e-2ce2-b960-6f25a1bc8616/artwork.jpg/632x632bb.webp',
        songLink: 'https://music.apple.com/us/song/hours/1523194843'
    },
    {
        // TODO: replace everything but name
        name: 'Lacia Paige',
        position: 'VP Communications',
        year: '4th Year',
        blurb: `I'm an alleged comp sci major and hater of proofs! I love to draw and be very loud. This is my second year being vp social and it's been my pleasure :D 
        I love this student association and I hope you'll come by to say hi to us at the office.`,
        frontImage: MeriemFront,
        email: 'social@cssa-aei.ca',
        linkedIn: 'https://www.linkedin.com/in/meriemmostefai/',
        questions: [
            ["Do you think a spring roll is a burrito?", "If a spring roll is a burrito then a samosa is also a burrito and i can't live in a world where that's the case"]
        ],
        song: 'Bubbly - Good Kid',
        songLink: 'https://music.apple.com/us/album/bubbly-single/1719818392',
        songImage: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/03/1c/4c/031c4ce2-d4c0-8cae-f15e-aefa8e841773/0.jpg/632x632bb.webp',
    },
    {
        // TODO: add personal website
        name: 'Tara Denaud Joseph',
        position: 'VP Social',
        year: '4th Year',
        blurb: `Hi everyone! My name is Tara, I am in 4th year and I am this year's VP Social! To put it shortly, I take care of social events for Computer Science students. Outside from everything CompSci related, I love doing my nails, spending time with friends, watching shows and doing random crafty things!`,
        frontImage: TaraFront,
        email: 'comms@cssa-aei.ca',
        linkedIn: 'https://www.linkedin.com/in/taradenaud/',
        questions: [
            ["Who would win: 1000 CS students or 1 polar bear?", "1000 CS students!! I feel like we would strategize well, could put some of our algorithm knowledge to work >.<"]
        ],
        song: "Rocketeer - Far East Movement",
        songLink: "https://music.apple.com/us/album/rocketeer-feat-ryan-tedder/1443121422?i=1443121691",
        songImage: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/5f/69/26/5f6926ea-5a7f-17d9-25ce-dbcddfbc14d8/10UMGIM25431.rgb.jpg/592x592bb.webp"
    },
    {
        name: "Marianne Aguhar",
        position: "Director of Design",
        year: "2nd Year",
        blurb: `hi, i'm marianne! i'm a 2nd year computer science student who happens to like drawing a lot :3 i also enjoy playing video games, 
        reading (currently on a medieval horror streak), and collecting pokemon cards!`,
        frontImage: MarianneFront,
        linkedIn: "https://www.linkedin.com/in/marianne-aguhar-93707b243/",
        instagram: "https://www.instagram.com/mariannnen/",
        questions: [
            ["Who would win: 1000 CS students or 1 polar bear?", "logically 1000 cs students because of numbers, but if the polar bear picks off students individually it might have a shot???"]
        ],
        song: "Altars of Apostasy - Heaven Pierce Her",
        songLink: "https://music.apple.com/us/song/altars-of-apostasy/1694704744",
        songImage: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/7b/cb/75/7bcb75ad-1353-e6de-7800-3b9cb039568a/859775085428_cover.jpg/592x592bb.webp"
    },
    {
        name: 'Tracy Feghali',
        position: 'Junior VP Social',
        year: '1st Year',
        blurb: `Hi! I'm Tracy, a first-year Data Science student. This year, I've been involved with the CSSA on the social side, 
        and I couldn't be happier to be part of such an amazing team. Outside of school, I love spending time with my sisters and friends, 
        and snuggling with my dog, Milo!`,
        frontImage: TracyFront,
        linkedIn: 'https://www.linkedin.com/in/tracy-feghali-1217b4307',
        questions: [
            ["Who would win: 1000 CS students or 1 polar bear?", "A polar bear, sadly, while the students try to debug him!!"]
        ],
        song: "Good Days - SZA",
        songLink: "https://music.apple.com/us/song/good-days/1546390051",
        songImage: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/ef/09/cf/ef09cf1f-a057-6039-00d3-7b5d14c7eba1/886449006717.jpg/592x592bb.webp"
    },
    {
        name: 'Aparna Balaji',
        position: 'Junior VP Academic',
        year: '1st Year',
        blurb: `Hi! I'm Aparna, a first-year CS student. I love art, crafting, cats, Fortnite, and being outside. Hope to see you around!`,
        frontImage: AparnaFront,
        linkedIn: "https://www.linkedin.com/in/aparna-balaji07",
        instagram: "https://www.instagram.com/_aparnabalaji/",
        questions: [
            ["Who would win: 1000 CS students or 1 polar bear?", "1 polar bear! "]
        ],
        song: "Good Days - SZA",
        songLink: "https://music.apple.com/us/song/good-days/1546390051",
        songImage: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/ef/09/cf/ef09cf1f-a057-6039-00d3-7b5d14c7eba1/886449006717.jpg/592x592bb.webp"
    },
    // TODO: Add juniors
]