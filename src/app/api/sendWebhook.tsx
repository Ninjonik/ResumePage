"use server"

export default async function sendWebhook (email: string, subject: string, message: string) {
    try {
        const timestamp = new Date().toISOString();
        const res = await fetch(process.env.DISCORD_WEBHOOK_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                "content": "New contact form submit!",
                "embeds": [
                    {
                        "title": `Subject: ${subject}`,
                        "description": message,
                        "color": 3530506,
                        "timestamp": timestamp,
                        "author": {
                            "name": `Email: ${email}`
                        }
                    }
                ],
                "attachments": []
            }),
        })
        if (res.ok === true) {
            return 'OK';
        } else {
            return 'ERROR';
            console.log(res);
        }
    } catch (err: any) {
        console.log(err.message)
        return 'ERROR';
    }
}