import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { drizzleConnect } from "drizzle-react";
import { ContractData, ContractForm } from "drizzle-react-components";

class App extends Component {
  render() {
    const { drizzleStatus, accounts } = this.props;
    console.log(accounts);

    if (drizzleStatus.initialized) {
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Tutorial Token</h1>
            <p>
              <strong>Total Supply</strong>:{" "}
              <ContractData
                contract="TutorialToken"
                method="totalSupply"
                methodArgs={[{ from: accounts[0] }]}
              />{" "}
              <ContractData
                contract="TutorialToken"
                method="symbol"
                hideIndicator
              />
            </p>
            <p>
              <strong>My Balance</strong>:{" "}
              <ContractData
                contract="TutorialToken"
                method="balanceOf"
                methodArgs={[accounts[0]]}
              />
            </p>
            <h3>Send Tokens</h3>
          </header>
          <div className="App-intro">
            <ContractForm
              contract="TutorialToken"
              method="transfer"
              labels={["To Address", "Amount to Send"]}
            />
          </div>
        </div>
      );
    }

    return <div>Loading dapp...</div>;
  }
}

const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    drizzleStatus: state.drizzleStatus,
    TutorialToken: state.contracts.TutorialToken
  };
};

const AppContainer = drizzleConnect(App, mapStateToProps);
export default AppContainer;
