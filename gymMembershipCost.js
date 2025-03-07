function gymMembershipCost(cost, friends) {
    let discount = 0;

    if (friends === 1) {
        discount = 0.05;
    } else if (friends === 2) {
        discount = 0.10;
    } else if (friends >= 3) {
        discount = 0.15;
    }

    return cost * (1 - discount);
}

export { gymMembershipCost };