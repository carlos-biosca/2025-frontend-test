const getProducts = async () => {
  console.log("getproducts");
  try {
    const res = await fetch('/api/products', {
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

export default getProducts