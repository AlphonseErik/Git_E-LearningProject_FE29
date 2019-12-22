import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import SaleItem from './SaleItem/SaleItem';

class Sale extends Component {
  renderSale = () => {
    return this.props.card.map((item, i) => {
      if (item.luotXem === 0) {
        return (
          <div className="col-3" key={i}>
            <SaleItem item={item} />
          </div>
        )
      }
    })
  }

  render() {

    console.log("sale", this.props.card);
    return (

      <div className="row">
        {this.renderSale()}

      </div>


    );
  }
}

const mapStateToProps = state => ({ card: state.courseList });
export default connect(mapStateToProps)(Sale);
