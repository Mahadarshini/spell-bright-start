import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FormField } from "@/components/ui/form-field";
import { useToast } from "@/hooks/use-toast";

const grades = [
  "Pre-K", "Kindergarten", "1st Grade", "2nd Grade", "3rd Grade", 
  "4th Grade", "5th Grade", "6th Grade", "7th Grade", "8th Grade"
];

const boards = [
  "CBSE", "ICSE", "State Board", "IB", "IGCSE", "Other"
];

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    grade: "",
    board: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Thank you for your interest!",
      description: "We'll contact you soon with more information about our spelling game.",
    });

    setFormData({ name: "", phone: "", grade: "", board: "" });
    setIsSubmitting(false);
  };

  const updateField = (field: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isFormValid = formData.name && formData.phone && formData.grade && formData.board;

  return (
    <Card className="w-full max-w-md mx-auto shadow-soft bg-gradient-card">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-primary">
          Get Early Access
        </CardTitle>
        <CardDescription>
          Join our community and help your child excel in spelling!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormField
            label="Parent's Name"
            name="name"
            placeholder="Enter your full name"
            required
            value={formData.name}
            onChange={updateField("name")}
          />
          
          <FormField
            label="Phone Number"
            name="phone"
            type="tel"
            placeholder="Enter your phone number"
            required
            value={formData.phone}
            onChange={updateField("phone")}
          />
          
          <FormField
            label="Child's Grade"
            name="grade"
            type="select"
            options={grades}
            placeholder="Select grade level"
            required
            value={formData.grade}
            onChange={updateField("grade")}
          />
          
          <FormField
            label="Educational Board"
            name="board"
            type="select"
            options={boards}
            placeholder="Select board"
            required
            value={formData.board}
            onChange={updateField("board")}
          />
          
          <Button 
            type="submit" 
            variant="cta" 
            size="lg" 
            className="w-full mt-6"
            disabled={!isFormValid || isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Get Early Access"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};