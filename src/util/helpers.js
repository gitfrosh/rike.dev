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

export const submit = (email, setCallback) => {
    try {
        if (!email) return;
        fetch('https://voyager-b6brc.ondigitalocean.app/api/v1/mailchimp/subscribe', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                status: 'pending',
                tags: ["prelaunch"]
            })

        })
            .catch((err) => {
                setCallback("Da ist leider etwas schief gegangen. Bitte probiere es nochmal oder sende mir eine Mail an kurse[at]rike.dev.")
            }
            )
            .then(response => response.json())
            .then(response => {
                if (response?.response === 'Success') {
                    setCallback("Vielen Dank für dein Interesse! Als nächstes schau bitte in deine E-Mails und klinge auf den Download-Link.")

                } else if (response?.response === "Exists") {
                    setCallback("Du bist bereits registriert.")

                } else if (response?.response === "Member In Compliance State") {
                    setCallback("Du bist scheinbar schon registriert, aber hast noch nicht in auf den Bestätigungslink in deinen E-Mails geklickt. Bitte prüfe dein Postfach.")

                }
                else {
                    setCallback("Da ist leider etwas schief gegangen. Bitte probiere es nochmal oder sende mir eine Mail.")

                }

            })
    } catch (err) {
        console.error(err);


    }

}