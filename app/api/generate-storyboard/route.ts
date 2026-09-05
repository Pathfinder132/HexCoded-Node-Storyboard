const PRODUCT_POOLS = [
  {
    keywords: ["coffee", "roast", "espresso", "bean"],
    nodes: [
      { type: "source", data: { title: "Artisan Cold Brew Concentrate", tone: "Rich, Cozy, Artisan", audience: "Coffee Enthusiasts" } },
      { type: "script", data: { hook: "Slow motion pour over crystal clear ice", valueProp: "18-hour steep for zero bitterness", cta: "Upgrade your morning brew today." } },
      { type: "visual", data: { scene1Prompt: "Macro shot of dark golden coffee drops hitting ice cubes", scene2Prompt: "Warm morning sunlight hitting a minimalist ceramic mug", scene3Prompt: "Sleek glass bottle packaging on a wooden counter" } },
      { type: "router", data: { recommendedVideoModel: "Sora Cinematic", avatarModel: "None", motionScale: "Medium (0.5)" } }
    ]
  },
  {
    keywords: ["keyboard", "mech", "desk", "setup"],
    nodes: [
      { type: "source", data: { title: "Apex Pro Mechanical Keyboard", tone: "Tech-forward, Crisp, Satisfying", audience: "Developers & Gamers" } },
      { type: "script", data: { hook: "ASMR typing sounds echoing in a dark room", valueProp: "Hot-swappable switches with custom RGB acoustics", cta: "Find your flow state. Shop now." } },
      { type: "visual", data: { scene1Prompt: "Close-up of translucent keycaps glowing with cyberpunk purple and green LED", scene2Prompt: "Fingers gliding smoothly across switches during a late coding session", scene3Prompt: "Minimalist clean desk setup overhead shot" } },
      { type: "router", data: { recommendedVideoModel: "Kling Turbo", avatarModel: "None", motionScale: "High (0.8)" } }
    ]
  },
  {
    keywords: ["skin", "serum", "glow", "face", "beauty"],
    nodes: [
      { type: "source", data: { title: "Lumina Vitamin C Glow Serum", tone: "Clean, Luxurious, Radiant", audience: "Skincare Enthusiasts" } },
      { type: "script", data: { hook: "Dropper dispensing golden liquid onto skin", valueProp: "Clinical-grade 15% Vitamin C for instant barrier repair", cta: "Reveal your natural radiance." } },
      { type: "visual", data: { scene1Prompt: "Macro drop of serum catching morning sun rays", scene2Prompt: "Clean minimalist bathroom counter with glass dropper bottle", scene3Prompt: "Soft-focus model smiling with glowing skin texture" } },
      { type: "router", data: { recommendedVideoModel: "Runway Gen-3", avatarModel: "AI Influencer Pro", motionScale: "Low (0.3)" } }
    ]
  },
  {
    keywords: ["watch", "time", "chrono", "steel"],
    nodes: [
      { type: "source", data: { title: "Vanguard Titanium Chronograph", tone: "Bold, Sophisticated, Timeless", audience: "Professionals & Collectors" } },
      { type: "script", data: { hook: "Tick-tock macro view of mechanical gears turning", valueProp: "Aerospace-grade titanium with sapphire crystal glass", cta: "Own your time. Explore the collection." } },
      { type: "visual", data: { scene1Prompt: "Polished metal bezel reflecting dramatic studio lighting", scene2Prompt: "Watch sliding smoothly under a tailored suit cuff", scene3Prompt: "Dark moody background with golden rim lighting" } },
      { type: "router", data: { recommendedVideoModel: "Sora Cinematic", avatarModel: "None", motionScale: "Medium (0.4)" } }
    ]
  },
  {
    keywords: ["fitness", "gym", "protein", "shake", "workout"],
    nodes: [
      { type: "source", data: { title: "Titan Whey Protein Isolate", tone: "Intense, Motivating, Powerful", audience: "Athletes & Bodybuilders" } },
      { type: "script", data: { hook: "Heavy barbell slamming down with chalk dust flying", valueProp: "30g pure isolate protein with zero sugar crash", cta: "Fuel your peak performance." } },
      { type: "visual", data: { scene1Prompt: "Explosive shaker bottle mix with milk splashing dynamically", scene2Prompt: "Gritty gym lighting with neon highlights", scene3Prompt: "Sleek matte black tub on a concrete pedestal" } },
      { type: "router", data: { recommendedVideoModel: "Kling Turbo", avatarModel: "None", motionScale: "High (0.9)" } }
    ]
  },
  {
    keywords: ["travel", "bag", "backpack", "luggage"],
    nodes: [
      { type: "source", data: { title: "Nomad Tech Backpack", tone: "Adventurous, Durable, Sleek", audience: "Digital Nomads" } },
      { type: "script", data: { hook: "Drone shot of a traveler walking through a misty mountain pass", valueProp: "Weatherproof shell with built-in USB charging hub", cta: "Pack smarter for your next journey." } },
      { type: "visual", data: { scene1Prompt: "Water droplets sliding off high-durability black nylon fabric", scene2Prompt: "Organized interior compartments holding a laptop and camera", scene3Prompt: "Traveler looking out at a city skyline at sunrise" } },
      { type: "router", data: { recommendedVideoModel: "Runway Gen-3", avatarModel: "None", motionScale: "Medium (0.6)" } }
    ]
  },
  {
    keywords: ["lamp", "light", "desk", "home"],
    nodes: [
      { type: "source", data: { title: "Aura Smart Ambient Light", tone: "Warm, Minimalist, Calming", audience: "Interior Design Lovers" } },
      { type: "script", data: { hook: "Room shifting from dark to a warm sunset gradient", valueProp: "16 million colors synced to your circadian rhythm", cta: "Transform your living space." } },
      { type: "visual", data: { scene1Prompt: "Smooth color transition on a geometric LED wall panel", scene2Prompt: "Cozy reading nook illuminated by soft amber glow", scene3Prompt: "Minimalist aluminum base on a walnut shelf" } },
      { type: "router", data: { recommendedVideoModel: "Sora Cinematic", avatarModel: "None", motionScale: "Low (0.3)" } }
    ]
  },
  {
    keywords: ["headphone", "audio", "sound", "music"],
    nodes: [
      { type: "source", data: { title: "SonicVibe Active Noise Cancelling", tone: "Immersive, Crisp, Cinematic", audience: "Audiophiles" } },
      { type: "script", data: { hook: "Ambient city chaos instantly fading into absolute silence", valueProp: "Studio-grade drivers with 40-hour hybrid ANC", cta: "Hear music the way it was meant to be." } },
      { type: "visual", data: { scene1Prompt: "Sleek over-ear headphones floating against a dark soundstage", scene2Prompt: "Soundwaves visualizing in neon blue ripples around the earcups", scene3Prompt: "Close-up of premium memory foam ear cushioning" } },
      { type: "router", data: { recommendedVideoModel: "Kling Turbo", avatarModel: "None", motionScale: "Medium (0.5)" } }
    ]
  },
  {
    keywords: ["plant", "eco", "green", "garden"],
    nodes: [
      { type: "source", data: { title: "Botanica Self-Watering Planter", tone: "Organic, Sustainable, Fresh", audience: "Plant Parents & Urban Dwellers" } },
      { type: "script", data: { hook: "Time-lapse of a monstera leaf unfurling in bright window light", valueProp: "Smart capillary hydration system keeps plants alive for weeks", cta: "Bring nature indoors effortlessly." } },
      { type: "visual", data: { scene1Prompt: "Sunlight filtering through vibrant green leaves in a Scandinavian apartment", scene2Prompt: "Transparent water reservoir showing clean self-wicking action", scene3Prompt: "Matte ceramic pot design resting on a wooden stool" } },
      { type: "router", data: { recommendedVideoModel: "Runway Gen-3", avatarModel: "None", motionScale: "Low (0.2)" } }
    ]
  },
  {
    keywords: ["wallet", "card", "leather", "edc"],
    nodes: [
      { type: "source", data: { title: "Ridge Minimalist RFID Wallet", tone: "Sleek, Secure, Compact", audience: "Everyday Carry Enthusiasts" } },
      { type: "script", data: { hook: "A single flick launching cards out like a fan instantly", valueProp: "Blocked RFID theft protection in a slim profile", cta: "Ditch the bulky pocket fold today." } },
      { type: "visual", data: { scene1Prompt: "Carbon fiber texture reflecting sharp studio highlights", scene2Prompt: "Wallet fitting effortlessly into a front jeans pocket", scene3Prompt: "Metal plates fanning out cards with precision spring action" } },
      { type: "router", data: { recommendedVideoModel: "Sora Cinematic", avatarModel: "None", motionScale: "Medium (0.5)" } }
    ]
  }
];

const FALLBACK_NODES = PRODUCT_POOLS[0].nodes;

export async function POST(request: Request) {
  let body: { url?: unknown };

  try {
    body = (await request.json()) as { url?: unknown };
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (typeof body.url !== "string") {
    return Response.json({ error: "url must be a string" }, { status: 400 });
  }

  const query = body.url.toLowerCase();

  // Find a matching product pool based on keywords in the pasted URL
  const matchedProduct = PRODUCT_POOLS.find((item) =>
    item.keywords.some((keyword) => query.includes(keyword))
  );

  // If a keyword matches, return that specific product. Otherwise pick a random one from the 10!
  const selectedNodes =
    matchedProduct ? matchedProduct.nodes : PRODUCT_POOLS[Math.floor(Math.random() * PRODUCT_POOLS.length)].nodes;

  return Response.json(selectedNodes, { status: 200 });
}