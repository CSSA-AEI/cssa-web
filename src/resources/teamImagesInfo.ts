// "Look Around" Images
import Aashish0 from "../images/execs/5/0.webp";
import Aashish1 from "../images/execs/5/1.webp";
import Aashish2 from "../images/execs/5/2.webp";
import Aashish3 from "../images/execs/5/3.webp";
import Aashish4 from "../images/execs/5/4.webp";
import Aashish5 from "../images/execs/5/5.webp";
import Aashish6 from "../images/execs/5/6.webp";
import Aashish7 from "../images/execs/5/7.webp";
import Aashish8 from "../images/execs/5/8.webp";
import Aashish9 from "../images/execs/5/9.webp";

import Tara0 from "../images/execs/7/0.webp";
import Tara1 from "../images/execs/7/1.webp";
import Tara2 from "../images/execs/7/2.webp";
import Tara3 from "../images/execs/7/3.webp";
import Tara4 from "../images/execs/7/4.webp";
import Tara5 from "../images/execs/7/5.webp";
import Tara6 from "../images/execs/7/6.webp";
import Tara7 from "../images/execs/7/7.webp";
import Tara8 from "../images/execs/7/8.webp";
import Tara9 from "../images/execs/7/9.webp";

import Fay0 from "../images/execs/8/0.webp";
import Fay1 from "../images/execs/8/1.webp";
import Fay2 from "../images/execs/8/2.webp";
import Fay3 from "../images/execs/8/3.webp";
import Fay4 from "../images/execs/8/4.webp";
import Fay5 from "../images/execs/8/5.webp";
import Fay6 from "../images/execs/8/6.webp";
import Fay7 from "../images/execs/8/7.webp";
import Fay8 from "../images/execs/8/8.webp";
import Fay9 from "../images/execs/8/9.webp";

import RachelQ0 from "../images/execs/10/0.webp";
import RachelQ1 from "../images/execs/10/1.webp";
import RachelQ2 from "../images/execs/10/2.webp";
import RachelQ3 from "../images/execs/10/3.webp";
import RachelQ4 from "../images/execs/10/4.webp";
import RachelQ5 from "../images/execs/10/5.webp";
import RachelQ6 from "../images/execs/10/6.webp";
import RachelQ7 from "../images/execs/10/7.webp";
import RachelQ8 from "../images/execs/10/8.webp";
import RachelQ9 from "../images/execs/10/9.webp";

import RachelO0 from "../images/execs/11/0.webp";
import RachelO1 from "../images/execs/11/1.webp";
import RachelO2 from "../images/execs/11/2.webp";
import RachelO3 from "../images/execs/11/3.webp";
import RachelO4 from "../images/execs/11/4.webp";
import RachelO5 from "../images/execs/11/5.webp";
import RachelO6 from "../images/execs/11/6.webp";
import RachelO7 from "../images/execs/11/7.webp";
import RachelO8 from "../images/execs/11/8.webp";
import RachelO9 from "../images/execs/11/9.webp";

import Chelsea0 from "../images/execs/12/0.webp";
import Chelsea1 from "../images/execs/12/1.webp";
import Chelsea2 from "../images/execs/12/2.webp";
import Chelsea3 from "../images/execs/12/3.webp";
import Chelsea4 from "../images/execs/12/4.webp";
import Chelsea5 from "../images/execs/12/5.webp";
import Chelsea6 from "../images/execs/12/6.webp";
import Chelsea7 from "../images/execs/12/7.webp";
import Chelsea8 from "../images/execs/12/8.webp";
import Chelsea9 from "../images/execs/12/9.webp";


// Profile Images
import RachelQiFront from '../images/Rachel_Qi.webp';
import RachelOFront from '../images/rachelo.webp';
import FayFront from '../images/Fay_Lee.webp';
import AashishFront from '../images/Aashish_Suresh.webp';
import TaraFront from '../images/Tara_DenaudJoseph.webp';
import ChelseaFront from '../images/chelsea.webp';
import AnastasiaFront from '../images/Anastasia_Sadovskyy.webp';
import MarianneFront from '../images/Marianne_Aguhar.webp';
import TracyFront from '../images/Tracy_Feghali.webp';
import AparnaFront from '../images/Aparna_Balaji.webp';
import AdamFront from '../images/Adam_R.webp';
import KaliFront from '../images/Kali_Jade_LaFontaine.webp';
import RichaFront from '../images/Richa_Kewalramani.webp';
import SanikaFront from '../images/Sanika_Sisodia.webp';
import LaciaFront from '../images/Lacia_Paige_Cummings.webp';

