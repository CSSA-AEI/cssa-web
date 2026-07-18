// Profile Images
import ClorisFront from '../images/2026-2027-team/Cloris Wong.webp';
import DanielaFront from '../images/2026-2027-team/Daniela Bordeianu.webp';
import KaliFront from '../images/2026-2027-team/Kali_Jade_LaFontaine.webp';
import LaciaFront from '../images/2026-2027-team/Lacia_Paige_Cummings.webp';
import NicolasFront from '../images/2026-2027-team/Nicolas Guilbault.webp';
import RachelFront from '../images/2026-2027-team/Rachel_Qi.webp';
import TracyFront from '../images/2026-2027-team/Tracy_Feghali.webp';
import UdulaFront from '../images/2026-2027-team/Udula Ravishan.webp';
import AdamFront from '../images/2026-2027-team/Udula Ravishan.webp';


export interface TeamMember {
    name: string;
    position: string;
    year: string;
    blurb: string;
    frontImage: string; // Assuming this is a string representing a URL or a path to the image
    galleryImages: [string, string, string, string, string, string, string, string, string, string]; // Array of image URLs of paths for the "Look Around" feature (use front image as placeholder)
    email?: string; // Optional, as some members might not have an email
    linkedIn?: string;
    instagram?: string;
    questions?: string[][];
    song?: string;
    songLink?: string;
    songImage?: string;
}

