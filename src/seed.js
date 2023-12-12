import { firebase, FieldValue } from "./lib/firebase";
import { serverTimestamp } from "firebase/firestore";

export function seedDatabase(firebase) {
    const highlights = [
        {
            imageUrl: "",
            timestamp: "",
            userAva: "https://i.imgur.com/NoGDjyG.jpg",
            userId: "",
            userUsername: "",
            verified: "",
        },
    ];
}

const userData = [
    {
        email: "google@g.com",
        password: "Support",
        username: "google",
        fullname: "Google",
        profilePicture:
            "https://blog.hubspot.com/hs-fs/hubfs/image8-2.jpg?width=600&name=image8-2.jpg",
        followers: [],
        following: [],
        verified: true,
        posts: [],
        bio: "Google unfiltered—sometimes with filters.",
    },
    {
        email: "unimelb@g.com",
        password: "Support",
        username: "unimelb",
        fullname: "The University of Melbourne",
        profilePicture:
            "https://usercontent.one/wp/studyoptions.com/wp-content/uploads/2021/09/The-University-of-Melbourne-logo-300x300.jpg",
        followers: [],
        following: [],
        verified: true,
        posts: [],
        bio: "Use #UniMelb / @unimelb to give us permission to repost",
    },
    {
        email: "dog@g.com",
        password: "Support",
        username: "dog",
        fullname: "The official Dog page",
        profilePicture:
            "https://static.wixstatic.com/media/1e431e_640162d980e245888a3ad854b4fcd724~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85/1e431e_640162d980e245888a3ad854b4fcd724~mv2.jpg",
        followers: [],
        following: [],
        verified: true,
        posts: [],
        bio: "I am human best friend <3",
    },
    {
        email: "cat@g.com",
        password: "Support",
        username: "cat",
        fullname: "The official Cat page",
        profilePicture: "http://placekitten.com/200/300",
        followers: [],
        following: [],
        verified: true,
        posts: [],
        bio: "We will conquer the world 😼",
    },
    {
        email: "instagram@g.com",
        password: "Support",
        username: "instagram",
        fullname: "Instagram",
        profilePicture:
            "https://cdn.mos.cms.futurecdn.net/6dDoc8GV9fYUPExgLYPqqT-1200-80.jpg",
        followers: [],
        following: [],
        verified: true,
        posts: [],
        bio: "Discover what's next on Instagram 🔎✨",
    },

    //// friends
    {
        email: "harvey@g.com",
        password: "Support",
        username: "harvey.tr",
        fullname: "𝙩𝙧𝙪𝙤𝙣𝙜𝙝𝙖𝙫𝙮",
        profilePicture: "https://i.imgur.com/cGsXYgP.jpg",
        followers: [],
        following: [],
        verified: false,
        posts: [],
        bio: "🇻🇳 ams 🇦🇺 unimelb",
    },
    {
        email: "aden@g.com",
        password: "Support",
        username: "aden.m",
        fullname: "Aden McCusker",
        profilePicture: "https://avatars.githubusercontent.com/u/46010107?v=4",
        followers: [],
        following: [],
        verified: false,
        posts: [],
        bio: "Melbourne, Victoria, Australia",
    },
    {
        email: "brian@g.com",
        password: "Support",
        username: "lm_dgg_koway",
        fullname: "吳國維 Brian Wu",
        profilePicture: "https://i.imgur.com/kHCU1Lz.png",
        followers: [],
        following: [],
        verified: false,
        posts: [],
        bio: "DVDcrew6th - Winds howling",
    },
    {
        email: "lucas@g.com",
        password: "Support",
        username: "_.lucas._",
        fullname: "Lucas Chan",
        profilePicture: "https://i.imgur.com/uH7KgB5.png",
        followers: [],
        following: [],
        verified: false,
        posts: [],
        bio: "📚SSIS’18 // PGS’20 // Unimelb BSci CSS’23",
    },
    {
        email: "jeremy@g.com",
        password: "Support",
        username: "_.jeremy._",
        fullname: "Jeremy Michael Graetsch Annal",
        profilePicture: "https://i.imgur.com/golmxuk.jpg",
        followers: [],
        following: [],
        verified: false,
        posts: [],
        bio: "Loading...",
    },
    {
        email: "jen@g.com",
        password: "Support",
        username: "jennifer.cubu",
        fullname: "Jen Duong",
        profilePicture:
            "https://static.vecteezy.com/system/resources/previews/023/506/852/non_2x/cute-kawaii-mushroom-chibi-mascot-cartoon-style-vector.jpg",
        followers: [],
        following: [],
        verified: false,
        posts: [],
        bio: "Local service",
    },
    {
        email: "harry@g.com",
        password: "Support",
        username: "harry.wang_",
        fullname: "Harry Wang",
        profilePicture:
            "https://image.spreadshirtmedia.com/image-server/v1/mp/products/T1459A839PA3861PT28D1035899527W10000H10000/views/1,width=1200,height=630,appearanceId=839,backgroundColor=F2F2F2/cute-penguin-loves-boba-tea-sticker.jpg",
        followers: [],
        following: [],
        verified: false,
        posts: [],
        bio: "Aus | Melb Uni Comp sci",
    },
    {
        email: "lawl@g.com",
        password: "Support",
        username: "lawrencelin18",
        fullname: "Lawrence Lin",
        profilePicture:
            "https://c8.alamy.com/comp/KMNCXM/astronaut-in-space-elements-of-this-iimage-furnished-by-nasa-KMNCXM.jpg",
        followers: [],
        following: [],
        verified: false,
        posts: [],
        bio: "vk iu @kim.trwg",
    },
];

