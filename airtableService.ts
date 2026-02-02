// Airtable Service for Elegant Ladies Member Onboarding

interface MemberData {
  name: string;
  email?: string;
  vettingStatus: 'Yes' | 'No';
  vettingDate?: string;
  vettingTime?: string;
  vettingCouncilMembers?: string;
  expectationsAccepted: boolean;
  agreementSignedName: string;
  agreementSignedDate: string;
}

export async function submitMemberToAirtable(data: MemberData): Promise<boolean> {
  const AIRTABLE_TOKEN = import.meta.env.VITE_AIRTABLE_TOKEN;
  const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
  const AIRTABLE_TABLE_NAME = 'Members';

  if (!AIRTABLE_TOKEN || !AIRTABLE_BASE_ID) {
    console.error('Airtable credentials not configured');
    return false;
  }

  const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`;

  const payload = {
    fields: {
      'Name': data.name,
      'Email': data.email || '',
      'Join Date': new Date().toISOString().split('T')[0],
      'Vetting Status': data.vettingStatus,
      'Vetting Date': data.vettingDate || '',
      'Vetting Time': data.vettingTime || '',
      'Vetting Council Members': data.vettingCouncilMembers || '',
      'Expectations Accepted': data.expectationsAccepted,
      'Agreement Signed Name': data.agreementSignedName,
      'Agreement Signed Date': data.agreementSignedDate,
    },
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${AIRTABLE_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Airtable error:', error);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Network error:', error);
    return false;
  }
}
