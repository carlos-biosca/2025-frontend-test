const verifyCode = async (email, code) => {
  try {
    const apiUrl = import.meta.env.VITE_API_URL;
    const res = await fetch(`${apiUrl}/api/validate-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, code })
    });
    const data = await res.json();
    return data
  } catch (error) {
    console.log(error);
  }
};

export default verifyCode