// export async function createSeedUser(firebase) {
//     try {
//         for (const u of userData) {
//             const createdUser = await firebase
//                 .auth()
//                 .createUserWithEmailAndPassword(u.email, u.password);

//             await firebase
//                 .firestore()
//                 .collection("users")
//                 .doc(createdUser.user.uid)
//                 .set({
//                     username: u.username.toLowerCase(),
//                     email: u.email.toLowerCase(),
//                     fullname: u.fullname.toLowerCase(),
//                     profilePicture: u.profilePicture,
//                     followers: u.followers,
//                     following: u.following,
//                     userId: createdUser.user.uid,
//                     verified: u.verified,
//                     posts: u.posts,
//                     bio: u.bio,
//                 });

//             console.log(`User created: ${createdUser.user.uid}`);
//         }
//     } catch (error) {
//         console.error("Error creating users:", error);
//     }
// }

// fix update realtime follower, following in profile

// const newPost = {
//     userUsername: userUsername.toLowerCase(),
//     userAva: userAva,
//     userId: userId,
//     imageUrl: imgUrl,
//     caption: caption,
//     likes: [],
//     likeCounts: 0,
//     comments: [],
//     commentCounts: 0,
//     timestamp: serverTimestamp(),
//     verified: verified,
// };

const googleId = "EJcDQiFq4rVWHh3LRZxshag9DEw2";
const unimelbId = "wuDnnLgWfgRUSDY6DRv2hRZVJfV2";
const dogId = "KYpHa1NOVxRzsYUXhg9htywTtX03";
const catId = "FOvcIjMxSPXYl7TWVjCCNazfl513";
const insId = "BqQ8mVpkFfaPNPjBuGdQizGFUno1";

const veyId = "6upITnFxUhel1rzzBIP5q7xanjA2";
const jeremyId = "m4ByqX5JD5dwiUkrjgIVH6jKLOA3";
const adenId = "73em8rq5pIOUUzFN210KImyDTlw1";
const brianId = "D5uQaRtQF4dSp7u7hXpOl1UufxK2";
const lucasId = "XkrnMmahLIcnZZwskh6X4ANhBB23";
const jenId = "0YepfTyO8aPOH6zrrF1sNTCPYSd2";
const harryId = "EzxnAftKNZNo9Iu4E5HBOCYVD9J3";
const lawlId = "Zf4I61HPDjbZX1dBzDqu8f9eMXo2";
const dreyId = "xZe7V1UeX3P84j0mrIpkCrRjM1k2";

