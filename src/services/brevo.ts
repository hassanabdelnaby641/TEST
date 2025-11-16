import { NewsletterSubscription } from '../types/newsletter';

const BREVO_API_KEY = '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';
const BREVO_LIST_ID = 6;

export async function subscribeToNewsletter(email: string): Promise<boolean> {
  try {
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        email,
        listIds: [BREVO_LIST_ID],
        updateEnabled: true,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Brevo API error:', error);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return false;
  }
}