import AliFront from '../images/ali.webp';
import AngieFront from '../images/angie.webp';
import RachelQiFront from '../images/rachelqi.webp';
import RachelOFront from '../images/rachelo.webp';
import TimFront from '../images/Tim_Mao.webp';
import FayFront from '../images/Fay_Lee.webp';
import MeriemFront from '../images/Meriem_Mostefai.webp';
import JustinFront from '../images/Justin_Wang.webp';
import AashishFront from '../images/Aashish_Suresh.webp';
import ToluFront from '../images/Tolu_Emoruwa.webp';
import TaraFront from '../images/Tara_DenaudJoseph.webp';
import ErikFront from '../images/Erik.webp';
import ChelseaFront from '../images/chelsea.webp';

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
        year: '2nd Year',
        blurb: `Hi! I'm Rachel, a 2nd year CS & math student from Aurora. Outside of studying, I spend my time gaming, 
        hanging out with friends, or learning about something new (currently planes!). I can't wait to meet you all! 🥰 `,
        frontImage: RachelQiFront,
        email: 'academic@cssa-aei.ca',
        questions: [
            ["Do you think a spring roll is a burrito?", "No, because they aren't wrapped in a tortilla and are traditionally deep-fried. Source: am Chinese."]
        ],
        song: "You're On Your Own, Kid - Taylor Swift",
        songLink: "https://music.apple.com/us/album/youre-on-your-own-kid/1649434004?i=1649434298",
        songImage: "https://is1-ssl.mzstatic.com/image/thumb/Video112/v4/b6/28/23/b6282315-240d-78f0-0f7d-bec9f71be33e/Job99958555-3bb9-421c-a723-ef66635dcdab-139171365-PreviewImage_preview_image_nonvideo_sdr-Time1668634899071.png/632x632bb.webp",
        // personalEmail: "rqi041@uottawa.ca",
        instagram: "https://www.instagram.com/r.chel.i/",
        linkedIn: 'https://www.linkedin.com/in/rachel-q/'
    },
    {
        name: 'Ali Raza Bhangu',
        position: 'President',
        year: '4th Year',
        blurb: "I'm Ali, I'm in my 4th year of CS with one co-op term left and I'm a 4x CSSA Executive. I like long walks on the beach, biking, and Software development. You can catch me working on projects in the CSSA office or just hanging out",
        frontImage: AliFront,
        email: 'president@cssa-aei.ca',
        linkedIn: 'https://www.linkedin.com/in/alirazabhangu/',
        questions: [
            ["Do you think a spring roll is a burrito?", "The way a spring roll is rolled is very burrito like, which leads me to believe it may be a burrito"]
        ],
        song: 'Pressure - Rushy',
        songImage: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/dc/55/d0/dc55d0f2-c3bc-2256-a990-6450c9354c83/5063268878120_cover.jpg/592x592bb.webp',
        songLink: 'https://music.apple.com/us/album/pressure/1692834373?i=1692834648',
        // personalEmail: 'alibhangu1@outlook.com',
        instagram: "https://www.instagram.com/notalibhangu/"
    },
    {
        name: 'Angeleeca Jocson',
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
        name: 'Justin Wang',
        position: '101 Week Coordinator',
        year: '4th Year',
        blurb: `You come here often? I'm Justin and I'm currently going into my 4th year. If you see me walking around 
        with a Hawaiian shirt or a jersey, you'll know it's me!`,
        frontImage: JustinFront,
        email: '',
        linkedIn: 'https://www.linkedin.com/in/justin-wang-181b28203/',
        questions: [
            ["Do you think a spring roll is a burrito?", "Yes, it's the burrito's asian cousin. They descend from the same family tree of rolled objects."]
        ],
        song: 'Cornelius Brothers & Sister Rose - Too Late To Turn Back Now',
        songImage: 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/ca/e4/17/cae41776-443d-76c3-9a8a-72edbf081158/00724385396656.jpg/632x632bb.webp',
        songLink: 'https://music.apple.com/us/album/too-late-to-turn-back-now/724661748?i=724661857',
    },
    {
        name: 'Aashish Suresh',
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
        name: 'Timothy Mao',
        position: 'VP Logistics',
        year: '4th Year',
        blurb: `Hey, I'm Tim and I'm now in my 4th year! I'm the guy who keeps track of merch and games -- 
        pretty sweet gig, right? I also love listening to music and trying to survive the everyday!`,
        frontImage: TimFront,
        email: 'logistics@cssa-aei.ca',
        linkedIn: 'https://www.linkedin.com/in/the-offliner/',
        questions: [
            ["Do you think a spring roll is a burrito?", "It's similar to a burrito, but no it's not a burrito. BUT a hotdog is definitely a sandwich"]
        ],
        song: 'Sunset Jesus - Avicii',
        songLink: 'https://music.apple.com/us/album/sunset-jesus/1440834059?i=1440834615',
        songImage: 'https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/e0/f4/25/e0f425ba-2848-f1c2-e102-9ddcef5e9d9d/15UMGIM35223.rgb.jpg/632x632bb.webp'
    },
    {
        name: 'Fay Lee',
        position: 'VP Philanthropy',
        year: '3rd Year',
        blurb: `Hi, my name's Fay and I'm in third year! When I'm not procrastinating assignments or pretending to be busy at work, I love going on 
        hot girl walks, spending time with friends, and watching reality tv/teen dramas!`,
        frontImage: FayFront,
        email: 'phil@cssa-aei.ca',
        linkedIn: 'https://www.linkedin.com/in/fay-lee/',
        questions: [
            ["Do you think a spring roll is a burrito?", "No… it's a spring roll. Conceptually they're their own distinct entities, just because they're wrapped similarly doesn't make it the same thing!"]
        ],
        songLink: 'https://music.apple.com/us/album/mirrorball-the-long-pond-studio-sessions/1541904688?i=1541905080',
        songImage: 'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/0f/a0/14/0fa0144d-6cd5-792a-1589-3e1f0c25db49/20UM1IM08851.rgb.jpg/632x632bb.webp',
        song: 'mirrorball (the long pod studio sessions) - Taylor Swift',
        instagram: "https://www.instagram.com/fayy.lee/",
        // personalEmail: "flee081@uottawa.ca",
    },
    {
        name: 'Chelsea Brown',
        position: 'VP Internal Affairs',
        year: '3rd Year',
        blurb: `Hello! I'm Chelsea, if you were confused about that. I'm this year's VP Internal, which means I'm responsible for all 
        things related to our office. I'm responsible for keeping our office orderly, fun, and stocked with snacks!! When I'm not frantically doing homework, I'm likely playing piano/guitar, cooking, 
        perfecting my latte art, or trying to nurse my tomato plants back to health. If you have any office questions, come find me during my office hours!!`,
        frontImage: ChelseaFront,
        email: 'internal@cssa-aei.ca',
        linkedIn: 'https://www.linkedin.com/in/chelsea-brown-89340a245/',
        questions: [
            ["Do you think a spring roll is a burrito?", "No! There's no rice in a spring roll >:[ but i do love the out of the box thinking..."]
        ],
        song: "To Learn - Leith Ross",
        songLink: "https://music.apple.com/us/album/to-learn/1682951304?i=1682951426",
        songImage: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/9a/ea/a3/9aeaa3b3-656c-8e7a-6f88-46645493cb6d/23UMGIM21848.rgb.jpg/632x632bb.webp",
    },
    {
        name: 'Rachel Olugbemiro',
        position: 'VP Equity',
        year: '3rd Year',
        blurb: `Hey everyone! My name is Rachel and I'm your VP Equity of the CSSA this year! I'm in my 2nd year of CS and my job is to promote equity in and outside of the CSSA. 
        When I'm not doing my assignments I enjoy going to the gym and hanging out with friends.`,
        frontImage: RachelOFront,
        email: 'equity@cssa-aei.ca',
        linkedIn: 'https://www.linkedin.com/in/rachel-olugbemiro/',
        questions: [
            ["Do you think a spring roll is a burrito?", "Yes it is, i love mini burritos😋😋"]
        ],
        song: "Red Wine Supernova - Chappell Roan",
        songLink: "https://music.apple.com/us/album/red-wine-supernova/1686988889?i=1686988896",
        songImage: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/ca/8e/78/ca8e7878-4c53-0c23-acff-85f69a4803a7/23UMGIM46981.rgb.jpg/632x632bb.webp",
        // personalEmail: "rachelolugbemiro16@gmail.com"
    },
    {
        name: 'Erik Ang',
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
        name: 'Toluwanimi Emoruwa',
        position: 'VP IT',
        year: '4th Year',
        blurb: `Hey, I'm Tolu and I'm a current 4th year student here. When I'm not in the office working on school you can find me on campus at different intramurals. 
        Hope to see you around campus!`,
        frontImage: ToluFront,
        email: 'it@cssa-aei.ca',
        linkedIn: 'https://www.linkedin.com/in/toluwanimi-emoruwa-1417ab218/',
        instagram: 'https://www.instagram.com/t.o.l.u.e/',
        // personalEmail: 'emoruwatoluwanimi@gmail.com',
        questions: [
            ["Do you think a spring roll is a burrito?", "No. A spring roll would be a chimichanga more than anything"],
            ["", ""]
        ],
        song: 'Next Levels - King Geedorah',
        songImage: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/8d/90/7e/8d907ef8-b448-849d-5858-238ac35a2063/dj.nwgymcvg.jpg/632x632bb.webp',
        songLink: 'https://music.apple.com/us/album/next-levels-feat-4-winds-lil-sci-stahhr/416318858?i=416318865'
    },
    {
        name: 'Meriem Mostefai',
        position: 'VP Social',
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
        name: 'Tara Denaud Joseph',
        position: 'VP Communications',
        year: '3rd Year',
        blurb: `Hi everyone! My name is Tara, I am in 3rd year and I am this year's VP Comms! To put it shortly, I take care of the communication between the CSSA executive team and all the Computer Science students. Outside from everything CompSci related, I love doing my nails, spending time with friends, watching shows and doing random crafty things!`,
        frontImage: TaraFront,
        email: 'comms@cssa-aei.ca',
        linkedIn: 'https://www.linkedin.com/in/taradenaud/',
        questions: [
            ["Do you think a spring roll is a burrito?", "I mean why not, we can think of one as tasty mini version! We can think of them as second cousins maybe??"]
        ],
        song: "Rocketeer - Far East Movement",
        songLink: "https://music.apple.com/us/album/rocketeer-feat-ryan-tedder/1443121422?i=1443121691",
        songImage: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/5f/69/26/5f6926ea-5a7f-17d9-25ce-dbcddfbc14d8/10UMGIM25431.rgb.jpg/592x592bb.webp"
    },
]