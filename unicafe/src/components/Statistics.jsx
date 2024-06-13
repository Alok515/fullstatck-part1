import Statistic from "./Statistic";

// eslint-disable-next-line react/prop-types
const Statistics = ({ good, neutral, bad }) => {
    const all = () => good + neutral + bad;
    const average = () => ((good-bad) / all()) ;
    const positive = () => (good / all());


    if(good === 0 && neutral === 0 && bad === 0 ) {
        return <p>No feedback given</p>
    }

    return (
        <div>
            <h1>statistics</h1>
            <table>
                <tbody>
                    <Statistic text={'good'} value={good} />
                    <Statistic text={'neutral'} value={neutral} />
                    <Statistic text={'bad'} value={bad} />
                    <Statistic text={'all'} value={all()} />
                    <Statistic text={'average'} value={Number(average()).toFixed(2)} />
                    <Statistic text={'positive'} value={Number(positive()).toFixed(2)} />
                </tbody>
            </table>
        </div>
    )
}

export default Statistics;
