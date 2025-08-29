const submitEmail = async (email) => {
  try {
    const apiUrl = import.meta.env.VITE_API_URL;
    const res = await fetch(`${apiUrl}/api/send-email?email=${email}`, {
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