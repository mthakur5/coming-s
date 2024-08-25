import Image from "next/image";

const currentYear = new Date().getFullYear();
const data = {
    sitename: "Haroth Group of Company",
    sitetagline: "Something great is on the way! ✨ 🔥",
    siteurl: "https://haroth.com",
    // sitelogo: "/logo.png",
    title: "Furniture Meets Tech: Our New Frontier!",
    description: "We&apos;re currently working 👨‍💻 hard to bring you something great, and we can&apos;t wait to share it with you 📅. Our team is putting the finishing touches on a new project 🚀 that we think you&apos;ll love 😍.",
    newsletterheading: "Stay tuned for our live updates!",
    copyrightText: `Copyright © ${currentYear} | Design and Developed By &nbsp;<a target="_blank" class="no-underline md:underline" href="https://takdecor.in">TAK DECOR IT-TEAM</a>`,
    socialIconsHeading: "Follow Us 📣",
    hideSubscribeForm: true, // make true to disable subscription form 
    socialIcons: [
        {
            icon: "facebook",
            link: "https://www.facebook.com/profile.php?id=61564756415722",
        },
        {
            icon: "twitter",
            link: "https://haroth.com",
        },
        {
            icon: "linkedIn",
            link: "https://www.linkedin.com/company/hcs-haroth-cloud-services",
        },
    ],
    hide :{
        subscribeForm: false, // make true to disable subscription form         
        header: false,
        content: false,
        footer: false,
    }
}

export default data;
