"use server"

export const sendDiscordMessage = async (email: string, subject: string, message: string) => {
    try {
        await fetch(process.env.DISCORD_WEBHOOK_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                content: {
                    "content": "New contact form submit!",
                    "embeds": [
                        {
                            "title": `Subject: ${subject}`,
                            "description": `${message}`,
                            "color": 5814783,
                            "author": {
                                "name": `Email: ${email}`
                            }
                        }
                    ],
                    "attachments": []
                },
            }),
        })
    } catch (err: any) {
        console.log(err.message)
    }
}