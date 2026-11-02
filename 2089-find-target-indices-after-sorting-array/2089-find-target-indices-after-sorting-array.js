var targetIndices = function(nums, target) {
    let lt = 0, eq = 0;
    for (const x of nums) {
        if (x < target) lt++;
        else if (x === target) eq++;
    }
    const res = [];
    for (let i = 0; i < eq; i++) res.push(lt + i);
    return res;
};