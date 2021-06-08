const container = document.getElementById('container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const userName = document.querySelector('.username');
const role = document.querySelector('.role');

let testimonialIndex = 0;

const profiles = [
    {
        name: "Amy Amison",
        position: "Police Officer",
        image: "https://randomuser.me/api/portraits/women/18.jpg",
        text: "Lorem ipsum dolor amet mustache knausgaard +1, blue bottle waistcoat tbh semiotics artisan synth stumptown gastropub cornhole celiac swag. Brunch raclette vexillologist post-ironic glossier ennui XOXO mlkshk godard pour-over blog tumblr humblebrag. Blue bottle put a bird on it twee prism biodiesel brooklyn. Blue bottle ennui tbh succulents.",   
    },
    {
        name: "Steve Stevenson",
        position: "Programmer",
        image: "https://randomuser.me/api/portraits/men/21.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, reiciendis odit consectetur reprehenderit obcaecati accusantium aliquam dolorem culpa harum corrupti perferendis odio, ipsum libero minus exercitationem dolorum sed asperiores nesciunt.",
    },{
        name: "James Jamerson",
        position: "Marketing",
        image: "https://randomuser.me/api/portraits/men/18.jpg",
        text: "Hodor. Hodor hodor, hodor. Hodor hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor; hodor hodor hodor. Hodor. Hodor hodor; hodor hodor - hodor, hodor, hodor hodor. Hodor, hodor. Hodor. Hodor, hodor hodor hodor; hodor hodor; hodor hodor hodor! Hodor hodor HODOR! Hodor hodor... Hodor hodor hodor.",   
    }
]

const updateTestimonial = () => {
    const { name, position,  image, text } = profiles[testimonialIndex];
    testimonial.innerHTML = text;
    userImage.src = image;
    userName.innerHTML = name;
    role.innerHTML = position;

    testimonialIndex++;
    if (testimonialIndex > profiles.length -1) {
        testimonialIndex = 0;
    }
}
updateTestimonial();
setInterval(updateTestimonial, 5000);