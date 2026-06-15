const REQUIRED_SECTIONS = [
    { id: "installation", label:"Installations", keywords:["installation", "getting started"] },
    { id: "usage", label: "Usage", keywords:["usage", "instructions", "how to use"] },
    { id:"license", label: "License", keywords:["license"] },
    { id:"contributing", label: "Contributing", keywords:["contributing", "contribute"] }
]

function checkSections(text) {
    text = text.toLowerCase();
    let results = []

    for (const section of REQUIRED_SECTIONS) {
        const found = section.keywords.some(keyword => text.includes(keyword))
        results.push({ label: section.label, status: found })
    }

    return results;
}

function badgeChecker(text) {
    return (text.includes("shields.io"));
}

function lengthChecker(text) {
    return text.split(" ").filter(Boolean).length > 100;
}

function calculateScore(sectionResult, hasBadges, wordCount) {
    let score = 0;

    const sectionScore = (sectionResult.filter(s => s.status === true).length) * 15;
    const badgesScore = hasBadges ? 20 : 0;
    const lengthScore = wordCount ? 20 : 0;

    return ( sectionScore + badgesScore + lengthScore );
}

export function analyzeReadme(text) {
    const sectionResults = checkSections(text);
    const hasBadges = badgeChecker(text);
    const hasLength = lengthChecker(text);
    const score = calculateScore(sectionResults, hasBadges, hasLength);

    return {
        score: score,
        checklist : [
            ...sectionResults,
            { label: "Badges", status: hasBadges },
            { label: "Enough Content", status: hasLength}
        ]
    }
}