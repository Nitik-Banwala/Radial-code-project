import {
    BLOG,
    FACEBOOK,
    HOME,
    INSTA,
    LEARN_WITH_PUPILO,
    LINKEDIN,
    MAIL,
    PHONE,
    PROGRAMS,
    TIKTOK,
    WHATSAPP,
    WHY_PUPILO,
    YOUTUBE,
} from "./constant";

export const IMAGES = [
    "/assets/images/webp/scratch.webp",
    "/assets/images/webp/roblox.webp",
    "/assets/images/webp/python.webp",
    "/assets/images/webp/minecraft.webp",
    "/assets/images/webp/tailwind.webp",
    "/assets/images/webp/scratch.webp",
    "/assets/images/webp/roblox.webp",
    "/assets/images/webp/python.webp",
    "/assets/images/webp/minecraft.webp",
    "/assets/images/webp/tailwind.webp",
];

export const NAV_LIST = [
    {
        title: "Home",
        path: HOME,
    },
    {
        title: "Programs",
        path: PROGRAMS,
    },
    {
        title: "Why Pupilo?",
        path: WHY_PUPILO,
    },
    {
        title: "Learn with Pupilo",
        path: LEARN_WITH_PUPILO,
    },
    {
        title: "Blog",
        path: BLOG,
    },
];

export const FOOTER_LINKS = [
    {
        title: "About Us",
        links: [
            "Home",
            "Courses",
            "How It Works",
            "Why Pupilo?",
            "Instructors",
            "Blog",
        ],
    },
    {
        title: "Our Programs",
        links: [
            "Coding Fundamentals",
            "Game Development",
            "Programming with Python",
            "App & Web Development",
        ],
    },
];

