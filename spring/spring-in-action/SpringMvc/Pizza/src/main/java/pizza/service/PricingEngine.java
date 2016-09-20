package pizza.service;

import pizza.domain.Order;

public interface PricingEngine {
    float calculateOrderTotal(Order order);
}
