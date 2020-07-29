let count = 0;

const inc = () => ++count;
const dec = () =>--count;

const getCount = () => count;

module.exports = { // can export any JS type. In this case, it is an object with the functions
    inc,
    dec,
    getCount
}; 