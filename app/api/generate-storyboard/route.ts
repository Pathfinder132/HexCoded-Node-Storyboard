const MOCK_NODES = [
  {
    type: "source",
    data: {
      title: "AeroGlide Sneakers",
      tone: "Energetic, Fast-paced",
      audience: "Gen-Z Athletes",
    },
  },
  {
    type: "script",
    data: {
      hook: "Close up on shoes hitting the pavement",
      valueProp: "Ultra-lightweight foam technology",
      cta: "Step into the future. Link in bio.",
    },
  },
  {
    type: "visual",
    data: {
      scene1Prompt:
        "Cinematic low angle of futuristic sneakers hitting wet neon pavement, motion blur",
      scene2Prompt: "3D exploded view of foam sole expanding",
      scene3Prompt: "Dynamic text overlay on clean studio background",
    },
  },
  {
    type: "router",
    data: {
      recommendedVideoModel: "Kling Turbo",
      avatarModel: "None (Product Focus)",
      motionScale: "High (0.8)",
    },
  },
] as const;

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

  return Response.json(MOCK_NODES, { status: 200 });
}
