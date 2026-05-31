export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function submitContactForm(data: ContactFormData): Promise<{ success: boolean; message: string }> {
  await delay(1500);
  console.log("Contact form submitted:", data);
  return {
    success: true,
    message: "Thank you for your message. Our team will get back to you within 24 hours.",
  };
}
