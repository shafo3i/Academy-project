import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle, AlertCircle } from "lucide-react";
import { handlePaymentCompletion } from "@/actions/form/actions";

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const params = await searchParams;
  let paymentResult = null;
  let error = null;

  // Handle payment completion if session_id is provided
  if (params.session_id) {
    try {
      paymentResult = await handlePaymentCompletion(params.session_id);
    } catch (err) {
      console.error('Payment completion error:', err);
      error = err instanceof Error ? err.message : 'Unknown error occurred';
    }
  }

  // If payment failed or no session ID
  if (error || !paymentResult?.success) {
    return (
      <section className="py-16 bg-muted/30 min-h-screen flex items-center justify-center">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="mx-auto max-w-2xl">
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                  <AlertCircle className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-2xl text-red-600">Payment Processing Error</CardTitle>
                <CardDescription>
                  There was an issue processing your payment. Please contact support.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                {error && (
                  <div className="bg-red-50 p-4 rounded-lg">
                    <p className="text-red-700 text-sm">{error}</p>
                  </div>
                )}
                <div className="pt-4 space-x-4">
                  <Link href="/register">
                    <Button variant="outline">Try Again</Button>
                  </Link>
                  <Link href="/">
                    <Button>Return to Home</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  const { payment, registration } = paymentResult;

  return (
    <section className="py-16 bg-muted/30 min-h-screen flex items-center justify-center">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="mx-auto max-w-2xl">
          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl text-green-600">Payment Successful!</CardTitle>
              <CardDescription>
                Thank you for your registration. Your payment has been processed successfully.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              {/* Payment Details */}
              <div className="bg-muted p-4 rounded-lg text-left">
                <h3 className="font-semibold mb-3">Payment Details</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Amount:</span>
                    <span className="font-medium">£{payment.amount.toFixed(2)} {payment.currency.toUpperCase()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status:</span>
                    <span className="font-medium capitalize text-green-600">{payment.status}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Student:</span>
                    <span className="font-medium">{registration?.childFullName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Parent:</span>
                    <span className="font-medium">{registration?.parentFullName}</span>
                  </div>
                  {payment.paidAt && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Paid at:</span>
                      <span className="font-medium">
                        {new Date(payment.paidAt).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Next Steps */}
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">What happens next?</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• You will receive a confirmation email shortly</li>
                  <li>• Our team will contact you within 24 hours</li>
                  <li>• You'll receive course materials and Zoom links</li>
                  <li>• Classes start: Sunday 5th October 2025</li>
                </ul>
              </div>
              
              {params.session_id && (
                <p className="text-xs text-muted-foreground">
                  Reference: {params.session_id.slice(-8)}
                </p>
              )}
              
              <div className="pt-4">
                <Link href="/">
                  <Button size="lg">
                    Return to Home
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}