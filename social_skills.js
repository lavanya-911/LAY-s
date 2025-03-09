// ✅ Role-Playing Scenarios
function showScenario() {
    let scenarios = {
        greeting: "👋 You meet a new friend. Say: 'Hello! Nice to meet you!'",
        help: "🆘 You are lost. Ask: 'Can you help me find my way?'"
    };
    let selected = document.getElementById("rolePlay").value;
    document.getElementById("rolePlayScenario").innerText = scenarios[selected];
}

// ✅ Social Storybook
function showStory() {
    let stories = [
        "📖 Sam felt shy but took a deep breath and said hello.",
        "📖 Lily dropped her book. A friend helped her pick it up."
    ];
    let randomStory = stories[Math.floor(Math.random() * stories.length)];
    document.getElementById("socialStory").innerText = randomStory;
}
