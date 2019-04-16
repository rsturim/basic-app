import mData from './../../data/mockData';

export const getFakeData = () => {
    // return RestServiceClient.get({
    //     path: `${audienceSegmentsPath}?accountId=${accountId}`
    // });

    // TODO replace this fake stuff with a real endpoint.
    return Promise.resolve(mData);
};
