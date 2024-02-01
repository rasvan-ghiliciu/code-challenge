const API_BASE_URL = 'http://127.0.0.1:3010';

export const submitName = async (name) => {
  try {
    const response = await fetch(`${API_BASE_URL}/names`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    });
    if (!response.ok) throw new Error('Network response was not ok.');
    return await response.json();
  } catch (error) {
    console.error('Error submitting name:', error);
    throw error;
  }
};

export const uploadAvatar = async (file) => {
  try {
    const formData = new FormData();
    formData.append('avatar', file);
    const response = await fetch(`${API_BASE_URL}/avatars`, {
      method: 'POST',
      body: formData,
    });
    if (!response.ok) throw new Error('Network response was not ok.');
    return await response.json();
  } catch (error) {
    console.error('Error uploading avatar:', error);
    throw error;
  }
};
