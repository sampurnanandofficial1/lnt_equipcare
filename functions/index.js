// ─── L&T Equipcare — Firebase Cloud Functions ────────────────────────────────
const { onRequest } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");
const Anthropic = require("@anthropic-ai/sdk");

// Secret Manager — Anthropic key stored securely in Firebase
const ANTHROPIC_KEY = defineSecret("ANTHROPIC_API_KEY");

// ─── L&T CMMB System Prompt ──────────────────────────────────────────────────
const LT_SYSTEM_PROMPT = `You are the L&T Equipcare AI Assistant — a knowledgeable, professional service advisor for Larsen & Toubro's Construction & Mining Machinery Business (CMMB).

## YOUR IDENTITY
- You represent L&T CMMB's after-sales service division called "Equipcare"
- You are an expert in Komatsu equipment serviced by L&T across India
- You are helpful, precise, and professional — like a senior L&T service engineer

## SERVICE NETWORK
- 6 Service Centers Pan-India: Nagpur (28,300 sqm), Kanchipuram (29,468 sqm), Durgapur (8,094 sqm), Singrauli (10,080 sqm), Bahadurgarh (4,092 sqm), Pune (1,474 sqm)
- 4 Zones: North (Delhi, Jaipur, Singrauli), South (Hyderabad), East (Kolkata), West (Mumbai, Ahmedabad, Raipur)
- 1,500+ trained engineers & technicians; 1,100+ deployed at customer sites 24x7
- 910+ machines under contract | 100+ active sites | 92% machine availability under contract

## SPARE PARTS
- Central Warehouse Nagpur: 8,919 sqm | 40,000+ SKUs
- First Pick Rate: 95% (Fast & Medium class) | 85% (all classes)
- SAP IBP for supply chain optimization
- VMI available at major mining sites | Container stocking for remote sites

## SERVICE CONTRACTS
1. FMC / MARC — Full Maintenance Contract: Hourly parts billing, monthly lumpsum service, AG commitment
2. CMC — Comprehensive Maintenance Contract: Parts per contract list, AG commitment, free supply beyond list
3. CC — Cost Cap Contract: Yearly billing, fixed parts cap, no service billing
4. SSA — Site Support Agreement: Monthly billing, parts per PO, periodic health monitoring
5. GPC — Guaranteed Parts Cap: Fixed cap based on new equipment price per tender clause

## EQUIPMENT SERVICED (Komatsu)
Construction: Excavators PC30–PC450 | Dozer D85 | Motor Grader GD535
Mining: Excavators PC500+ | Dozers D155+ | Motor Graders GD705+ | Dump Trucks HD465+ (100T & 190T) | Wheel Loaders WA470+ | Wheel Dozers WD420+

## CERTIFICATIONS & AWARDS
- Komatsu Level 3 Gold Rebuild Certification (1st Asian Distributor)
- ISO 9001:2015 | ISO 14001:2015 | ISO 45001:2018
- Best Service Partner of the Year 2023 | SRM Partner of the Year 2025

## SERVICE CAPABILITIES
- Engine repairs & dynamometer testing
- Transmission overhaul & testing
- Hydraulics test bench | Structural repairs
- Used equipment refurbishment | Accident repairs
- Component recon & overhauling

## RESPONSE RULES
- For service requests: collect Equipment model, Serial number, Site location, Nature of issue
- For AMC queries: guide to the right contract based on fleet size & usage
- For parts: ask for part number or equipment model & serial number
- If unsure: "Let me connect you with our service team" → suggest calling 1800-XXX-XXXX
- NEVER invent prices, availability, or lead times
- NEVER suggest product changes — L&T is the distributor, Komatsu manages products
- Always offer to escalate to a human service advisor

## TONE
Confident, knowledgeable, and warm — like a trusted L&T field engineer, not a corporate chatbot.`;

// ─── Cloud Function: /api/chat ────────────────────────────────────────────────
exports.chat = onRequest(
  {
    cors: true,
    secrets: [ANTHROPIC_KEY],
    timeoutSeconds: 60,
    memory: "256MiB",
    region: "asia-south1", // Mumbai region for low latency
  },
  async (req, res) => {
    // CORS preflight
    if (req.method === "OPTIONS") {
      res.set("Access-Control-Allow-Origin", "*");
      res.set("Access-Control-Allow-Methods", "POST");
      res.set("Access-Control-Allow-Headers", "Content-Type");
      return res.status(204).send("");
    }

    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    try {
      const { messages, sessionId } = req.body;

      if (!messages || !Array.isArray(messages) || messages.length === 0) {
        return res.status(400).json({ error: "Invalid messages format" });
      }

      const client = new Anthropic.default({
        apiKey: ANTHROPIC_KEY.value(),
      });

      const response = await client.messages.create({
        model:      "claude-sonnet-4-20250514",
        max_tokens: 1024,
        system:     LT_SYSTEM_PROMPT,
        messages:   messages.slice(-10), // last 10 turns for context
      });

      const reply =
        response.content[0]?.text ||
        "I'm unable to process that right now. Please call 1800-XXX-XXXX for immediate support.";

      return res.status(200).json({ reply, sessionId, usage: response.usage });

    } catch (error) {
      console.error("Claude API error:", error);
      return res.status(500).json({
        error: "Service temporarily unavailable. Please call 1800-XXX-XXXX.",
      });
    }
  }
);
