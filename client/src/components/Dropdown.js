import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  background: #191828;
  color: #efedef;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.6em;
  margin: 0;
  padding: 100px;
  margin-left: auto;
  margin-right: auto;

  button:focus,
  input:focus,
  textarea:focus,
  select:focus {
    outline: none; }
`;

const Tabs = styled.div`
  margin: 0;
  margin-left: auto;
  margin-right: auto;
  width: 30vw;
  overflow: hidden;
  text-align: center;

  display:grid;
  grid-template-columns: repeat(3,1fr);
  justify-items: center;

  &, * {
    border-sizing: border-box;
  }

  & [class^="tab__label"], & [type="radio"] {
    grid-row: 1 / 2;
  }

  & .tab__label-1, & #tab-1 {
    grid-column: 1 / 2;
  }

  & .tab__label-2, & #tab-2{
    grid-column: 2 / 3 !important;
  }

  & .tab__label-3, & #tab-3 {
    grid-column: 3 / 4;
  }

  & [class^="tab__content"] {
    grid-row: 2 / 3;
    grid-column: 1 / -1;
  }

  & [class^="tab__content"]:nth-of-type(${props => props.focused.tab}) {
    margin-left: 0%;
    opacity: 1;

    & ~ [class^="tab__content"] {
      margin-left: 200%;
    }
  }

  & [class^="tab__content"]:nth-of-type(${props => props.focused.prevTab}) {
    opacity: 1;
  }

`;

const Label = styled.label`
  color: #fff;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 300;
  padding: 2rem 0;
  width: 100%;

  &:hover, &:focus {
    font-size: 1.4rem;
  }
`;

const Radio = styled.input`
  border-bottom: 1px solid rgba(239, 237, 239, 0.5);
  cursor: pointer;
  appearance: none;
  width: 100%;
  transition: all 0.3s ease-in-out;

  &:checked {
    border-bottom: 2px solid #fd264f;
  }
`;

const TabContent = styled.div`
  margin-left: -200%;
  display: block;
  opacity: 0;
  padding: 2rem 0;
  width: 90%;
  transition: margin-left 0.4s ease-in-out;
  background-color: green;

  &.tab__content-2 {background-color:red;}
`;


class Dropdown extends Component {
  state = { prevTab: 0, tab: 1 };

  handleChange = (e) => {
    e.persist();
    this.setState(prevState => ({ tab: e.target.value, prevTab: prevState.tab}));
  }

  render(){
    return (
        <Container>
          <Tabs focused={this.state}>

              <Label className="tab__label-1" htmlFor="tab-1">One</Label>
              <Radio onChange={this.handleChange} id="tab-1" name="tabs" value="1" type="radio" defaultChecked />
              <TabContent className="tab__content-1">
                <p>CONTENT ONE</p>
              </TabContent>

              <Label className="tab__label-2" htmlFor="tab-2">Two</Label>
              <Radio onChange={this.handleChange} id="tab-2" name="tabs" value="2" type="radio" />
              <TabContent className="tab__content-2">
                <p>CONTENT TWO</p>
              </TabContent>

              <Label className="tab__label-3" htmlFor="tab-3">Three</Label>
              <Radio onChange={this.handleChange} id="tab-3" name="tabs" value="3" type="radio" />
              <TabContent className="tab__content-3">
                <p>CONTENT THREE</p>
              </TabContent>

          </Tabs>
        </Container>
    )
  }

}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps)(Dropdown);
