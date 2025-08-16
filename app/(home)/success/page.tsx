import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function SuccessPage({
  searchParams,
}: {
  searchParams: { session_id?: string };
}) {
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
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">What happens next?</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• You will receive a confirmation email shortly</li>
                  <li>• Our team will contact you within 24 hours</li>
                  <li>• You'll receive course materials and Zoom links</li>
                  <li>• Classes start: Sunday 5th October 2025</li>
                </ul>
              </div>
              
              {searchParams.session_id && (
                <p className="text-xs text-muted-foreground">
                  Payment ID: {searchParams.session_id}
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