export const CARD_DATA = [
    {
        pupilo: {
            img: "/assets/images/webp/blogOne.webp",
            date: "By John doe on 2 June 2025",
            title: "The Code Learning Blog: For Kids, Teens, and Adults",
            title2: "explore the World of Coding: Tips and Insights for All Ages",
            paragraph:
                "Discover coding resources, tips, and stories designed for learners of every age. Whether you're a curious kid.",
            paragraph2:
                "Discover coding tips, inspiring stories, and expert insights crafted for learners of all ages. Whether you're a curious student, a working professional, or someone exploring a new passion, our blog is here to guide you. From beginner basics to real-world projects, explore how anyone—from age 10 to 50—can start coding and grow.",
        },
        blog: {
            img: "/assets/images/webp/pupiloOne.webp",
            img2: "/assets/images/png/blogeFour.png",
            date: "By Maria Chen on 5 September 2025",
            title: "explore the World of Coding: Tips and Insights for All Ages",
            paragraph:
                "Coding looks polished on the outside — sleek apps, beautiful websites, powerful software. But behind every great product is a developer who struggled, debugged for hours, and kept going anyway.",
            intro:
                "Coding looks polished on the outside — sleek apps, beautiful websites, powerful software. But behind every great product is a developer who struggled, debugged for hours, and kept going anyway. In this blog, we pull back the curtain and share the real stories behind the code.",
            sections: [
                {
                    id: "struggles-and-breakthroughs",
                    heading: "The Real Struggles Behind Learning to Code",
                    img: "/assets/images/webp/pupiloThree.webp",
                    paragraph:
                        "Nobody talks about the hard parts enough. Here are the most common struggles students face — and how to overcome them:",
                    points: [
                        {
                            label: "Imposter Syndrome",
                            text: "Almost every developer feels like they don't belong or aren't 'good enough'. The truth? Even senior developers Google basic things daily. You are not behind — you are learning.",
                        },
                        {
                            label: "Tutorial Hell",
                            text: "Watching tutorials endlessly without building anything real. The fix: after every tutorial, close it and try to rebuild the project from scratch without looking.",
                        },
                        {
                            label: "Debugging Frustration",
                            text: "Spending hours on a bug that turns out to be a missing semicolon. This is normal. Debugging is a skill — the more you do it, the faster and calmer you get.",
                        },
                        {
                            label: "Losing Motivation",
                            text: "Progress feels slow and invisible. Track your wins — even small ones. Look back at what you couldn't do 3 months ago. The progress is real, even when it doesn't feel like it.",
                        },
                    ],
                },
                {
                    id: "tools-and-platforms",
                    heading: "Tools & Platforms to Begin Your Journey",
                    img: "/assets/images/webp/blogOne.webp",
                    paragraph:
                        "The right tools make all the difference. Here's a breakdown of the most user-friendly and effective platforms to get started:",
                    points: [
                        {
                            label: "Absolute Beginners",
                            text: "Scratch (age 8–16): Visual programming to build animations, games, and stories. Code.org: Great for K–12 students but scalable for adults too. Grasshopper (by Google): Mobile-first JavaScript learning app.",
                        },
                        {
                            label: "Next-Level Learners",
                            text: "Khan Academy: Thousands of hours of structured tutorials. Interactive JS and web dev courses. Replit: Learn and build real projects in-browser.",
                        },
                        {
                            label: "For Deep Divers",
                            text: "LeetCode / HackerRank: Practice coding problems for interviews or upskilling. CS50 by Harvard (on edX): A full-stack intro to computer science.",
                        },
                    ],
                },
                {
                    id: "your-story-matters",
                    heading: "Your Story Matters Too",
                    img: "/assets/images/webp/pupiloOne.webp",
                    paragraph:
                        "Every student who walks through our doors has a unique story. And every one of those stories deserves to be told. Here's why sharing your journey matters:",
                    points: [
                        {
                            text: "Sharing your progress on LinkedIn or Twitter builds your personal brand and attracts opportunities.",
                        },
                        {
                            text: "Writing about what you learn — even as a beginner — helps others and reinforces your own understanding.",
                        },
                        {
                            text: "Your struggles and breakthroughs can inspire someone else who is exactly where you were 6 months ago.",
                        },
                        {
                            text: "Building in public creates accountability and keeps you consistent when motivation is low.",
                        },
                    ],
                    useCoding: [
                        "Share your journey on LinkedIn",
                        "Start a coding blog",
                        "Post your projects on GitHub",
                        "Inspire the next generation",
                    ],
                    outro:
                        "Behind every line of code is a human story — of curiosity, persistence, failure, and triumph. Your story is still being written. Whether you're on chapter one or chapter ten, keep going. The coding world needs more diverse voices, more unique perspectives, and more people like you. We're proud to be part of your story.",
                },
            ],
        },
    },
    {
        pupilo: {
            img: "/assets/images/webp/blogTwo.webp",
            date: "By Jane Smith on 10 July 2025",
            title: "Learning to Code at Any Age",
            title2: "From First Line to Full Stack: Journeys from Our Students",
            paragraph:
                "Discover coding resources, tips, and stories designed for learners of every age. Whether you're a curious kid.",
            paragraph2:
                "Every developer has a story — a moment when something clicked, a project that changed everything, or a mentor who believed in them. At our coding center, we've watched hundreds of students transform from complete beginners into confident developers.",
        },
        blog: {
            img: "/assets/images/webp/pupiloTwo.webp",
            img2: "/assets/images/webp/blogTwo.webp",
            date: "By Jane Smith on 10 July 2025",
            title: "From First Line to Full Stack: Journeys from Our Students",
            paragraph:
                "Epoxy coatings provide a durable, moisture-resistant surface ideal for high-traffic areas.",
            intro:
                "Every developer has a story — a moment when something clicked, a project that changed everything, or a mentor who believed in them. At our coding center, we've watched hundreds of students transform from complete beginners into confident developers. Here are some of their journeys.",
            sections: [
                {
                    id: "student-stories",
                    heading: "Real Stories from Real Students",
                    img: "/assets/images/webp/pupiloOne.webp",
                    paragraph:
                        "These are not just success stories — they are proof that with the right guidance and determination, anyone can learn to code.",
                    points: [
                        {
                            label: "Aryan, Age 14",
                            text: "Aryan joined our beginner Python class with zero experience. Within 6 months, he built a weather app and won his school's science fair. Today he mentors younger students on weekends.",
                        },
                        {
                            label: "Priya, Age 28",
                            text: "A marketing professional by day, Priya wanted to understand the tech side of her job. After completing our web development course, she built her company's internal dashboard — and got a promotion.",
                        },
                        {
                            label: "Ramesh, Age 45",
                            text: "After 20 years in sales, Ramesh decided to pivot. He took our full-stack bootcamp and landed a junior developer role at a startup within a year. Age was never a barrier.",
                        },
                        {
                            label: "Sneha, Age 19",
                            text: "Sneha came in shy and unsure. She started with HTML/CSS and gradually moved to React. She now freelances part-time while studying, earning her own income as a college student.",
                        },
                    ],
                },
                {
                    id: "your-journey-starts",
                    heading: "Your Journey Starts Today",
                    img: "/assets/images/webp/blogOne.webp",
                    paragraph:
                        "The only difference between you and our successful students is that they started. Here's what you can do right now:",
                    points: [
                        {
                            text: "Sign up for our free intro class and write your first line of code today.",
                        },
                        {
                            text: "Join our student community on Discord and connect with learners at every stage.",
                        },
                        {
                            text: "Pick one project idea — no matter how small — and commit to building it.",
                        },
                        {
                            text: "Follow our weekly blog for tips, resources, and student spotlights.",
                        },
                    ],
                    useCoding: [
                        "Build your first portfolio project",
                        "Get your first freelance client",
                        "Land a junior developer job",
                        "Launch your own product",
                    ],
                    outro:
                        "Every expert was once a beginner. Every full-stack developer once struggled with a for loop. The journey from your first line to full stack is not always easy — but it is absolutely worth it. Your story is waiting to be written. Start today.",
                },
            ],
        },
    },
    {
        pupilo: {
            img: "/assets/images/webp/blogThree.webp",
            date: "By Alex Johnson on 18 August 2025",
            title: "The Power of Learning at Every Stage",
            title2: "Your Coding Companion: Learn, Practice, and Grow with Us",
            paragraph:
                "Discover coding resources, tips, and stories designed for learners of every age. Whether you're a curious kid.",
            paragraph2:
                "Learning to code is a journey, not a destination. The best coders never stop learning — they keep practicing, exploring new tools, and pushing their limits. That's exactly what we're here to support.",
        },
        blog: {
            img: "/assets/images/webp/pupiloThree.webp",
            img2: "/assets/images/webp/blogThree.webp",
            date: "By Alex Johnson on 18 August 2025",
            title: "Your Coding Companion: Learn, Practice, and Grow with Us",
            paragraph:
                "Installing epoxy flooring involves surface preparation, priming, and applying multiple.",
            intro:
                "Learning to code is a journey, not a destination. The best coders never stop learning — they keep practicing, exploring new tools, and pushing their limits. That's exactly what we're here to support. Think of us as your coding companion for every stage of growth.",
            sections: [
                {
                    id: "learn-the-right-way",
                    heading: "Learn the Right Way from Day One",
                    img: "/assets/images/webp/blogOne.webp",
                    paragraph:
                        "Most beginners make the mistake of jumping between tutorials without building anything. Here's how to learn effectively from the start:",
                    points: [
                        {
                            label: "Learn by Doing",
                            text: "Every concept you learn should immediately be applied to a small project. Don't just watch — code along, experiment, break things, and fix them.",
                        },
                        {
                            label: "Follow a Structured Curriculum",
                            text: "Random YouTube videos won't get you far. Follow a structured path — HTML → CSS → JS → React — so your knowledge builds on itself.",
                        },
                        {
                            label: "Set Weekly Goals",
                            text: "Instead of vague goals like 'learn JavaScript', set specific ones: 'Build a working calculator by Friday.' Specific goals create real progress.",
                        },
                        {
                            label: "Join a Community",
                            text: "Coding alone is hard. Join forums, Discord servers, or local meetups. Having peers to learn with and mentors to guide you speeds up progress dramatically.",
                        },
                    ],
                },
                {
                    id: "practice-tools",
                    heading: "Practice Tools We Recommend",
                    img: "/assets/images/webp/pupiloTwo.webp",
                    paragraph:
                        "Practice is everything in coding. Here are the best tools to sharpen your skills daily:",
                    points: [
                        {
                            label: "CodePen",
                            text: "Perfect for HTML, CSS, and JavaScript experiments. See your code run instantly in the browser — great for trying out new ideas quickly.",
                        },
                        {
                            label: "Replit",
                            text: "A full online IDE that supports dozens of languages. Great for building and sharing projects without any local setup.",
                        },
                        {
                            label: "LeetCode & HackerRank",
                            text: "For sharpening problem-solving and algorithm skills. Even 15 minutes a day of coding challenges builds serious logical thinking over time.",
                        },
                        {
                            label: "GitHub",
                            text: "Start committing your code from day one. GitHub is not just version control — it's your developer portfolio that employers actually look at.",
                        },
                    ],
                },
                {
                    id: "grow-your-skills",
                    heading: "Grow Your Skills Beyond the Basics",
                    img: "/assets/images/webp/pupiloOne.webp",
                    paragraph:
                        "Once you have the basics down, the real fun begins. Here's how to keep growing and stay ahead:",
                    points: [
                        {
                            text: "Contribute to open-source projects on GitHub to get real-world experience.",
                        },
                        {
                            text: "Build and deploy at least one full project every month to grow your portfolio.",
                        },
                        {
                            text: "Read developer blogs, follow tech Twitter, and stay updated with new tools and frameworks.",
                        },
                        {
                            text: "Teach what you know — writing blogs or making videos about coding concepts solidifies your own understanding.",
                        },
                    ],
                    useCoding: [
                        "Contribute to open source",
                        "Build a personal portfolio site",
                        "Write your first tech blog",
                        "Mentor a beginner",
                    ],
                    outro:
                        "Growth in coding is not linear — some days you'll feel unstoppable, other days a single bug will consume hours. That's normal. What matters is that you keep showing up. Learn consistently, practice daily, and never stop building. We'll be right here with you every step of the way.",
                },
            ],
        },
    },
    {
        pupilo: {
            img: "/assets/images/webp/blogFour.webp",
            date: "By Maria Chen on 5 September 2025",
            title: "The Power of Learning at Every Stage",
            title2: "Behind the Code: Stories and Resources for Every Student",
            paragraph:
                "Discover coding resources, tips, and stories designed for learners of every age. Whether you're a curious kid.",
            paragraph2:
                "Coding looks polished on the outside — sleek apps, beautiful websites, powerful software. But behind every great product is a developer who struggled, debugged for hours, and kept going anyway.",
        },
        blog: {
            img: "/assets/images/webp/pupiloTwo.webp",
            img2: "/assets/images/webp/blogFour.webp",
            date: "By Maria Chen on 5 September 2025",
            title: "Behind the Code: Stories and Resources for Every Student",
            paragraph:
                "Garages demand tough, long-lasting flooring, and epoxy stands out for its strength.",
            intro:
                "Coding looks polished on the outside — sleek apps, beautiful websites, powerful software. But behind every great product is a developer who struggled, debugged for hours, and kept going anyway. In this blog, we pull back the curtain and share the real stories behind the code.",
            sections: [
                {
                    id: "struggles-and-breakthroughs",
                    heading: "The Real Struggles Behind Learning to Code",
                    img: "/assets/images/webp/blogOne.webp",
                    paragraph:
                        "Nobody talks about the hard parts enough. Here are the most common struggles students face — and how to overcome them:",
                    points: [
                        {
                            label: "Imposter Syndrome",
                            text: "Almost every developer feels like they don't belong or aren't 'good enough'. The truth? Even senior developers Google basic things daily. You are not behind — you are learning.",
                        },
                        {
                            label: "Tutorial Hell",
                            text: "Watching tutorials endlessly without building anything real. The fix: after every tutorial, close it and try to rebuild the project from scratch without looking.",
                        },
                        {
                            label: "Debugging Frustration",
                            text: "Spending hours on a bug that turns out to be a missing semicolon. This is normal. Debugging is a skill — the more you do it, the faster and calmer you get.",
                        },
                        {
                            label: "Losing Motivation",
                            text: "Progress feels slow and invisible. Track your wins — even small ones. Look back at what you couldn't do 3 months ago. The progress is real, even when it doesn't feel like it.",
                        },
                    ],
                },
                {
                    id: "best-free-resources",
                    heading: "Best Free Resources for Every Level",
                    img: "/assets/images/webp/pupiloThree.webp",
                    paragraph:
                        "You don't need to spend a fortune to learn to code. Here are the best free resources available right now:",
                    points: [
                        {
                            label: "For Complete Beginners",
                            text: "freeCodeCamp.org: Full curriculum from HTML to JavaScript to React, completely free. The Odin Project: A project-based full-stack curriculum loved by self-taught developers worldwide.",
                        },
                        {
                            label: "For Intermediate Learners",
                            text: "JavaScript.info: The most comprehensive JavaScript guide on the internet. MDN Web Docs: The official documentation for HTML, CSS, and JavaScript — bookmark it.",
                        },
                        {
                            label: "For Advanced Learners",
                            text: "Frontend Masters (free tier): High-quality courses from industry experts. MIT OpenCourseWare: Free university-level computer science courses from MIT.",
                        },
                        {
                            label: "For Interview Prep",
                            text: "LeetCode, NeetCode.io, and Blind 75 — the holy trinity of technical interview preparation for landing jobs at top tech companies.",
                        },
                    ],
                },
                {
                    id: "your-story-matters",
                    heading: "Your Story Matters Too",
                    img: "/assets/images/webp/pupiloOne.webp",
                    paragraph:
                        "Every student who walks through our doors has a unique story. And every one of those stories deserves to be told. Here's why sharing your journey matters:",
                    points: [
                        {
                            text: "Sharing your progress on LinkedIn or Twitter builds your personal brand and attracts opportunities.",
                        },
                        {
                            text: "Writing about what you learn — even as a beginner — helps others and reinforces your own understanding.",
                        },
                        {
                            text: "Your struggles and breakthroughs can inspire someone else who is exactly where you were 6 months ago.",
                        },
                        {
                            text: "Building in public creates accountability and keeps you consistent when motivation is low.",
                        },
                    ],
                    useCoding: [
                        "Share your journey on LinkedIn",
                        "Start a coding blog",
                        "Post your projects on GitHub",
                        "Inspire the next generation",
                    ],
                    outro:
                        "Behind every line of code is a human story — of curiosity, persistence, failure, and triumph. Your story is still being written. Whether you're on chapter one or chapter ten, keep going. The coding world needs more diverse voices, more unique perspectives, and more people like you. We're proud to be part of your story.",
                },
            ],
        },
    },
];

