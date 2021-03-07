/**
 * The reason why react is popular is ability to split complex app into
 * simple and re-usable components. Shift to that mental model and try
 * to think how you can split this component into at least three independent
 * components depend on how the information will be diplayed.
 *
 * Read more here https://reactjs.org/docs/thinking-in-react.html
 *
 */

import React, { Component } from "react";
import { replaceUnderscoreWithSpace } from "../utils";
import { ranking } from "./RankingData";

const firstEconomy = [...ranking].map((rank1) => {
  return rank1.Economy;
});

const allEconomy = [...ranking].map((each) => {
  return each;
});

const starterEconomy = allEconomy[0];

const starterValue = Object.values(starterEconomy);
starterValue.shift();

console.log(starterValue);

console.log(...ranking);

class Indicators extends Component {
  state = {
    ranking: ranking.map((rank1) => {
      return rank1.Global_Rank;
    }),
    economy: [...ranking],
    Indicator: "Global_Rank", // Respect camelCase for object keys
    ranks: [],
    country: firstEconomy[0],
    economyScores: starterValue,
  };

  changeIndicator = (indicators) => {
    //  sorting array change order of arrays of
    // items in memory (mutation) - It's best practice to copy
    // array before sort it:
    // ex: [...ranking]

    // use camelCase for variable names with 2 combined words
    // ex: sortArray. Always try to make sure that  variable
    // indicate what it hold.
    // ex: sortEconomiesByIndicator
    let sortarray = ranking.sort((a, b) => {
      return a[indicators] - b[indicators];
    });

    let economy = sortarray.map((l) => {
      return l[indicators];
    });

    let size = sortarray.map((lis) => {
      return lis.Economy;
    });

    // Remove out debug code before rollout for production
    console.log(sortarray);

    console.log(economy);
    console.log(size);

    this.setState((prevState) => ({
      Indicator: indicators,
      economy: sortarray,
    }));
  };

  changeEconomy = (economy) => {
    const selectedEconomy = [...ranking].find(
      (indicator) => indicator.Economy === economy
    );

    const scores = Object.values(selectedEconomy);

    // Array methods like shift, pop, push,... mutate array and
    // should result in unintended behavior. always avoid them as
    // possible. you can use safe way like score[0]

    scores.shift();

    this.setState({
      country: economy,
      economyScores: scores,
    });
  };

  render() {
    const indicatorsObject = Object.keys(ranking[0]);

    indicatorsObject.shift();

    let indicatorsKey = indicatorsObject;

    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 my-3">
              <ul>
                {indicatorsKey.map((indicators) => (
                  <li
                    className="cursor"
                    key={indicators}
                    onClick={() => this.changeIndicator(indicators)}
                  >
                    {replaceUnderscoreWithSpace(indicators)} <hr />
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 my-3">
              <h5>{replaceUnderscoreWithSpace(this.state.Indicator)}</h5>
              <div className="scroll">
                <ul>
                  {this.state.economy.map((economy) => (
                    <li
                      className="cursor removeliststyletype"
                      key={economy.Economy}
                      onClick={() => this.changeEconomy(economy.Economy)}
                    >
                      {economy[this.state.Indicator]} - {economy.Economy}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 my-3">
              <h5>Economy Scores</h5>

              <h6>{this.state.country}</h6>

              {/** Writing this labels manually is not best approach.
               * Try generate them with code. Look at "./utils/replaceUnderscoreWithSpace"
               * It will help you to remove those underscores
               */}

              <div className="row">
                <div className="col-10">
                  <div>
                    <span>Global Rank</span>
                    <hr />
                  </div>
                  <div>
                    <span>Rank within Group</span>
                    <hr />
                  </div>
                  <div>
                    <span>Starting a Business</span>
                    <hr />
                  </div>
                  <div>
                    <span>Dealing with Construction Permits</span>
                    <hr />
                  </div>
                  <div>
                    <span>Getting Electricity</span>
                    <hr />
                  </div>
                  <div>
                    <span>Registering_Property</span>
                    <hr />
                  </div>
                  <div>
                    <span>Getting Credit</span>
                    <hr />
                  </div>
                  <div>
                    <span>Protecting Minority Investors</span>
                    <hr />
                  </div>
                  <div>
                    <span>Paying Taxes</span>
                    <hr />
                  </div>
                  <div>
                    <span>Trading across Borders</span>
                    <hr />
                  </div>
                  <div>
                    <span>Enforcing Contracts</span>
                    <hr />
                  </div>
                  <div>
                    <span>Resolving Insolvency</span>
                    <hr />
                  </div>
                </div>

                <div className="col-2">
                  {this.state.economyScores.map((score, key) => (
                    <div key={key}>
                      <span>{score}</span> <hr />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="text-center">
                <h5>Why World Economies Ranking?</h5>
              </div>
              <div>
                <p>
                  Doing Business 2019 is the 16th in a series of annual reports
                  investigating the regulations that enhance business activity
                  and those that constrain it. Doing Business presents
                  quantitative indicators on business regulation and the
                  protection of property rights that can be compared across 190
                  economies—from Afghanistan to Zimbabwe—and over time....
                  <span>
                    <a href="http://www.doingbusiness.org/">
                      Read more about Project
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Indicators;
