package pizza.service;

import pizza.domain.Customer;

public interface CustomerService {
    Customer lookupCustomer(String phoneNumber) throws CustomerNotFoundException;
}
