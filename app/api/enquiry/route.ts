import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { fullName, phone, email, projectInterest, preferredContact, message } = body;

    // Validate mandatory fields
    if (!fullName || !phone || !projectInterest) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all mandatory fields (Name, Phone, and Project).",
        },
        { status: 400 }
      );
    }

    // Indian phone regex check
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone.trim())) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide a valid 10-digit Indian phone number.",
        },
        { status: 400 }
      );
    }

    // In production without external CRM keys configured, log cleanly and return success contract
    console.log("=== NEW LEAD ENQUIRY RECEIVED ===");
    console.log({
      timestamp: new Date().toISOString(),
      fullName,
      phone,
      email: email || "Not provided",
      projectInterest,
      preferredContact: preferredContact || "Phone Call",
      message: message || "None",
      targetOffice: "VBR Developers - Nagole X Roads, Hyderabad",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry successfully logged. Our team will contact you shortly.",
        referenceId: `VBR-${Date.now().toString().slice(-6)}`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Enquiry API error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Server encountered an error while recording your enquiry.",
      },
      { status: 500 }
    );
  }
}
