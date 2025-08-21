import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FormField } from "@/components/ui/form-field";
import { useToast } from "@/hooks/use-toast";

const grades = [
  "4th Grade", "5th Grade", "6th Grade", "7th Grade", "8th Grade"
];

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    grade: "",
    board: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitted(true);
    setFormData({ name: "", phone: "", grade: "", board: "" });
    setIsSubmitting(false);
  };

  const updateField = (field: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isFormValid = formData.name && formData.phone && formData.grade && formData.board;

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-md mx-auto shadow-soft bg-gradient-card">
        <CardContent className="text-center py-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary text-white flex items-center justify-center">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-primary mb-2">Thank you!</h3>
          <p className="text-muted-foreground">We'll connect with you soon.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto shadow-soft bg-gradient-card">
      <CardContent className="py-6">
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
            label="Parent's Phone Number"
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
            label="Board"
            name="board"
            placeholder="Enter board (e.g., CBSE, ICSE, State Board)"
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
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};