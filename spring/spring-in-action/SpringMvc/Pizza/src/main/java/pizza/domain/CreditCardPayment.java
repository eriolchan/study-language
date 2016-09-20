package pizza.domain;

public class CreditCardPayment extends Payment {

    private static final long serialVersionUID = 1L;
    
    private String authorization;
    
    public CreditCardPayment() {}
    
    public void setAuthorization(String authorization) {
        this.authorization = authorization;
    }
    
    @Override
    public String toString() {
        return "CREDIT: $" + getAmount() + " ; AUTH: " + authorization;
    }
}
