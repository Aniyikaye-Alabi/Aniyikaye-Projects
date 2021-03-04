import React, { Component } from 'react';
import { ranking } from './RankingData';

const sortarray = [...ranking].sort((a, b) => (a.Getting_Electricity > b.Getting_Electricity) ? 1 : -1);

class DisplayData extends Component {
    state = { 
        country: "Nice",
        text: []
     }

    style = {
        cursor: "pointer"
    }

    handleClick = () => {
        //e.preventDefault()

        
        console.log(ranking[1].Economy);

        this.setState({
            country: 'Next'
        })
    }
    render() { 
        //console.log(ranking);
        
        console.log(ranking[1].Economy);

        // let i = ranking.map(ads => { return(ads.Getting_Electricity) });
        // console.log(i);
        // console.log(i.indexOf(i));

        

        //let size = sortarray.map(lis => { return (lis.Getting_Electricity + lis.Economy) });

        //let joy = ranking.map(country => { return ( country.Economy ) });

        // for(let i=0; i<=ranking.length; i++){
        //     if(ranking[i].Economy == 'Nigeria'){
        //         let each = ranking[i]
        //         console.log(ranking[i].Global_Rank);
        //         console.log(each.Protecting_Minority_Investors, each.Rank_within_Group, each.Starting_a_Business);
        //         break
        //     }
        //     else{
        //         console.log('skip');
        //     }
        // }

        
    //    [...ranking].map((indicator) => { 
    //         let text = [];
    //         if(indicator.Economy === 'Nigeria'){
    //             text.push(indicator.Global_Rank, indicator.Paying_Taxes, indicator.Protecting_Minority_Investors)
    //         }
    //         else{
    //             text = 'cool baby';
    //         }

    //         return(
    //             console.log(text)

    //     )});

        const selectedEconomy = [...ranking].find(indicator => indicator.Economy === 'Nigeria');

        const scores = Object.values(selectedEconomy);

        console.log(scores);

        //console.log(selectedEconomy);

        //console.log(selectedEconomy.Global_Rank, selectedEconomy.Dealing_with_Construction_Permits, selectedEconomy.Enforcing_Contracts)

        //console.log(whine);

        //console.log(joy);

        //console.log(size);

        const rankObject = Object.keys(ranking[0]);
        return ( 
            <div>
                { rankObject.map( (rank) => <div key={ rank }>{ rank }</div> ) }

                {/* { sortarray.map(numb => <div key={ numb.Economy }>{ numb.Getting_Electricity } </div>) }

                { sortarray.map(economy => <div key={ economy.Economy }>{ economy.Economy } </div>) } */}

                <ul>
                    <li style= {this.style} onClick = {this.handleClick}>
                        Nice
                    </li>

                    <li>
                        {this.state.country}
                    </li>
                </ul>
            </div>
         );
    }
}
 
export default DisplayData;