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
    const products = {
      monthly: {
        price: {
          us: data.monthly.price,
          eu: (data.monthly.price * 0.84).toFixed(2).toString()
        },
        trial_days: data.monthly.trial_days
      },
      year: {
        price: {
          us: data.year.price,
          eu: (data.year.price * 0.84).toFixed(2).toString()
        },
        trial_days: data.year.trial_days
      }
    };
    return products
  } catch (error) {
    console.log(error);
  }
};

export default getProducts