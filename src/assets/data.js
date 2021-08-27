const default_comments = [{
        id: 1,
        body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and`,
        created_at: new Date(),
        author: {
            id: 2,
            name: 'Susan Griffin',
            avatar: 'avatar-1.png'
        },
        reply: []
    },
    {
        id: 2,
        body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and`,
        created_at: new Date(),
        author: {
            id: 3,
            name: 'Kelly Latta',
            avatar: 'avatar-2.png'
        },
        reply: [{
            id: 4,
            body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and`,
            created_at: new Date(),
            author: {
                id: 5,
                name: 'Wanda Meany',
                avatar: 'avatar-3.png'
            },
            reply: []
        }]
    }
]
export default [
    {
        id: Math.floor(Math.random() * 1000),
        created_at: new Date(),
        title: 'White House More Than Doubles Its Inflation Forecast in New Update - The Wall Street Journal',
        description: `Administration expects consumer prices to rise 4.8% in the fourth quarter from a year earlier, and lifts projections for growth this year`,
        shortDescription: 'WASHINGTONThe White House more than doubled its forecast for annual inflation in new projections released Friday, as supply chain disruptions stemming from the Covid-19 pandemic continue to',
        comments: [...default_comments]
    },
    {
        id: Math.floor(Math.random() * 1000),
        created_at: new Date(),
        title: 'Rivian Seeks $80 Billion Valuation In IPO',
        description: `Rivian announced today that it has filed its S1 with the Securities and Exchange Commission for an IPO filing this November, according to Automotive News. The news comes amid delays and setbacks as`,
        shortDescription: 'Rivian announced today that it has filed its S1 with the Securities and Exchange Commission for an IPO filing this November, according to Automotive News.',
        comments: [...default_comments]
    },
    {
        id: Math.floor(Math.random() * 1000),
        created_at: new Date(),
        title: 'Tesla files to sell electricity in Texas retail market',
        description: `Electric-vehicle maker Tesla (TSLA) filed earlier this month with the Public Utility Commission of Texas to sell electricity in the retail market.\r\nThe news was first reported by Texas Monthly.\r\nTes`,
        shortDescription: 'Tesla files with the Public Utility Commission of Texas to sell electricity in the retail market, a report says.',
        comments: [...default_comments]
    }
]
