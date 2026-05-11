import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { plan } = (await req.json()) as { plan: "monthly" | "annual" };

    const priceId =
      plan === "annual"
        ? process.env.STRIPE_PRICE_ANNUAL_ID!
        : process.env.STRIPE_PRICE_MONTHLY_ID!;

    if (!priceId || priceId.startsWith("price_REPLACE")) {
      return NextResponse.json(
        { error: "Stripe price IDs are not configured. Add them to .env.local." },
        { status: 500 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/pay/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/pay`,
      allow_promotion_codes: true,
      billing_address_collection: "auto",
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("[stripe] checkout session error:", err);
    return NextResponse.json(
      { error: "Failed to create checkout session." },
      { status: 500 }
    );
  }
}
