const startTrial = async (user_id) => {
  try {
    const apiUrl = import.meta.env.VITE_API_URL;
    const res = await fetch(`${apiUrl}/api/start-trial`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user_id })
    });
    const data = await res.json();
    return data
  } catch (error) {
    console.log(error);
  }
};

export default startTrial