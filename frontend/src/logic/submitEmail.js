const submitEmail = async (email) => {
  try {
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email })
    });
    const data = await res.json();
    return data
  } catch (error) {
    console.log(error);
  }
};

export default submitEmail