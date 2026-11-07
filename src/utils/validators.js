/**
 * Validation utilities for PixelForge Studio contact form
 */

export const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;

export function validateContactForm(formData) {
  const errors = {};

  // Name validation
  if (!formData.name || !formData.name.trim()) {
    errors.name = "Please enter your full name.";
  } else if (formData.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  // Email validation
  if (!formData.email || !formData.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_REGEX.test(formData.email.trim())) {
    errors.email = "Please provide a valid email address (e.g., name@example.com).";
  }

  // Service Required validation
  if (!formData.service || !formData.service.trim()) {
    errors.service = "Please select the service required.";
  }

  // Message validation
  if (!formData.message || !formData.message.trim()) {
    errors.message = "Please describe your project or requirements.";
  } else if (formData.message.trim().length < 15) {
    errors.message = "Message must be at least 15 characters so we can understand your goals.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
