const startTrial = async (user_id) => {
  console.log("starttrial");
  try {
    const res = await fetch("/api/start-trial", {
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