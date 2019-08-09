import React from "react";
import axios from "axios";

class UserData extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  fetchData = async () => {
    await axios
      .get("http://localhost:5000/api/restricted/data")
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.log(err.response));
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return this.state.data.map(food => {
      return (
        <>
          <div key={food.name}>
            <p>
              Food Name: {food.name} | Course: {food.course} | Technnique:{" "}
              {food.technique}
            </p>
            <p>Food Ingredients:</p>
            <p>
              {food.ingredients.map(ingredient => {
                return <li key={ingredient}>{ingredient}</li>;
              })}
            </p>
          </div>
        </>
      );
    });
  }
}

export default UserData;
