export interface Testimonial {
  name: string;
  role: string;
  school: string;
  quote: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Priya Sharma",
    role: "Parent",
    school: "Delhi Public School, Bangalore",
    quote:
      "Finally, I don't have to call the bus driver every morning. I can see exactly where my daughter's bus is and when it'll arrive. The OTP feature gives me so much peace of mind.",
    avatar: "PS",
  },
  {
    name: "Rajesh Kumar",
    role: "School Administrator",
    school: "Greenwood International",
    quote:
      "Managing 40+ buses used to be a nightmare. With Skolo's dashboard, I can see every bus, every student, in real-time. Parent complaints about transport have dropped by 80%.",
    avatar: "RK",
  },
  {
    name: "Mohammed Ismail",
    role: "Bus Driver",
    school: "National Public School",
    quote:
      "The route optimization saves me 30 minutes every trip. I don't get calls from parents anymore asking where I am — they can see it themselves. Makes my job so much easier.",
    avatar: "MI",
  },
];
