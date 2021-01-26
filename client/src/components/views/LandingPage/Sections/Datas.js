const continents = [
    {
        "_id" : 1,
        "name": "Africa"
    },
    {
        "_id" : 2,
        "name": "Europe"
    },
    {
        "_id" : 3,
        "name": "Asia"
    },
    {
        "_id" : 4,
        "name": "North America"
    },
    {
        "_id" : 5,
        "name": "South America"
    },
    {
        "_id" : 6,
        "name": "Australia"
    },
    {
        "_id" : 7,
        "name": "Antarctica"
    },
]

const price = [
    {
        "_id" : 0,
        "name": "Any",
        "array": []
    },
    {
        "_id" : 1,
        "name": "$0 to $299",
        "array": [0, 299]
    }, 
    {
        "_id" : 2,
        "name": "$300 to $499",
        "array": [300, 499]
    }, 
    {
        "_id" : 4,
        "name": "$500 to $800",
        "array": [500, 800]
    }, 
]



export {
    continents,
    price
}