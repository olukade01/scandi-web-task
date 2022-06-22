import React, { Component, Fragment } from "react";
import ProductCard from "../../components/molecules/productCard/ProductCard";
import opusClient from "../../OPUS";
import { productToShow } from "../../data/products";
import { Title, Wrapper } from "./HomeStyle";
import { connect } from "react-redux";
import { CATEGORY_QUERY } from "../../server/queries";

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
      this.state({ category });
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
        this.state({ category });
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const productsToShow = this.state.category.product || [];
    return (
      <Fragment>
        <Title>{this.props.selectedCategory}</Title>
        <Wrapper>
          {productsToShow.map((product, index) => (
            <ProductCard key={`product-index${index}`} product={product} />
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
