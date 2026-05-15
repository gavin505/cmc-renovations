// lib/data.ts — single source of truth for CMC Renovations content

export const COMPANY = {
  name: "CMC Renovations",
  tagline: "Owner-Led Renovations. Built to Last.",
  phone: "(513) 888-6448",
  email: "info@cmcrenovationsllc.com",
  address: "Hamilton, OH 45013",
  hours: "M–F: 8:00 AM – 7:00 PM | Sat–Sun: Closed",
  social: {
    facebook: "https://facebook.com/p/CMC-Renovations-LLC-100090580519509/",
    yelp: "https://yelp.com/biz/cmc-renovations-hamilton",
    google: "https://maps.app.goo.gl/JsP2qHb66VdUTdg56",
  },
  owners: ["Brady", "Taylor"],
};

export const GALLERY_IMAGES = [
  // Kitchen
  { src: "/KitchenRemodel.JPG", alt: "Kitchen Remodel", category: "kitchen" },
  { src: "/KitchenRemodel2.jpg", alt: "Kitchen Remodel", category: "kitchen" },
  { src: "/KitchenRemodel3.PNG", alt: "Kitchen Remodel", category: "kitchen" },
  { src: "/KitchenRemodel4.PNG", alt: "Kitchen Remodel", category: "kitchen" },
  { src: "/KitchenRemodel5.PNG", alt: "Kitchen Remodel", category: "kitchen" },
  { src: "/KitchenRemodel6.PNG", alt: "Kitchen Remodel", category: "kitchen" },
  { src: "/KitchenRemodel7.jpg", alt: "Kitchen Remodel", category: "kitchen" },
  { src: "/KitchenRemodel8.PNG", alt: "Kitchen Remodel", category: "kitchen" },
  { src: "/KitchenRemodel9.jpg", alt: "Kitchen Remodel", category: "kitchen" },
  { src: "/KitchenRemodel10.jpg", alt: "Kitchen Remodel", category: "kitchen" },
  // Bathroom
  { src: "/BathroomRemodel1.jpg", alt: "Bathroom Remodel", category: "bathroom" },
  { src: "/BathroomRemodel2.jpg", alt: "Bathroom Remodel", category: "bathroom" },
  { src: "/BathroomRemodel5.jpg", alt: "Bathroom Remodel", category: "bathroom" },
  { src: "/BathroomRemodel7.jpg", alt: "Bathroom Remodel", category: "bathroom" },
  { src: "/BathroomRemodel9.PNG", alt: "Bathroom Remodel", category: "bathroom" },
  { src: "/showerremodel.jpg", alt: "Shower Remodel", category: "bathroom" },
  { src: "/ShowerRemodel2.jpg", alt: "Shower Remodel", category: "bathroom" },
  { src: "/ShowerRemodel3.jpg", alt: "Shower Remodel", category: "bathroom" },
  { src: "/ShowerRemodel4.jpg", alt: "Shower Remodel", category: "bathroom" },
  { src: "/ShowerRemodel5.jpg", alt: "Shower Remodel", category: "bathroom" },
  { src: "/ShowerRemodel6.jpg", alt: "Shower Remodel", category: "bathroom" },
  { src: "/ShowerRemodel7.jpg", alt: "Shower Remodel", category: "bathroom" },
  // Basement
  { src: "/BasementFinishing.jpg", alt: "Basement Finishing", category: "basement" },
  { src: "/BasementRemodel2.jpg", alt: "Basement Remodel", category: "basement" },
  { src: "/BasementRemodel3.jpg", alt: "Basement Remodel", category: "basement" },
  // General Remodeling
  { src: "/DeckBuild.PNG", alt: "Deck Build", category: "general" },
  { src: "/DeckBuild1.jpg", alt: "Deck Build", category: "general" },
  { src: "/DeckBuild2.jpg", alt: "Deck Build", category: "general" },
  { src: "/DeckBuild3.jpg", alt: "Deck Build", category: "general" },
  { src: "/DeckBuild4.jpg", alt: "Deck Build", category: "general" },
  { src: "/DeckBuild5.jpg", alt: "Deck Build", category: "general" },
  { src: "/DeckBuild6.PNG", alt: "Deck Build", category: "general" },
  { src: "/CoveredDeckBuild.jpg", alt: "Covered Deck Build", category: "general" },
  { src: "/OutdoorBannister.PNG", alt: "Outdoor Bannister", category: "general" },
  { src: "/OutdoorBannister1.PNG", alt: "Outdoor Bannister", category: "general" },
  { src: "/DoorInstallation.jpg", alt: "Door Installation", category: "general" },
  { src: "/DoorInstallation1.jpg", alt: "Door Installation", category: "general" },
  { src: "/DoorInstallation2.jpg", alt: "Door Installation", category: "general" },
  { src: "/DoorInstallation3.jpg", alt: "Door Installation", category: "general" },
  { src: "/DoorInstallation4.jpg", alt: "Door Installation", category: "general" },
  { src: "/StaircaseBannister.PNG", alt: "Staircase Bannister", category: "general" },
  { src: "/StaircaseBannister1.PNG", alt: "Staircase Bannister", category: "general" },
  { src: "/StaircaseBannister2.PNG", alt: "Staircase Bannister", category: "general" },
  { src: "/StaircaseBannister3.jpg", alt: "Staircase Bannister", category: "general" },
  { src: "/StaircaseBannister4.jpg", alt: "Staircase Bannister", category: "general" },
  { src: "/StaircaseBannister5.jpg", alt: "Staircase Bannister", category: "general" },
  { src: "/StaircaseBannister6.PNG", alt: "Staircase Bannister", category: "general" },
  { src: "/BookshelfBuiltIns1.jpg", alt: "Bookshelf Built-Ins", category: "general" },
  { src: "/flooring.jpg", alt: "Flooring Installation", category: "general" },
];

