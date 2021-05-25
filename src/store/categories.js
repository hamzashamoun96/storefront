const initialState = {
    categories : [
        {
        name: "phones",
        displayName: "PHONES",
        description: "Our Fancy New Phones",
      },
      {
        name: "shirts",
        displayName: "SHIRTS",
        description: "Our Fancy New Shirts",
      }
    ],
    activeCategory: null,
};

const Category = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case "phones":
      return {...state, activeCategory: "phones" };
    case "shirts":
      return {...state, activeCategory: "shirts" };
    default:
      return state;
  }
};

export default Category;