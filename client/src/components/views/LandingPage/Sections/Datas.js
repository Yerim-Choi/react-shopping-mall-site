const continents = [
    {
        "_id" : 1,
        "name": "사료"
    },
    {
        "_id" : 2,
        "name": "간식"
    },
    {
        "_id" : 3,
        "name": "위생"
    },
    {
        "_id" : 4,
        "name": "장난감"
    },
    {
        "_id" : 5,
        "name": "하우스"
    },
    {
        "_id" : 6,
        "name": "패션"
    },
    {
        "_id" : 7,
        "name": "목줄"
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
        "name": "$10000 미만",
        "array": [0, 9999]
    }, 
    {
        "_id" : 2,
        "name": "$20000 미만",
        "array": [10000, 19999]
    }, 
    {
        "_id" : 4,
        "name": "$30000 이상",
        "array": [30000, 10000000]
    }, 
]



export {
    continents,
    price
}