export const SERVICES = [
  {
    slug: "kitchen-remodeling",
    title: "Kitchen Remodeling",
    shortTitle: "Kitchen",
    icon: "🍳",
    headline: "Complete Kitchen Transformations",
    description:
      "From layout redesigns to custom cabinetry and premium finishes, we handle every detail of your kitchen renovation — delivering spaces that are as functional as they are beautiful.",
    features: [
      "Custom cabinet design & installation",
      "Countertop fabrication & installation",
      "Tile backsplash & flooring",
      "Appliance integration",
      "Lighting design",
      "Complete layout reconfiguration",
    ],
    heroImage: "/KitchenRemodel.JPG",
    galleryImages: [
      "/KitchenRemodel2.jpg",
      "/KitchenRemodel3.PNG",
      "/KitchenRemodel4.PNG",
      "/KitchenRemodel5.PNG",
      "/KitchenRemodel6.PNG",
      "/KitchenRemodel7.jpg",
      "/KitchenRemodel8.PNG",
      "/KitchenRemodel9.jpg",
    ],
  },
  {
    slug: "bathroom-remodeling",
    title: "Bathroom Remodeling",
    shortTitle: "Bathroom",
    icon: "🚿",
    headline: "Thoughtful Bathroom Renovations",
    description:
      "We transform outdated bathrooms into modern sanctuaries — balancing style and practicality with meticulous attention to tile work, plumbing, and finish details.",
    features: [
      "Shower & tub replacement",
      "Tile design & installation",
      "Vanity & fixture upgrades",
      "Waterproofing systems",
      "Lighting & ventilation",
      "Accessibility modifications",
    ],
    heroImage: "/BathroomRemodel1.jpg",
    galleryImages: [
      "/BathroomRemodel2.jpg",
      "/BathroomRemodel5.jpg",
      "/BathroomRemodel7.jpg",
      "/BathroomRemodel9.PNG",
      "/showerremodel.jpg",
      "/ShowerRemodel2.jpg",
      "/ShowerRemodel3.jpg",
      "/ShowerRemodel4.jpg",
    ],
  },
  {
    slug: "basement-remodeling",
    title: "Basement Remodeling",
    shortTitle: "Basement",
    icon: "🏠",
    headline: "Unlock Your Home's Hidden Potential",
    description:
      "We convert underused basement space into fully finished living areas — home theaters, offices, in-law suites, and more — built to the same standards as the rest of your home.",
    features: [
      "Full basement finishing",
      "Egress window installation",
      "Framing & insulation",
      "Electrical & plumbing rough-in",
      "Custom bar & entertainment areas",
      "Waterproofing & moisture control",
    ],
    heroImage: "/BasementFinishing.jpg",
    galleryImages: [
      "/BasementRemodel2.jpg",
      "/BasementRemodel3.jpg",
      "/DoorInstallation.jpg",
      "/StaircaseBannister3.jpg",
      "/flooring.jpg",
      "/BookshelfBuiltIns1.jpg",
    ],
  },
];

