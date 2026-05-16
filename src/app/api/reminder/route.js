// import { NextResponse } from "next/server";

// import twilio from "twilio";

// import {
//   createClient,
// } from "@supabase/supabase-js";

// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL,

//   process.env
//     .SUPABASE_SERVICE_ROLE_KEY
// );

// const client = twilio(
//   process.env.TWILIO_ACCOUNT_SID,

//   process.env.TWILIO_AUTH_TOKEN
// );

// export async function GET(req) {
//   try {
//     // SECURITY
//     const auth =
//       req.headers.get("authorization");

//     if (
//       auth !==
//       `Bearer ${process.env.CRON_SECRET}`
//     ) {
//       return NextResponse.json(
//         {
//           error: "Unauthorized",
//         },

//         {
//           status: 401,
//         }
//       );
//     }

//     // GET USERS
//     const { data, error } =
//       await supabase
//         .from("registrations")
//         .select("*");

//     if (error) throw error;

//     const now = new Date();

//     for (const user of data) {
//       const workshopDate =
//         new Date(
//           user.workshop_date
//         );

//       const diff =
//         workshopDate - now;

//       const hours =
//         diff / (1000 * 60 * 60);

//       // ======================
//       // 1 DAY REMINDER
//       // ======================

//       if (
//         hours <= 24 &&
//         hours > 23 &&
//         !user.reminder_1_day
//       ) {
//         await client.messages.create({
//           from:
//             process.env
//               .TWILIO_WHATSAPP_NUMBER,

//           to: `whatsapp:+91${user.phone}`,

//           contentSid:
//             process.env
//               .TWILIO_DAY_TEMPLATE,

//           contentVariables:
//             JSON.stringify({
//               1: user.full_name,

//               2: process.env
//                 .ZOOM_MEETING_LINK,
//             }),
//         });

//         await supabase
//           .from("registrations")
//           .update({
//             reminder_1_day: true,
//           })
//           .eq("id", user.id);
//       }

//       // ======================
//       // 1 HOUR REMINDER
//       // ======================

//       if (
//         hours <= 1 &&
//         hours > 0.8 &&
//         !user.reminder_1_hour
//       ) {
//         await client.messages.create({
//           from:
//             process.env
//               .TWILIO_WHATSAPP_NUMBER,

//           to: `whatsapp:+91${user.phone}`,

//           contentSid:
//             process.env
//               .TWILIO_HOUR_TEMPLATE,

//           contentVariables:
//             JSON.stringify({
//               1: user.workshop,

//               2: process.env
//                 .ZOOM_MEETING_LINK,
//             }),
//         });

//         await supabase
//           .from("registrations")
//           .update({
//             reminder_1_hour: true,
//           })
//           .eq("id", user.id);
//       }
//     }

//     return NextResponse.json({
//       success: true,
//     });
//   } catch (error) {
//     console.error(error);

//     return NextResponse.json(
//       {
//         error:
//           "Reminder failed",
//       },

//       {
//         status: 500,
//       }
//     );
//   }
// }