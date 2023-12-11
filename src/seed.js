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

// Ticks: Google, unimelb, dog, cat, instagram
// friends: Vey, Jeremy, aden, Brian, Lucas, Jen, Harry, Lawl
export async function createSeedUser(firebase) {
    try {
        for (const u of userData) {
            const createdUser = await firebase
                .auth()
                .createUserWithEmailAndPassword(u.email, u.password);

            await firebase
                .firestore()
                .collection("users")
                .doc(createdUser.user.uid)
                .set({
                    username: u.username.toLowerCase(),
                    email: u.email.toLowerCase(),
                    fullname: u.fullname.toLowerCase(),
                    profilePicture: u.profilePicture,
                    followers: u.followers,
                    following: u.following,
                    userId: createdUser.user.uid,
                    verified: u.verified,
                    posts: u.posts,
                    bio: u.bio,
                });

            console.log(`User created: ${createdUser.user.uid}`);
        }
    } catch (error) {
        console.error("Error creating users:", error);
    }
}
