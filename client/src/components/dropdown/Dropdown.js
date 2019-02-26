// Custom built tabs component dropdown

import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as actions from '../../actions';

// import AllTab from './AllTab';
import CommonContent from './CommonContent';
import BrandedContent from './BrandedContent';

const Tabs = styled.div`
  position: absolute;
  top: 3rem;
  left: 0;
  overflow: hidden;
  color: red;
  width: 100%;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);

  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: black;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 300;
  padding: 2rem 0;
  width: 50%;
  background-color: white;
  text-align: center;

  &:hover{
    background-color:grey;
  }
`;

const TabContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  margin-left: -100%;

  transition: margin-left .375s ease-in-out;
`;

const LabelContainer = styled.div`
  display: flex;
  width: 100%;
`;

const ContentContainer = styled.div.attrs()`
  position: relative;
  width: 100%;
  overflow: hidden;
  height: ${props => props.size}px;

  transition: height .375s ease-in-out;


    & .content-${props => props.ctab} {
      opacity: 1;
      margin-left: 0;

      & ~ div {
        margin-left: 100%;
      }
    }

    & .content-${props => props.ptab} {
      opacity: 1;
    }
`;

const FocusBar = styled.div.attrs(({width, tab}) => ({

  left: (tab - 1) * width / 3,
  right: width - (tab * width / 3)

}))`
  position: relative;
  height: 2px;
  width: 100%;
  background-color:white;

  &.left {
  -webkit-transition: left .125s cubic-bezier(.35, 0, .25, 1), right .25s cubic-bezier(.35, 0, .25, 1);
  transition: left .125s cubic-bezier(.35, 0, .25, 1), right .25s cubic-bezier(.35, 0, .25, 1)
  }

  &.right {
      -webkit-transition: left .25s cubic-bezier(.35, 0, .25, 1), right .125s cubic-bezier(.35, 0, .25, 1);
      transition: left .25s cubic-bezier(.35, 0, .25, 1), right .125s cubic-bezier(.35, 0, .25, 1)
  }


  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.left}px;
    right: ${props => props.right}px;
    background-color: red;
    transition: inherit;
  }
`;


class Dropdown extends Component {
  state = { prevTab: 0, tab: 1, size: 0, width: 0, tabSwitchReady: true};
  divHeights = [];
  divWidths = [];

  componentDidUpdate() {
    // console.log('updated Dropdown, tab:', this.state.tab);
    // console.log('this.divHeights', this.divHeights);
    if(this.props.content.all){
      if(this.state.size !== this.divHeights[this.state.tab].clientHeight){
        this.setState({size: this.divHeights[this.state.tab].clientHeight});
      }
    }
  }

  handleChange = (tab) => {
    if(this.state.tabSwitchReady && this.state.tab !== tab) {
      this.tabSwitchReady = !this.tabSwitchReady;
      setTimeout(() => this.setState({tabSwitchReady: true}), 380);
      this.setState(prevState => ({ tab: tab, prevTab: prevState.tab, tabSwitchReady: false}));
    }
  }

  render(){
    console.log('render dd:', this.props.content);
    if(!this.props.content.all) { return null;}
    return (
          <Tabs focused={this.state}>
            <LabelContainer ref={divElement => this.divWidths[0] = divElement}>
              <Label onClick={(e) => this.handleChange(1)} className="label-1">All</Label>
              <Label onClick={(e) => this.handleChange(2)} className="label-2">Branded</Label>
              <Label onClick={(e) => this.handleChange(3)} className="label-3">Common</Label>
            </LabelContainer>
            <FocusBar width={this.state.width} tab={this.state.tab}
              className={this.state.tab > this.state.prevTab ? "right" : "left"}/>
            <ContentContainer size={this.state.size} ctab={this.state.tab} ptab={this.state.prevTab}>
              <TabContent className="content-1" ref={divElement => this.divHeights[1] = divElement}>
                <CommonContent foodList={this.props.content.all.common} onClick={this.props.handleClick} />
                <BrandedContent foodList={this.props.content.all.branded} onClick={this.props.handleClick} />
              </TabContent>
              <TabContent className="content-2" ref={divElement => this.divHeights[2] = divElement}>
                <BrandedContent foodList={this.props.content.branded} onClick={this.props.handleClick} />
              </TabContent>
              <TabContent className="content-3" ref={divElement => this.divHeights[3] = divElement}>
                <CommonContent foodList={this.props.content.common} onClick={this.props.handleClick}/>
              </TabContent>
            </ContentContainer>
          </Tabs>
    )
  }

}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps, actions)(Dropdown);
