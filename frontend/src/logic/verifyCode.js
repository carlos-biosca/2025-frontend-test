const verifyCode = async (email, code) => {
  try {
    const res = await fetch("/api/validate-email", {
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