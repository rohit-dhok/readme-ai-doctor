const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export async function getAISugesttions(readmeText) {
    const URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`

    const prompt = `You are a README expert. Analyze this README and give
    specific improvement suggestions for each weak section.
    Return ONLY a JSON array like this:
    [
        { "title": "License", "tip": "Add an MIT license" },
        { "title": "Badges",  "tip": "Add shields.io badges" }
    ]
    README: ${readmeText}`;

    const response = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({
            contents: [{ parts: [{text: prompt}]}],
            generationConfig: {
                thinkingConfig: { thinkingBudget: 0 }
            }
        })
    })

    const data = await response.json();
    if (!data.candidates) {
        throw new Error("Gemini API error: " + JSON.stringify(data))
    }
    
    const raw = data.candidates[0].content.parts[0].text;
    const clean = raw.replace(/```json\n?|\n?```/g, "").trim()
    const parsed = JSON.parse(clean);
    console.log(parsed);

    return parsed;
}