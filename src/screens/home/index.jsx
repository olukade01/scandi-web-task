import React, { Component, Fragment } from "react";
import ProductCard from "../../components/molecules/productCard/ProductCard";
import opusClient from "../../server";
// import { productToShow } from "../../data/products";
import { Title, Wrapper } from "./HomeStyle";
import { connect } from "react-redux";
import { CATEGORY_QUERY } from "../../server/queries";
// import { Link } from "react-router-dom";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: {},
    };
  }

  async componentDidMount() {
    try {
      const selectedCat =
        this.props.selectedCategory === "all"
          ? ""
          : this.props.selectedCategory;
      var { category } = await opusClient.post(CATEGORY_QUERY(selectedCat));
      this.setState({ category });
    } catch (error) {
      console.log(error);
    }
  }

  async componentDidUpdate(prevProps) {
    try {
      if (prevProps.selectedCategory !== this.props.selectedCategory) {
        const selectedCat =
          this.props.selectedCategory === "all"
            ? ""
            : this.props.selectedCategory;
        var { category } = await opusClient.post(CATEGORY_QUERY(selectedCat));
        this.setState({ category });
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const productsToShow = this.state.category.products || [];
    return (
      <Fragment>
        <Title>{this.props.selectedCategory}</Title>
        <Wrapper>
          {productsToShow.map((product, index) => (
            // <Link to={`/product/${product.id}`}>
            <ProductCard
              key={`product-index${index}`}
              history={this.props.history}
              product={product}
            />
            // </Link>
          ))}
        </Wrapper>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedCategory: state.selectedCategory,
});

export default connect(mapStateToProps)(index);