export const teamInfo: TeamMember[] =  [
    {
        name: 'Rachel Qi',
        position: 'President',
        year: '4th Year',
        blurb: `Hi! I'm Rachel Qi, a 4th year CS & math student from Aurora. Outside of studying, I spend my time gaming, 
        hanging out with friends, learning something new, or working at one of my 3 jobs. 
        Feel free to drop by my office hours or shoot me a message if you ever need any help! 👩🏻‍🏫 I can't wait to meet you all! 💖`,
        frontImage: RachelFront,
        galleryImages: [RachelFront, RachelFront, RachelFront, RachelFront, RachelFront, RachelFront, RachelFront, RachelFront, RachelFront, RachelFront],
        email: 'president@cssa-aei.ca',
        instagram: "https://www.instagram.com/r.chel.i/",
        linkedIn: 'https://www.linkedin.com/in/rachel-q/',
        questions: [
            [ "Who would win: 1000 CS students or 1 polar bear?", "The polar bear for sure! The scent of 1000 CS students would give them away *immediately*." ]
        ],
        song: "You're On Your Own, Kid - Taylor Swift",
        songLink: "https://music.apple.com/us/album/youre-on-your-own-kid/1649434004?i=1649434298",
        songImage: "https://is1-ssl.mzstatic.com/image/thumb/Video112/v4/b6/28/23/b6282315-240d-78f0-0f7d-bec9f71be33e/Job99958555-3bb9-421c-a723-ef66635dcdab-139171365-PreviewImage_preview_image_nonvideo_sdr-Time1668634899071.png/632x632bb.webp",
    },
    {
        name: 'Udula Ravishan',
        position: 'VP Social',
        year: '4th Year',
        blurb: `Hey, I'm Udula, a 4th year cs student and vp social. 
        My favorite data structure is a doubly linked list, my favorite 101 week activity is couch carry and my favorite coding language is java.  
        I also  play intramural basketball, make short films and rn I've taken an interest in football (soccer). 
        I love making new friends so please drop by the CSSA office!`,
        frontImage: UdulaFront,
        galleryImages: [UdulaFront, UdulaFront, UdulaFront, UdulaFront, UdulaFront, UdulaFront, UdulaFront, UdulaFront, UdulaFront, UdulaFront],
        email: 'social@cssa-aei.ca',
        linkedIn: 'https://www.linkedin.com/in/udula-ravishan',
        questions: [
            [ "Who would win: 1000 CS students or 1 polar bear?", "Polar Bear" ]
        ],
        song: "Greedy - Tate McRae",
        songLink: "https://music.apple.com/us/song/greedy/1706381103",
        songImage: "https://is1-ssl.mzstatic.com/image/thumb/Video116/v4/1f/57/cd/1f57cd8b-003c-a44d-4887-6965592f9d07/Job79e2f997-43a0-474e-80b5-a74332e2bc41-155736740-PreviewImage_Preview_Image_Intermediate_nonvideo_sdr_298549005_1556680965-Time1694799458084.png/632x632bb.webp",
    },
    {
        name: 'Adam R',
        position: 'VP IT',
        year: '4th Year',
        blurb: `Hey, I'm Adam, a 4th year CS and Math student. I'm VP IT here in the CSSA which means I mainly maintain this website!`,
        frontImage: AdamFront,
        galleryImages: [AdamFront, AdamFront, AdamFront, AdamFront, AdamFront, AdamFront, AdamFront, AdamFront, AdamFront, AdamFront],
        email: 'it@cssa-aei.ca',
        questions: [
            [ "Who would win: 1000 CS students or 1 polar bear?", "I think we got it" ],
        ],
        song: "This ffffire - Franz Ferdinand/",
        songLink: "https://music.apple.com/us/song/this-fffire/29276049",
        songImage: "https://is1-ssl.mzstatic.com/image/thumb/Features/e1/a5/ea/dj.plgyurpa.jpg/600x600bb.webp",
    },
    {
        name: 'Lacia Paige Cummings',
        position: 'VP Phil Equity',
        year: '3rd Year',
        blurb: `Hi, I'm Lacia-Paige Cummings, a third-year Computer Science student in the French Immersion stream with a minor in Spanish. 
        I'm passionate about languages and hope to learn as many as I can! Outside of academics, 
        I'm a dancer who loves staying active, whether that's going for a run or spending time at the gym. Excited to meet you all <3`,
        frontImage: LaciaFront,
        galleryImages: [LaciaFront, LaciaFront, LaciaFront, LaciaFront, LaciaFront, LaciaFront, LaciaFront, LaciaFront, LaciaFront, LaciaFront],
        email: 'phil-equity@cssa-aei.ca',
        linkedIn: 'https://www.linkedin.com/in/lacia-paige-cummings-9a2ba0332',
        instagram: 'https://www.instagram.com/laciapaige',
        questions: [
            [ "Who would win: 1000 CS students or 1 polar bear?", "CS student definitely" ]
        ],
        song: 'Girl, Get Up. - Doechii feat. SZA',
        songLink: 'https://music.apple.com/us/song/girl-get-up/1865239527',
        songImage: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/af/6a/10/af6a10d8-23ba-5212-7fb5-f1fce06412da/25UMGIM72057.rgb.jpg/592x592bb.webp',
    },
    {
        name: 'Tracy Feghali',
        position: 'VP Exec Affairs',
        year: '2nd Year',
        blurb: `Hi! I'm Tracy, a first-year Data Science student. This year, I've been involved with the CSSA on the social side, 
        and I couldn't be happier to be part of such an amazing team. Outside of school, I love spending time with my sisters and friends, 
        and snuggling with my dog, Milo!`,
        frontImage: TracyFront,
        galleryImages: [TracyFront, TracyFront, TracyFront, TracyFront, TracyFront, TracyFront, TracyFront, TracyFront, TracyFront, TracyFront],
        email: 'exec-affairs@cssa-aei.ca',
        linkedIn: 'https://www.linkedin.com/in/tracy-feghali-1217b4307',
        questions: [
            [ "Who would win: 1000 CS students or 1 polar bear?", "A polar bear, sadly, while the students try to debug him!!" ]
        ],
        song: "Good Days - SZA",
        songLink: "https://music.apple.com/us/song/good-days/1546390051",
        songImage: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/ef/09/cf/ef09cf1f-a057-6039-00d3-7b5d14c7eba1/886449006717.jpg/592x592bb.webp",
    },
    {
        name: 'Kali Jade LaFontaine',
        position: 'VP Finance',
        year: '2nd Year',
        blurb: `As a second-year Computer Science student and VP Finance, 
        I enjoy working with numbers, systems, and structured problem-solving. I'm excited to be part of CSSA and contribute to our student community.`,
        frontImage: KaliFront,
        galleryImages: [KaliFront, KaliFront, KaliFront, KaliFront, KaliFront, KaliFront, KaliFront, KaliFront, KaliFront, KaliFront],
        email: 'finance@cssa-aei.ca',
        linkedIn: 'https://www.linkedin.com/in/kali-jade-lafontaine-b62624343/',
        questions: [
            [ "Who would win: 1000 CS students or 1 polar bear?", "1 polar bear" ]
        ],
        song: "August - Taylor swift",
        songLink: "https://music.apple.com/us/song/august/1524801944",
        songImage: "https://is1-ssl.mzstatic.com/image/thumb/Video124/v4/4f/56/d0/4f56d047-5f9e-d8de-0446-879c1a15a8ac/Job67f9bcc2-c099-4890-99a4-9035a9260544-108238448-PreviewImage_preview_image_nonvideo_sdr-Time1607911089290.png/592x592bb.webp",
    },
    {
        name: 'Nicolas Guilbault',
        position: 'VP Internal Affairs',
        year: '2nd Year',
        blurb: `Hey, my name is Nicolas. I'm a 2nd data science student. 
        Apart of dealing with numbers I love training martial art (bjj, Muay Thai, wrestling etc), 
        playing lots of video games and spending time with loved ones.`,
        frontImage: NicolasFront,
        galleryImages: [NicolasFront, NicolasFront, NicolasFront, NicolasFront, NicolasFront, NicolasFront, NicolasFront, NicolasFront, NicolasFront, NicolasFront],
        email: 'internal@cssa.ca',
        questions: [
            [ "Who would win: 1000 CS students or 1 polar bear?", "1000 CS students for sure. I think we're smart enough to figure out some sort of plan to defeat the beast. Even if it doesn't work, the bear is going to get tired eventually, right?" ]
        ],
        song: "Mary Jane's Last Dance - Tom Petty and the Heartbreakers",
        songLink: "https://music.apple.com/us/song/mary-janes-last-dance/1465207045",
        songImage: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/e4/c5/c5/e4c5c50d-7e75-dc31-e20c-5a3aafc06509/18UMGIM54648.rgb.jpg/632x632bb.webp",
    },
    {
        name: 'Daniela Bordeianu',
        position: 'VP External Affairs',
        year: '3rd Year',
        blurb: `Hi! I'm Daniela, your new VP External. I just wrapped up my second year, 
        including my first co-op term, and I'm really passionate about system design as well as software development. 
        Outside of tech, you'll find me painting using watercolour, staying active, or out taking photos of anything that catches my eye. 
        Can't wait to meet you all!`,
        frontImage: DanielaFront,
        galleryImages: [DanielaFront, DanielaFront, DanielaFront, DanielaFront, DanielaFront, DanielaFront, DanielaFront, DanielaFront, DanielaFront, DanielaFront],
        email: 'external@cssa-aei.ca',
        linkedIn: 'https://www.linkedin.com/in/danielabordeianu',
        questions: [
            [ "Who would win: 1000 CS students or 1 polar bear?", "Definitely the CS students, who are we kidding? The polar bear doesn't stand a chance" ],
        ],
        song: "Paradise - Sade",
        songLink: "https://music.apple.com/us/song/paradise/604770779",
        songImage: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/5f/ad/2a/5fad2aca-d998-701d-7b27-c074339d5fd0/886972262628.jpg/632x632bb.webp",
    },
    {
        name: 'Cloris Wong',
        position: 'VP Design',
        year: '2nd Year',
        blurb: `Hi! I'm the VP Design of CSSA and currently a second-year CS student. 
        I enjoy playing games, watching anime, and creating fan art of the characters and series I love in my free time. 
        Bringing creativity into design and visual storytelling is what I like to try.`,
        frontImage: ClorisFront,
        galleryImages: [ClorisFront, ClorisFront, ClorisFront, ClorisFront, ClorisFront, ClorisFront, ClorisFront, ClorisFront, ClorisFront, ClorisFront],
        email: 'design@cssa-aei.ca',
        linkedIn: 'https://www.linkedin.com/in/yui-hei-wong-8823482b7/',
        instagram: 'https://www.instagram.com/yui.hei.cloris',
        questions: [
            [ "Who would win: 1000 CS students or 1 polar bear?", "A polar bear would win a hackathon. A thousand CS students would win in surviving at the North Pole. Win-win." ]
        ],
        song: 'Quiet Romance by Yuki Kajiura',
        songLink: 'https://music.apple.com/us/song/quiet-romance/1576617533',
        songImage: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/31/9f/20/319f2065-62da-4ac8-ce20-4d489f88a20f/4534530132437.jpg/632x632bb.webp'
    }
]