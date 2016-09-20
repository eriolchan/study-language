package pizza.flow;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import pizza.domain.CashOrCheckPayment;
import pizza.domain.CreditCardPayment;
import pizza.domain.Customer;
import pizza.domain.Order;
import pizza.domain.Payment;
import pizza.domain.PaymentDetails;
import pizza.domain.PaymentType;
import pizza.service.CustomerNotFoundException;
import pizza.service.CustomerService;

@Component
public class PizzaFlowActions {
    
    @Autowired
    CustomerService customerService;
    
    private static final Logger LOGGER = Logger.getLogger(PizzaFlowActions.class);
    
    public Customer lookupCustomer(String phoneNumber) throws CustomerNotFoundException {
        Customer customer = customerService.lookupCustomer(phoneNumber);
        if (customer == null) {
            throw new CustomerNotFoundException();
        }
        
        return customer;
    }
    
    public void addCustomer(Customer customer) {
        LOGGER.warn("TODO: Flesh out the addCustomer() method.");
    }
    
    public Payment verifyPayment(PaymentDetails paymentDetails) {
        Payment payment = null;
        if (paymentDetails.getPaymentType() == PaymentType.CREDIT_CARD) {
            payment = new CreditCardPayment();
        } else {
            payment = new CashOrCheckPayment();
        }
        
        return payment;
    }
    
    public void saveOrder(Order order) {
        LOGGER.warn("TODO: Flesh out the saveOrder() method.");
    }
    
    public boolean checkDeliveryArea(String zipCode) {
        LOGGER.warn("TODO: Flesh out the checkDeliveryArea() method.");
        
        return "75075".equals(zipCode);
    }
}