export interface TeamMember {
    name: string;
    position: string;
    year: string;
    blurb: string;
    frontImage: string; // Assuming this is a string representing a URL or a path to the image
    galleryImages: [string, string, string, string, string, string, string, string, string, string]; // Array of image URLs or paths for the "Look Around" feature (use front image as placeholder)
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
        name: 'Aashish Suresh',
        position: 'President',
        year: '4th Year',
        blurb: `Hello Everyone! My name is Aashish Suresh and I am the President of the CSSA! I am going in my 4th year of Computer Science and Economics, 
        and am so excited to be a part of the team. When not in school, you can catch me doing things such as going on hikes, 
        playing sports, fishing (weather permitting), or playing the guitar.`,
        frontImage: AashishFront,
        galleryImages: [Aashish0, Aashish1, Aashish2, Aashish3, Aashish4, Aashish5, Aashish6, Aashish7, Aashish8, Aashish9],
        email: 'president@cssa-aei.ca',
        linkedIn: 'https://www.linkedin.com/in/aashish-suresh-a36639246/',
        instagram: "https://www.instagram.com/asuresh37/",
        questions: [
            // Placeholder answer
            ["Who would win: 1000 CS students or 1 polar bear?", "I'll lead us to victory"]
        ],
        song: "Reelin' in the Years - Steely Dan",
        songImage: 'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/08/f3/f1/08f3f17c-e92a-516f-57c0-0a5d250c6cdc/22UM1IM01200.rgb.jpg/632x632bb.webp',
        songLink: 'https://music.apple.com/us/album/reelin-in-the-years/1650885288?i=1650885304',
    },
    {
        name: 'Rachel Qi',
        position: 'VP Academic Affairs',
        year: '3rd Year',
        blurb: `Hi! I'm Rachel Qi, a 3rd year CS & math student from Aurora. Outside of studying, I spend my time gaming, hanging out with friends, learning something new (currently skating! ⛸️), or working at one of my 3 jobs. 
        Feel free to drop by my office hours or shoot me a message if you ever need any academic help! 👩🏻‍🏫 I can't wait to meet you all! 💖`,
        frontImage: RachelQiFront,
        galleryImages: [RachelQ0, RachelQ1, RachelQ2, RachelQ3, RachelQ4, RachelQ5, RachelQ6, RachelQ7, RachelQ8, RachelQ9],
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
        name: 'Richa Kewalramani',
        position: 'VP Executive Affairs',
        year: '4th Year',
        blurb: "Hiii! I love being outdoors, reading books, and drinking coffee! I love playing sports like basketball and soccer, going on walks, travelling, being at the beach, etc. You can often catch me giggling with my girls.",
        frontImage: RichaFront,
        galleryImages: [RichaFront, RichaFront, RichaFront, RichaFront, RichaFront, RichaFront, RichaFront, RichaFront, RichaFront, RichaFront],
        email: 'execaffairs@cssa-aei.ca',
        linkedIn: 'https://www.linkedin.com/in/richa-kd/',
        instagram: 'https://www.instagram.com/richa.kd/',
        song: 'I Wanna Be Yours - Arctic Monkeys',
        songImage:'https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/cc/0f/2d/cc0f2d02-5ff1-10e7-eea2-76863a55dbad/887828031795.png/592x592bb.webp',
        songLink: 'https://music.apple.com/us/song/i-wanna-be-yours/663098065',
        questions: [
            ['Who would win: 1000 CS students or 1 polar bear?', "Hmm 1000 CS students that touch grass...right?"]
        ]
    },
    {
        name: 'Kali-Jade LaFontaine',
        position: 'VP Finance',
        year: '1st Year',
        blurb: `As a first-year Computer Science student and VP Finance, I enjoy working with numbers, systems, and structured problem-solving. I'm excited to be part of CSSA and contribute to our student community.`,
        frontImage: KaliFront,
        galleryImages: [KaliFront, KaliFront, KaliFront, KaliFront, KaliFront, KaliFront, KaliFront, KaliFront, KaliFront, KaliFront],
        email: 'finance@cssa-aei.ca',
        linkedIn: 'https://www.linkedin.com/in/kali-jade-lafontaine-b62624343/',
        questions: [
            ["Who would win: 1000 CS students or 1 polar bear?", "1 polar bear"]
        ],
        song: "August - Taylor swift",
        songLink: "https://music.apple.com/us/song/august/1524801944",
        songImage: "https://is1-ssl.mzstatic.com/image/thumb/Video124/v4/4f/56/d0/4f56d047-5f9e-d8de-0446-879c1a15a8ac/Job67f9bcc2-c099-4890-99a4-9035a9260544-108238448-PreviewImage_preview_image_nonvideo_sdr-Time1607911089290.png/592x592bb.webp",
    },
    {
        name: 'Rachel Olugbemiro',
        position: 'VP Logistics',
        year: '4th Year',
        blurb: `Hey everyone! My name is Rachel and I'm your VP Equity of the CSSA this year! I'm in my 2nd year of CS and my job is to promote equity in and outside of the CSSA. 
        When I'm not doing my assignments I enjoy going to the gym and hanging out with friends.`,
        frontImage: RachelOFront,
        galleryImages: [RachelO0, RachelO1, RachelO2, RachelO3, RachelO4, RachelO5, RachelO6, RachelO7, RachelO8, RachelO9],
        email: 'logistics@cssa-aei.ca',
        linkedIn: 'https://www.linkedin.com/in/rachel-olugbemiro/',
        questions: [
            ["Who would win: 1000 CS students or 1 polar bear?", "a polar bear would win, if I were apart of the 1000 CS students I would run the other way😭"]
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
        galleryImages: [Fay0, Fay1, Fay2, Fay3, Fay4, Fay5, Fay6, Fay7, Fay8, Fay9],
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
        galleryImages: [Chelsea0, Chelsea1, Chelsea2, Chelsea3, Chelsea4, Chelsea5, Chelsea6, Chelsea7, Chelsea8, Chelsea9],
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
        galleryImages: [AnastasiaFront, AnastasiaFront, AnastasiaFront, AnastasiaFront, AnastasiaFront, AnastasiaFront, AnastasiaFront, AnastasiaFront, AnastasiaFront, AnastasiaFront],
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
        name: 'Adam R',
        position: 'Director of IT',
        year: '3rd Year',
        blurb: `Hey, I'm Adam, a 3rd year CS and Math student. I'm the Director of IT here in the CSSA which means I mainly maintain this website!`,
        frontImage: AdamFront,
        galleryImages: [AdamFront, AdamFront, AdamFront, AdamFront, AdamFront, AdamFront, AdamFront, AdamFront, AdamFront, AdamFront],
        email: 'it@cssa-aei.ca',
        questions: [
            ["Who would win: 1000 CS students or 1 polar bear?", "I think we got it"],
        ],
        song: 'hours - again&again',
        songImage: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/85/b4/41/85b441be-bf5e-2ce2-b960-6f25a1bc8616/artwork.jpg/632x632bb.webp',
        songLink: 'https://music.apple.com/us/song/hours/1523194843'
    },
    {
        // TODO: Fix blurb spacing
        name: 'Lacia-Paige Cummings',
        position: 'VP Communications',
        year: '2nd Year',
        blurb: `Hi, I'm Lacia-Paige Cummings, a second-year Computer Science student in the French Immersion stream with a minor in Spanish. 
        I'm passionate about languages and hope to learn as many as I can! Outside of academics, 
        I'm a dancer who loves staying active, whether that's going for a run or spending time at the gym. Excited to meet you all <3`,
        frontImage: LaciaFront,
        galleryImages: [LaciaFront, LaciaFront, LaciaFront, LaciaFront, LaciaFront, LaciaFront, LaciaFront, LaciaFront, LaciaFront, LaciaFront],
        email: 'social@cssa-aei.ca',
        linkedIn: 'https://www.linkedin.com/in/lacia-paige-cummings-9a2ba0332',
        instagram: 'https://www.instagram.com/laciapaige',
        questions: [
            ["Who would win: 1000 CS students or 1 polar bear?", "Cs student definitely"]
        ],
        song: 'Girl, Get Up. - Doechii feat. SZA',
        songLink: 'https://music.apple.com/us/song/girl-get-up/1865239527',
        songImage: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/af/6a/10/af6a10d8-23ba-5212-7fb5-f1fce06412da/25UMGIM72057.rgb.jpg/592x592bb.webp',
    },
    {
        // TODO: add personal website
        name: 'Tara Denaud Joseph',
        position: 'VP Social',
        year: '4th Year',
        blurb: `Hi everyone! My name is Tara, I am in 4th year and I am this year's VP Social! To put it shortly, I take care of social events for Computer Science students. 
        Outside from everything CompSci related, I love doing my nails, spending time with friends, watching shows and doing random crafty things!`,
        frontImage: TaraFront,
        galleryImages: [Tara0, Tara1, Tara2, Tara3, Tara4, Tara5, Tara6, Tara7, Tara8, Tara9],
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
        galleryImages: [MarianneFront, MarianneFront, MarianneFront, MarianneFront, MarianneFront, MarianneFront, MarianneFront, MarianneFront, MarianneFront, MarianneFront],
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
        name: "Sanika Sisodia",
        position: "VP External Affairs",
        year: "4th Year",
        blurb: `Hi I'm Sanika! I'm in 4th year comp sci and I'm the vp external. When I'm not in classes I'm usually baking, swimming, or watching the F1 race (Mercedes on top 😛).`,
        frontImage: SanikaFront,
        galleryImages: [SanikaFront, SanikaFront, SanikaFront, SanikaFront, SanikaFront, SanikaFront, SanikaFront, SanikaFront, SanikaFront, SanikaFront],
        linkedIn:"https://www.linkedin.com/in/sanika-sisodia-833638268/",
        instagram: "https://www.instagram.com/sanika.sisodia/",
        questions: [
            ["Who would win: 1000 CS students or 1 polar bear?", "Probably the polar bear I think the cs students would try and free solo the mountains in Antarctica to get away and fall off so the polar bear wouldn’t even need to try "]
        ],
        song: "Heaven or Las Vegas - The Weeknd",
        songLink: "https://music.apple.com/us/song/heaven-or-las-vegas/1714909173",
        songImage: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/66/d5/13/66d513dd-3cb0-b86b-4d11-1fbab2e6a639/12UMGIM54989.rgb.jpg/632x632bb.webp"
    },
    {
        name: 'Tracy Feghali',
        position: 'Junior VP Social',
        year: '1st Year',
        blurb: `Hi! I'm Tracy, a first-year Data Science student. This year, I've been involved with the CSSA on the social side, 
        and I couldn't be happier to be part of such an amazing team. Outside of school, I love spending time with my sisters and friends, 
        and snuggling with my dog, Milo!`,
        frontImage: TracyFront,
        galleryImages: [TracyFront, TracyFront, TracyFront, TracyFront, TracyFront, TracyFront, TracyFront, TracyFront, TracyFront, TracyFront],
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
        galleryImages: [AparnaFront, AparnaFront, AparnaFront, AparnaFront, AparnaFront, AparnaFront, AparnaFront, AparnaFront, AparnaFront, AparnaFront],
        linkedIn: "https://www.linkedin.com/in/aparna-balaji07",
        instagram: "https://www.instagram.com/_aparnabalaji/",
        questions: [
            ["Who would win: 1000 CS students or 1 polar bear?", "1 polar bear! "]
        ],
        song: "Good Days - SZA",
        songLink: "https://music.apple.com/us/song/good-days/1546390051",
        songImage: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/ef/09/cf/ef09cf1f-a057-6039-00d3-7b5d14c7eba1/886449006717.jpg/592x592bb.webp"
    },
    // TODO: add Khwaish
]