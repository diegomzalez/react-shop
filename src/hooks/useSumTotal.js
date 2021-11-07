export default function useSumTotal(param) {
    const reducer = (accumultor, currentValue) => accumultor + currentValue.price;
    const sum = param.reduce(reducer, 0);
    return sum;
};