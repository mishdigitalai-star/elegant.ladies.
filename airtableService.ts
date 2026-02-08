interface MemberData {
  name: string;
  email: string;
  phone: string;
  vettingStatus: 'Yes' | 'No';
  vettingDate: string;
  vettingTime: string;
  vettingCouncilMembers: string;
  expectationsAccepted: boolean;
  agreementSignedName: string;
  agreementSignedDate: string;
}

export async function submitMemberToAirtable(data: MemberData): Promise<boolean> {
  const airtableToken = import.meta.env.VITE_AIRTABLE_TOKEN;
  const baseId = import.meta.env.VITE_AIRTABLE_BASE_ID;

  if (!airtableToken || !baseId) {
    console.error('Airtable credentials not configured');
    return false;
  }

  const url = `https://api.airtable.com/v0/${baseId}/Members`;

  const joinDate = new Date().toISOString().split('T')[0];

  const payload = {
    fields: {
      'Name': data.name,
      'Email': data.email,
      'Phone': data.phone,
      'Join Date': joinDate,
      'Vetting Status': data.vettingStatus,
      'Vetting Date': data.vettingDate,
      'Vetting Time': data.vettingTime,
      'Vetting Council Members': data.vettingCouncilMembers,
      'Expectations Accepted': data.expectationsAccepted,
      'Agreement Signed Name': data.agreementSignedName,
      'Agreement Signed Date': data.agreementSignedDate,
    },
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${airtableToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Airtable API error:', errorData);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error submitting to Airtable:', error);
    return false;
  }
}