const pData = [
    // google
    {
        caption:
            "With great power comes great responsibility — and apparently, a lot of search interest. @SpiderVerseMovie g.co/25YearsinSearch #YearInSearch",
        comments: [],
        imageUrl: "https://i.imgur.com/usx6aHW.png",
        likes: [],
        userAva:
            "https://blog.hubspot.com/hs-fs/hubfs/image8-2.jpg?width=600&name=image8-2.jpg",

        userId: googleId,
        userUsername: "google",
        verified: true,
    },
    // unimelb
    {
        caption:
            "We've offered our first Narrm Scholarships to eligible students who received their Year 12 results yesterday, alongside our esteemed Melbourne Chancellor’s Scholarship offered to students who achieved academically outstanding results. Congratulations!",
        imageUrl: "https://i.imgur.com/Vrfvq0Y.png",
        comments: [],
        likes: [],
        userAva:
            "https://usercontent.one/wp/studyoptions.com/wp-content/uploads/2021/09/The-University-of-Melbourne-logo-300x300.jpg",

        userId: unimelbId,
        userUsername: "unimelb",
        verified: true,
    },
    // cat
    {
        caption: "Who can relate?",
        imageUrl:
            "https://www.boredpanda.com/blog/wp-content/uploads/2022/09/cat-memes-catslovecatnip-cover_800.png",
        comments: [],
        likes: [],
        userAva: "http://placekitten.com/200/300",

        userId: catId,
        userUsername: "cat",
        verified: true,
    },
    //dog
    {
        caption: "let's go!!!",
        imageUrl:
            "https://i.pinimg.com/736x/07/a8/8d/07a88d1f5115a47e65c3f2598a760d82.jpg",
        comments: [],
        likes: [],
        userAva:
            "https://i.pinimg.com/originals/12/c6/f0/12c6f07612826a4ecaa52d7fb825b5b3.jpg",

        userId: dogId,
        userUsername: "dog",
        verified: true,
    },
    // instagram

    {
        caption:
            "When considering my aesthetic, I like to think of it as ‘cartoon in real life,’” says the self-taught multidisciplinary artist and, more recently, novice toy-maker. “One striking quality of my characters is their immediate and welcoming presence, which mystifies their true intentions. I enjoy toying with the sinister flip side that cuteness can conceal, adding a layer of intrigue to the otherwise adorable and endearing nature of my creations.",
        imageUrl: "https://i.imgur.com/uiV3Lb1.png",
        comments: [],
        likes: [],
        userAva:
            "https://img.freepik.com/premium-vector/instagram-social-media-icon-gradient-social-media-logo_197792-4682.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1702339200&semt=ais",

        userId: insId,
        userUsername: "instagram",
        verified: true,
    },
    //vey
    {
        caption: "bad manners to keep Buda-best waiting",
        imageUrl: "https://i.imgur.com/oCfGgaw.jpg",
        comments: [],
        likes: [],
        userAva: "https://i.imgur.com/cGsXYgP.jpg",

        userId: veyId,
        userUsername: "harvey.tr",
        verified: false,
    },
    // Jeremmy
    {
        caption: "Graetch Michael",
        imageUrl: "https://i.imgur.com/golmxuk.jpg",
        comments: [],
        likes: [],
        userAva: "https://i.imgur.com/golmxuk.jpg",

        userId: jeremyId,
        userUsername: "_.jeremy._",
        verified: false,
    },

    // Aden
    {
        caption: "I love Flutter <3",
        imageUrl:
            "https://topdigital.agency/wp-content/uploads/2021/04/title-image.png",
        comments: [],
        likes: [],
        userAva: "https://avatars.githubusercontent.com/u/46010107?v=4",

        userId: adenId,
        userUsername: "aden.m",
        verified: false,
    },
    // Brian
    {
        caption: "Dance world!",
        imageUrl:
            "https://www.danceworldstudios.com/wp-content/uploads/2023/04/Junior-Dance-Kids.jpg",
        comments: [],
        likes: [],
        userAva: "https://i.imgur.com/kHCU1Lz.png",

        userId: brianId,
        userUsername: "lm_dgg_koway",
        verified: false,
    },
    // Lucas
    {
        caption: "Lee Chong Wei Jr",
        imageUrl:
            "https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_lg/f_auto/primary/n48stycjpdkk3ohkglvg",
        comments: [],
        likes: [],
        userAva: "https://i.imgur.com/uH7KgB5.png",

        userId: lucasId,
        userUsername: "_.lucas._",
        verified: false,
    },
    // Jen
    {
        caption: "I Graduated!",
        imageUrl: "https://i.imgur.com/lv6PiFs.jpg",
        comments: [],
        likes: [],
        userAva:
            "https://static.vecteezy.com/system/resources/previews/023/506/852/non_2x/cute-kawaii-mushroom-chibi-mascot-cartoon-style-vector.jpg",

        userId: jenId,
        userUsername: "jennifer.cubu",
        verified: false,
    },
    // Harry
    {
        caption: "Yum",
        imageUrl:
            "https://images.squarespace-cdn.com/content/v1/5d6373bf35fc9f0001a2c37d/1606653527309-WFRUFM6VNFR7TOUQVM25/201127_LAGOON_DINING_3799.jpg",
        comments: [],
        likes: [],
        userAva:
            "https://img.pikbest.com/png-images/qiantu/cute-square-rectangle-small-dinosaur-is-commercially-available_2575297.png!sw800",

        userId: harryId,
        userUsername: "harry.wang_",
        verified: false,
    },
    // Lawl
    {
        caption: "Cool",
        imageUrl:
            "https://images.squarespace-cdn.com/content/v1/5683aff9a12f443fdcd7b3a0/1613748834314-30BC7DR6FTV9BI6PLY06/lens+ball+800.jpg",
        comments: [],
        likes: [],
        userAva:
            "https://i.etsystatic.com/27713397/r/il/265d10/4503094953/il_fullxfull.4503094953_ioyq.jpg",

        userId: lawlId,
        userUsername: "lawrencelin18",
        verified: false,
    },
    // Drey
    {
        caption: "Cool",
        imageUrl: "https://i.imgur.com/enKGudj.jpg",
        comments: [],
        likes: [],
        userAva:
            "https://media.licdn.com/dms/image/C5603AQEoU_6p7eFO8A/profile-displayphoto-shrink_200_200/0/1639044381680?e=2147483647&v=beta&t=F4wV3HwJ7US3YxmmuAb-49brTwLoDXFLJvcjEfJC-IQ",

        userId: dreyId,
        userUsername: "drey.ng",
        verified: true,
    },
];

