 // src/data/site.ts

import type { SiteData } from "@/types/site";

export const siteData: SiteData = {
  businessName: 'Lakes Area Recreation and Rentals "Lakes Area R&R"',
  shortName: "Lakes Area R&R",
  category: "Recreation Center",
  phone: "218-454-3336",
  email: "info@lakesarearandr.com",
  address: "21596 County Road 3, Merrifield, MN 56465",
  website: "lakesarearandr.com",
  facebookName: 'Lakes Area Recreation and Rentals "Lakes Area R&R"',
  facebookBio:
    "This one of a kind business has wide variety of products ranging from a huge selection of rental and retail recreation toys as well as unique on site activities like you have never experienced before",
  announcement:
    "The BEST deals on snowmobile rentals in the state!! Click the shop button!!",
      logo: {
    src: "/images/logo-trans.png",
    alt: 'Lakes Area Recreation and Rentals "Lakes Area R&R" logo',
  },

  nav: [
  { label: "Home", href: "/" },
  { label: "Activities", href: "/#activities" },
  { label: "Rentals", href: "/rentals" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
],

  hero: {
    kicker: "Minnesota’s Lakes Area Newest Destination For Fun",
    title: "Escape to Fun",
    body: "Discover the Beauty and Enjoy All The New Unique Experiences of Minnesota‘s Lakes Area Newest Destination For Fun!",
    primaryCta: "Make Your Plans Today",
    secondaryCta: "View Activities",
    slides: [
      {
        src: "/images/lakes-hero-1.jpg",
        alt: "Lakes Area R&R sunset over the lake and green",
      },
      {
        src: "/images/lakes-hero-2.jpg",
        alt: "Lakes Area R&R Caddyshack and Pro Shop",
      },
      {
        src: "/images/lakes-hero-3.jpg",
        alt: "Lakes Area R&R mini golf and outdoor space",
      },
      {
        src: "/images/lakes-hero-4.jpg",
        alt: "Lakes Area R&R Crystal Lake recreation area",
      },
    ],
  },

  trust: [
    {
      title: "Lakes Area Links",
      text: "18 Hole Natural Mini Golf Course",
    },
    {
      title: "Lakes Area Bottle Shop",
      text: "Stocked for all your essential Beverage and other relaxation/recreational needs",
    },
    {
      title: "The Green Bean Coffee Company",
      text: "For your coffee fix plus more",
    },
    {
      title: "The Caddyshack",
      text: "For your sweet treat, adult beverage and gourmet food fix",
    },
    {
      title: "Crystal Lake",
      text: "For Paddle Boarding, kayaking, canoeing and paddle boat pleasure",
    },
  ],

  about: {
    eyebrow: "About Lakes Area R&R",
    title: "Unforgettable Adventures Await",
    body: [
      "At Lakes Area R&R, We're Passionate About Helping Our Customers Create Unforgettable Memories! With a Huge Selection of Golf Carts and a Wide Range of Other Recreational Equipment Available For Every Season For Both Sales and Rental, Including Brand New State of The Art Evolution Lithium Carts, we have what you want.",
      "Something new to the area is “The Lakes Area Links”, our 11 Hole Natural Finely Groomed Putting Course. Stop by the ”Lakes Area R&R Bottle Shop” to Stock Up On Your Favorite Adult Beverage for the Home or Cabin!",
      "Come and See “The Merrifield Nature Pier” For Breathtaking Views with Non-motorized Water Fun Options, Including Paddle Boarding, Canoeing, Sailing, Wind Surfing, Kayaking, Water Bikes, Paddle Boating, and More.",
      "Come and Stroll “The Crystal Lake Boardwalk”, Where You Can Enjoy One of Our Many Treats While Viewing The Scenic Shoreline, or Test Your Skills In the State of The Art Golf Simulator. We Have Incredible Food and Drinks, With a Huge Selection of Rental and Sales Equipment. We Have Something For Every Season!",
    ],
  },

  features: [
    {
      eyebrow: "Full Day Pass",
      title: "Fun for all ages and skill levels",
      body: "Fun for all ages and skill levels, get the whole crew together for a day of adventure and fun! An authentic and whole different experience than your average concrete mini golf course, with full day passes for just $10, kids under 3 are free you can enjoy true beauty through nature and what golf truly stands for with a bent grass turf carefully designed by local golf legend Scott Hoffman. Have your favorite beverage, snack, cocktail, treat, or gourmet meal while dialing in your short game on this unique masterpiece set on the shores of scenic Crystal Lake!!",
      image: "/images/lakes-golf.png",
      imageAlt: "Lakes Area Links natural putting course golf ball at sunset",
      ctaLabel: "Inquire Today",
      href: "/#visit",
    },
    {
      eyebrow: "Lakes Area R&R Bottle Shop",
      title: "Happiness is just a bottle away!",
      body: "Open Monday thru Saturday 10am-10PM Sunday 11Am-6Pm Stop in and stock your home or cabin with some of our wide selections of wine, spirits, beer, or whatever your adult beverage of choice is!! Whether you're looking for old classics or the newest craft brew, you’re certain to find something to quench your palette!!",
      image: "/images/bottle-shop.png",
      imageAlt: "Lakes Area R&R Bottle Shop logo",
      ctaLabel: "Inquire Today",
      href: "/#visit",
    },
    {
      eyebrow: "On-Site Activities",
      title: "Come Enjoy Our One of a Kind On-Site Activities",
      body: "Spend the day soaking up fun for everyone with activities including our Lakes Area Links, our unique 18 hole natural putting course sitting on the shores of Crystal Lake. Designed by Local Legend Scott Hoffman, you're sure to find that it is challenging for all skill levels and meticulously maintained. After golf, take an environmental cruise on Crystal Lake on one of our non-motorized water crafts, including Kayaks, Paddle Boards, Canoes, Sail Boats, Water Bikes, Peddle Boats, and more.",
      image: "/images/lakes-activities.jpg",
      imageAlt: "Lakes Area R&R outdoor activities and Crystal Lake",
      ctaLabel: "View Rentals",
      href: "/rentals",
    },
    {
      eyebrow: "Rental Options",
      title: "Large Variety of Rental Options Available",
      body: "Try one of our “R&R Funships”, a double-decker 28’ pontoon with upper sun deck equipped with functioning water slide, incredible audio, and other top of the line features ensuring it will be the highlight of the whole crew's relaxation time!! Come and check out our large variety of rental options to enhance your fun, including golf carts, jet ski's and other water toys, boats, UTV's, E-Bikes, Travel Trailers, and more! Make your reservations now!",
      image: "/images/rentals.webp",
      imageAlt: "Lakes Area R&R rental equipment and lake recreation",
      ctaLabel: "Make Your Reservations Now",
      href: "/rentals",
    },
  ],
  greenBean: {
    eyebrow: "The Green Bean Coffee Shop",
    title: "Lost a ball, found a coffee",
    body: "Find a great selection of gourmet coffee, tea and other drinks as well as sweets and delicious offerings.",
    image: "/images/green-bean-coffee.png",
    imageAlt: "The Green Bean Coffee Shop at Lakes Area R&R",
    ctaLabel: "Plan Your Visit",
    href: "/#visit",
  },

  termsPage: {
    eyebrow: "Terms & Conditions",
    title: "Rental Terms and Conditions",
    body: "Please review the basic rental terms before booking or requesting equipment.",
  },
    rentals: {
    eyebrow: "Available Rental Equipment",
    title: "Rental Equipment",
    intro:
      "Explore the one of kind experience only available at Lakes Area R&R with rental equipment for the lake, trail, winter season, and family fun.",
    ctaLabel: "View All Rentals",
    href: "/rentals",
    items: [
      {
        name: "Golf Carts",
        description:
          "Large selection of carts available including 4 and 6 seaters, gas or electric models in stock.",
        href: "/rentals#golf-carts",
        image: "/images/rentals/rental-card-03.png",
        imageAlt: "Golf carts at Lakes Area R&R",
      },
      {
        name: "Jet Ski's",
        description:
          "Sea-Doo rentals including Spark and GTI options for all-out fun on the water.",
        href: "/rentals#jet-skis",
        image: "/images/rentals/rental-card-04.png",
        imageAlt: "Jet ski rentals at Lakes Area R&R",
      },
      {
        name: "Tahoe/Grand Island Funship",
        description:
          "Fun for the entire crew with swim roof, water slide, sun deck, Bluetooth stereo, LED lights and more.",
        href: "/rentals#tahoe-grand-island-funship",
        image: "/images/rentals/rental-card-01.png",
        imageAlt: "Tahoe Grand Island Funship pontoon rental",
      },
      {
        name: "Sugar Sand Tango Jet Boat",
        description:
          "A sleek and vibrant jet boat powered by a Mercury 175 horsepower V6 engine.",
        href: "/rentals#sugar-sand-tango-jet-boat",
        image: "/images/rentals/rental-card-09.png",
        imageAlt: "Sugar Sand Tango jet boat rental",
      },
      {
        name: "Non Motorized Water Equipment",
        description:
          "Kayak, canoe, paddle board and other toys for camp or Crystal Lake fun.",
        href: "/rentals#non-motorized-water-equipment",
        image: "/images/rentals/rental-card-10.png",
        imageAlt: "Non motorized water equipment rentals",
      },
      {
        name: "Snowmobile Rentals",
        description:
          "Make Minnesota winter fun with Ski-Doo Renegades and Grand Touring rentals.",
        href: "/rentals#snowmobile-rentals",
        image: "/images/rentals/rental-card-08.png",
        imageAlt: "Snowmobile rentals at Lakes Area R&R",
      },
    ],
  },

  rentalsPage: {
  hero: {
  eyebrow: "Available Rental Equipment",
  title: "Rental Equipment",
  body: "Explore the one of a kind experience only available at Lakes Area R&R. Come and check out the large variety of rental options to enhance your fun, including golf carts, jet ski's, boats, water toys, campers, snowmobiles and more.",
  primaryCta: "View Rental Equipment",
  secondaryCta: "Contact Us",
  image: "/images/rentals/rental-card-02.png",
  imageAlt: "Lakes Area R&R rental equipment and lake recreation",
},

    intro: {
      eyebrow: "Rental Equipment",
      title: "Available Rental Equipment",
      body: "Inquire online or call today to book your reservation.",
    },

    categories: [
      "Golf Carts",
      "Jet Ski's",
      "Boats",
      "Pontoons",
      "Water Equipment",
      "Campers",
      "Fishing Boats",
      "Shoreline Equipment",
      "Snowmobiles",
    ],

    items: [
      {
        id: "golf-carts",
        name: "Golf Carts",
        category: "Golf Carts",
        shortDescription:
          "Large selection of carts available including 4 and 6 seaters, gas or electric models in stock.",
        description:
          "We have a large selection of carts available including 4 and 6 seaters, gas or electric models in stock.",
        image: "/images/rentals/rental-card-03.png",
        imageAlt: "Golf cart rentals at Lakes Area R&R",
        rates: [
          { label: "4 Seater Gas or Electric - 3 Day", price: "$295.00" },
          { label: "4 Seater Gas or Electric - 1 Week", price: "$595.00" },
          { label: "4 Seater Gas or Electric - 1 Month", price: "$1895.00" },
        ],
        details: [
          "4 and 6 seaters available",
          "Gas or electric models in stock",
          "Inquire online or call today to book your reservation",
        ],
      },
      {
        id: "jet-skis",
        name: "Jet Ski's",
        category: "Jet Ski's",
        shortDescription: "Sea-Doo rentals including Spark and GTI options.",
        description:
          "When it comes to all-out fun, nothing beats a Sea-Doo. From flashy looks to nimble, peppy handling, the good times are ready to roll. The Rotax 900 ACE - 90 hp engine is the most fuel-efficient engine on the market. High-horsepower and fast-accelerating. Compact, lightweight and delivers immediate acceleration. Or go a size up on one of our 3 up Sea Doo GTI with 130 hp rotax engines!!",
        image: "/images/rentals/rental-card-04.png",
        imageAlt: "Jet ski rentals at Lakes Area R&R",
        rates: [
          { label: "1 Day - Spark", price: "Starting at $225.00" },
          { label: "1 Day - GTI", price: "$275.00" },
          { label: "1 Week", price: "$1295.00" },
        ],
        details: [
          "Sea-Doo Spark options",
          "3 up Sea Doo GTI options",
          "Rotax 900 ACE - 90 hp engine",
          "GTI with 130 hp Rotax engines",
        ],
      },
      {
        id: "sugar-sand-tango-jet-boat",
        name: "4+2 Sugar Sand Tango Jet Boat",
        category: "Boats",
        shortDescription:
          "A sleek and vibrant jet boat powered by a Mercury 175 horsepower V6 engine.",
        description:
          "Sugar Sand Tango 4+2 jet boat, a sleek and vibrant vessel that promises both performance and pleasure, this jet boat is powered by a robust Mercury 175 horsepower V6 engine, ensuring a thrilling ride on the water, comfortably seats 5-6 passengers, making it perfect for family outings or entertaining friends. Equipped with a radio with Bluetooth connection and speakers.",
        image: "/images/rentals/rental-card-09.png",
        imageAlt: "Sugar Sand Tango jet boat rental",
        rates: [
          { label: "Daily Rate", price: "Starting at $275.00/Day" },
          { label: "1 Week", price: "$1695.00" },
        ],
        details: [
          "Mercury 175 horsepower V6 engine",
          "Seats 5-6 passengers",
          "Radio with Bluetooth connection",
          "Speakers included",
          "Inquire online or call today to book your reservation",
        ],
      },
      {
        id: "tahoe-grand-island-funship",
        name: "Tahoe/Grand Island Funship",
        category: "Pontoons",
        shortDescription:
          "Pontoon with swim roof, water slide, sun deck, Bluetooth stereo and more.",
        description:
          "Fun for the entire crew, pontoon is equipped with twin tubes, a Mercury 115 hp. 4 stroke command thrust and a dual axle bunk trailer, an 8.5 x 10 ft. swim roof, water slide with water pump, rear swim deck, sun deck, change room, rear ladder, wrap around chaise lounge style benches, reclining captain’s seat on slider base, windshield, deluxe table, bluetooth four speaker stereo, LED lights and More!!",
        image: "/images/rentals/rental-card-01.png",
        imageAlt: "Tahoe Grand Island Funship pontoon rental",
        rates: [
          { label: "Daily Rate", price: "Starting at $395.00/Day" },
          { label: "1 Week", price: "$2495.00" },
        ],
        details: [
          "Twin tubes",
          "Mercury 115 hp 4 stroke command thrust",
          "Dual axle bunk trailer",
          "8.5 x 10 ft. swim roof",
          "Water slide with water pump",
          "Rear swim deck",
          "Sun deck",
          "Change room",
          "Bluetooth four speaker stereo",
          "LED lights",
        ],
      },
      {
        id: "non-motorized-water-equipment",
        name: "Non Motorized Water Equipment",
        category: "Water Equipment",
        shortDescription:
          "Kayak, canoe, paddle board and other toys for camp or lake fun.",
        description:
          "Rent a Kayak, Canoe, Paddle Board or any of our other toys and take them to your camp for some fun!!",
        image: "/images/rentals/rental-card-10.png",
        imageAlt: "Kayak canoe and paddle board rentals",
        rates: [
          { label: "Per Day", price: "$35" },
          { label: "3 Days", price: "$80" },
          { label: "1 Week", price: "$150" },
        ],
        details: ["Kayaks", "Canoes", "Paddle Boards", "Other water toys"],
      },
      {
        id: "prime-time-avenger-26bk",
        name: "Prime Time Avenger 26BK",
        category: "Campers",
        shortDescription:
          "Family camper with 5 beds, outdoor kitchen and shower, power awning and more.",
        description:
          "Great family Camper half ton tows really nice, 5 beds, outdoor kitchen and shower, power awning, nice amenities, outdoor and indoor speakers, front bedroom and more.",
        image: "/images/rentals/rental-card-07.png",
        imageAlt: "Prime Time Avenger 26BK camper rental",
        rates: [{ label: "Weekly Rate", price: "$795" }],
        details: [
          "Great family camper",
          "Half ton tows really nice",
          "5 beds",
          "Outdoor kitchen and shower",
          "Power awning",
          "Outdoor and indoor speakers",
          "Front bedroom",
        ],
      },
      {
        id: "misty-harbor-sport-tune",
        name: "24’ Misty Harbor Sport Tune",
        category: "Pontoons",
        shortDescription:
          "Comfort and sport for lake cruising with capacity for 12 people.",
        description:
          "Make the best of your day on the lake with this perfect blend of comfort and sport for lake cruising. Capacity 12 people, 140 HP Suzuki Engine, sport tune(2/3 of tune in the center)",
        image: "/images/rentals/rental-card-06.png",
        imageAlt: "24 foot Misty Harbor Sport Tune rental",
        rates: [
          { label: "Daily Rate", price: "Starting as low as $325 per day" },
        ],
        details: [
          "Capacity 12 people",
          "140 HP Suzuki Engine",
          "Sport tune",
          "Comfort and sport for lake cruising",
        ],
      },
      {
        id: "lund-fishing-boat",
        name: "Lund Fishing Boat",
        category: "Fishing Boats",
        shortDescription:
          "Simple and capable aluminum fishing boats with motor and trolling motor.",
        description:
          "Looking for just a simple yet capable fishing boat for your outing, look no further, nice aluminum boats equipped with all the basics for fishing boats including 35 hp motor and trolling motor.",
        image: "/images/rentals/rental-card-05.png",
        imageAlt: "Lund fishing boat rental",
        rates: [{ label: "Daily Rate", price: "Starting at $95 per Day" }],
        details: [
          "Aluminum fishing boats",
          "35 hp motor",
          "Trolling motor",
          "Equipped with the basics for fishing",
        ],
      },
      {
        id: "aquatic-weed-harvester",
        name: "Aquatic Weed Harvester",
        category: "Shoreline Equipment",
        shortDescription:
          "Remote controlled water beetle lake weed removal machine.",
        description:
          "Clean up your shoreline with ease with our water beetle lake weed removal machine and save tons by doing it yourself!! Remote controlled with 1000 foot range, lithium battery and simple to operate!!",
        image: "/images/rentals/rental-card-11.png",
        imageAlt: "Aquatic weed harvester rental",
        rates: [{ label: "24 Hours", price: "$235 Per 24 hours" }],
        details: [
          "Water beetle lake weed removal machine",
          "Remote controlled",
          "1000 foot range",
          "Lithium battery",
          "Simple to operate",
        ],
      },
      {
        id: "snowmobile-rentals",
        name: "Snowmobile Rentals",
        category: "Snowmobiles",
        shortDescription:
          "Ski-Doo Renegades 600 ACE and Grand Touring 600 ACE snowmobile rentals.",
        description:
          "Make Minnesota winter fun and make life long memories with our snowmobile rentals! Best rates in the Lakes Area! We have ski doo Renegades 600 ACE(1 up) or Grand Touring 600 ACE(2 up).",
        image: "/images/rentals/rental-card-08.png",
        imageAlt: "Snowmobile rentals at Lakes Area R&R",
        rates: [
          { label: "1 Day Weekday Monday thru Thursday", price: "$199" },
          { label: "1 Day Weekend Friday thru Sunday", price: "$249" },
          { label: "2 Day Rental", price: "$419" },
          { label: "Full Weekend Friday thru Sunday", price: "$499" },
        ],
        details: [
          "Ski-Doo Renegades 600 ACE",
          "Grand Touring 600 ACE",
          "1 up and 2 up options",
          "Best rates in the Lakes Area",
        ],
        notes: [
          "Discounted volume or group as well as extended rental discounts available",
          "All the gear needed available as well, just ask!",
        ],
      },
      {
        id: "glastron-sx-195",
        name: "Glastron SX 195",
        category: "Boats",
        shortDescription:
          "19-foot 5-inch fiberglass bowrider with upgraded sound system and Bluetooth audio.",
        description:
          "The Glastron SX 195 is a 19-foot 5-inch fiberglass bowrider known as a versatile, quick-planing, and sporty family boat. Powered by a 5.0L V8 220HP Volvo Penta or MerCruiser engine, upgraded sound system with 10 inch sub and Bluetooth audio it is well-suited for watersports and cruising. Renters often highlight its stable handling, comfortable layout, and reliability as a classic American runabout.",
        image: "/images/rentals/rental-card-02.png",
        imageAlt: "Glastron SX 195 boat rental",
        rates: [
          { label: "Daily Rate", price: "Starting at $275 per day" },
          {
            label: "Multi-day and week rates",
            price: "Discounted rates available",
          },
        ],
        details: [
          "19-foot 5-inch fiberglass bowrider",
          "5.0L V8 220HP Volvo Penta or MerCruiser engine",
          "Upgraded sound system",
          "10 inch sub",
          "Bluetooth audio",
          "Good for watersports and cruising",
        ],
      },
    ],

    reservationTerms: [
      "A deposit is required to hold your reservation.",
      "Renters must be 21 years or older with a valid driver’s license and major credit card.",
      "A security verification on your credit card is required the first day of the rental period. Amount depends what type of rental.",
      "A 30-day written cancellation notice is required with up to a $150 cancellation fee.",
      "No refunds on cancellations within 30 days.",
      "High winds or rain outs will be taken into consideration.",
      "Sorry, no pets out of respect for other guests who may have allergies.",
      "Visa, MasterCard and Discover are accepted.",
      "Please return rentals on time. A late fee will apply to units not returned on time.",
    ],

    activities: {
      eyebrow: "Onsite Activities",
      title: "Fun Activities for Everyone Right on Property",
      intro: "Menu and price list for onsite activities.",
      items: [
        {
          id: "lakes-area-links-putting-course",
          name: "Lakes Area Links Putting Course",
          description:
            "Enjoy a Relaxing Round of Golf on Our Unique, Beautiful, Professionally Maintained Natural Putting Course Designed By Scott Hoffman Golf.",
        },
        {
          id: "activities-day-pass",
          name: "Activities Day Pass",
          description:
            "Enjoy Fun For The Entire Day For The Whole Crew. Included in your pass is unlimited access to The Putting Course, all non motorized water equipment for a relaxing tour around the nearly untouched natural shoreline on naturally preserved Crystal Lake with wildlife galore and serene views, access to standard bikes for heading down The Paul Bunyan Trail or wherever your desire, access to the arcade, discounted simulator rates, unlimited access to the pier and boardwalk and many other outdoor activities.",
        },
        {
          id: "simulator-rental",
          name: "Simulator Rental",
          description:
            "Enjoy Our State of The Art Simulator, Play a Round of Golf on Hundreds of Available Courses or Enjoy Any of The Other Games Included With The Simulator Including Virtual Baseball, Bowling and Many Others.",
        },
        {
          id: "concessions",
          name: "Concessions, Sweet Treats, Beer and Wine, Gourmet Deli and More",
          description: "Menu Coming Soon.",
        },
        {
          id: "merrifield-nature-pier-and-water-activities",
          name: "Merrifield Nature Pier and Water Activities",
          description:
            "Whether You Are Looking To Enjoy Some Natural Beauty of Minnesota’s Lake Wildlife From Our Nearly 100 Foot Long With a 40 Foot Tee Pier For Optimal Views and Space That was Repurposed From The Oldest State Owned Pier in Minnesota at The Time of Accusation and Was One of The Original Four Established in Minnesota Previously Located in Grand Rapids Mn. Preserving Our Great States History or Enjoying a Tour of The Lake in Our Wide Selection of Non Motorized Water Vessels.",
        },
      ],
    },

    quoteForm: {
      eyebrow: "Rental Quote",
      title: "Request a rental quote",
      body: "Inquire online or call today to book your reservation.",
      fields: [
        {
          label: "Name",
          name: "name",
          type: "text",
          placeholder: "Your name",
        },
        {
          label: "Phone",
          name: "phone",
          type: "tel",
          placeholder: "Phone number",
        },
        {
          label: "Email",
          name: "email",
          type: "email",
          placeholder: "Email address",
        },
        {
          label: "Rental Interested In",
          name: "rental",
          type: "select",
          options: [
            "Golf Carts",
            "Jet Ski's",
            "4+2 Sugar Sand Tango Jet Boat",
            "Tahoe/Grand Island Funship",
            "Non Motorized Water Equipment",
            "Prime Time Avenger 26BK",
            "24’ Misty Harbor Sport Tune",
            "Lund Fishing Boat",
            "Aquatic Weed Harvester",
            "Snowmobile Rentals",
            "Glastron SX 195",
          ],
        },
        {
          label: "Date Needed",
          name: "date",
          type: "date",
        },
        {
          label: "How Long",
          name: "duration",
          type: "text",
          placeholder: "Half day, full day, weekend, week, etc.",
        },
        {
          label: "Message",
          name: "message",
          type: "textarea",
          placeholder: "Tell us what you are interested in.",
        },
      ],
    },
  },

    

  gallery: {
    eyebrow: "Photos",
    title: "Come see us this summer for a good time!!",
    ctaLabel: "View Full Gallery",
    href: "/gallery",
    images: [
      {
        src: "/images/lakes-gallery-1.jpg",
        alt: "Lakes Area R&R outdoor lake view",
        category: "Crystal Lake",
      },
      {
        src: "/images/lakes-gallery-2.jpg",
        alt: "Lakes Area R&R Caddyshack Pro Shop",
        category: "Caddyshack",
      },
    
      {
        src: "/images/lakes-gallery-3.jpg",
        alt: "Lakes Area R&R Crystal Lake shoreline",
        category: "Crystal Lake",
      },
      {
        src: "/images/lakes-gallery-4.jpg",
        alt: "Lakes Area R&R rental cart and green",
        category: "Rentals",
      },
      {
        src: "/images/lakes-gallery-5.jpg",
        alt: "Lakes Area R&R parade pontoon",
        category: "Rentals",
      },
    ],
  },

  galleryPage: {
    hero: {
      eyebrow: "Photos",
      title: "Come see us this summer for a good time!!",
      body: "Discover the Beauty and Enjoy All The New Unique Experiences of Minnesota‘s Lakes Area Newest Destination For Fun!",
    },
    images: [
      {
        src: "/images/lakes-gallery-1.jpg",
        alt: "Lakes Area R&R outdoor lake view",
        category: "Crystal Lake",
      },
      {
        src: "/images/lakes-gallery-2.jpg",
        alt: "Lakes Area R&R Caddyshack Pro Shop",
        category: "Caddyshack",
      },
      {
        src: "/images/lakes-gallery-3.jpg",
        alt: "Lakes Area R&R Crystal Lake shoreline",
        category: "Crystal Lake",
      },
      {
        src: "/images/lakes-gallery-4.jpg",
        alt: "Lakes Area R&R rental cart and green",
        category: "Rentals",
      },
      {
        src: "/images/lakes-gallery-5.jpg",
        alt: "Lakes Area R&R parade pontoon",
        category: "Rentals",
      },
      {
        src: "/images/lakes-gallery-7.jpg",
        alt: "Lakes Area R&R mini golf course",
        category: "Lakes Area Links",
      },
      {
        src: "/images/lakes-gallery-8.jpg",
        alt: "Lakes Area R&R bottle shop",
        category: "Bottle Shop",
      },
      {
        src: "/images/lakes-gallery-9.jpg",
        alt: "Lakes Area R&R lake activity area",
        category: "Crystal Lake",
      },
      {
        src: "/images/lakes-gallery-10.jpg",
        alt: "Lakes Area R&R rental equipment",
        category: "Rentals",
      },
      {
        src: "/images/lakes-gallery-11.jpg",
        alt: "Lakes Area R&R outdoor food and drinks",
        category: "The Caddyshack",
      },
      {
        src: "/images/lakes-gallery-12.jpg",
        alt: "Lakes Area R&R summer recreation",
        category: "Activities",
      },
    ],
  },

  reviews: {
    eyebrow: "Recommendations",
    title: "A fun day of rentals, mini golf and lunch",
    items: [
      {
        name: "Katy Friends",
        date: "December 29, 2025",
        text: "I just left Lakes Area R & R. When I got home my daughter came up to me and whispered “best day ever!” after I took her out on a rented snowmobile for her bday. We had a blast. The owner had nice new helmets that fit us and my niece. Highly recommend LA R&R for a fun day of rentals or if it’s summer, a miniature golf day and lunch. You can also swing by their mini liquor store that has all of your favorites.",
      },
      {
        name: "Brian Anderson",
        date: "July 11, 2025",
        text: "We had such a fun time at this mini golf course! The layout was creative and the holes offered just the right mix of challenge and fun. Everything was really clean and well taken care of, from the greens to the decorations. The staff was friendly and made us feel welcome from the moment we arrived.",
      },
    ],
  },

  visit: {
    eyebrow: "Visit Lakes Area R&R",
    title: "Lakes Area R&R is now open for the season!!",
    body: "Lakes Area Links~18 Hole Natural Mini Golf Course. Lakes Area Bottle Shop~ Stocked for all your essential Beverage and other relaxation/recreational needs. The Green Bean Coffee Company for your coffee fix plus more. The Caddyshack for your sweet treat, adult beverage and gourmet food fix. Crystal Lake for Paddle Boarding, kayaking, canoeing and paddle boat pleasure. ALL DAY WRISTBANDS FOR $10 PER PERSON",
    details: [
      {
        title: "Address",
        text: "21596 County Road 3, Merrifield, MN 56465",
      },
      {
        title: "Phone",
        text: "218-454-3336",
      },
      {
        title: "Email",
        text: "info@lakesarearandr.com",
      },
      {
        title: "Category",
        text: "Recreation Center",
      },
    ],
  },

  finalCta: {
    eyebrow: "Make Your Plans Today",
    title: "A slice of fun for everyone",
    body: "Discover the Beauty and Enjoy All The New Unique Experiences of Minnesota‘s Lakes Area Newest Destination For Fun!",
    primaryCta: "Call Today",
    secondaryCta: "View Rentals",
  },
};