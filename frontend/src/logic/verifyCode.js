const verifyCode = async (event, email, code) => {
  console.log("validateemail");
  event.preventDefault();
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