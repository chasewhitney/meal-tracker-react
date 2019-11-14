// Custom built tabs component dropdown

import React, { Component } from "react";
import { connect } from "react-redux";
import * as S from "./Dropdown.jsx.js";
import * as actions from "../../actions";

import CommonContent from "../CommonContent/CommonContent.js";
import BrandedContent from "../BrandedContent/BrandedContent.js";

class Dropdown extends Component {
  state = {
    previousTab: 0,
    currentTab: 1,
    currentTabHeight: 0,
    currentTabWidth: 0,
    tabSwitchReady: true
  };

  divHeights = [];
  divWidth;

  thereIsContentToRender = () => {
    if (this.props.content.all) {
      return (
        this.props.content.branded.length !== 0 ||
        this.props.content.common.length !== 0
      );
    } else {
      return null;
    }
  };

  componentDidUpdate() {
    // console.log('updated Dropdown, currentTab:', this.state.currentTab);
    // console.log('this.divHeights', this.divHeights);
    if (this.thereIsContentToRender()) {
      if (
        this.state.currentTabHeight !==
        this.divHeights[this.state.currentTab].clientHeight
      ) {
        this.setState({
          currentTabHeight: this.divHeights[this.state.currentTab].clientHeight,
          currentTabWidth: this.divWidth.clientWidth
        });
      }
    }
  }

  handleTabChange = tab => {
    if (this.state.tabSwitchReady && this.state.currentTab !== tab) {
      this.tabSwitchReady = !this.tabSwitchReady;
      setTimeout(() => this.setState({ tabSwitchReady: true }), 380);
      this.setState(prevState => ({
        currentTab: tab,
        previousTab: prevState.currentTab,
        tabSwitchReady: false
      }));
    }
  };

  // S.ContentContainer ref={divElement => (this.divHeights[1] = divElement)}
  // Saves the height of each dropdown tab's content so that the ContentContainer
  // can have a dynamic height
  render() {
    // console.log('render dd:', this.props.content);
    if (!this.thereIsContentToRender()) {
      return null;
    }
    return (
      <S.Tabs focused={this.state}>
        <S.LabelContainer ref={divElement => (this.divWidth = divElement)}>
          <S.Label onClick={e => this.handleTabChange(1)} className="label-1">
            All
          </S.Label>
          <S.Label onClick={e => this.handleTabChange(2)} className="label-2">
            Branded
          </S.Label>
          <S.Label onClick={e => this.handleTabChange(3)} className="label-3">
            Common
          </S.Label>
        </S.LabelContainer>
        <S.FocusBar
          width={this.state.currentTabWidth}
          tab={this.state.currentTab}
          className={
            this.state.currentTab > this.state.previousTab ? "right" : "left"
          }
        />
        <S.ContentContainer
          size={this.state.currentTabHeight}
          currentTab={this.state.currentTab}
          previousTab={this.state.previousTab}
        >
          <S.TabContent
            className="content-1"
            ref={divElement => (this.divHeights[1] = divElement)}
          >
            <CommonContent
              foodList={this.props.content.all.common}
              onClick={this.props.handleAddMealClick}
            />
            <BrandedContent
              foodList={this.props.content.all.branded}
              onClick={this.props.handleAddMealClick}
            />
          </S.TabContent>
          <S.TabContent
            className="content-2"
            ref={divElement => (this.divHeights[2] = divElement)}
          >
            <BrandedContent
              foodList={this.props.content.branded}
              onClick={this.props.handleAddMealClick}
            />
          </S.TabContent>
          <S.TabContent
            className="content-3"
            ref={divElement => (this.divHeights[3] = divElement)}
          >
            <CommonContent
              foodList={this.props.content.common}
              onClick={this.props.handleAddMealClick}
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
