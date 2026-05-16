// import { NextResponse } from "next/server";

// import twilio from "twilio";

// const client = twilio(
//   process.env.TWILIO_ACCOUNT_SID,

//   process.env.TWILIO_AUTH_TOKEN
// );

// export async function POST(req) {
//   try {
//     const body = await req.json();

//     const {
//       phone,
//       full_name,
//       workshop,
//     } = body;

//     await client.messages.create({
//       from:
//         process.env
//           .TWILIO_WHATSAPP_NUMBER,

//       to: `whatsapp:+91${phone}`,

//       contentSid:
//         process.env
//           .TWILIO_CONFIRMATION_TEMPLATE,

//       contentVariables:
//         JSON.stringify({
//           1: full_name,

//           2: workshop,

//           3: "20 May 2026",

//           4: "11:00 AM IST",

//           5: process.env
//             .ZOOM_MEETING_LINK,
//         }),
//     });

//     return NextResponse.json({
//       success: true,
//     });
//   } catch (error) {
//     console.error(error);

//     return NextResponse.json(
//       {
//         error:
//           "WhatsApp send failed",
//       },

//       {
//         status: 500,
//       }
//     );
//   }
// }