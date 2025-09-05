import { contactFormSchema } from '@/lib/contact-form-schema';

describe('Contact Form Validation', () => {
  it('validates a correct form submission', () => {
    const validData = {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1234567890',
      company: 'Test Company',
      serviceType: 'video-production' as const,
      budget: '5k-15k' as const,
      timeline: '2-3-months' as const,
      message: 'This is a test message that is long enough to pass validation.',
      newsletter: false,
      privacy: true,
    };

    const result = contactFormSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('rejects form with missing required fields', () => {
    const invalidData = {
      name: 'John',
      email: 'invalid-email',
      message: 'Short',
      privacy: false,
    };

    const result = contactFormSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
    
    if (!result.success) {
      const errors = result.error.issues.map(issue => issue.path[0]);
      expect(errors).toContain('email');
      expect(errors).toContain('serviceType');
      expect(errors).toContain('budget');
      expect(errors).toContain('timeline');
      expect(errors).toContain('message');
      expect(errors).toContain('privacy');
    }
  });

  it('validates email format', () => {
    const invalidEmailData = {
      name: 'John Doe',
      email: 'not-an-email',
      serviceType: 'video-production' as const,
      budget: '5k-15k' as const,
      timeline: '2-3-months' as const,
      message: 'This is a valid message length for testing purposes.',
      privacy: true,
    };

    const result = contactFormSchema.safeParse(invalidEmailData);
    expect(result.success).toBe(false);
  });

  it('validates message length', () => {
    const shortMessageData = {
      name: 'John Doe',
      email: 'john@example.com',
      serviceType: 'video-production' as const,
      budget: '5k-15k' as const,
      timeline: '2-3-months' as const,
      message: 'Short',
      privacy: true,
    };

    const result = contactFormSchema.safeParse(shortMessageData);
    expect(result.success).toBe(false);
  });
});