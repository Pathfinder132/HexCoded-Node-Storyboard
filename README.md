# HexCoded URL-to-Storyboard Node Builder

An interactive node-based workflow prototype built for **HexCoded** (`hexcoded.ai`). Designed to bridge the gap between product links and AI video generation by allowing creative professionals to pre-visualize and structure multi-act video pipelines before spending rendering credits.

---

## 🚀 What It Does

1. **URL & Text Ingestion:** Accepts any product link or descriptive text input from the user.
2. **Interactive Node Canvas (`@xyflow/react`):** Automatically breaks down the input into a structured 4-stage pipeline:
   - **Source Node:** Extracts product title, target audience, and content tone.
   - **Script Node:** Outlines editable 3-act scene scripts (*Hook, Value Prop, CTA*).
   - **Visual Prompt Node:** Generates detailed video scene prompts with subject motion tags.
   - **Model Router Node:** Recommends optimal HexCoded execution routing (e.g., *Kling Turbo vs. Google Veo*, avatar assignment, and motion scale).
3. **Studio Aesthetic:** Built natively to HexCoded's clean light-mode studio branding with emerald green accents.

---

## 🛠️ Tech Stack

* **Framework:** Next.js (App Router, TypeScript)
* **Canvas Engine:** React Flow (`@xyflow/react`)
* **Styling:** Tailwind CSS
* **Icons:** Lucide React

---

## 💻 Running Locally

1. Clone the repository:
   ```bash
   git clone [https://github.com/Pathfinder132/HexCoded-Node-Storyboard.git](https://github.com/Pathfinder132/HexCoded-Node-Storyboard.git)
   cd HexCoded-Node-Storyboard