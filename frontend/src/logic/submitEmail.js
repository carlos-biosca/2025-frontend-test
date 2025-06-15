const submitEmail = async (event, email) => {
  console.log("getmail");
  event.preventDefault();
  try {
    const res = await fetch(`/api/send-email?email=${email}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
    return data
  } catch (error) {
    console.log(error);
  }
};

export default submitEmail