
export async function POST(request) {
  try {
    const formData = await request.formData();

    formData.append('access_key', process.env.CONTACT_KEY)
    console.log(formData);
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    let result = {};
    try {
      result = await response.json();
    } catch {
      const text = await response.text();
      result = { error: 'Invalid JSON from Web3Forms', raw: text };
    }

    return Response.json(result, { status: response.status });
  } catch (err) {
    console.error('Server error:', err);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}