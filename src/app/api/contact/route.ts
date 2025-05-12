import { NextResponse } from "next/server";
import { MailtrapClient } from "mailtrap";

const client = new MailtrapClient({
    sandbox: false,
    token: process.env.MAILTRAP_TOKEN!,
});

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        await client.send({
            from: { name: name, email: email },
            to: [{ email: "me@codebyjaron.nl" }],
            subject: `Nieuw contactformulier bericht van ${name}`,
            text: message,
            html: `
                <h3>Nieuw bericht van het contactformulier</h3>
                <p><strong>Naam:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Bericht:</strong></p>
                <p>${message}</p>
            `,
        });

        return NextResponse.json(
            { message: "Email successfully sent" },
            { status: 200 }
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Failed to send email" },
            { status: 500 }
        );
    }
}
