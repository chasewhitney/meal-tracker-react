// Custom built tabs component dropdown

import React, { Component } from "react";
import { connect } from "react-redux";
import * as S from "./Dropdown.jsx.js";
import * as actions from "../../actions";

import CommonContent from "../CommonContent/CommonContent.js";
import BrandedContent from "../BrandedContent/BrandedContent.js";

class Dropdown extends Component {
  state = { prevTab: 0, tab: 1, size: 0, width: 0, tabSwitchReady: true };
  divHeights = [];
  divWidths = [];

  componentDidUpdate() {
    // console.log('updated Dropdown, tab:', this.state.tab);
    // console.log('this.divHeights', this.divHeights);
    if (this.props.content.all) {
      if (this.state.size !== this.divHeights[this.state.tab].clientHeight) {
        this.setState({
          size: this.divHeights[this.state.tab].clientHeight,
          width: this.divWidths[0].clientWidth
        });
      }
    }
  }

  handleChange = tab => {
    if (this.state.tabSwitchReady && this.state.tab !== tab) {
      this.tabSwitchReady = !this.tabSwitchReady;
      setTimeout(() => this.setState({ tabSwitchReady: true }), 380);
      this.setState(prevState => ({
        tab: tab,
        prevTab: prevState.tab,
        tabSwitchReady: false
      }));
    }
  };

  render() {
    // console.log('render dd:', this.props.content);
    if (!this.props.content.all) {
      return null;
    }
    return (
      <S.Tabs focused={this.state}>
        <S.LabelContainer ref={divElement => (this.divWidths[0] = divElement)}>
          <S.Label onClick={e => this.handleChange(1)} className="label-1">
            All
          </S.Label>
          <S.Label onClick={e => this.handleChange(2)} className="label-2">
            Branded
          </S.Label>
          <S.Label onClick={e => this.handleChange(3)} className="label-3">
            Common
          </S.Label>
        </S.LabelContainer>
        <S.FocusBar
          width={this.state.width}
          tab={this.state.tab}
          className={this.state.tab > this.state.prevTab ? "right" : "left"}
        />
        <S.ContentContainer
          size={this.state.size}
          ctab={this.state.tab}
          ptab={this.state.prevTab}
        >
          <S.TabContent
            className="content-1"
            ref={divElement => (this.divHeights[1] = divElement)}
          >
            <CommonContent
              foodList={this.props.content.all.common}
              onClick={this.props.handleDropdownClick}
            />
            <BrandedContent
              foodList={this.props.content.all.branded}
              onClick={this.props.handleDropdownClick}
            />
          </S.TabContent>
          <S.TabContent
            className="content-2"
            ref={divElement => (this.divHeights[2] = divElement)}
          >
            <BrandedContent
              foodList={this.props.content.branded}
              onClick={this.props.handleDropdownClick}
            />
          </S.TabContent>
          <S.TabContent
            className="content-3"
            ref={divElement => (this.divHeights[3] = divElement)}
          >
            <CommonContent
              foodList={this.props.content.common}
              onClick={this.props.handleDropdownClick}
            />
          </S.TabContent>
        </S.ContentContainer>
      </S.Tabs>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  actions
)(Dropdown);