const postData = [
    {
        caption:
            "We choose you, Pikachu! And fans searching for you did too. g.co/25YearsinSearch #YearInSearch",
        imageUrl: "https://i.imgur.com/u2jZ2Li.png",
        comments: [],
        likes: [],
        userAva:
            "https://blog.hubspot.com/hs-fs/hubfs/image8-2.jpg?width=600&name=image8-2.jpg",

        userId: googleId,
        userUsername: "google",
        verified: true,
    },
    {
        caption:
            "Of all the sponges above and below the sea, only one was Most Searched. g.co/25YearsinSearch #YearInSearch",
        imageUrl: "https://i.imgur.com/MOkca2p.png",
        comments: [],
        likes: [],
        userAva:
            "https://blog.hubspot.com/hs-fs/hubfs/image8-2.jpg?width=600&name=image8-2.jpg",

        userId: googleId,
        userUsername: "google",
        verified: true,
    },
    {
        caption:
            "This Barbie is Most Searched. 💖 Here’s to everyone who helped make her the most searched toy in @google history. #Barbie #YearInSearch",
        imageUrl: "https://i.imgur.com/Vy39vln.png",
        comments: [],
        likes: [],
        userAva:
            "https://blog.hubspot.com/hs-fs/hubfs/image8-2.jpg?width=600&name=image8-2.jpg",

        userId: googleId,
        userUsername: "google",
        verified: true,
    },
    {
        caption:
            "From superstars to local heroes, here’s to the icons the world searched for most in the last 25 years. #YearInSearch",
        imageUrl: "https://i.imgur.com/qoEOcKn.png",
        comments: [],
        likes: [],
        userAva:
            "https://blog.hubspot.com/hs-fs/hubfs/image8-2.jpg?width=600&name=image8-2.jpg",

        userId: googleId,
        userUsername: "google",
        verified: true,
    },
    {
        caption:
            "sound off 🗣️ are you styling 80s, 90s or 2000s @madonna? 🤔 try #Bard now at the link in bio",
        imageUrl: "https://i.imgur.com/OTKmLR7.png",
        comments: [],
        likes: [],
        userAva:
            "https://blog.hubspot.com/hs-fs/hubfs/image8-2.jpg?width=600&name=image8-2.jpg",

        userId: googleId,
        userUsername: "google",
        verified: true,
    },
    {
        caption:
            "After getting over a dozen new features and a brand new AI model, Pixel cuts loose for some snowy fun with its best friend¹. #BestPhonesForever",
        imageUrl: "https://i.imgur.com/NSIDeje.png",
        comments: [],
        likes: [],
        userAva:
            "https://blog.hubspot.com/hs-fs/hubfs/image8-2.jpg?width=600&name=image8-2.jpg",

        userId: googleId,
        userUsername: "google",
        verified: true,
    },
    {
        caption:
            "A Year in Search like never before. Coming soon. #YearInSearch",
        imageUrl: "https://i.imgur.com/RDSDWdI.png",
        comments: [],
        likes: [],
        userAva:
            "https://blog.hubspot.com/hs-fs/hubfs/image8-2.jpg?width=600&name=image8-2.jpg",

        userId: googleId,
        userUsername: "google",
        verified: true,
    },
    {
        caption:
            "Introducing Gemini, Google’s most capable and general AI model. Here are 4 things you should know. #GeminiAI",
        imageUrl: "https://i.imgur.com/t5YHO3y.png",
        comments: [],
        likes: [],
        userAva:
            "https://blog.hubspot.com/hs-fs/hubfs/image8-2.jpg?width=600&name=image8-2.jpg",

        userId: googleId,
        userUsername: "google",
        verified: true,
    },

    {
        caption:
            "Demonstrating Australia’s growing reputation in the global space sector, SpIRIT is the first Australian satellite to carry a foreign space agency’s scientific instrument as its main payload, namely the Italian Space Agency’s HERMES X-ray detector. The HERMES X-ray detector is designed to search for bursts of gamma rays, which are created when stars die or collide and for a moment emit more energy than an entire galaxy.",
        imageUrl: "https://i.imgur.com/Ppqxen3.png",
        comments: [],
        likes: [],
        userAva:
            "https://usercontent.one/wp/studyoptions.com/wp-content/uploads/2021/09/The-University-of-Melbourne-logo-300x300.jpg",

        userId: unimelbId,
        userUsername: "unimelb",
        verified: true,
    },
    {
        caption:
            "Do you think your family and friends know? Never fear; we asked the age-old question to our recent graduates from @scimelb, and it's safe to say they're pursuing their dreams! 🎓",
        imageUrl: "https://i.imgur.com/Aq8GQQB.png",
        comments: [],
        likes: [],
        userAva:
            "https://usercontent.one/wp/studyoptions.com/wp-content/uploads/2021/09/The-University-of-Melbourne-logo-300x300.jpg",

        userId: unimelbId,
        userUsername: "unimelb",
        verified: true,
    },
    {
        caption:
            "We're thrilled to share that we've skyrocketed 42 places to be ranked ninth best in the world in the latest QS Sustainability Rankings from @TopUnis!",
        imageUrl: "https://i.imgur.com/WOvK59S.png",
        comments: [],
        likes: [],
        userAva:
            "https://usercontent.one/wp/studyoptions.com/wp-content/uploads/2021/09/The-University-of-Melbourne-logo-300x300.jpg",

        userId: unimelbId,
        userUsername: "unimelb",
        verified: true,
    },
    {
        caption:
            "Right now in Antarctica, Associate Professor Jen Martin (@SciDocMartin) and @FernHames are working together as members of the teaching faculty for @HomewardBoundProjects, a global leadership initiative for women and non-binary people with a background in #STEMM. With more than 100 participants from 29 countries, they're exploring the connections between leadership, strategy, visibility, and a sustainable future.",
        imageUrl: "https://i.imgur.com/XxTXA6x.png",
        comments: [],
        likes: [],
        userAva:
            "https://usercontent.one/wp/studyoptions.com/wp-content/uploads/2021/09/The-University-of-Melbourne-logo-300x300.jpg",

        userId: unimelbId,
        userUsername: "unimelb",
        verified: true,
    },

    {
        caption: "Ooops",
        imageUrl:
            "https://www.boredpanda.com/blog/wp-content/uploads/2022/09/105-6329b5d45e4d7__700.jpg",
        comments: [],
        likes: [],
        userAva: "http://placekitten.com/200/300",

        userId: catId,
        userUsername: "cat",
        verified: true,
    },
    {
        caption: "who you?",
        imageUrl:
            "https://i.pinimg.com/736x/b9/c4/7e/b9c47ef70bff06613d397abfce02c6e7.jpg",
        comments: [],
        likes: [],
        userAva: "http://placekitten.com/200/300",

        userId: catId,
        userUsername: "cat",
        verified: true,
    },

    {
        caption: "deep",
        imageUrl:
            "https://www.liveabout.com/thmb/SKMuuksWrnBqroq4LqRXfNjMjA0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/dog-memes-571fa6b45f9b58857d27307f.jpg",
        comments: [],
        likes: [],
        userAva:
            "https://i.pinimg.com/originals/12/c6/f0/12c6f07612826a4ecaa52d7fb825b5b3.jpg",

        userId: dogId,
        userUsername: "dog",
        verified: true,
    },
    {
        caption: "WOOF WOOF",
        imageUrl:
            "https://cdn.shopify.com/s/files/1/2423/8037/files/fun_dog_memes_2_480x480.jpg?v=1692421592",
        comments: [],
        likes: [],
        userAva:
            "https://i.pinimg.com/originals/12/c6/f0/12c6f07612826a4ecaa52d7fb825b5b3.jpg",

        userId: dogId,
        userUsername: "dog",
        verified: true,
    },

    {
        caption:
            "“We can’t respect our Earth without respecting each other, and we can’t respect each other without respecting our Earth. They are interconnected.” —Essayist and eco-feminist @kwolanne (Kwolanne Felix) ",
        imageUrl: "https://i.imgur.com/ie20Thz.png",
        comments: [],
        likes: [],
        userAva:
            "https://img.freepik.com/premium-vector/instagram-social-media-icon-gradient-social-media-logo_197792-4682.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1702339200&semt=ais",

        userId: insId,
        userUsername: "instagram",
        verified: true,
    },
    {
        caption:
            "“You know that feeling of walking down the same street every day, a scene you’re so familiar with, and one day you find something you’ve never noticed before? That’s the moment I’m trying to capture, and that’s why I enjoy focusing on little things that are easily forgotten,” says Leon",
        imageUrl: "https://i.imgur.com/DglEA6J.png",
        comments: [],
        likes: [],
        userAva:
            "https://img.freepik.com/premium-vector/instagram-social-media-icon-gradient-social-media-logo_197792-4682.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1702339200&semt=ais",

        userId: insId,
        userUsername: "instagram",
        verified: true,
    },
    {
        caption:
            "New York-based painter @moderndayconfucius (Leon Xu) creates works that revolve around ideas of memory, familiarity and déjà vu.",
        imageUrl: "https://i.imgur.com/Fmmmcq7.png",
        comments: [],
        likes: [],
        userAva:
            "https://img.freepik.com/premium-vector/instagram-social-media-icon-gradient-social-media-logo_197792-4682.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1702339200&semt=ais",

        userId: insId,
        userUsername: "instagram",
        verified: true,
    },
    {
        caption:
            "Following a move to NYC where ceramics became less accessible, Ducky adapted from clay to polymer as an artistic medium. “Since shifting my focus, my characters have undergone a transformation. They have become more talkative, expressive and vibrant, bursting with colors and textures that make them feel alive. Despite their outwardly inhuman appearance, at the heart of these creations lies the complexity of human nature.” ",
        imageUrl: "https://i.imgur.com/pFiX2Ui.png",
        comments: [],
        likes: [],
        userAva:
            "https://img.freepik.com/premium-vector/instagram-social-media-icon-gradient-social-media-logo_197792-4682.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1702339200&semt=ais",

        userId: insId,
        userUsername: "instagram",
        verified: true,
    },
    {
        caption:
            "“My main goal is to inspire others to be themselves.” — @alexyoumazzo (Alex Youmazzo)",
        imageUrl: "https://i.imgur.com/fvD5WXY.png",
        comments: [],
        likes: [],
        userAva:
            "https://img.freepik.com/premium-vector/instagram-social-media-icon-gradient-social-media-logo_197792-4682.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1702339200&semt=ais",

        userId: insId,
        userUsername: "instagram",
        verified: true,
    },
    {
        caption:
            "My work inherently celebrates and uplifts, offering visual candy that serves as something sweet and delectable for the mind’s eye to indulge in.",
        imageUrl: "https://i.imgur.com/2e6K2ch.png",
        comments: [],
        likes: [],
        userAva:
            "https://img.freepik.com/premium-vector/instagram-social-media-icon-gradient-social-media-logo_197792-4682.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1702339200&semt=ais",

        userId: insId,
        userUsername: "instagram",
        verified: true,
    },

    {
        caption: "<3 this roll",
        imageUrl: "https://i.imgur.com/4Ed64RA.jpg",
        comments: [],
        likes: [],
        userAva: "https://i.imgur.com/cGsXYgP.jpg",

        userId: veyId,
        userUsername: "harvey.tr",
        verified: false,
    },
    {
        caption: "🦥 low quality",
        imageUrl: "https://i.imgur.com/TKvLBzn.jpg",
        comments: [],
        likes: [],
        userAva: "https://i.imgur.com/cGsXYgP.jpg",

        userId: veyId,
        userUsername: "harvey.tr",
        verified: false,
    },
    {
        caption: "ein luftkuss",
        imageUrl: "https://i.imgur.com/A5BWwwV.jpg",
        comments: [],
        likes: [],
        userAva: "https://i.imgur.com/cGsXYgP.jpg",

        userId: veyId,
        userUsername: "harvey.tr",
        verified: false,
    },
    {
        caption: "brrrrr-lin dump 🍻🐊🍅 rrrrrewe",
        imageUrl: "https://i.imgur.com/Vvb9xQ0.jpg",
        comments: [],
        likes: [],
        userAva: "https://i.imgur.com/cGsXYgP.jpg",

        userId: veyId,
        userUsername: "harvey.tr",
        verified: false,
    },
    {
        caption: "tipsy",
        imageUrl: "https://i.imgur.com/4A8ufEX.jpg",
        comments: [],
        likes: [],
        userAva: "https://i.imgur.com/cGsXYgP.jpg",

        userId: veyId,
        userUsername: "harvey.tr",
        verified: false,
    },
    {
        caption: "học thì không học",
        imageUrl: "https://i.imgur.com/w960Aur.jpg",
        comments: [],
        likes: [],
        userAva: "https://i.imgur.com/cGsXYgP.jpg",

        userId: veyId,
        userUsername: "harvey.tr",
        verified: false,
    },
    {
        caption: "o nhonn 🧅 mi nhonn 😶👖👞",
        imageUrl: "https://i.imgur.com/wu3vKqo.jpg",
        comments: [],
        likes: [],
        userAva: "https://i.imgur.com/cGsXYgP.jpg",

        userId: veyId,
        userUsername: "harvey.tr",
        verified: false,
    },
    {
        caption: "🖍️",
        imageUrl: "https://i.imgur.com/u0k7oIm.jpg",
        comments: [],
        likes: [],
        userAva: "https://i.imgur.com/cGsXYgP.jpg",

        userId: veyId,
        userUsername: "harvey.tr",
        verified: false,
    },

    {
        caption: "",
        imageUrl: "https://i.imgur.com/58NZZJz.jpg",
        comments: [],
        likes: [],
        userAva:
            "https://media.licdn.com/dms/image/C5603AQEoU_6p7eFO8A/profile-displayphoto-shrink_200_200/0/1639044381680?e=2147483647&v=beta&t=F4wV3HwJ7US3YxmmuAb-49brTwLoDXFLJvcjEfJC-IQ",

        userId: dreyId,
        userUsername: "drey.ng",
        verified: true,
    },
    {
        caption: "",
        imageUrl: "https://i.imgur.com/Aorlk2B.jpg",
        comments: [],
        likes: [],
        userAva:
            "https://media.licdn.com/dms/image/C5603AQEoU_6p7eFO8A/profile-displayphoto-shrink_200_200/0/1639044381680?e=2147483647&v=beta&t=F4wV3HwJ7US3YxmmuAb-49brTwLoDXFLJvcjEfJC-IQ",

        userId: dreyId,
        userUsername: "drey.ng",
        verified: true,
    },
    {
        caption: "",
        imageUrl: "https://i.imgur.com/c8SG42t.jpg",
        comments: [],
        likes: [],
        userAva:
            "https://media.licdn.com/dms/image/C5603AQEoU_6p7eFO8A/profile-displayphoto-shrink_200_200/0/1639044381680?e=2147483647&v=beta&t=F4wV3HwJ7US3YxmmuAb-49brTwLoDXFLJvcjEfJC-IQ",

        userId: dreyId,
        userUsername: "drey.ng",
        verified: true,
    },
    {
        caption: "",
        imageUrl: "https://i.imgur.com/L5aFdd6.jpg",
        comments: [],
        likes: [],
        userAva:
            "https://media.licdn.com/dms/image/C5603AQEoU_6p7eFO8A/profile-displayphoto-shrink_200_200/0/1639044381680?e=2147483647&v=beta&t=F4wV3HwJ7US3YxmmuAb-49brTwLoDXFLJvcjEfJC-IQ",

        userId: dreyId,
        userUsername: "drey.ng",
        verified: true,
    },
    {
        caption: "",
        imageUrl: "https://i.imgur.com/8sg1Za8.jpg",
        comments: [],
        likes: [],
        userAva:
            "https://media.licdn.com/dms/image/C5603AQEoU_6p7eFO8A/profile-displayphoto-shrink_200_200/0/1639044381680?e=2147483647&v=beta&t=F4wV3HwJ7US3YxmmuAb-49brTwLoDXFLJvcjEfJC-IQ",

        userId: dreyId,
        userUsername: "drey.ng",
        verified: true,
    },
    {
        caption: "",
        imageUrl: "https://i.imgur.com/WrC0vBe.jpg",
        comments: [],
        likes: [],
        userAva:
            "https://media.licdn.com/dms/image/C5603AQEoU_6p7eFO8A/profile-displayphoto-shrink_200_200/0/1639044381680?e=2147483647&v=beta&t=F4wV3HwJ7US3YxmmuAb-49brTwLoDXFLJvcjEfJC-IQ",

        userId: dreyId,
        userUsername: "drey.ng",
        verified: true,
    },
    {
        caption: "",
        imageUrl: "https://i.imgur.com/3l69XjU.jpg",
        comments: [],
        likes: [],
        userAva:
            "https://media.licdn.com/dms/image/C5603AQEoU_6p7eFO8A/profile-displayphoto-shrink_200_200/0/1639044381680?e=2147483647&v=beta&t=F4wV3HwJ7US3YxmmuAb-49brTwLoDXFLJvcjEfJC-IQ",

        userId: dreyId,
        userUsername: "drey.ng",
        verified: true,
    },
    {
        caption: "",
        imageUrl: "https://i.imgur.com/QP6xf2d.jpg",
        comments: [],
        likes: [],
        userAva:
            "https://media.licdn.com/dms/image/C5603AQEoU_6p7eFO8A/profile-displayphoto-shrink_200_200/0/1639044381680?e=2147483647&v=beta&t=F4wV3HwJ7US3YxmmuAb-49brTwLoDXFLJvcjEfJC-IQ",

        userId: dreyId,
        userUsername: "drey.ng",
        verified: true,
    },
];

export async function createSeedPosts() {
    try {
        for (const u of pData) {
            const postsRef = firebase.firestore().collection("posts");

            // Create a new post object
            const newPost = {
                userUsername: u.userUsername.toLowerCase(),
                userAva: u.userAva,
                userId: u.userId,
                imageUrl: u.imageUrl,
                caption: u.caption,
                likes: u.likes,
                comments: u.comments,
                timestamp: serverTimestamp(),
                verified: u.verified,
            };

            // Add the new post to Firestore
            const docRef = await postsRef.add(newPost);

            // append to user field: posts
            const currentUserQuery = firebase
                .firestore()
                .collection("users")
                .doc(u.userId);
            // Update the post document with the post's ID
            await docRef.update({
                postId: docRef.id,
            });
            await currentUserQuery.update({
                posts: FieldValue.arrayUnion(docRef.id),
            });
            console.log(u);
        }
    } catch (error) {
        console.error("Error creating users:", error);
    }
}
