import Company from "./components/Company";


export function App() {
    let companies = [
        {name: "Tesla", revenue: 140},
        {name: "Microsoft", revenue: 300},
        {name: "Google", revenue: 600}]

    function generateCompanyTags(companies) {
        const res = companies.map(company => <Company name={company.name} revenue={company.revenue}/>)
        return (
            <div>
                {res}
            </div>
        );

    }

    return (
        <div>{generateCompanyTags(companies)}</div>
    )
}

export default App;
