import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const ApplicationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    program: "",
    areaOfInterest: "",
    resume: "",
    note: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.program) {
      newErrors.program = "Program selection is required";
    }
    if (!formData.areaOfInterest) {
      newErrors.areaOfInterest = "Area of interest is required";
    }
    if (!formData.resume.trim()) {
      newErrors.resume = "Resume Drive link is required";
    } else {
      // Validate that it's a valid URL (Google Drive link)
      try {
        const url = new URL(formData.resume.trim());
        if (!url.hostname.includes("drive.google.com") && !url.hostname.includes("docs.google.com")) {
          newErrors.resume = "Please provide a valid Google Drive link";
        }
      } catch {
        newErrors.resume = "Please provide a valid URL";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        const formDataToSend = new FormData(e.currentTarget);
        formDataToSend.append("access_key", "fbeb9389-1714-4e76-9e9c-418823ffbf77");
        
        // Create a formatted message with all application details including resume link
        const message = `
New Application Submission

Name: ${formData.name}
Email: ${formData.email}
Program: ${formData.program === "internship" ? "Internship Program" : "Graduate Program"}
Area of Interest: ${formData.areaOfInterest}
Resume Drive Link: ${formData.resume}
Optional Note: ${formData.note || "N/A"}
        `.trim();
        
        formDataToSend.append("message", message);
        formDataToSend.append("subject", `New Application: ${formData.name} - ${formData.program === "internship" ? "Internship" : "Graduate"} Program`);

        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formDataToSend,
        });

        const data = await response.json();
        
        if (data.success) {
          setShowSuccessDialog(true);
          // Reset form after successful submission
          setFormData({
            name: "",
            email: "",
            program: "",
            areaOfInterest: "",
            resume: "",
            note: "",
          });
          setErrors({});
          // Reset the form element
          e.currentTarget.reset();
        } else {
          setSubmitError("Failed to submit application. Please try again.");
        }
      } catch (error) {
        if (import.meta.env.DEV) {
          console.error("Error submitting application:", error);
        }
        setSubmitError("Something went wrong. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="section-padding" style={{ paddingTop: "120px" }}>
        <div className="container-custom max-w-3xl mx-auto">
          <div className="mb-8">
            <h1
              style={{
                color: "#FAFAFA",
                fontFamily: '"Spline Sans", sans-serif',
                fontSize: "40px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "normal",
                marginBottom: "16px",
              }}
            >
              Application Form
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name */}
            <div>
              <Label
                htmlFor="name"
                style={{
                  color: "#FAFAFA",
                  fontFamily: '"Public Sans", sans-serif',
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                  marginBottom: "12px",
                  display: "block",
                }}
              >
                Name (Required)
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Enter your full name"
                className={errors.name ? "border-destructive" : ""}
              />
              {errors.name && (
                <p 
                  className="text-destructive mt-2"
                  style={{
                    fontFamily: '"Public Sans", sans-serif',
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                  }}
                >
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <Label
                htmlFor="email"
                style={{
                  color: "#FAFAFA",
                  fontFamily: '"Public Sans", sans-serif',
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                  marginBottom: "12px",
                  display: "block",
                }}
              >
                Email (Required)
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="Enter your email address"
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && (
                <p 
                  className="text-destructive mt-2"
                  style={{
                    fontFamily: '"Public Sans", sans-serif',
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                  }}
                >
                  {errors.email}
                </p>
              )}
            </div>

            {/* Program Selection */}
            <div>
              <Label
                style={{
                  color: "#FAFAFA",
                  fontFamily: '"Public Sans", sans-serif',
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                  marginBottom: "12px",
                  display: "block",
                }}
              >
                Program Selection (Required)
              </Label>
              <input type="hidden" name="program" value={formData.program} />
              <Select
                value={formData.program}
                onValueChange={(value) => handleInputChange("program", value)}
              >
                <SelectTrigger className={errors.program ? "border-destructive" : ""}>
                  <SelectValue placeholder="Select a program" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="internship">Internship Program</SelectItem>
                  <SelectItem value="graduate">Graduate Program</SelectItem>
                </SelectContent>
              </Select>
              {errors.program && (
                <p 
                  className="text-destructive mt-2"
                  style={{
                    fontFamily: '"Public Sans", sans-serif',
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                  }}
                >
                  {errors.program}
                </p>
              )}
            </div>

            {/* Area of Interest */}
            <div>
              <Label
                style={{
                  color: "#FAFAFA",
                  fontFamily: '"Public Sans", sans-serif',
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                  marginBottom: "12px",
                  display: "block",
                }}
              >
                Area of Interest (Required – Single Select)
              </Label>
              <input type="hidden" name="areaOfInterest" value={formData.areaOfInterest} />
              <Select
                value={formData.areaOfInterest}
                onValueChange={(value) => handleInputChange("areaOfInterest", value)}
              >
                <SelectTrigger className={errors.areaOfInterest ? "border-destructive" : ""}>
                  <SelectValue placeholder="Select an area" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="react">React</SelectItem>
                  <SelectItem value="ui-ux">UI / UX</SelectItem>
                  <SelectItem value="backend">Backend</SelectItem>
                  <SelectItem value="ai-ml">AI / ML</SelectItem>
                  <SelectItem value="data-science">Data Science</SelectItem>
                  <SelectItem value="devops-cloud">DevOps & Cloud</SelectItem>
                </SelectContent>
              </Select>
              {errors.areaOfInterest && (
                <p 
                  className="text-destructive mt-2"
                  style={{
                    fontFamily: '"Public Sans", sans-serif',
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                  }}
                >
                  {errors.areaOfInterest}
                </p>
              )}
            </div>

            {/* Resume Drive Link */}
            <div>
              <Label
                htmlFor="resume"
                style={{
                  color: "#FAFAFA",
                  fontFamily: '"Public Sans", sans-serif',
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                  marginBottom: "12px",
                  display: "block",
                }}
              >
                Resume Drive Link (Required)
              </Label>
              <Input
                id="resume"
                name="resume"
                type="url"
                autoComplete="off"
                value={formData.resume}
                onChange={(e) => handleInputChange("resume", e.target.value)}
                placeholder="Paste your Google Drive resume link here"
                className={errors.resume ? "border-destructive" : ""}
              />
              <p
                style={{
                  color: "#FAFAFA",
                  fontFamily: '"Public Sans", sans-serif',
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                  marginTop: "8px",
                  opacity: 0.8,
                }}
              >
                Please share your resume via Google Drive and paste the shareable link here
              </p>
              {errors.resume && (
                <p 
                  className="text-destructive mt-2"
                  style={{
                    fontFamily: '"Public Sans", sans-serif',
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                  }}
                >
                  {errors.resume}
                </p>
              )}
            </div>

            {/* Optional Note */}
            <div>
              <Label
                htmlFor="note"
                style={{
                  color: "#FAFAFA",
                  fontFamily: '"Public Sans", sans-serif',
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                  marginBottom: "12px",
                  display: "block",
                }}
              >
                Optional Note (Optional)
              </Label>
              <Textarea
                id="note"
                name="note"
                autoComplete="off"
                value={formData.note}
                onChange={(e) => handleInputChange("note", e.target.value)}
                placeholder='Examples: "Final year student, available immediately" / "Strong in Python, learning React" / "Looking for long-term opportunity"'
                rows={3}
                maxLength={200}
              />
              <p
                style={{
                  color: "#FAFAFA",
                  fontFamily: '"Public Sans", sans-serif',
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                  marginTop: "8px",
                }}
              >
                {formData.note.length}/200 characters
              </p>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              {submitError && (
                <p 
                  className="text-destructive mb-4"
                  style={{
                    fontFamily: '"Public Sans", sans-serif',
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                  }}
                >
                  {submitError}
                </p>
              )}
              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full sm:w-auto"
                disabled={isSubmitting}
                style={{
                  minWidth: "200px",
                }}
              >
                {isSubmitting ? "Submitting..." : "Apply"}
              </Button>
            </div>
          </form>
        </div>
      </main>
      <Footer />

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
            <DialogTitle
              style={{
                color: "#FAFAFA",
                fontFamily: '"Spline Sans", sans-serif',
                fontSize: "32px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "normal",
                textAlign: "center",
              }}
            >
              Application Submitted!
            </DialogTitle>
            <DialogDescription
              style={{
                color: "#FAFAFA",
                fontFamily: '"Public Sans", sans-serif',
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
                textAlign: "center",
                marginTop: "16px",
              }}
            >
              We will review your application and get back to you soon.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center mt-6">
            <Button
              onClick={() => {
                setShowSuccessDialog(false);
                navigate("/");
              }}
              variant="hero"
            >
              Back to Home
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ApplicationForm;
