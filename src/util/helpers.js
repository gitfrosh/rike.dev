export const getBrowserLanguage = () => {
    if (typeof navigator === `undefined`) {
        return "en";
    }
    const lang = navigator && navigator.language && navigator.language.split("-")[0];
    if (!lang) return "en";

    switch (lang) {
        case "de":
            return "de";
        default:
            return "en";
    }
};