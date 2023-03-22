import React from "react";
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";


export default function Graph({sipGrowthResult, graph, monthlyInvestment, investmentPeriod}) {

    function toIndianRupees(sum){
        return Number(sum).toString().replace(/\D/g, "").replace(/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g, "$1,");
    }

    return (
        <>
            <div className='graphHeader'>
                <p className='graph-text'>After <span className="timeperiod"> <b>{investmentPeriod} years</b> </span>, you will have<br />
                    <span> <h2 className='totalamount'> <b> ₹ {toIndianRupees(sipGrowthResult)}</b></h2> </span>
                    That's <span> <b className='potentialcapitalgain'>₹ {toIndianRupees((sipGrowthResult-monthlyInvestment*investmentPeriod))}</b> </span> as potential capital gains <br /> on your investment of
                    <span> <b className="monthlyinvestment">₹ {toIndianRupees(monthlyInvestment*investmentPeriod)}</b>  </span>
                </p>
            </div>

            <div className="graphFooter">
                <ResponsiveContainer width={550} aspect={1.4}>
                    <LineChart data={graph} width={500} height={550} >
                        <XAxis dataKey="year" stroke= "#000000" fontWeight="bold"  />
                        <YAxis width={90} stroke= "#000000" fontWeight="bold"/>
                        <Tooltip/>
                        <Line 
                            type="monotone"
                            dataKey="value"
                            stroke="#5B1EAF"
                            r={0}
                        />
                        <Line 
                            type="monotone"
                            dataKey="investment"
                            stroke="#717FEC"
                            r={0}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </>
    );
}