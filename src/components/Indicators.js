import React, { Component } from 'react';
import { ranking } from "./RankingData";

//let sortarray = [...ranking].sort((a, b) => (a.indicators > b.indicators) ? 1 : -1);

class Indicators extends Component {
    
    state = { 
        ranking : ranking.map(rank1 => { return rank1.Global_Rank }),
        economy: ranking.map(country => { return country.Economy }),
        Indicator: 'Global Rank',
        ranks: []
     }

     changeIndicator = (indicators) => {
        //let crietaria = this.state.Indicator;

        let sortarray = ranking.sort((a, b) => { return (a[indicators] - b[indicators]); });

        let economy = sortarray.map(l => { return (l[indicators]) });

        let size = sortarray.map(lis => { return (lis.Economy) });

        //console.log(sortarray);
        console.log(economy);
        console.log(size);
         this.setState(prevState => ({
             Indicator: indicators,
             economy: size
             //ranks: [...prevState.ranks, size]
         }));
         //console.log(this.state.economy);
     }


    render() { 

        const indicatorsObject = Object.keys(ranking[0]);

        let indicatorsKey = indicatorsObject;

        return ( 
            <React.Fragment>
                <div className='container'>
                    <div className='row'>
                        
                            <div className='col-lg-4 col-md-4 col-sm-12 my-3'>
                                <ul>

                                    {indicatorsKey.map(indicators => 
                                    <li key={indicators} onClick={() => this.changeIndicator(indicators)}>
                                         {indicators} <hr/> 
                                    </li>)}

                                </ul>
                            </div>

                            <div className='col-lg-4 col-md-4 col-sm-12 my-3'>
                                <h5>{ this.state.Indicator }</h5>
                                <div className='regulation-handler scorll'>
                                    <ol>
                                        { this.state.economy.map( economy => <li key={economy}>{ economy }</li>) }
                                    </ol>
                                </div>
                            </div>

                            <div className='col-lg-4 col-md-4 col-sm-12 my-3'>

                                <h5>Economy Scores</h5>

                                <h6>Nigeria</h6>

                                <div className = "row">
                                    <div className='col-10'>
                                        <div>
                                            <span>Global Rank</span>
                                            <hr/>
                                        </div>
                                        <div>
                                            <span>Global Rank</span>
                                            <hr/>
                                        </div>
                                        <div>
                                            <span>Global Rank</span>
                                            <hr/>
                                        </div>
                                        <div>
                                            <span>Global Rank</span>
                                            <hr/>
                                        </div>
                                        <div>
                                            <span>Global Rank</span>
                                            <hr/>
                                        </div>
                                        <div>
                                            <span>Global Rank</span>
                                            <hr/>
                                        </div>
                                        <div>
                                            <span>Global Rank</span>
                                            <hr/>
                                        </div>
                                        <div>
                                            <span>Global Rank</span>
                                            <hr/>
                                        </div>
                                        <div>
                                            <span>Global Rank</span>
                                            <hr/>
                                        </div>
                                        <div>
                                            <span>Global Rank</span>
                                            <hr/>
                                        </div>
                                        <div>
                                            <span>Global Rank</span>
                                            <hr/>
                                        </div>
                                        <div>
                                            <span>Global Rank</span>
                                            <hr/>
                                        </div>
                                    </div>

                                    <div className='col-2'>
                                        <div>
                                            <span>1</span>
                                            <hr/>
                                        </div>
                                        <div>
                                            <span>1</span>
                                            <hr/>
                                        </div>
                                        <div>
                                            <span>1</span>
                                            <hr/>
                                        </div>
                                        <div>
                                            <span>1</span>
                                            <hr/>
                                        </div>
                                        <div>
                                            <span>1</span>
                                            <hr/>
                                        </div>
                                        <div>
                                            <span>1</span>
                                            <hr/>
                                        </div>
                                        <div>
                                            <span>1</span>
                                            <hr/>
                                        </div>
                                        <div>
                                            <span>1</span>
                                            <hr/>
                                        </div>
                                        <div>
                                            <span>1</span>
                                            <hr/>
                                        </div>
                                        <div>
                                            <span>1</span>
                                            <hr/>
                                        </div>
                                        <div>
                                            <span>1</span>
                                            <hr/>
                                        </div>
                                        <div>
                                            <span>1</span>
                                            <hr/>
                                        </div>
                                        <div>
                                            <span>1</span>
                                            <hr/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                    </div>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12'>
                            <div className='text-center'><h5>Why World Economies Ranking?</h5></div>
                                <div>
                                    <p>
                                        Doing Business 2019 is the 16th in a series of annual reports investigating the regulations that enhance business activity and those that constrain it. Doing Business presents quantitative indicators on business regulation and the protection of property rights that can be compared across 190 economies—from Afghanistan to Zimbabwe—and over time....
                                        <span><a href="http://www.doingbusiness.org/">Read more about Project</a></span>
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