export const BLOG_POSTS = [
  {
    slug: "spring-renovation-checklist-2026",
    title: "Your Spring 2026 Home Renovation Checklist",
    date: "2026-05-05",
    image: "/KitchenRemodel.JPG",
    excerpt:
      "Spring is the perfect time to tackle those home improvement projects you've been putting off. Here's what should be at the top of your list this season.",
    content:
      "As the weather warms up in Butler County, spring is an ideal time to address home improvements. Start by inspecting your home's exterior for winter damage — check siding, gutters, and the roof for any wear. Inside, assess rooms that need refreshing: a bathroom update, fresh paint, or new flooring can dramatically change how your home feels. Spring is also a great time for basement waterproofing before summer storms arrive. At CMC Renovations, we see a surge in kitchen and bathroom remodels this time of year, and scheduling early means shorter wait times. Whether you're planning a full remodel or a simple refresh, a walkthrough with Brady can help you prioritize what matters most for your home and budget.",
    category: "Seasonal Tips",
  },
  {
    slug: "choosing-the-right-flooring",
    title: "Hardwood vs. LVP: Choosing the Right Flooring for Your Home",
    date: "2026-04-21",
    image: "/flooring.jpg",
    excerpt:
      "Hardwood and luxury vinyl plank are the two most popular flooring options we install. Here's how to decide which is right for your space.",
    content:
      "When homeowners ask us about flooring, the conversation almost always comes down to hardwood versus luxury vinyl plank (LVP). Both are excellent choices, but they serve different needs. Hardwood offers timeless beauty and can be refinished multiple times over its lifespan — it's ideal for living rooms, dining areas, and bedrooms where moisture isn't a major concern. LVP, on the other hand, is waterproof, more affordable, and incredibly durable against scratches and dents, making it perfect for kitchens, bathrooms, basements, and homes with pets or young children. At CMC Renovations, we install both with the same attention to detail: proper subfloor preparation, precise leveling, and clean transitions between rooms. The right choice depends on your lifestyle, budget, and where the flooring is going. We're happy to walk you through samples and help you decide during a free estimate.",
    category: "Materials & Design",
  },
  {
    slug: "bathroom-remodel-roi",
    title: "Is a Bathroom Remodel Worth It? ROI and What to Expect",
    date: "2026-04-07",
    image: "/BathroomRemodel1.jpg",
    excerpt:
      "A bathroom remodel is one of the best investments you can make in your home. Here's what the numbers say and what to expect from the process.",
    content:
      "Bathroom remodels consistently rank among the top home improvement projects for return on investment. According to industry data, a mid-range bathroom renovation recoups roughly 60-70% of its cost at resale — and that doesn't account for the daily comfort and satisfaction of using a space you actually enjoy. Common upgrades we handle at CMC Renovations include replacing outdated tile with modern large-format porcelain, swapping old tub-shower combos for walk-in showers with glass enclosures, upgrading vanities with soft-close drawers and quartz countertops, and improving lighting and ventilation. The process typically takes two to three weeks depending on scope. Brady and Taylor manage everything from demolition to final trim, and because we're owner-operated, you'll always know who's on your job site. If you're considering a bathroom remodel in Hamilton or the surrounding area, a free walkthrough is the best place to start.",
    category: "Home Value",
  },
  {
    slug: "basement-finishing-guide",
    title: "Finishing Your Basement: A Complete Guide for Ohio Homeowners",
    date: "2026-03-24",
    image: "/BasementFinishing.jpg",
    excerpt:
      "A finished basement adds livable square footage to your home without the cost of an addition. Here's everything you need to know before starting.",
    content:
      "Finishing a basement is one of the most cost-effective ways to add usable space to your home. In Ohio, where basements are standard, this often means converting a cold concrete space into a family room, home office, guest suite, or entertainment area. The process starts with addressing any moisture issues — proper waterproofing and drainage are non-negotiable before any framing goes up. From there, we handle framing, insulation, electrical, plumbing rough-in, drywall, flooring, and trim. Egress windows are required by code if you're adding a bedroom, and we manage the permitting process for you. One thing homeowners often underestimate is how much natural light and ceiling height matter in a basement. We design layouts that maximize both, using recessed lighting and strategic room placement to make the space feel open rather than buried. If you've been thinking about finishing your basement, early spring is a great time to start — before the busy summer season.",
    category: "Project Guides",
  },
  {
    slug: "kitchen-remodel-trends-2026",
    title: "2026 Kitchen Remodel Trends We're Seeing in Butler County",
    date: "2026-03-10",
    image: "/KitchenRemodel2.jpg",
    excerpt:
      "Kitchen design is shifting toward cleaner lines, warmer tones, and smarter storage. Here's what homeowners in our area are asking for this year.",
    content:
      "Kitchen trends in 2026 are moving away from the all-white farmhouse look that dominated the last several years. We're seeing homeowners in Hamilton and Butler County gravitate toward warmer wood tones for cabinetry, often paired with matte black or brushed brass hardware. Quartz remains the countertop of choice, but warmer shades with subtle veining are replacing the stark white marble-look options. Open shelving is losing ground to closed cabinetry with interior organization systems — pull-out drawers, spice racks, and built-in trash and recycling stations. Larger islands with waterfall edges continue to be popular, especially in open-concept layouts. On the appliance side, integrated panel-ready refrigerators and induction cooktops are gaining traction. At CMC Renovations, we work with you to balance current trends with timeless choices so your kitchen looks great for years, not just months. If you're planning a kitchen remodel, Brady can walk your space and discuss options during a free estimate.",
    category: "Materials & Design",
  },
  {
    slug: "hiring-a-contractor-tips",
    title: "5 Things to Look for When Hiring a Renovation Contractor",
    date: "2026-02-24",
    image: "/DeckBuild3.jpg",
    excerpt:
      "Not all contractors are created equal. Here's what to look for — and what to watch out for — when choosing someone to work on your home.",
    content:
      "Hiring the right contractor can make or break your renovation experience. After years of working in the industry, here are the five things we believe matter most. First, verify licensing and insurance — in Ohio, general contractors should carry liability insurance and workers' compensation. Ask for proof, not just a verbal confirmation. Second, look for an owner-operated business. When the owner is on your job site daily, accountability goes up and miscommunication goes down. Third, get a detailed written estimate that breaks down labor, materials, and timeline. Vague bids are a red flag. Fourth, check recent reviews and ask for references from projects similar to yours. Fifth, pay attention to communication during the estimate process — if a contractor is hard to reach before they have your money, it won't improve after. At CMC Renovations, Brady handles every estimate personally and is on-site for every project. We believe transparency and accountability aren't extras — they're the baseline.",
    category: "Homeowner Tips",
  },
  {
    slug: "winter-home-maintenance",
    title: "Protect Your Investment: Winter Home Maintenance Tips",
    date: "2026-02-10",
    image: "/CoveredDeckBuild.jpg",
    excerpt:
      "Ohio winters are tough on homes. These maintenance steps can prevent costly damage and set you up for a smooth renovation season ahead.",
    content:
      "Ohio winters can be harsh on your home, but a little preventive maintenance goes a long way. Start by checking your home's insulation, especially in the attic and basement — poor insulation leads to ice dams, frozen pipes, and higher energy bills. Make sure your furnace filter is clean and your heating system has been serviced. Check weatherstripping around doors and windows; replacing worn seals is an inexpensive fix that makes a noticeable difference in comfort and efficiency. Inspect your roof and gutters for damage from fall storms — clogged or damaged gutters can cause ice buildup that leads to leaks. Inside, winter is an excellent time to plan spring projects. Scheduling your renovation estimate now means you'll be first in line when the weather breaks. At CMC Renovations, we offer free estimates year-round. If you're thinking about a kitchen remodel, bathroom update, or basement finishing project, getting on the calendar early ensures a smoother timeline and less waiting once work begins.",
    category: "Seasonal Tips",
  },
];

