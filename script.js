// Sprache automatisch erkennen (Demo: nur Deutsch/Englisch)
document.addEventListener("DOMContentLoaded", () => {
    const userLang = navigator.language || navigator.userLanguage;
    if (userLang.startsWith("en")) {
        document.querySelector(".slogan").innerHTML =
            "Together we move what matters.<br />Global aid transports – safe, voluntary, direct.";
    }
});
