'use client';
import { formRegistration } from "@/actions/form/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

export default function RegistrationForm() {
  const [selectedChildren, setSelectedChildren] = useState(1);
  const [totalPrice, setTotalPrice] = useState(25);

  const calculatePrice = (numChildren: number) => {
    if (numChildren === 1) {
      return 25;
    } else {
      return numChildren * 20; // £20 per child for 2 or more
    }
  };

  const handleChildrenChange = (numChildren: number) => {
    setSelectedChildren(numChildren);
    setTotalPrice(calculatePrice(numChildren));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const formData = new FormData(e.currentTarget);
      
      // Add calculated values to form data
      formData.set('childrens', selectedChildren.toString());
      formData.set('fee', totalPrice.toString());
      
      const result = await formRegistration(formData);
      
      if (result?.success && result?.redirectUrl) {
        toast.success("Registration submitted successfully! Redirecting to payment...");
        // Redirect to Stripe checkout
        window.location.href = result.redirectUrl;
      } else {
        toast.error("Failed to create payment session. Please try again.");
      }
      
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to submit registration. Please try again.");
      console.error(error);
    }
  };

  return (
    <section id="register" className="py-16 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="mx-auto max-w-4xl">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Islamic Studies Program Registration</CardTitle>
              <CardDescription>
                Fill out this form to enroll your child in our Islamic Studies program. 
                Our team will review your application and contact you within 24 hours.
                <br />
                <br />
                <p>Program Starting: <strong>Sunday 5th October 2025</strong></p>
                <p>Duration: <strong>One Year</strong></p>
                <p>Timings: <strong>Every Sunday - 12:00pm - 1:30pm</strong></p>
                <p>Classes take place: <strong>Online (Zoom)</strong></p>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <h1 className="text-lg font-semibold mb-4">Children Information</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="childFullName">Child's Full Name *</Label>
                    <Input
                      id="childFullName"
                      name="childFullName"
                      placeholder="Enter child's full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Whatsapp Number of Parent/Guardian (Please Include Country Calling Code)
*</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="childrenAge">Child's Age *</Label>
                    <Input
                      id="childrenAge"
                      name="childrenAge"
                      type="number"
                      min="0"
                      max="18"
                      placeholder="Enter child's age"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="parentFullName">Parent's Full Name *</Label>
                    <Input
                      id="parentFullName"
                      name="parentFullName"
                      placeholder="Enter parent's full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="parentRelation">Parent's Relation *</Label>
                    <Input
                      id="parentRelation"
                      name="parentRelation"
                      placeholder="Enter parent's relation (e.g., Mother, Father)"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">Country *</Label>
                    <Input
                      id="country"
                      name="country"
                      placeholder="Enter your country"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address *</Label>
                  <Textarea
                    id="address"
                    name="address"
                    placeholder="Enter your full address"
                    rows={3}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="noteBookPosted">Would you like the class notebook posted to you?</Label>
                    <Select name="noteBookPosted" defaultValue="false">
                      <SelectTrigger>
                        <SelectValue placeholder="Select your preference" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="true">Yes</SelectItem>
                        <SelectItem value="false">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="childrens">Number of Children *</Label>
                    <Select
                      name="childrens"
                      value={selectedChildren.toString()}
                      onValueChange={(value) => handleChildrenChange(parseInt(value))}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select number of children" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} Child{num > 1 ? 'ren' : ''}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Pricing Information */}
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Pricing Information</h3>
                  <div className="space-y-2 text-sm">
                    <p>• 1 Child: £25 per month</p>
                    <p>• 2+ Children: £20 per child/month (discount applied)</p>
                    <div className="mt-3 p-3 bg-background rounded border">
                      <p className="font-semibold">
                        Total for {selectedChildren} child{selectedChildren > 1 ? 'ren' : ''}: £{totalPrice}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hidden inputs for form submission */}
                <input type="hidden" name="fee" value={totalPrice} />

                <Button type="submit" className="w-full" size="lg">
                  Submit Registration & Pay £{totalPrice}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}