export const FAMILIES_DATA_LIST = [
    {
        name: "Kayla Steyn",
        description:
            "My son shifted from watching cartoons to building interactive stories! Pupilo's ScratchJr classes sparked his creativity.",
        image: "/assets/images/webp/familyOne.webp",
    },
    {
        name: "Naledi Moeketsi",
        description:
            "I never thought my son would enjoy math, but through Pupilo's game design classes, he's learning coding and math at the same time.",
        image: "/assets/images/webp/familyTwo.webp",
    },
    {
        name: "Johan Botha",
        description:
            "The live coding sessions are fantastic! My daughter used to shy away from technology — now she's proudly building animations in Scratch.",
        image: "/assets/images/webp/familyThree.webp",
    },
    {
        name: "Kayla Steyn",
        description:
            "My son shifted from watching cartoons to building interactive stories! Pupilo's ScratchJr classes sparked his creativity.",
        image: "/assets/images/webp/familyOne.webp",
    },
    {
        name: "Naledi Moeketsi",
        description:
            "I never thought my son would enjoy math, but through Pupilo's game design classes, he's learning coding and math at the same time.",
        image: "/assets/images/webp/familyTwo.webp",
    },
    {
        name: "Johan Botha",
        description:
            "The live coding sessions are fantastic! My daughter used to shy away from technology — now she's proudly building animations in Scratch.",
        image: "/assets/images/webp/familyThree.webp",
    },
];

export const SOCIAL_ICONS = [
    {
        icon: "facebook",
        link: FACEBOOK,
    },
    {
        icon: "instagram",
        link: INSTA,
    },
    {
        icon: "tiktok",
        link: TIKTOK,
    },
    {
        icon: "youtube",
        link: YOUTUBE,
    },
    {
        icon: "linkedin",
        link: LINKEDIN,
    },
];

export const CONTACT_ICONS = [
    {
        icon: "mail",
        link: MAIL,
        text: "hello@pupiloinc.com",
    },
    {
        icon: "phone",
        link: PHONE,
        text: "+234 123 456 7890",
    },
    {
        icon: "whatsapp",
        link: WHATSAPP,
        text: "+234 098 765 4321",
    },
];