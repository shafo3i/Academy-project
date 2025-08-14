"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { toast } from "sonner";



export function RegistrationForm() {


  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    country: "",
    islamicBackground: "",
    goals: "",
    preferredStartDate: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Simulate form submission
    toast.success("Registration submitted successfully! We'll contact you soon.");

    // Here you would typically send the form data to your backend or API
    // For example:

    // const urlPay = "https://sandbox-api.polar.sh/v1/checkout-links/polar_cl_DUxQOp1kYLYMm8MF0J22oatSM2gWQYfxkYMxV1lYMRN/redirect";

    // window.location.href = urlPay;


    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      age: "",
      gender: "",
      country: "",
      islamicBackground: "",
      goals: "",
      preferredStartDate: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="register" className="py-16 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="mx-auto max-w-2xl">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Register for Islamic Studies</CardTitle>
              <CardDescription>
                Fill out this form to begin your journey in Islamic knowledge. 
                Our team will review your application and contact you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      placeholder="Enter your first name"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      placeholder="Enter your last name"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      placeholder="+44 7xxx xxx xxx"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="age">Age</Label>
                    <Input
                      id="age"
                      type="number"
                      min="16"
                      max="100"
                      placeholder="Your age"
                      value={formData.age}
                      onChange={(e) => handleInputChange("age", e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender</Label>
                    <Select value={formData.gender} onValueChange={(value) => handleInputChange("gender", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Input
                      id="country"
                      placeholder="Your country"
                      value={formData.country}
                      onChange={(e) => handleInputChange("country", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="islamicBackground">Islamic Educational Background</Label>
                  <Select value={formData.islamicBackground} onValueChange={(value) => handleInputChange("islamicBackground", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your Islamic education level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner - New to Islamic studies</SelectItem>
                      <SelectItem value="basic">Basic - Some mosque/community learning</SelectItem>
                      <SelectItem value="intermediate">Intermediate - Formal Islamic education</SelectItem>
                      <SelectItem value="advanced">Advanced - Extensive Islamic studies</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="preferredStartDate">Preferred Start Date</Label>
                  <Input
                    id="preferredStartDate"
                    type="date"
                    value={formData.preferredStartDate}
                    onChange={(e) => handleInputChange("preferredStartDate", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="goals">Learning Goals (Optional)</Label>
                  <Textarea
                    id="goals"
                    placeholder="Tell us about your goals and what you hope to achieve through these courses..."
                    value={formData.goals}
                    onChange={(e) => handleInputChange("goals", e.target.value)}
                    rows={4}
                  />
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Investment:</strong> £30 one-time payment provides lifetime access to all courses. 
                    Payment details will be shared after your application is approved.
                  </p>
                </div>

                <Button type="submit" className="w-full" size="lg">
                    Submit Registration
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}