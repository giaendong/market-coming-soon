import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email } = body;
  if (!email) {
    return NextResponse.json({ message: "Bad Request", status: 400 },{status: 400});
  }
  if (req.method === "POST") {
    try {
      const response = await fetch(`${ process.env.API_URL }/api/market-coming-soon-notify-emails`,
        {
          method: req.method,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.EMAIL_API_TOKEN}`,
          },
          body: JSON.stringify({
            data: {
              email
            }
          }),
        }
      );
      if (response.ok) {
        return NextResponse.json({ ...response }, { status: 200 });
      } else {
        return NextResponse.json(
          { message: response.statusText, status: response.status },
          { status: response.status }
        );
      }
    } catch (e) {
      console.log("/market-coming-soon-notify-email", e);
      return NextResponse.json({ message: `${e} on /market-coming-soon-notify-email` });
    }
  } else {
    return NextResponse.json(
      { message: `Method ${req.method} not allowed` },
      { status: 405 }
    );
  }
}
