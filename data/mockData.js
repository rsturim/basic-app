module.exports = {
    name: 'sevices',
    children: [
        {
            name: 'internet',
            children: [
                {
                    name: 'lambda1',
                    value: 8,
                    type: 'steelblue',
                    level: 'red',
                    children: [
                        { name: 'database 1A', children: null },
                        { name: 'database 2A', children: null },
                        { name: 'database 3A', children: null },
                        { name: 'database 4A', children: null },
                        { name: 'database 5A', children: null },
                        { name: 'database 6A', children: null }
                    ]
                },
                {
                    name: 'lambda2',
                    children: [
                        {
                            name: 'database 1B',
                            children: [
                                { name: 'database 1B 1', children: null },
                                { name: 'database 1B 2', children: null },
                                { name: 'database 1B 3', children: null },
                                { name: 'database 1B 4', children: null },
                                { name: 'database 1B 5', children: null },
                                { name: 'database 1B 6', children: null }
                            ]
                        },
                        { name: 'database 2B', children: null },
                        {
                            name: 'database 3B',
                            children: [
                                { name: 'database 3B 1', children: null },
                                { name: 'database 3B 2', children: null }
                            ]
                        },
                        { name: 'database 4B', children: null },
                        {
                            name: 'database 5B',
                            children: [
                                { name: 'database 5B 1', children: null }
                            ]
                        },
                        {
                            name: 'database 6B',
                            children: [
                                { name: 'database 6B 1', children: null },
                                { name: 'database 6B 2', children: null },
                                { name: 'database 6B 3', children: null },
                                { name: 'database 6B 4', children: null },
                                { name: 'database 6B 5', children: null },
                                { name: 'database 6B 6', children: null }
                            ]
                        }
                    ]
                },
                {
                    name: 'lambda3',
                    children: [
                        { name: 'database 1C', children: null },
                        { name: 'database 2C', children: null },
                        { name: 'database 3C', children: null },
                        { name: 'database 4C', children: null },
                        { name: 'database 5C', children: null },
                        { name: 'database 6C', children: null }
                    ]
                }
            ]
        }
    ]
};