export const LOCATION_IMAGES = [
  "/KitchenRemodel.JPG",
  "/BathroomRemodel1.jpg",
  "/BasementFinishing.jpg",
  "/DeckBuild1.jpg",
  "/StaircaseBannister3.jpg",
  "/ShowerRemodel2.jpg",
  "/KitchenRemodel5.PNG",
  "/DoorInstallation.jpg",
  "/flooring.jpg",
  "/BookshelfBuiltIns1.jpg",
  "/CoveredDeckBuild.jpg",
  "/KitchenRemodel9.jpg",
  "/OutdoorBannister.PNG",
];

export const LOCATIONS = [
  { slug: "hamilton", name: "Hamilton", county: "Butler County", state: "OH", primary: true },
  { slug: "trenton", name: "Trenton", county: "Butler County", state: "OH" },
  { slug: "oxford", name: "Oxford", county: "Butler County", state: "OH" },
  { slug: "fairfield", name: "Fairfield", county: "Butler County", state: "OH" },
  { slug: "liberty-township", name: "Liberty Township", county: "Butler County", state: "OH" },
  { slug: "west-chester-township", name: "West Chester Township", county: "Butler County", state: "OH" },
  { slug: "somerville", name: "Somerville", county: "Butler County", state: "OH" },
  { slug: "ross", name: "Ross", county: "Butler County", state: "OH" },
  { slug: "monroe", name: "Monroe", county: "Butler County", state: "OH" },
];

export const REVIEWS = [
  {
    author: "Mars D.",
    rating: 5,
    text: "This was the first time we hired CMC Renovations LLC but Brady and Taylor did not disappoint. Brady listened to our needs and concerns regarding the project and accommodated our inputs. They were very professional and came on time every day ready to work. During our bathroom reconstruction, they showed professionalism, flexibility, and a genuine commitment to meet customer expectations. We highly recommend CMC Renovations LLC.",
  },
  {
    author: "Krash B.",
    rating: 5,
    text: "Brady and Taylor remodeled my bathroom and did a great job. They were both professional and personable. They worked nearly non-stop and turned an old rundown room into a modern, clean, waterproof space. Brady is also very responsive and helpful for additional questions or concerns even after the job is completed.",
  },
  {
    author: "Chelsea R.",
    rating: 5,
    text: "CMC redid hand railings inside our home to match our new flooring. It was a great experience — clear communication and attention to detail throughout the whole project.",
  },
  {
    author: "Kelsie",
    rating: 5,
    text: "Great experience! Very prompt and professional company. Will be using again.",
  },
];
