'use server';

import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-07-30.basil',
});

export async function formRegistration(formData: FormData) {
  const childFullName = formData.get("childFullName") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const childrenAge = formData.get("childrenAge") as string;
  const parentFullName = formData.get("parentFullName") as string;
  const parentRelation = formData.get("parentRelation") as string;
  const country = formData.get("country") as string;
  const address = formData.get("address") as string;
  const fee = formData.get("fee") as string;
  const numChildren = formData.get("childrens") as string;
  const noteBookPostedEntry = formData.get("noteBookPosted");
  const noteBookPosted = typeof noteBookPostedEntry === "string"
    ? (noteBookPostedEntry === "true" || noteBookPostedEntry === "on")
    : false;

  // Validation
  if (!childFullName || !email || !phone || !parentFullName || !childrenAge || !parentRelation || !country || !address || !fee || !numChildren) {
    throw new Error("All required fields must be filled");
  }

  try {
    // Create registration in database
    const registration = await prisma.courseRegistration.create({
      data: {
        childFullName,
        email,
        phone,
        childrenAge: parseInt(childrenAge, 10),
        parentFullName,
        parentRelation,
        country,
        address,
        fee: parseFloat(fee),
        childrens: [numChildren], // Store as array with the number of children
        noteBookPosted
      },
    });

    console.log('Registration created successfully:', registration.id);

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'gbp',
            product_data: {
              name: `Islamic Studies Program Registration`,
              description: `Registration for ${numChildren} child${parseInt(numChildren) > 1 ? 'ren' : ''}`,
            },
            unit_amount: Math.round(parseFloat(fee) * 100), // Convert to pence
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/register?cancelled=true`,
      customer_email: email,
      metadata: {
        registrationId: registration.id,
        childFullName,
        numChildren,
      },
    });

    console.log('Stripe session created:', session.id);

    // Return the session URL instead of redirecting
    return { success: true, redirectUrl: session.url };
    
  } catch (error) {
    console.error('Registration error details:', error);
    
    // Provide more specific error messages
    if (error instanceof Error) {
      if (error.message.includes('Stripe')) {
        throw new Error('Payment system error. Please try again or contact support.');
      }
      if (error.message.includes('Prisma') || error.message.includes('database')) {
        throw new Error('Database error. Please try again.');
      }
    }
    
    throw new Error(`Registration failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

// get all registered customers 
export async function getAllRegistrations() {
  try {
    const registrations = await prisma.courseRegistration.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return registrations;
  } catch (error) {
    console.error('Error fetching customers:', error);
    throw new Error('Failed to fetch customers. Please try again later.');
  }
}


// Delete registration by ID
export async function deleteRegistration(id: string) {
  try {
    await prisma.courseRegistration.delete({
      where: {
        id,
      },
    });
    console.log('Registration deleted successfully:', id);
  } catch (error) {
    console.error('Error deleting registration:', error);
    throw new Error('Failed to delete registration. Please try again later.');
  }
}
