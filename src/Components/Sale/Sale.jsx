import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import SaleItem from './SaleItem/saleItem';
import classes from './saleStyle.module.scss';


class Sale extends Component {
  renderSale = () => {
    return this.props.card.map((item, i) => {
      if (item.luotXem === 0) {
        return (
          <div className="mx-3 " key={i}>
            <SaleItem item={item} />
          </div>
        )
      }
    })
  }

  render() {

    console.log("sale", this.props.card);
    return (
      <div  className={classes.testt}>
      <div className="row">
        {this.renderSale()}
        </div>
      </div>


    );
  }
}

const mapStateToProps = state => ({ card: state.courseList });
export default connect(mapStateToProps)(Sale);
