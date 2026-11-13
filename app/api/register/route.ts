import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      gender,
      dateOfBirth,
      emergencyName,
      emergencyPhone,
      membershipType,
      selectedTrainer,
      selectedClasses,
      medicalConditions,
      eventTitle, // If from event modal
    } = body;

    const rawName = String(body.name ?? `${firstName || ""} ${lastName || ""}`).trim();
    const rawPhone = String(phone ?? "").trim();
    // Main register form sends only name + phone; event sign-ups may send more
    if (!rawName || rawPhone.replace(/\D/g, "").length < 9) {
      return NextResponse.json({ success: false, error: "Please enter your name and a valid phone number" }, { status: 400 });
    }

    const fullName = `${firstName || ""} ${lastName || ""}`.trim() || body.name || "Member";
    const userEmail = email || "no-email@getfitgym.com";
    const userPhone = phone || "N/A";

    const notesArray = [];
    if (gender) notesArray.push(`Gender: ${gender}`);
    if (dateOfBirth) notesArray.push(`DOB: ${dateOfBirth}`);
    if (emergencyName || emergencyPhone) notesArray.push(`Emergency: ${emergencyName || ""} (${emergencyPhone || ""})`);
    if (selectedTrainer) notesArray.push(`Coach: ${selectedTrainer}`);
    if (selectedClasses && selectedClasses.length > 0) notesArray.push(`Classes: ${selectedClasses.join(", ")}`);
    if (medicalConditions) notesArray.push(`Medical Notes: ${medicalConditions}`);
    if (eventTitle) notesArray.push(`Event: ${eventTitle}`);
    if (body.planSlug) notesArray.push(`Plan: ${body.planSlug} (${body.period || "1-month"})`);

    const client = await prisma.client.create({
      data: {
        name: fullName,
        email: userEmail,
        phone: userPhone,
        preferredProgram: eventTitle || (selectedClasses && selectedClasses.length > 0 ? selectedClasses[0] : "General Fitness"),
        membershipTier: membershipType || (eventTitle ? "Event Attendee" : "Standard"),
        emergencyContact: emergencyPhone ? `${emergencyName || "Contact"}: ${emergencyPhone}` : null,
        notes: notesArray.join(" | "),
        status: "PENDING",
      },
    });

    return NextResponse.json({ success: true, client });
  } catch (error: any) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to process registration" },
      { status: 500 }
    );
  }
}
